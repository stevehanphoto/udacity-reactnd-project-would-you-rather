import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux"
import { handleCreateNewQuestion } from '../actions/questions'

class NewQuestion extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            optionOneText: '',  
            optionTwoText: '',
            toHome: false
        }
    }
    handleInputOneChange = (e) => {
        this.setState({ optionOneText: e.target.value })
    } 
    handleInputTwoChange = (e) => {
        this.setState({ optionTwoText: e.target.value })
    } 
    handleSubmit = (e) => {
        e.preventDefault()
        const { optionOneText, optionTwoText } = this.state
        const { dispatch, id } = this.props

        dispatch(handleCreateNewQuestion(optionOneText, optionTwoText))
        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: id ? false : true
        }))
    }
    render() {
        const { toHome } = this.state

        if (toHome === true) {
            return <Redirect to={'/'} />
        }

        return (
          <div className="question">
            <div className="create-question-title">
              Create New Question
              {/*<h1>Create New Question</h1>*/}
            </div>
            <div className="create-question-content">
              <p>Complete the question:</p>
              <div>
                <h3 className="create-question-label">Would you rather...</h3>
                <form className="new-question-form">
                  <input
                    type="text"
                    placeholder="Enter choice 1"
                    name="input-change"
                    className="answer-text-input"
                    onChange={this.handleInputOneChange}
                  />
                  {/*<div className="separator">
                    <span className="separator-text">OR</span>
                </div>*/}
                  {/*<h4>OR</h4>*/}
                  <div className="hr-text" data-content="OR"></div>

                  <input
                    type="text"
                    placeholder="Enter choice 2"
                    name="input-change"
                    className="answer-text-input"
                    onChange={this.handleInputTwoChange}
                  />
                  <button
                    className="create-new-question-btn"
                    onClick={this.handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions
  };
}

export default connect(mapStateToProps)(NewQuestion);

