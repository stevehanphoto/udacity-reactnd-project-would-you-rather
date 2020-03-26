import React, { Component } from "react"
import onClickOutside from "react-onclickoutside";

class LogInDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lisOpen: false,
      titleText: "Select User"
    };
  }
  handleClickOutside = e => {
    this.setState({
        listOpen: false
    })
  }
  selectItem(id) {
    console.log("id:", id);
    this.setState({
        listOpen: false,
        titleText: this.props.users[id].name
      },
      this.props.selectItem(id)
    )
  }
  toggleList() {
    this.setState(preState => ({
      listOpen: !preState.listOpen
    }));
  }
  render() {
    const { listOpen, titleText } = this.state;
    const { userIds, users } = this.props;

    return (
      <div className="dropdown-wrapper">
        <div className="dropdown-header" onClick={() => this.toggleList()}>
          <div className="dropdown-header-title">{titleText}</div>
          {listOpen ? (
            <span className="angle-icon">&#x25B4;</span>
          ) : (
            <span className="angle-icon">&#x25BE;</span>
          )}
        </div>
        {listOpen && (
          <ul className="dropdown-list" onClick={e => e.stopPropagation()}>
            {userIds.map(id => (
              <li
                className="dropdown-list-item"
                key={id}
                onClick={() => this.selectItem(id)}
              >
                <img
                  src={users[id].avatarURL}
                  alt={`Avatar of ${users[id].name}`}
                  className="dropdown-avatar"
                />
                <span>{users[id].name}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default onClickOutside(LogInDropdown);
