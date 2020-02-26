import React from 'react';
import {BrowserRouter,Switch, Route} from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';
import Blog from '../pages/Blog';


function App (){
  return(
    <BrowserRouter>
      <Layout>
        <Switch> 
          <Route exact path='/' component={Home} />
          <Route exact path='/blog' component={Blog} />
        </Switch>
      </Layout>
    </BrowserRouter>
  )
}

export default App;