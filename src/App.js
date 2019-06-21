import React,{Component,Fragment} from 'react';
import Mymodule from './components/myModule'
import Home from './pages/homePage';
import Shop from './pages/shoppingPage';
import My from './pages/myPage';
import './styles/App.css';
import {HashRouter as Router,Link,Route,Switch} from 'react-router-dom';
class App extends Component{
  render(){
    return (
      <Fragment>
        <Router>
        <Route exact path='/' render={(props)=><Mymodule {...props}><Home/></Mymodule>}></Route>
        <Route exact path='/shop' render={(props)=><Mymodule {...props}><Shop/></Mymodule>}></Route>
        <Route exact path='/my' render={(props)=><Mymodule {...props}><My/></Mymodule>}></Route>
        </Router>
      </Fragment>
    )
  }
}
export default App;
