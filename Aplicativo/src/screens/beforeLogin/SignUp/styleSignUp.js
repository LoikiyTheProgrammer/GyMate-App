import { StyleSheet } from 'react-native';
import { width, height} from '../../../constants/dimensions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
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
    color: '#fff',
  },

  headerSubText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
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
    borderColor: '#fff',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#1179e2',
  },

  buttonSignUp: {
    width: '80%',
    height: 60,
    margin: '1%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  buttonSignUpText: {
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
    backgroundColor: '#fff',
  },

  buttonBackText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1179e2',
  },

  nav: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navText: {
    fontSize: 25,
    color: '#fff',
  },

  navButtonSignIn: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButtonSignInText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  
  footer: {
    width: '100%',
    height: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default styles;