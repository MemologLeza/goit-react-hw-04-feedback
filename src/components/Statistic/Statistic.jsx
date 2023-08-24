import PropTypes from 'prop-types';
import styled from './Statistic.module.css';
const Statistic = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <ul className={styled.list}>
      <li>good: {good}</li>
      <li>neutral: {neutral}</li>
      <li>bad: {bad}</li>
      <li>total: {total}</li>
      <li>Positive feedback: {positiveFeedback}%</li>
    </ul>
  );
};
Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.string.isRequired,
};
export default Statistic;
