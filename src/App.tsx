import { Main, Restaurant, Error } from '@pages'
import { Route, Switch } from 'wouter'
import { Header, Footer, ToTop } from '@layouts'

function App(): JSX.Element {
	return (
		<>
			<Header />
			<Switch>
				<Route path="/" component={Main} />
				<Route path="/restaurant/:id" component={Restaurant} />
				<Route component={Error} />
				{/* 404 страница */}
			</Switch>
			<Footer />
			<ToTop />
		</>
	)
}

export default App
