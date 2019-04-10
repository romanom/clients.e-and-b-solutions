import React from "react";
import { handlePageView } from "../tools/analytics";
import ProjectContainer from "../containers/project-container";

export default class ProjectPage extends React.Component {
  componentDidMount() {
    handlePageView();
  }

  render() {
    return (
      <main className="project_page">
        <ProjectContainer {...this.props} />
      </main>
    );
  }
}
