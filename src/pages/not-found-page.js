import React from "react";
import { handlePageView } from "../../tools/analytics";
import NotFoundContainer from "../containers/not-found-container/not-found-container";

export default class NotFoundPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <div className="not_found_page">
        <NotFoundContainer />
      </div>
    );
  }
}
