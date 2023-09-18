const updateQuestions = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    questions.questions[0][questionID].choices[choiceID].checked =
      !questions.questions[0][questionID].choices[choiceID].checked;
    return newQuestions;
  });
};

const makeQuestionsFalse = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    questions.questions[0][questionID].choices[choiceID].checked = false;
    return newQuestions;
  });
};

export { updateQuestions, makeQuestionsFalse };
