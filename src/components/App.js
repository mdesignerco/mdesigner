import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Category from '../pages/Category';
import Blog from '../pages/Blog';
import Article from '../pages/Article';

class App extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <BrowserRouter>
        <Layout>
          <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/category' component={Category} />
            <Route exact path='/blog' component={Blog} />
            <Route exact path='/:post_name' component={Article} />
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  } 
}

export default App;