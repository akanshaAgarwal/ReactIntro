// use shortcuts from Simple React Snippets extension

// imrc is shortcut for importing react
import React, { Component } from "react";
import { useCallback } from "react";

// cc is shortcut to create class
class Counter extends Component {
  // state is special property in react Component
  // includes any data that this componet may need
  // state has properties that are local to a component
  // props are input to the component, not local
  // props are rad only, whereas state values can be changes in the current component

  //   state = {
  //     count: this.props.counter.value,
  //     tags: ["tag1", "tag2", "tag3"],
  //     // imageUrl:
  //     //   "https://media1.tenor.com/images/1948784475bf1b9234a2ff927d3c8f60/tenor.gif?itemid=15134902",
  //   };

  //   we need to have one source of truth, when we change something in counter
  //   the counters does not get updated, since we are just using its value initiallly
  //   and then not updating it, we need to change that
  //   To change this, we need to make Counter a controlled Component
  //   This means that we will delete the state of counter and
  //   use the values from Counters with synchronous updates to the values
  //   in Counters

  styles = {
    fontSize: 30,
    fontWeight: "bold",
  };
  // we need to define a constructer in order to bind the handlers
  //   constructor() {
  //     super();
  //     // bind will return a new instance of handleIncrement func, this will reference the current object always now
  //     this.handleIncrement = this.handleIncrement.bind(this);
  //   }

  // we cannot access object using this inside the function, first need to define
  //   a constructor and bind the object
  // there is another - simpler way - convert the function inti arrow function
  // arrow functions inherit the this keyword, do not bind it

  // if we are making this a controlled component, then
  // we do not need handleIncrement here
  // changes should be handled in Counters

  //   handleIncrement = (product) => {
  //     console.log(product);
  //     console.log("Increment clicked", this.state.count);
  //     // we cannot directly update the count, react will not updtae the view
  //     // we need to tell explicitly
  //     // setState tells react that something is going to change
  //     // react will then schedule a call to render method, asynchronous call
  //     // can happen anytime in future, render will return new react element
  //     // render will then display the changed virtual DOM by changing the old DOM
  //     // react will reach out to the current browser span, and will campare the changes,
  //     //then it will update the particular element that is being changed,
  //     // rest elements will remain unaffected
  //     this.setState({ count: this.state.count + 1 });
  //   };

  //   handleDecrement = () => {
  //     this.setState({ count: this.state.count === 0 ? 0 : this.state.count - 1 });
  //   };

  render() {
    // every page has some properties, which can be accessed
    // using props, so in counters the values which were set
    // for counter can be accessed using props
    console.log("props", this.props);
    //   use let since we cannot modify const

    return (
      // to avoid using another div, we can use
      // React.Fragment, it will embed elements for us
      <React.Fragment>
        {this.props.children}

        {/* <img src={this.state.imageUrl} alt="sorry" /> */}
        {/* to use the dynamic state, we use curly braces
          we can put any valid js expression in these braces */}
        {/* we use className not class since that is a reserved keywork in js */}

        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        {/* we cannot directly pass parameters to the function in react,
        either we need to create another function as a wrapper which takes a function as parameters and then call that function here
        or we need to use the arrow method again */}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          style={{ fontSize: 15, margin: 10 }}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          style={{ fontSize: 15 }}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          style={{ fontSize: 15 }}
          className="btn btn-danger btn-sm m-4 p-2"
        >
          Delete
        </button>

        {/* we do not have loops in react jsx, it is not a templating engine
        just simple syntax which gets compiled to react elements */}
        <ul>
          {/* here to compensate for loops, we use mapping
            each element is mapped to an element,
            it is better to give a key to each element since each 
            of these elements are objects, needs to uniquely identify each
            item in the list,
            react needs to quickly figure out the element that changes, 
            and therefore we should give a unique key to each item */}

          {/* there are 2 ways to do conditional rendering, one we know is to create
          a js function and call it here using this, like we have done before,
          other is using logical and, in js true && 'string' gives us the
          'string' as output because it considers string as truthy, but empty
          string as falsy, 0 is considered falsy, everything else is truthy */}

          {/* {this.state.tags.length === 0 && "Please create a new tag!"}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))} */}
        </ul>

        {/* we use imbuilt bootstrap elements for design, 
        badge-primary gives blue badge, badge-warning gives us yellow badge */}
      </React.Fragment>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // pick the count property of this.state
    const { value } = this.props.counter;
    // use this new count element, we can also embed html elements
    return value === 0 ? 0 : value;
  }
}

export default Counter;
