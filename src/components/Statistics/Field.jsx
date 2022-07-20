import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const Field = ({ title, value, units }) => (
  <div className={styles.box_title}>
    <label className={styles.title}>
      {title}:
      <span className={styles.value}>
        {value}
        {units}
      </span>
    </label>
  </div>
);

Field.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  units: PropTypes.string,
};
