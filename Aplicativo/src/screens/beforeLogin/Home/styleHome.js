import { StyleSheet } from 'react-native';
import { width, height} from '../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  BackgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  header: {
    width: '100%',
    height: '5%',
  },

  divLogo: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: '90%',
    height: '100%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  logoText: {
    fontSize: 80,
    fontFamily: 'Lexend Bold',
    color: '#1179e2',
    textAlign: 'center',
  },

  logoSubText: {
    fontSize: 20,
    fontFamily: 'Lexend Regular',
    color: '#1179e2',
    textAlign: 'center',
  },

  welcome: {
    width: '100%',
    height: '30%',
    alignContent: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    fontSize: 40,
    fontFamily: 'Lexend Regular',
    color: '#fff',
    textAlign: 'center',
  },

  nav: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButtonSignIn: {
    width: '90%',
    height: 60,
    margin: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  navButtonSignInText: {
    fontSize: 25,
    fontFamily: 'Lexend Bold',
    color: '#1179e2',
    textAlign: 'center',
  },

  navButtonSignUp: {
    width: '90%',
    height: 60,
    margin: 5,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  navButtonSignUpText: {
    fontSize: 25,
    fontFamily: 'Lexend Bold',
    color: '#1179e2',
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    height: '5%',
  },
});

export default styles;