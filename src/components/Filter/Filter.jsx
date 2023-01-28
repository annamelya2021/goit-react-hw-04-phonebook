import { Label, Input } from './Filter.styled';
import PropTypes from 'prop-types';

function Filter({ filter }) {
  const handleInputChange = e => {
    filter(e.currentTarget.value);
  };

  return (
    <form>
      <Label>
        Find contacts by name
        <Input type="text" onChange={handleInputChange} />
      </Label>
    </form>
  );
  // }
}
Filter.propTypes = {
  filter: PropTypes.func.isRequired,
};

export default Filter;
