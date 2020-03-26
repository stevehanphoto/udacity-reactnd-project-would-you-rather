import React, { Component } from "react"
import { connect } from "react-redux"
import Question from './Question'

class ListQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { selectUnanswered: true }
  }
  setUnansweredButton = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState( state => ({
      selectUnanswered : true
    }))
  }
  setAnsweredButton = (e) => {
    e.preventDefault()
    console.log(e)
    this.setState(state => ({
      selectUnanswered : false
    }))
  }
  render() {
    const { authedUser, users, questions, questionIds } = this.props
    console.log(users[authedUser])

    const unAnsweredQuestionIds = questionIds.filter(qid => {
      if (qid in users[authedUser].answers) {
//        console.log(`Found: qid=${qid}, users[authedUser].answers=${users[authedUser].answers}`)
        return false
      } 
      else {
//        console.log(`Not found: qid=${qid}, users[authedUser].answers=${users[authedUser].answers}`)
        return true
      }
        /*return ((questions[id].optionOne.votes.length !== 0) || 
            (questions[id].optionTwo.votes.length !== 0))*/
    }) 
    const answeredQuestionIds = questionIds.filter(qid => {
      if (qid in users[authedUser].answers) {
//        console.log(`Found: qid=${qid}, users[authedUser].answers=${users[authedUser].answers}`)
        return true
      }
      else {
//        console.log(`Not found: qid=${qid}, users[authedUser].answers=${users[authedUser].answers}`)
        return false
      }
      /*return (
        questions[id].optionOne.votes.length === 0 &&
        questions[id].optionTwo.votes.length === 0
      );*/
    }); 

    console.group("ListQuestions")
      console.log(unAnsweredQuestionIds)
      console.log(answeredQuestionIds)
    console.groupEnd()

    return (
      <div className="list-questions">
        <div className="list-questions-tab">
          <button id="select-unanswered-btn" className="select-list-type-btn"
            style=
              {this.state.selectUnanswered ? 
                { backgroundColor: "lightgrey" } : 
                { backgroundColor : "whitesmoke"}}
            onClick={this.setUnansweredButton}
          >
              Unanswered Questions
          </button>
          <button id="select-answered-btn" className="select-list-type-btn"
            style=
              {this.state.selectUnanswered ? 
              { backgroundColor: "whitesmoke"} : 
              { backgroundColor: "lightgrey" }}
            onClick={this.setAnsweredButton}
          >
              Answered Questions
          </button>
        </div>
        <div>
          {this.state.selectUnanswered ?
            unAnsweredQuestionIds.map(id => (
              <Question key={id} users={users} questions={questions} id={id} selectUnanswered={this.state.selectUnanswered}/>
            )) :
            answeredQuestionIds.map(id => (
              <Question key={id} users={users} questions={questions} id={id} selectUnanswered={this.state.selectUnanswered}/>
            ))
          }
        </div>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, users, questions }) {
  return {
    authedUser,
    users,
    questions,
    questionIds: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(ListQuestions);
