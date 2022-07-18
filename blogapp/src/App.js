import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './Style/app.scss';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import SingleArticle from './Components/SingleArticle';
import Notfound from './Components/Notfound';
import UserContext from './Components/UserContext';

class App extends Component {
  state = {
    isLoggedin: false,
    user: {
      username: null,
      email: null,
    },
    token: null,
    isVerifying: true,
  };

  persistUser = (user) => {
    // (user.token
    //   ? this.setState({
    //       isLoggedin: true,
    //       user: {
    //         username: user.username,
    //         email: user.email,
    //       },
    //     })
    //   : null)
    if (user.token) {
      this.setState({
        isLoggedin: true,
        user: {
          username: user.username,
          email: user.email,
        },
      });
    } else {
      return null;
    }
  };

  render() {
    let { isLoggedin, user, token, isVerifying } = this.state;
    return (
      <>
        {isLoggedin ? (
          <UserContext.Provider value={{ user: user, isLoggedin: isLoggedin }}>
            <AuthorisedUser user={user} isLoggedin={isLoggedin} />
          </UserContext.Provider>
        ) : (
          <UserContext.Provider
            value={{
              user: user,
              isLoggedin: isLoggedin,
              persistUser: this.persistUser,
            }}
          >
            <UnAuthorisedUser
              user={user}
              isLoggedin={isLoggedin}
              persistUser={this.persistUser}
            />
          </UserContext.Provider>
        )}
      </>
    );
  }
}

function UnAuthorisedUser(props) {
  // console.log('insidew');
  return (
    <>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/articles/:slug" element={<SingleArticle />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

function AuthorisedUser(props) {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/articles/:slug" element={<SingleArticle />}></Route>
        <Route path="*" element={<Notfound />}></Route>
      </Routes>
    </>
  );
}

export default App;
