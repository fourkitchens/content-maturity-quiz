const updateQuestions = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    return newQuestions;
  });
  questions.questions[0][questionID].choices[choiceID].checked =
    !questions.questions[0][questionID].choices[choiceID].checked;
  if (typeof window !== 'undefined') {
    localStorage.setItem('contentQuizQuestions', JSON.stringify(questions));
  }
};

const makeQuestionsFalse = (questions, setQuestions, questionID, choiceID) => {
  setQuestions((prevQuestions) => {
    const newQuestions = { ...prevQuestions };
    return newQuestions;
  });
  questions.questions[0][questionID].choices[choiceID].checked = false;
  if (typeof window !== 'undefined') {
    localStorage.setItem('contentQuizQuestions', JSON.stringify(questions));
  }
};

export { updateQuestions, makeQuestionsFalse };
