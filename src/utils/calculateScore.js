export default function calculateScore(data) {
  let scoreTotal = 0;

  // Find all of the checked choices and add their values to the scoreTotal.
  // eslint-disable-next-line no-unused-vars
  for (const [key, value] of Object.entries(data)) {
    let i = 0;
    value.choices.map((choice) => {
      if (choice.checked) {
        i += choice.value;
      }
      return i;
    });
    scoreTotal += i;
  }

  return scoreTotal;
}
