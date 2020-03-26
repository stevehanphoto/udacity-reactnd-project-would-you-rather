import React, { Component } from "react"
import { connect } from "react-redux";
import { handleSaveAnswer } from '../actions/questions'

class PollQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {selectedOption: ''}
  }
  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    })
  }
  handleSubmitAnswer = (e, id) => {
    const { dispatch, authedUser } = this.props
    const answer = this.state.selectedOption
    dispatch(handleSaveAnswer({
      authedUser,
      qid: id,
      answer
    }))
      .then(() =>
        this.props.history.push(`/ViewPollResults/${id}`)
      )
  }
  render() {
  const { users, questions } = this.props
  const id = this.props.match.params.id

  return (
    <div className="question">
      <div className="author-heading">
        <div>{users[questions[id].author].name} asks:</div>
      </div>
      <div className="question-container">
        <div className="avatar-container">
          <img
            src={users[questions[id].author].avatarURL}
            alt={`Avatar of ${users[questions[id].author].name}`}
            className="avatar"
          />
        </div>
        <div className="question-content">
          <h3>Would you rather</h3>
          <div>
            <input
              type="radio"
              name="answer"
              value="optionOne"
              className="option-radio-btn"
              onChange={this.handleOptionChange}
            />
            <label htmlFor="optionOne">{questions[id].optionOne.text}</label>
          </div>
          <div>
            <input
              type="radio"
              name="answer"
              value="optionTwo"
              className="option-radio-btn"
              onChange={this.handleOptionChange}
            />
              <label htmlFor="optionTwo">{questions[id].optionTwo.text}</label>
          </div>
          <button className="view-poll-btn" onClick={(e) => this.handleSubmitAnswer(e, id)}>Submit</button>
        </div>
      </div>
    </div>
  )}
}

function mapStateToProps({ users, questions, authedUser }) {
  return {
    users,
    questions,
    authedUser
  };
}

export default connect(mapStateToProps)(PollQuestion);