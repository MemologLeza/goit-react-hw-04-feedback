import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Component } from 'react';
import Statistic from './Statistic/Statistic';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countFeedback = ({ target }) => {
    this.setState(prev => {
      return {
        [target.textContent]: prev[target.textContent] + 1,
      };
    });
    this.countTotalFeedback();
    this.countPositiveFeedbackPercentage();
  };
  countTotalFeedback = () => {
    let total;
    total = this.state.good + this.state.bad + this.state.neutral;
    return total;
  };
  countPositiveFeedbackPercentage = () => {
    if (isNaN(this.countTotalFeedback()) || this.countTotalFeedback() === 0) {
      return 0;
    } else {
      return ((this.state.good / this.countTotalFeedback()) * 100).toFixed(0);
    }
  };
  render() {
    const keys = Object.keys(this.state);
    return (
      <div
        style={{
          height: '100vh',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <Section title="Please leave your feedback">
          <Feedback options={keys} onLeaveFeedback={this.countFeedback} />
        </Section>
        <Section title="Statistic">
          {this.countTotalFeedback() ? (
            <Statistic
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
export default App;
