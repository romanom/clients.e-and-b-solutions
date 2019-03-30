import React from "react";

const pageContainer = Component => {
  class PageContainer extends React.Component {
    render() {
      return (
        <div className="page_container">
          <Component {...this.props} />
        </div>
      );
    }
  }

  return PageContainer;
};
export default pageContainer;
