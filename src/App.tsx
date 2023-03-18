import { Main, Restaurant } from '@pages'
import { Route, Switch } from 'wouter'
import { Header, Footer, ToTop } from '@layouts'

function App(): JSX.Element {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" component={Main} />
				<Route path="/restaurant/:id" component={Restaurant} />
			</Switch>
			<Footer />
			<ToTop />
		</>
	)
}

export default App
