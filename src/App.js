import React, { Suspense,useState } from 'react';
import './App.css';
import { Switch, Route, Redirect, BrowserRouter as Router } from "react-router-dom";
import Spinner from '@mui/material/CircularProgress';
import Navbar from './components/navbar/Navbar';
import Dashboard from './views/Dashboard/Dashboard';

function App() {
	const [navOpen,setNavOpen] = useState(null);
	const [navWidth,setNavWidth] = useState(null);
	const handleNavbarChange = (value,navWidth) =>{
		setNavOpen(value);	
		setNavWidth(navWidth);
	}
	return (
		<div className="App">
			<Navbar handleNavbarChange={handleNavbarChange}/>
			<Suspense fallback={<Spinner style={{ position: "absolute", top: "50%", left: "50%" }} />}>
				<Router>
					<Switch>
						<Route path='/dashboard' render={(props) => <Dashboard open={navOpen} navWidth={navWidth} {...props} />} />
						<Redirect to='/dashboard' />
					</Switch>
				</Router>
			</Suspense>
		</div>
	);
}

export default App;
