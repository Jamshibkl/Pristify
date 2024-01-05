import React from 'react'

import PropTypes from 'prop-types'

import './question11.css'

const Question11 = (props) => {
  return (
    <div className="question11-container">
      <span className="question11-text heading3">{props.Question}</span>
      <span className="bodySmall">{props.Answer}</span>
    </div>
  )
}

Question11.defaultProps = {
  Answer:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.',
  Question: 'What types of cars do you sell?',
}

Question11.propTypes = {
  Answer: PropTypes.string,
  Question: PropTypes.string,
}

export default Question11
