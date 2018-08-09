import React, { Component } from "react";
import DatePicker from "react-datepicker";
import moment from "moment";
import { observer, inject } from "mobx-react";

@inject("search")
@observer
class Search extends Component {
  state = {
    startDate: moment()
  };

  search() {
    // this.props.search.search();
  }

  handleStartDateChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="navbar-brand">
            <a className="navbar-item" href="/">
              Mangadium
            </a>

            <a
              role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
        </nav>
        <div className="field">
          <div className="select">
            <select>
              {[...Array(10).keys()].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
          </div>
          <div className="field">
            <DatePicker
              selected={this.state.startDate}
              onChange={this.handleStartDateChange}
              popperPlacement="bottom-end"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Search;