import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    valForm: '',
  };

  handleChange = evt => {
    this.setState({ valForm: evt.target.value });
  };

  handleFormSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state.valForm);
  };

  render() {
    const { valForm } = this.state;
    return (
      <header>
        <form onSubmit={this.handleFormSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={valForm}
          />
        </form>
      </header>
    );
  }
}
