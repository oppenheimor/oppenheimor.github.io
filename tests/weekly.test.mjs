import assert from 'node:assert/strict';
import test from 'node:test';
import {
  groupWeeklyByYear,
  issueDate,
  issueLabel,
  issueNeighbors,
  issueContents,
  issueNumber,
  sortWeekly,
  weeklyPath,
} from '../src/lib/weekly.ts';

const issue = (id, vol, date) => ({ id, data: { vol, date: new Date(`${date}T00:00:00Z`) } });
const issues = [issue('vol-02', 2, '2026-09-14'), issue('vol-01', 1, '2026-09-07'), issue('vol-03', 3, '2027-01-04')];

test('sortWeekly puts the newest issue first', () => {
  assert.deepEqual(sortWeekly(issues).map((item) => item.id), ['vol-03', 'vol-02', 'vol-01']);
});

test('issue labels and dates stay zero padded and timezone safe', () => {
  assert.equal(issueNumber(1), '01');
  assert.equal(issueNumber(120), '120');
  assert.equal(issueLabel(7), '第 07 期');
  assert.equal(issueDate(new Date('2026-09-07T00:00:00Z')), '2026.09.07');
});

test('weeklyPath follows the /weekly/<id> route', () => {
  assert.equal(weeklyPath(issues[1]), '/weekly/vol-01');
});

test('issueNeighbors walks towards newer and older issues', () => {
  assert.deepEqual(issueNeighbors(issues, issues[1]), { newer: issues[0], older: null });
  assert.deepEqual(issueNeighbors(issues, issues[0]), { newer: issues[2], older: issues[1] });
  assert.deepEqual(issueNeighbors(issues, issues[2]), { newer: null, older: issues[0] });
});

test('groupWeeklyByYear keeps years descending and issues newest first', () => {
  const groups = groupWeeklyByYear(issues);
  assert.deepEqual(groups.map((group) => group.year), [2027, 2026]);
  assert.deepEqual(groups[1].items.map((item) => item.id), ['vol-02', 'vol-01']);
});

test('issueContents reads ## sections and ### items from the issue body', () => {
  const body = '开场白。\n\n## 工具\n\n### TokenRemain：把额度摆在明面上\n<https://example.com/>\n\n### Unclack\n\n## 一周里\n\n一些话。\n';
  assert.deepEqual(issueContents(body), [
    { title: '工具', items: ['TokenRemain：把额度摆在明面上', 'Unclack'] },
    { title: '一周里', items: [] },
  ]);
});

test('issueContents ignores plain paragraphs and h4 headings', () => {
  assert.deepEqual(issueContents('只有正文。\n#### 更深的标题\n'), []);
});
