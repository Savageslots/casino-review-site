export function calculateWagering({ deposit, bonusPercent, bonusCap, multiplier, basis, contribution, rtp, scenario = 'average' }) {
  if (!['average', 'lucky', 'unlucky'].includes(scenario)) return null;
  const returnRate = scenario === 'lucky' ? 102 : scenario === 'unlucky' ? 90 : rtp;
  const values = [deposit, bonusPercent, multiplier, contribution, rtp];
  if (values.some(n => !Number.isFinite(n) || n < 0) || deposit > 1e9 || bonusPercent > 10000 || multiplier > 10000 || contribution > 100 || rtp > 100 || !['bonus', 'both'].includes(basis) || (bonusCap !== null && (!Number.isFinite(bonusCap) || bonusCap < 0))) return null;
  const bonus = Math.min(deposit * bonusPercent / 100, bonusCap ?? Infinity);
  const initial = deposit + bonus;
  const requirement = (basis === 'both' ? initial : bonus) * multiplier;
  if (contribution === 0 && requirement > 0) return { bonus, initial, requirement, excluded: true };
  const turnover = requirement === 0 ? 0 : requirement / (contribution / 100);
  if (!Number.isFinite(turnover)) return null;
  const payouts = turnover * returnRate / 100;
  const loss = turnover * (1 - returnRate / 100);
  return { returnRate, bonus, initial, requirement, turnover, payouts, loss, balance: initial - loss, net: bonus - loss, excluded: false };
}
