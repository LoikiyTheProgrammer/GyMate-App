import { StyleSheet } from 'react-native';
import { width, height} from '../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  header: {
    width: '100%',
    height: '30%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerText: {
    fontSize: 80,
    textAlign: 'center',
    color: '#1179e2',
  },

  headerSubText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#1179e2',
  },

  main: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '80%',
    height: 60,
    margin: '1%',
    paddingLeft: '5%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    fontSize: 20,
    color: '#1179e2',
    backgroundColor: '#fff',
  },

  buttonForgot: {
    width: '80%',
    height: 'auto',
    margin: '1%',
  },

  buttonForgotText: {
    fontSize: 20,
    color: '#1179e2',
  },

  buttonSignIn: {
    width: '80%',
    height: 60,
    margin: '1%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
  },

  buttonSignInText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  buttonImage: {
    width: '100%',
    height: '100%',
    borderRadius: 18,
    position: 'absolute',
  },

  buttonBack: {
    width: '40%',
    height: 60,
    margin: '1%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
  },

  buttonBackText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },

  nav: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    fontSize: 25,
    color: '#1179e2',
  },

  navButtonSignUp: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButtonSignUpText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1179e2',
  },
  
  footer: {
    width: '100%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
  },
});

export default styles;