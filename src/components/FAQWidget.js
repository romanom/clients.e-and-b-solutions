import React from 'react';
import { Collapse } from 'react-collapse';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleDown } from '@fortawesome/fontawesome-free-solid'
import PropTypes from 'prop-types';

export default class FAQWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWidgetOpen: false,
    }
  }

  toggleWidget = () => this.setState((prevState) => ({ isWidgetOpen: !prevState.isWidgetOpen }));

  render() {
    const { isWidgetOpen } = this.state;
    return (
      <div className="faq">
        <div className="faq__question" onClick={this.toggleWidget}>
          <div className="faq__question-text">
            {this.props.question}
          </div>
          <div className="fav__question-icon">
            {!isWidgetOpen && <FontAwesomeIcon icon={faAngleLeft} size='1x' className="favicon" />}
            {isWidgetOpen && <FontAwesomeIcon icon={faAngleDown} size='1x' className="favicon" />}
          </div>
        </div>
        <Collapse className="faq__answer" isOpened={isWidgetOpen}>
          {this.props.answer}
        </Collapse>
      </div>
    );
  }
}

FAQWidget.propTypes = {
  answer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired,
};
