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
      <header class="searchbar">
        <form class="form" onSubmit={this.handleFormSubmit}>
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={valForm}
          />
        </form>
      </header>
    );
  }
}
