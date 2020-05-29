// we want to render a list of counter
// and render the counters page in index.js
// rather than the counter page
import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  // NEED TO MOVE EVERYTHING TO APP (PARENT CLASS), SO THAT NAVBAR IS ABLE TO ACCESS COUNTERS

  // state of the component should be modified by the component itself
  // no other component should modify a component's state
  // so when we want to delete or add counter,
  // we need to raise an event, in which counter should raise
  // an event to add or delete a counter and counters should handle that event

  // state = {
  //   counters: [
  //     { id: 1, value: 0, title: "Apple" },
  //     { id: 2, value: 1, title: "Banana" },
  //     { id: 3, value: 0, title: "Grapes" },
  //     { id: 4, value: 4, title: "Strawberry" },
  //   ],
  // };

  // // since deletion and addition of counter should be
  // // managed by counters, we define the handler here,
  // // and pass it to the counter with proper syntax
  // handleDelete = (counterId) => {
  //   console.log("event handler called", counterId);
  //   const counters = this.state.counters.filter((c) => c.id !== counterId);
  //   this.setState({ counters: counters });
  // };

  // handleIncrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value++;
  //   this.setState({ counters });
  // };

  // handleDecrement = (counter) => {
  //   const counters = [...this.state.counters];
  //   const index = counters.indexOf(counter);
  //   counters[index] = { ...counter };
  //   counters[index].value =
  //     counters[index].value === 0
  //       ? counters[index].value
  //       : counters[index].value - 1;
  //   this.setState({ counters });
  // };

  // handleReset = () => {
  //   const counters = this.state.counters.map((c) => {
  //     c.value = 0;
  //     return c;
  //   });
  //   this.setState({ counters });
  // };

  render() {
    // using this we can remove this.props from everything
    // called argument destructuring
    const {
      counters,
      onReset,
      onIncrement,
      onDecrement,
      onDelete,
    } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary m-3">
          Reset
        </button>

        {counters.map((counter) => (
          // sometimes we want to pass elements as child component
          // to do this we use props. children property in the counter
          // we pass element between the counter tag, which will
          // be the child of the component called
          <Counter
            //   key and id have same value, so why id?
            //   the reason is that key is used by react internally and is
            //   not available for our use, so we need to define id
            key={counter.id}
            // value={counter.value}
            // selected={true}
            // id={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            // instead of passing all these seperately, we can directly pass the counter object
            counter={counter}
          >
            <h5 style={{ color: "Green", fontSize: 20 }}>{counter.title}</h5>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
