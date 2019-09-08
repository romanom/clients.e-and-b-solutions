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
      <main>{projectId && <ProjectContainer projectId={projectId} />}</main>
    );
  }
}

export default ProjectPage;
