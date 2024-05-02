import { StyleSheet } from 'react-native'
import { width, height} from './dimensions'

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
    height: '80%',
    borderRadius: 25,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    borderBlockColor: '#000',
    backgroundColor: '#fff',
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
  welcome: {
    width: '100%',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  welcomeText: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  navScreens: {
    width: '100%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonLogin: {
    width: '80%',
    height: '20%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  navButtonLoginText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  navButtonSignUp: {
    width: '80%',
    height: '20%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#162b9e',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  navButtonSignUpText: {
    color: '#162b9e',
    fontSize: 25,
    fontWeight: 'bold',
  },
  navButtonCRUD: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navButtonCRUDText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default styles;