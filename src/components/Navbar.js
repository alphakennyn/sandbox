import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import logo from '../assets/images/logo.svg'
class Navbar extends Component {

	render() {
		const affix = this.props.affix ? 'Navbar affix' : 'Navbar';

		return (
			<div className={affix}>
				<div className="navbar-content">
					<div id="nav-menu">
						<a className="nav-item">Menu 1</a>
						<a className="nav-item">Menu 2</a>
						<a className="nav-item" id="nav-title"><img src={logo} className="App-logo" alt="logo" /></a>
						<a className="nav-item">Menu 3</a>
						<a className="nav-item">Menu 4</a>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
