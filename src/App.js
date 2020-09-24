import React from 'react';
import './App.css';
import Homepage from './component/Pages/Homepage/Homepage';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './component/Pages/Shoppage/ShopPage';
import Header from './component/HeaderComponent/Header';
import LoginRegisteration from './component/SigninSignup/LoginRegisteration';
import { auth, createUserProfileDocument } from './component/firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.action'

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })


          console.log(this.state);
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/Shoppage" component={ShopPage} />
          <Route exact path="/signinsignup" render={() => this.props.currentUser ? (<Redirect to="/" />) : <LoginRegisteration />} />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps, mapDispatchToProps)(App);
