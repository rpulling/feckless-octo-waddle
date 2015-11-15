import React from 'react';
import './ContactInfoForm.css';
import InputText from './inputText.js';
var PropTypes = React.PropTypes;

var getDefaultContactInfo = function(){
	return {
	            firstName:{
	              accessor:"firstName",
	              labelTxt: "First Name"
	            },
	            lastName:{
	              accessor:"lastName",
	              labelTxt: "Last Name"
	            },
	            addressLine1:{
	              accessor:"addressLine1",
	              labelTxt: "Line 1"
	            },
	            addressLine2:{
	              accessor:"addressLine2",
	              labelTxt: "Line 2"
	            },
	            city:{
	              accessor:"city",
	              labelTxt: "City"
	            },
	            state:{
	              accessor:"state",
	              labelTxt: "State"
	            },
	            zipCode: {
	              accessor:"zipCode",
	              labelTxt: "Zip Code"
	            },
	            homePhone:{
	              accessor:"homePhone",
	              labelTxt: "Home Phone"
	            },
	            workPhone:{
	              accessor:"workPhone",
	              labelTxt: "Work Phone"
	            },
	            mobilePhone:{
	              accessor:"mobilePhone",
	              labelTxt: "Mobile Phone"
	            },
	            email: {
	              accessor:"email",
	              labelTxt: "Email"
	            },
	          };
}

var ContactInfoForm = React.createClass({

  propTypes: {
    srcObj: PropTypes.object,
    propMapConfig: PropTypes.object,
    onCancelCb: PropTypes.func,
    onSaveCb: PropTypes.func
  },

  getInitialState: function() {
    return {
      srcObjCopy: this.props.srcObj ?
                    JSON.parse(JSON.stringify(this.props.srcObj)) : {},
      mappingConfig: this.props.propMapConfig || getDefaultContactInfo()
                          
    };
  },

  getPropRef:function(targetObj, propPath){
    return propPath.split('.')
                    .reduce(function(acc, prop){
                                var ref = acc[prop];
                                return ref;
                            }, targetObj);
  },

  render: function() {

    var srcObj = this.state.srcObjCopy,
        mappingConfig = this.state.mappingConfig,
        propConfigs = Object.getOwnPropertyNames(mappingConfig);


    var formElements = propConfigs.map((propKey, index)=>{
                                        var config = mappingConfig[propKey];
                                        var updateValue = (evt)=>{
                                                            srcObj[config.accessor] = evt.target.value;
                                                          };

                                        return (
                                          <InputText val={srcObj[config.accessor]}
                                                     labelTxt={config.labelTxt}
                                                     updateValue={updateValue} />

                                         );

                                      });
    return (
      <div className="rcontactinfoform">
        <form>
          {formElements}
        </form>
      </div>
    );
  }
});

module.exports = ContactInfoForm;
