import { StyleSheet } from 'react-native';
import { width, height} from '../dimensions';

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
    color: '#162b9e',
    fontSize: 80,
    textAlign: 'center',
  },
  subHeaderText: {
    color: '#162b9e',
    fontSize: 20,
    textAlign: 'center',
  },

  signIn: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: '15%',
    margin: '1%',
    borderRadius: 25,
    borderWidth: 2,
    borderBlockColor: '#000',
    color: '#162b9e',
    fontSize: 20,
    fontWeight: 'bold',
    paddingLeft: '2%',
    backgroundColor: '#fff',
  },

  forgotButton: {
    width: '80%',
    height: 'auto',
    margin: '1%',
  },
  forgotButtonText: {
    color: '#162b9e',
    fontSize: 20,
  },

  buttonSignIn: {
    width: '80%',
    height: '15%',
    margin: '1%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#162b9e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  buttonSignInText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },

  buttonBack: {
    width: '40%',
    height: '15%',
    margin: '1%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#162b9e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  buttonBackText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  buttonBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },

  changeAccess: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  changeAccessText: {
    color: '#162b9e',
    fontSize: 25,
  },

  navButtonSignUp: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonSignUpText: {
    color: '#162b9e',
    fontSize: 25,
    fontWeight: 'bold',
  },
  
  footer: {
    width: '100%',
    height: '5%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
});

export default styles;