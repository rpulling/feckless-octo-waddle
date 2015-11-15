import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';

import ContactForm from './components/ContactInfoForm/ContactInfoForm';

const App = React.createClass({
	render:function(){
		return (
				<div>
					<h1>Demo under construction</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/contact">contact</Link></li>
					</ul>

					{this.props.children}

				</div>
			);
	}
});

render((
	<Router>
		<Route path="/" component={App}>
			<Route path="contact" component={ContactForm} />
		</Route>
	</Router> 

), document.getElementById("app"));