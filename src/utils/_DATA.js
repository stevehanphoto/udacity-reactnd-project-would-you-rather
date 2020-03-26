let users = {
  sansan: {
    id: "sansan",
    name: "San San",
    avatarURL: process.env.PUBLIC_URL + "/img/SanSan.jpg",
    answers: {
      "8xf0y6ziyjabvozdd253nd": "optionOne",
      "6ni6ok3ym7mf1p33lnez": "optionTwo",
      am8ehyc8byjqgar0jgpub9: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"]
  },
  scarlettlash: {
    id: "scarlettlash",
    name: "Scarlett Lash",
    avatarURL: process.env.PUBLIC_URL + "/img/ScarlettLash.jpg",
    answers: {
      vthrdm985a262al8qx3do: "optionOne",
      xj352vofupe1dqz9emx13r: "optionTwo",
      zj352vofupe1dqz9emx13r: "optionTwo",
      loxhs1bqm25b708cmbf3g: "optionTwo"
    },
    questions: [
      "loxhs1bqm25b708cmbf3g",
      "vthrdm985a262al8qx3do",
      "loxhs1bqm25b708cmbf3g"
    ]
  },
  missym: {
    id: "missym",
    name: "Missy M",
    avatarURL: process.env.PUBLIC_URL + "/img/MissyM.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  },
  charlestonpierce: {
    id: "charlestonpierce",
    name: "Charleston Pierce",
    avatarURL: process.env.PUBLIC_URL + "/img/CharlestonPierce.jpg",
    answers: {
      xj352vofupe1dqz9emx13r: "optionOne",
      vthrdm985a262al8qx3do: "optionTwo",
      "6ni6ok3ym7mf1p33lnez": "optionTwo"
    },
    questions: ["6ni6ok3ym7mf1p33lnez", "xj352vofupe1dqz9emx13r"]
  }
};

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: "8xf0y6ziyjabvozdd253nd",
    author: "sansan",
    timestamp: 1467166872634,
    optionOne: {
      votes: ["sansan"],
      text: "play with infants or toddlers"
    },
    optionTwo: {
      votes: [],
      text: "play with preschool kids"
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: "6ni6ok3ym7mf1p33lnez",
    author: "missym",
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: "drink wine"
    },
    optionTwo: {
      votes: ["missym", "sansan"],
      text: "drink whiskey"
    }
  },
  am8ehyc8byjqgar0jgpub9: {
    id: "am8ehyc8byjqgar0jgpub9",
    author: "sansan",
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: "be outdoors"
    },
    optionTwo: {
      votes: ["sansan"],
      text: "be indoors"
    }
  },
  loxhs1bqm25b708cmbf3g: {
    id: "loxhs1bqm25b708cmbf3g",
    author: "scarlettlash",
    timestamp: 1482579767190,
    optionOne: {
      votes: ["sansan"],
      text: "have no tattoos"
    },
    optionTwo: {
      votes: ["scarlettlash"],
      text: "have more than 5 tattoos"
    }
  },
  vthrdm985a262al8qx3do: {
    id: "vthrdm985a262al8qx3do",
    author: "scarlettlash",
    timestamp: 1489579767190,
    optionOne: {
      votes: ["scarlettlash"],
      text: "eat Chinese BBQ pork buns"
    },
    optionTwo: {
      votes: ["missym"],
      text: "eat Vietnamese pho beef noodle soup"
    }
  },
  xj352vofupe1dqz9emx13r: {
    id: "xj352vofupe1dqz9emx13r",
    author: "missym",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["missym"],
      text: "paint a mural"
    },
    optionTwo: {
      votes: ["scarlettlash"],
      text: "paint on canvas"
    }
  },
  zj352vofupe1dqz9emx13r: {
    id: "zj352vofupe1dqz9emx13r",
    author: "charlestonpierce",
    timestamp: 1493579767190,
    optionOne: {
      votes: ["missym"],
      text: "model on the catwalk"
    },
    optionTwo: {
      votes: ["scarlettlash"],
      text: "model for photoshoots"
    }
  }
};

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
} 

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("_saveQuestionAnswer")
      console.log("authedUser:", authedUser)
      console.log("qid:", qid)
      console.log("answer:", answer)

      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
