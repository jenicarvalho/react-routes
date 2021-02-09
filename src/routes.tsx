import { Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'

function Routes() {
  return(
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/contato" exact component={Contact} />
    </Switch>
  )
}

export default Routes