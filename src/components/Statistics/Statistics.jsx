import { Field } from './Field';
import styles from './Field.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <div className={styles.box}>
    <Field title="Good" value={good} />
    <Field title="Neutral" value={neutral} />
    <Field title="Bad" value={bad} />
    <Field title="Total" value={total} />
    <Field title="Positive feedback" value={positivePercentage} units="%" />
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
