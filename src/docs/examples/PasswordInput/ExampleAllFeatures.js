import React from 'react';
import PasswordInput from 'ps-react/PasswordInput';

/** All features enabled */
class ExampleAllFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: 'initial',
    };
  }

  getQuality() {
    const {
      password: { length },
    } = this.state;
    return length > 10 ? 100 : length * 10;
  }

  render() {
    return (
      <div>
        <PasswordInput
          htmlId="password-input-example-all-features"
          name="password"
          onChange={event => this.setState({ password: event.target.value })}
          value={this.state.password}
          minLength={8}
          placeholder="Enter password"
          error="some error just happened"
          showVisibilityToggle
          quality={this.getQuality()}
          {...this.props}
        />
      </div>
    );
  }
}

export default ExampleAllFeatures;
