import { Component } from 'react';
import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.func.isRequired,
  };

  handleInputChange = e => {
    this.props.filter(e.currentTarget.value);
  };

  render() {
    return (
      <form>
        <Label>
          Find contacts by name
          <Input type="text" onChange={this.handleInputChange} />
        </Label>
      </form>
    );
  }
}

export default Filter;
