import React, { Component } from "react"
import { connect } from "react-redux";
import { handleSetAuthedUser } from '../actions/authedUser'
import LogInDropdown from './LogInDropdown'

class LogIn extends Component { 
  constructor(props) {
    super(props)
    this.state = {value: null}
  }
  handleChange = (e) => {
    this.setState({value: e.target.value})
  }
  selectUser = (id) => {
    console.log("id:",id)
    this.setState({ value: id })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.value === null) { return }
    const { dispatch } = this.props
    dispatch(handleSetAuthedUser(this.state.value))
  }
  render() {
    const { users, userIds } = this.props;

    if (userIds !== null) {
      return (
        <div className="sign-in">
          <h2>Welcome to the Would You Rather App!</h2>
          <p>Please sign in to continue</p>
          <form className="sign-in-form">
            <label>Sign in </label>
            <LogInDropdown userIds={userIds} users={users} selectItem={(uid) => this.selectUser(uid)} />

            {/*<select id="users" onChange={this.handleChange}>
              <option>Select User</option>
              {userIds.map(id => (
                <option key={id} value={id} className="select-user">
                  {users[id].name}
                </option>
              ))}
            </select>*/}
            <input
              type="submit"
              value="Sign In"
              className="sign-in-btn"
              onClick={e => this.handleSubmit(e)}
            />
          </form>
          
        </div>
      );
    } else return <div>Loading</div>;
  }
}

function mapStateToProps({ users }) {
  return {
    users,
    userIds: Object.keys(users)
  }
}

export default connect(mapStateToProps)(LogIn)

