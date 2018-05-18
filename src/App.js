import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: null }

  componentWillMount() {
    firebase.initializeApp({
      // it's a secret to everybody
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );

      case false:
        return <LoginForm />;

      default:
      return (
        <View style={{ marginTop: 10 }}>
          <Spinner size='large' />
        </View>
      );

    }
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
