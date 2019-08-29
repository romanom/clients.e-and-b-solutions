import React from "react";
import ProjectContainer from "../containers/project-container";

class ProjectPage extends React.Component {
  static getInitialProps({ query }) {
    const { projectId } = query;

    return { projectId };
  }

  render() {
    const { projectId } = this.props;

    return (
      <main>
        <h5>ProjectId: {projectId}</h5>
        <ProjectContainer />
      </main>
    );
  }
}

export default ProjectPage;
