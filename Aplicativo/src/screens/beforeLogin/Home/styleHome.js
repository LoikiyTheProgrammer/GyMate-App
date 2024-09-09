import { StyleSheet } from 'react-native'
import { width, height} from '../../../constants/dimensions'

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
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  headerBox: {
    width: '80%',
    height: 200,
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
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

  welcome: {
    width: '80%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#fff',
  },

  nav: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButtonSignIn: {
    width: '80%',
    height: 60,
    margin: '1%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  navButtonSignInText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1179e2',
  },

  navButtonSignUp: {
    width: '80%',
    height: 60,
    margin: '1%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  navButtonSignUpText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#1179e2',
  },
});

export default styles;