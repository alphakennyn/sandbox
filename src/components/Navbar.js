import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Navbar extends Component {

	render() {
		const affix = this.props.affix ? 'Navbar affix' : 'Navbar';

		return (
			<div className={affix}>
				<div className="navbar-content">
					Hi
				</div>
			</div>
		);
	}
}

export default Navbar;
