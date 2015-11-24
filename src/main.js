import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link} from 'react-router';

import ContactForm from './components/ContactInfoForm/ContactInfoForm';
import Table from './components/Table/BasicTable';

const App = React.createClass({
	render:function(){
		return (
				<div>
					<h1>Demo under construction</h1>
					<ul>
						<li><Link to="/">Home</Link></li>
						<li><Link to="/contact">contact</Link></li>
						<li><Link to="/table">Table</Link></li>
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
			<Route path="table" component={Table} />
		</Route>
	</Router> 

), document.getElementById("app"));