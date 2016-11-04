var React = require('react');
var Nav = require('Nav');

var Main = (props) => {
  return (
    <div className="back-img">
      <Nav/>
      <div className="row">
        <div className="columns small-centered">
          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main;
