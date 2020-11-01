import React from 'react';
import DefaultLayout from './layouts/DefaultLayout';

export default class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title={this.props.title}>
        <div>Hello {this.props.name}
          <span style={{ color: "blue" }}>{this.props.info}</span>
        </div>
      </DefaultLayout>
    );
  }
}

// module.exports = HelloMessage;