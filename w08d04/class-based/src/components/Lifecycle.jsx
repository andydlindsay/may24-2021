import { Component } from "react";

class Lifecycle extends Component {
  constructor() {
    super();

    this.state = {
      title: '',
      interval: null
    };

    this.changeHandler = this.changeHandler.bind(this);
  }

  // fetching data, setting up socket connections, establishing timers/intervals
  componentDidMount() {
    console.log('the component has mounted to the DOM');
    const interval = setInterval(() => {
      console.log('the interval has fired');
    }, 3000);

    this.setState({ interval });
  }

  // listening for changes to state and/or props
  componentDidUpdate(prevProps, prevState) {
    console.log('the component has updated!!');
  }

  // runs right before the component is removed from the DOM
  // cleaning up after ourselves
  componentWillUnmount() {
    console.log('the component is about to be removed');
    clearInterval(this.state.interval);
  }

  changeHandler(event) {
    this.setState({ title: event.target.value });
  }

  render() {
    return (
      <div>
        <h2>Lifecycle Component</h2>

        <div>
          <h3>Title: { this.state.title.split('').reverse().join('') }</h3>
          <input
            value={this.state.title}
            onChange={this.changeHandler}
          />
        </div>
      </div>
    );
  }
}

export default Lifecycle;
