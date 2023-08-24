import { nanoid } from 'nanoid';
import styled from './Feedback.module.css';
import PropTypes from 'prop-types';
const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styled.buttons}>
      {options.map(key => (
        <button
          type="button"
          className={styled.button}
          key={nanoid()}
          onClick={e => onLeaveFeedback(e)}
        >
          {key}
        </button>
      ))}
    </div>
  );
};
Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
export default Feedback;
