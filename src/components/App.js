import React, { Component, Fragment } from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import { connect } from "react-redux"
import { handleInitialData } from "../actions/shared"
import LoadingBar from "react-redux-loading-bar"
import Nav from "./Nav"
import LogIn from './LogIn'
import NewQuestion from './NewQuestion'
import ListQuestions from './ListQuestions'
import PollQuestion from "./PollQuestion"
import ViewPollResults from './ViewPollResults'
import LeaderBoard from './LeaderBoard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className="container">
            <Nav />
            {this.props.loading === true ? null : (
              <div>
                {this.props.isLoggedIn === true ? (
                  <div>
                    <Route path="/" exact component={ListQuestions} />
                    <Route
                      path="/ViewPollResults/:id"
                      component={ViewPollResults}
                    />
                    <Route path="/PollQuestion/:id" component={PollQuestion} />
                  </div>
                ) : (
                  <Route path="/" exact component={LogIn} />
                )}
                <Route path="/NewQuestion" component={NewQuestion} />
                <Route path="/LeaderBoard" component={LeaderBoard} />
              </div>
            )}
          </div>
        </Fragment>
      </Router>
    );
  }
}

function mapStateToProps({ users, authedUser }) {
  return {
    isLoggedIn: authedUser !== "" && authedUser !== null,
    loading: users === null
  }
}

export default connect(mapStateToProps)(App);
