import React, { Component, Fragment } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from "react-redux";
import ReactToolTip from 'react-tooltip'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  handleDisableClick = (e) => {
    if (!this.props.authedUser) { 
      console.log("Disabled")
      e.preventDefault() 
    }
  }
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(setAuthedUser(""))
//      .then(() => {
//        this.props.history.push('/')
/*        console.log("push to /")
      })
      .catch(() => {
        alert("Error logging out. Try again")
      })*/
  }
  render() {
    const { authedUser, user } = this.props;
    const {name, avatarURL} = user || ''
    const welcomeText = user ? `Welcome, ${name}` : ''
    return (
      <nav className="nav">
        {authedUser ? null : <ReactToolTip place="bottom" textColor="black" backgroundColor="whitesmoke" border={true} borderColor="darkgrey"/>}
        <ul className="nav-ul">
          <li>
            <NavLink
              to="/"
              exact
              className="enabled-nav"
              activeClassName="active"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/NewQuestion"
              className={authedUser ? "enabled-nav" : "disabled-nav"}
              onClick={this.handleDisableClick}
              data-tip="Sign in to create New Question"
            >
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/LeaderBoard"
              className={authedUser ? "enabled-nav" : "disabled-nav"}
              onClick={this.handleDisableClick}
              data-tip="Sign in to view Leader Board"
            >
              Leader Board
            </NavLink>
          </li>
          {authedUser ? (
            <Fragment>
              <li>{welcomeText}</li>
              <li>
                <img
                  src={avatarURL}
                  alt="Avatar of logged in user on nav bar"
                  className="nav-avatar"
                />
              </li>
              <li>
                <Link to={"/"}>
                  <button className="logout-btn" onClick={this.handleLogout}>
                    Logout
                  </button>
                </Link>
              </li>
            </Fragment>
          ) : null}
        </ul>
      </nav>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    user: users[authedUser]
  };
}

export default connect(mapStateToProps)(Nav);