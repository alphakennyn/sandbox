import React, { Component } from 'react';

import Main from './Main';
import Header from './Header';
import Navbar from './Navbar';

class App extends Component {
  
	constructor() {
		super();
		this.state = {
      affix: false,
      headerRatio: 1
		};
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = () => {

		const affix = this.state.affix;
		const windowHeight = window.innerHeight;
		const windowRoundDown = Math.floor(windowHeight/100)*100;
		const windowScrollTop = window.top.scrollY; 

		if(windowScrollTop < windowRoundDown ) {
			console.log("affix false")
			this.setState({
				affix: false,
        headerRatio: (windowRoundDown -windowScrollTop)/ windowRoundDown
			});
		} else {
			console.log("affix true")
			this.setState({
				affix: true,
			});
		} 

		console.log("Affix status: ",affix);
  };
  
  render() {
    return (
      <div>
        <Header ratio={this.state.headerRatio}/>
        <Navbar affix={this.state.affix} />
        <Main/>
      </div>
    );
  }
}

export default App;
