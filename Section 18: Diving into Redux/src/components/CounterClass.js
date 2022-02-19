import {Component} from 'react';
import {connect} from 'react-redux';
import classes from './Counter.module.css';
import {DECREMENT, INCREASE, INCREMENT, TOGGLE} from '../store/counter-redux';

class Counter extends Component {
  incrementHandler() {
    this.props.increment();
  }

  increaseHandler() {
    this.props.increase();
  }

  decrementHandler() {
    this.props.decrement();
  }

  toggleCounterHandler() {
    this.props.decrement();
  }

  render() {
    return (
        <main className={classes.counter}>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{this.props.counter}</div>
          <div>
            <button onClick={this.incrementHandler.bind(this)}>
              Increment
            </button>
            <button onClick={this.increaseHandler.bind(this)}>
              Increase by 10
            </button>
            <button onClick={this.decrementHandler.bind(this)}>
              Decrement
            </button>
          </div>
          <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
  }
}

const mapStateToProps = state => ({
  counter: state.counter,
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: INCREMENT}),
  increase: () => dispatch({type: INCREASE, amount: 10}),
  decrement: () => dispatch({type: DECREMENT}),
  toggle: () => dispatch({type: TOGGLE}),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
