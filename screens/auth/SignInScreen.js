import React from 'react';
import { StyleSheet, Button, View } from 'react-native';
import PropTypes from 'prop-types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';

import ActivityIndicatorComponent from '../../components/shared/ActivityIndicatorComponent';
import { login, facebookLogin, googleLogin } from '../../store/actions/UserActions';
import { SignInForm } from '../../components/auth/SignInForm';

class SignInScreen extends React.Component {
  static navigationOptions = {
    title: 'Please sign in'
  };

  static propTypes = {
    navigation: PropTypes.object,
    login: PropTypes.func,
    facebookLogin: PropTypes.func,
    googleLogin: PropTypes.func,
    signInError: PropTypes.bool
  };

  state = {
    email: '',
    password: '',
    loader: false
  };

  onSubmit = signInData => {
    this.props.login(signInData);
  };

  goToSignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  goToForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  render() {
    const { signInError, facebookLogin, googleLogin } = this.props;

    return (
      <View style={styles.container}>
        <KeyboardAwareScrollView enableOnAndroid>
          <SignInForm onSubmit={this.onSubmit} signInError={signInError} />

          <Button title="Sign in with Facebook!" onPress={facebookLogin} />
          <Button title="Sign in with Google!" onPress={googleLogin} />
          <Button title="Sign up!" onPress={this.goToSignUp} />
          <Button title="Forgot password" onPress={this.goToForgotPassword} />
        </KeyboardAwareScrollView>
        {this.state.loader && <ActivityIndicatorComponent animating={this.state.loader} />}
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    signInError: state.errors.signInError
  };
};

const mapDispatchToProps = {
  login,
  facebookLogin,
  googleLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
