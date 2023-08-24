import styled from './Feedback.module.css';
import PropTypes from 'prop-types';
const Feedback = ({ onClickGood, onClickNeutral, onClickBad }) => {
  return (
    <div className={styled.buttons}>
      <button type="button" className={styled.button} onClick={onClickGood}>
        good
      </button>
      <button type="button" className={styled.button} onClick={onClickNeutral}>
        neutral
      </button>
      <button type="button" className={styled.button} onClick={onClickBad}>
        bad
      </button>
    </div>
  );
};
Feedback.propTypes = {
  onClickGood: PropTypes.func.isRequired,
  onClickNeutral: PropTypes.func.isRequired,
  onClickBad: PropTypes.func.isRequired,
};
export default Feedback;
