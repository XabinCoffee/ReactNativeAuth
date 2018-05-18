import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

  state = { email: '', password: '', error: '', loading: false };

  onButtonPress() {
    const { email, password } = this.state;

    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
        });
  }

  onLoginFail() {
    this.setState({ error: 'Error ocurred', loading: false });
  }

  onLoginSuccess() {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: ''
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;
    }
    return (<Button onPress={this.onButtonPress.bind(this)}>Log in</Button>);
  }

  render() {
    return (
        <Card>
          <CardSection>
            <Input
              label='Email'
              value={this.state.email}
              onChangeText={text => this.setState({ email: text })}
              // {email => this.setState({ email })}
              placeholder={'username@gmail.com'}
            />
          </CardSection>

          <CardSection>
            <Input
              secureTextEntry
              label='Password'
              value={this.state.password}
              onChangeText={text => this.setState({ password: text })}
              placeholder={'password'}
            />
          </CardSection>

          <Text style={styles.errorTextStyle}>
            {this.state.error}
          </Text>

          <CardSection>
            {this.renderButton()}
          </CardSection>
        </Card>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};


export default LoginForm;
