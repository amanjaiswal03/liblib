import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';



// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route {...rest} render={(props) => (
//       fakeAuth.isAuthenticated === true
//         ? <Component {...props} />
//         : <Redirect to='/login' />
//     )} />
//   )

  class PrivateRoute extends Component {
    
      render() { 
          return ( 
            <Route {...rest} render={(props) => (
                fakeAuth.isAuthenticated === true
                  ? <Component {...props} />
                  : <Redirect to='/login' />
              )} />
           );
      }
  }
   
  export default PrivateRoute;