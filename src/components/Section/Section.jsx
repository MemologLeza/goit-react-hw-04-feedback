import styled from './Section.module.css';
import PropTypes from 'prop-types';
const Section = ({ title, children }) => {
  return (
    <section className={styled.section}>
      <p className={styled.title}>{title}</p>
      {children}
    </section>
  );
};
Section.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Section;
