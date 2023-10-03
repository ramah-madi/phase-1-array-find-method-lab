// code your solution here
function superbowlWin(record) {
  const winingYear = record.find(item => item.result === "W");
  return winingYear ? winingYear.year : undefined;
}