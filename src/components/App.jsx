import { Component } from 'react';
import { Section } from './Section';
import { Statistics } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import styles from './App.module.css';

const INITIAL_STATE = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export class App extends Component {
  state = { ...INITIAL_STATE };
  options = Object.keys(this.state);

  countTotalFeedback() {
    // return Object.values(this.state).reduce((acc, item) => acc + item, 0);
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  onLeaveFeedback = option => {
    this.setState(state => ({ [option]: state[option] + 1 }));
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    return (
      <div className={styles.section}>
        <div className={styles.box}>
          <div className={styles.box_title}>
            <Section title="Please leave feedback">
              <FeedbackOptions
                options={this.options}
                onLeaveFeedback={this.onLeaveFeedback}
              />
            </Section>
          </div>
          <div className={styles.box_title}>
            <Section title="Statistics">
              {total ? (
                <Statistics
                  good={good}
                  neutral={neutral}
                  bad={bad}
                  total={total}
                  positivePercentage={this.countPositiveFeedbackPercentage()}
                />
              ) : (
                <Notification message="There is no feedback" />
              )}
            </Section>
          </div>
        </div>
      </div>
    );
  }
}
