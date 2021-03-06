/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import CodeExample from './CodeExample';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showCode: false };
  }

  toggleCode = event => {
    event.preventDefault();
    this.setState(prevState => ({ showCode: !prevState.showCode }));
  };

  render() {
    const { showCode } = this.state;
    const { code, description, name } = this.props.example;
    // Must use CommonJS require to dynamically require because
    // ES Modules must be statically analyzable.
    const ExampleComponent = require(`./examples/${
      this.props.componentName
    }/${name}`).default;
    return (
      <div className="example">
        {description && <h4>{description}</h4>}

        <ExampleComponent />

        <p>
          <button type="button" onClick={this.toggleCode}>
            {showCode ? 'Hide' : 'Show'} Code
          </button>
        </p>

        {showCode && <CodeExample>{code}</CodeExample>}
      </div>
    );
  }
}

Example.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
};

export default Example;
