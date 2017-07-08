import React from "react";

const InitialState = initialValue => ({
  value: initialValue
});

class view extends React.Component {
  constructor(props) {
    super(props);

    this.state = InitialState(this.props.initialValue);
    this.onChange = this.onChange.bind(this);
  }

  onChange(eventArgs) {
    const value = eventArgs.target.value;

    this.setState({
      value
    });
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.label}>
          {this.props.label}
        </label>
        <input
          id={this.props.label}
          type="text"
          value={this.state.value}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default {
  view
};
