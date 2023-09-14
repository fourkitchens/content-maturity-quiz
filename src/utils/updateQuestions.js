const updateQuestions = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    questions.questions[0][questionID].choices[choiceID].checked =
      !questions.questions[0][questionID].choices[choiceID].checked;
    return newQuestions;
  });
};

export default updateQuestions;
