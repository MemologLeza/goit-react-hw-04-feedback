import Feedback from './Feedback/Feedback';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import React, { useState } from 'react';
import Statistic from './Statistic/Statistic';
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countFeedbackGood = () => setGood(prev => prev + 1);
  const countFeedbackNeutral = () => setNeutral(prev => prev + 1);
  const countFeedbackBad = () => setBad(prev => prev + 1);

  const countTotalFeedback = () => {
    let total;
    total = good + bad + neutral;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    if (countTotalFeedback() === 0) {
      return 0;
    } else {
      return ((good / countTotalFeedback()) * 100).toFixed(0);
    }
  };
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Section title="Please leave your feedback">
        <Feedback
          onClickGood={countFeedbackGood}
          onClickNeutral={countFeedbackNeutral}
          onClickBad={countFeedbackBad}
        />
      </Section>
      <Section title="Statistic">
        {good || neutral || bad ? (
          <Statistic
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positiveFeedback={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </div>
  );
};

export default App;
