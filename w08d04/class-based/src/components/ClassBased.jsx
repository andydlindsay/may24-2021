import { Component } from 'react';

class ClassBased extends Component {
  constructor(props) {
    super();

    this.state = {
      count: 0,
      interview: props.interviewer || null,
      internalMessage: 'hello world'
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    // DON'T DO THIS!!!
    // this.state.count += 1;

    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>This is a class-based component</h2>
        <h3>{ this.props.secretMessage }</h3>

        <h3>Count: { this.state.count }</h3>
        <button onClick={this.clickHandler}>Increment!</button>

        <h3>Internal message: { this.state.internalMessage }</h3>
      </div>
    );
  }
}

export default ClassBased;

// const classBased = new ClassBased(props);
// classBased.props = props;
