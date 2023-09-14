const updateScore = (score, setScore, addValue, subtractValue = 0) =>
  setScore(() => score + addValue - subtractValue);

export default updateScore;
