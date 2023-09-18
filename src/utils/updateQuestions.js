const updateQuestions = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    questions.questions[0][questionID].choices[choiceID].checked =
      !questions.questions[0][questionID].choices[choiceID].checked;
    return newQuestions;
  });
  sessionStorage.setItem('contentQuizQuestions', JSON.stringify(questions));
};

const makeQuestionsFalse = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    questions.questions[0][questionID].choices[choiceID].checked = false;
    return newQuestions;
  });
  sessionStorage.setItem('contentQuizQuestions', JSON.stringify(questions));
};

export { updateQuestions, makeQuestionsFalse };
