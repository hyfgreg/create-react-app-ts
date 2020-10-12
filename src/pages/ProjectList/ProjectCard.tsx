import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

interface IProps {
  project: ILooseObject
}

interface ProjectCard{
  props: IProps
}

class ProjectCard extends React.Component {
  render () {
    return (
      <Card style={{ width: 300 }} title={this.props.project.name}>
          <div>{ this.props.project.id }</div>
      </Card>
    )
  }
}


export default ProjectCard;