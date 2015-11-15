import React from 'react';
import './ContactInfoForm.css';
var PropTypes = React.PropTypes;

var InputText = React.createClass({
  propTypes: {
    val: PropTypes.string,
    labelTxt: PropTypes.string
  },

  render: function() {
    return (
      <div className="group">
        <input type="text" value={this.props.val} onChange={this.props.updateValue} required />
        <span className="highlight"></span>
        <span className="bar"></span>
        <label>{this.props.labelTxt}</label>
      </div>
    );
  }

});

module.exports = InputText;