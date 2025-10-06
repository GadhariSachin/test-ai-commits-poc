import { render } from 'preact';
import { LocationProvider, Router, Route } from 'preact-iso';

import { Header } from './components/Header.jsx';
import { Home } from './pages/Home/index.jsx';
import { About } from './pages/About/index.jsx';
import { Services } from './pages/Services/index.jsx';
import { Blog } from './pages/Blog/index.jsx';
import { Contact } from './pages/Contact/index.jsx';
import { Dashboard } from './pages/Dashboard/index.jsx';
import { Profile } from './pages/Profile/index.jsx';
import { SignIn } from './pages/SignIn/index.jsx';
import { SignUp } from './pages/SignUp/index.jsx';
import { NotFound } from './pages/_404.jsx';
import './style.css';

export function App() {
	return (
		<LocationProvider>
			<Header />
			<main>
				<Router>
					<Route path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/services" component={Services} />
					<Route path="/blog" component={Blog} />
					<Route path="/contact" component={Contact} />
					<Route path="/dashboard" component={Dashboard} />
					<Route path="/profile" component={Profile} />
					<Route path="/signin" component={SignIn} />
					<Route path="/signup" component={SignUp} />
					<Route default component={NotFound} />
				</Router>
			</main>
		</LocationProvider>
	);
}

render(<App />, document.getElementById('app'));
