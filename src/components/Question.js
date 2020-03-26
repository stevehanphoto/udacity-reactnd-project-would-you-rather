import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Question extends Component {
    render() {
      const { users, questions, id, selectUnanswered } = this.props

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
                <div key={id}>
                  ...
                  {questions[id].optionOne.text.replace(
                    /^(.{11}[^\s]*).*/,
                    "$1"
                  )}
                  ...
                </div>
                <Link to={ 
                  selectUnanswered ? `./PollQuestion/${id}` : `./ViewPollResults/${id}`}>
                  <button type="button" className="view-poll-btn">View Poll</button>
                </Link>
              </div>
            </div>
          </div>
        );
    }
}

export default Question