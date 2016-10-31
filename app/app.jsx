var React = require('react');
var ReactDOM = require('react-dom');

//Object destructuring that comes from ES6
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');
var Form = require('Form');
var Results = require('Results');
var Nav = require('Nav');
var Details = require('Details');
var Help = require('Help');
var About = require('About');
var ResultsAPI = require('ResultsAPI');

var Greeter = React.createClass({
  getDefaultProps: function () {
    return {
      name: 'Stranger',
      message: 'I am not impressed by your performance',
      startingAddress: '123 Main St',
      departureAirport: 'PDX',
      flightNumber: 'US123'
    };
  },
  getInitialState: function () {
    return {
      startingAddress: this.props.startingAddress,
      departureAirport: this.props.departureAirport,
      flightNumber: this.props.flightNumber
    };
  },
  handleNewInput: function (updates) {
    this.setState(updates);
  },
  render: function () {

    return (
      <div>

        <Main/>
        <Form onNewInput={this.handleNewInput}/>

      <div>
        <h2>Your details:</h2>
        <h3>{this.state.startingAddress}</h3>
        <h3>{this.state.departureAirport}</h3>
        <h3>{this.state.flightNumber}</h3>
      </div>


        <Results/>
      </div>

    );
  }
});


ReactDOM.render(
  // <Greeter/>,
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="help" component={Help}/>
      <Route path="about" component={About}/>
      <IndexRoute component={Form}/>
    </Route>
  </Router>,
  document.getElementById('app')
);