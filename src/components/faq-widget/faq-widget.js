import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

export default class FAQWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isWidgetOpen: false
    };
  }

  toggleWidget = () =>
    this.setState(prevState => ({ isWidgetOpen: !prevState.isWidgetOpen }));

  render() {
    const { isWidgetOpen } = this.state;
    const isWidgetOpenClass = isWidgetOpen ? "expanded" : "";

    return (
      <div className="faq">
        <div className="faq__question" onClick={this.toggleWidget}>
          <div className="faq__question-text">{this.props.question}</div>
          <div className="fav__question-icon">
            {!isWidgetOpen && <FontAwesomeIcon icon={faAngleLeft} size="1x" />}
            {isWidgetOpen && <FontAwesomeIcon icon={faAngleDown} size="1x" />}
          </div>
        </div>
        <div className={`faq__answer ${isWidgetOpenClass}`}>
          <div className="faq__answer-content">{this.props.answer}</div>
        </div>
      </div>
    );
  }
}

FAQWidget.propTypes = {
  answer: PropTypes.string.isRequired,
  question: PropTypes.string.isRequired
};
