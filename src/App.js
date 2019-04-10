import React, {Component} from 'react';
import './App.scss';
import NavBar from './components/NavBar/NavBar'
import TourList from './components/TourList/TourList'

class App extends Component {
	render() {
		return (
			<main>
				<NavBar/>
				<TourList/>
			</main>
		);
	}
}

export default App;
