import React from 'react'
import { connect } from 'react-redux'
import { FaTrophy } from 'react-icons/fa'

const RenderTrophy = ({userIds, id}) => {
    console.log("renderTrophy - userIds:", userIds);
    switch (id) {
        case userIds[0]:
            console.log("First place")
            return (
                <FaTrophy className="trophy trophy-first-place" />
            )
        case userIds[1]:
            return (
                <FaTrophy className="trophy trophy-second-place" />
            )
        case userIds[2]:
            return (
                <FaTrophy className="trophy trophy-third-place" />
            )
        default:
            return null
    }
}

const LeaderBoard = (props) => {
    const { users, userIds } = props
    console.log("users:", users)
    console.log("userIds:", userIds);

    return (
      <div>
        {userIds.map(id => (
          <div key={id} className="leaderboard-user-container">
            <div className="avatar-container">
              <div className="leaderboard-triangle">
                <RenderTrophy userIds={userIds} id={id} />
              </div>
              <img
                src={users[id].avatarURL}
                alt={`Avatar of $id.name}`}
                className="leaderboard-avatar"
              />
            </div>
            <div className="leaderboard-content">
              <div className="leaderboard-user-name">{users[id].name}</div>
              <div className="leaderboard-questions-container">
                <span className="leaderboard-questions-text">
                  Answered questions
                </span>
                <span className="leaderboard-questions-count">
                  {Object.keys(users[id].answers).length}
                </span>
              </div>
              <hr className="leaderboard-content-hr" />
              <div className="leaderboard-questions-container">
                <span className="leaderboard-questions-text">
                  Created questions
                </span>
                <span className="leaderboard-questions-count">
                  {users[id].questions.length}
                </span>
              </div>
            </div>
            <div className="leaderboard-score-container">
              <div className="leaderboard-score-title">Score</div>
              <div className="leaderboard-score">
                {users[id].questions.length +
                  Object.keys(users[id].answers).length}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}

function mapStateToProps({ users }) {
    return {
        users,
        userIds: Object.keys(users)
            .sort((a, b) => users[b].questions.length - users[a].questions.length)
    }
}

export default connect(mapStateToProps)(LeaderBoard)