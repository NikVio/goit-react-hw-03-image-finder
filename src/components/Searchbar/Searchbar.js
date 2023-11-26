import { Component } from 'react';
import { BsSearch } from 'react-icons/bs';
import {
  SearchbarBox,
  SearchbarButton,
  SearchbarForm,
  SearchbarInput,
} from './Searchbar.styled';

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
    this.setState({ valForm: '' });
  };

  render() {
    const { valForm } = this.state;

    return (
      <SearchbarBox>
        <SearchbarForm onSubmit={this.handleFormSubmit}>
          <SearchbarButton type="submit">
            <BsSearch size={25} />
          </SearchbarButton>

          <SearchbarInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
            value={valForm}
          />
        </SearchbarForm>
      </SearchbarBox>
    );
  }
}
