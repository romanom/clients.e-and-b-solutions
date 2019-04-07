import React from "react";

const pageContainer = Component => {
  class PageContainer extends React.Component {
    render() {
      return (
        <main className="page_container">
          <Component {...this.props} />
        </main>
      );
    }
  }

  return PageContainer;
};
export default pageContainer;
