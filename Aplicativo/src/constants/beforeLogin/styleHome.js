import { StyleSheet } from 'react-native'
import { width, height} from '../dimensions'

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
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerBox: {
    width: '80%',
    height: width*0.8,
    borderWidth: 4,
    borderRadius: 25,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 80,
    color: '#1179e2',
    textAlign: 'center',
  },
  headerSubText: {
    fontSize: 20,
    color: '#1179e2',
    textAlign: 'center',
  },

  welcome: {
    width: '100%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  welcomeText: {
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
  },

  nav: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navButtonSignIn: {
    width: '80%',
    height: '20%',
    margin: '1%',
    borderWidth: 4,
    borderRadius: 25,
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
    height: '20%',
    margin: '1%',
    borderWidth: 4,
    borderRadius: 25,
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

  navButtonCRUD: {
    width: 'auto',
    height: 'auto',
    margin: '1%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonCRUDText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;