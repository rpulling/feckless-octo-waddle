import React from 'react';

const Settings = React.createClass({
	render: function() {
		return (
			<div>
				<h1>Settings</h1>
				{this.props.children}
			</div>
		);
	}
});

module.exports = Settings;