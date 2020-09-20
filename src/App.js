import React from 'react';
import './App.css';
import Homepage from './component/Pages/Homepage/Homepage';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './component/Pages/Shoppage/ShopPage';
import Header from './component/HeaderComponent/Header';
import LoginRegisteration from './component/SigninSignup/LoginRegisteration';
import {auth,createUserProfileDocument} from './component/firebase/firebase.utils' 


class App extends React.Component{
  state={
    currentUser: null
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });

          console.log(this.state);
        });
      }

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){

    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Shoppage" component={ShopPage}/>
        <Route exact path="/signinsignup" component={LoginRegisteration}/>
        </Switch>
      </div>
    );
  }
}

export default App;
