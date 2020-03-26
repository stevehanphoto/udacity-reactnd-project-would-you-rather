import React from "react";
import { connect } from 'react-redux'
import VoteResult from './VoteResult'

const ViewPollResults = (props) => {
    const { authedUser, users, questions } = props
    const id = props.match.params.id
    const numVotesOptionOne = questions[id].optionOne.votes.length
    const numVotesOptionTwo = questions[id].optionTwo.votes.length
    const totalVotes = numVotesOptionOne + numVotesOptionTwo
    let optionVoted
    if (questions[id].optionOne.votes.includes(authedUser)) {
      optionVoted = "optionOne"
    }
    else if (questions[id].optionTwo.votes.includes(authedUser)) {
      optionVoted = "optionTwo";
    } else {
      optionVoted = "Not found";
    }
        
    return (
      <div className="question">
        <div className="author-heading">
          <h3>Asked by {users[questions[id].author].name}</h3>
        </div>
        <div className="question-container">
          <div className="result-avatar-container">
            <img
              src={users[questions[id].author].avatarURL}
              alt={`Avatar of ${users[questions[id].author].name}`}
              className="result-avatar"
            />
          </div>
          <div className="question-content">
            <h2>Results:</h2>
            <VoteResult
              text={questions[id].optionOne.text}
              numVotes={numVotesOptionOne}
              totalVotes={totalVotes}
              renderYourVoteBadge={optionVoted === "optionOne"}
            />
            <VoteResult
              text={questions[id].optionTwo.text}
              numVotes={numVotesOptionTwo}
              totalVotes={totalVotes}
              renderYourVoteBadge={optionVoted === "optionTwo"}
            />
          </div>
        </div>
      </div>
    )
} 

function mapStateToProps({ authedUser, users, questions }) {
    return {
        authedUser,
        users,
        questions
    };
}

export default connect(mapStateToProps)(ViewPollResults);

