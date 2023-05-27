import React, { Component } from 'react';

class ClassProps extends Component {
  render() {
    const { courses, children } = this.props;

    return (
      <div>
        <h2>Courses Studied:</h2>
        <ul>
          {courses.map((course, index) => (
            <li key={index} style={{ color: course.color }}>
              {course.name}
            </li>
          ))}
        </ul>
        <div>{children}</div>
      </div>
    );
  }
}

export default ClassProps;
