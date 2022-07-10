import styles from './Section.module.css';
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <section>
    <h2 className={styles.title}>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
