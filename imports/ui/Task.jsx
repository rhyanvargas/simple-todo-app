imports/ui/Task.jsx »
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
import React, { Component, PropTypes } from 'react';

// Task component - represents a single todo item
export default class Task extends Component {
  render() {
    return (
      <li>{this.props.task.text}</li>
    );
  }
}

Task.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  task: PropTypes.object.isRequired,
};
