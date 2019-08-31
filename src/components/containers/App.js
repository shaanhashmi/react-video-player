import React from 'react';
import ShPlayer from './ShPlayer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from '../styles/GlobalStyle';

const App = () => (
	<Router>
		<>
			<Switch>
				<Route exact path="/" component={ShPlayer} />
				<Route exact path="/:activeVideoId" component={ShPlayer} />
			</Switch>
			<GlobalStyle />
		</>
	</Router>
)

export default App;