import styles from './Notification.module.css';
import PropTypes from 'prop-types';

export const Notification = ({ message }) => (
  <div className={styles.box}>
    <div className={styles.notfication}>{message}</div>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
