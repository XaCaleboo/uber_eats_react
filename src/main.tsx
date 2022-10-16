import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'normalize.css'
import './utilities/colors.pcss'
import './utilities/helpers.pcss'
import './utilities/typo.pcss'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
