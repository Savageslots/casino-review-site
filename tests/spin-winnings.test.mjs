import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateSpinWinnings } from '../src/utils/wagering.js';
test('free-spin winnings wager only the existing winnings balance', () => {
 const args = {winnings:20,multiplier:30,contribution:100,rtp:96};
 const result = calculateSpinWinnings(args);
 assert.equal(result.initial,20);
 assert.equal(result.bonus,0);
 assert.equal(result.turnover,600);
 assert.ok(Math.abs(result.balance + 4)<1e-10);
 assert.equal(calculateSpinWinnings({...args,contribution:50}).turnover,1200);
 assert.equal(calculateSpinWinnings({...args,multiplier:NaN}),null);
 assert.equal(calculateSpinWinnings({...args,contribution:0}).excluded,true);
});
