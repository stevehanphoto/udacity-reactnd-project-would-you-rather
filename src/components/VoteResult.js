import React from 'react'

const YourVoteBadge = () => {
  return (
    <div className="your-vote-badge">
      <div className="your-vote-text">Your</div>
      <div className="your-vote-text">vote</div>
    </div>
  );
};

const VoteResult = ({ text, numVotes, totalVotes, renderYourVoteBadge }) => {

  return (
    <div className="option-result">
      {renderYourVoteBadge && <YourVoteBadge />}
      <div className="option-text">{`Would you rather ${text}?`}</div>
      <div className="option-votes">
        <div
          className="option-votes-bar"
          style={{
            width: Math.round((numVotes / totalVotes) * 225) + "px"
          }}
        >
          {Math.round((numVotes / totalVotes) * 100)}%
        </div>
      </div>
      <div className="vote-ratio-container">
        <div className="vote-ratio">{`${numVotes} out of ${totalVotes} votes`}</div>
      </div>
    </div>
  );
}

export default VoteResult