import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import Pager from './pages/Pager'
import Phrases from './pages/Phrases'
import Interrogatives from './pages/Interrogatives'
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import 'tachyons'

import 'normalize.css/normalize.css'
import '@blueprintjs/core/dist/blueprint.css'
import './index.css'

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cizuhl7dh9uic0154gri10kkq',
})

const client = new ApolloClient({
  networkInterface,
  dataIdFromObject: o => o.id,
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='vocabs' />
        <Route path='vocabs' components={Pager} />
        <Route path='phrases' components={Phrases} />
        <Route path='interrogatives' components={Interrogatives} />
      </Route>
    </Router>
  </ApolloProvider>,
  document.getElementById('root')
)
