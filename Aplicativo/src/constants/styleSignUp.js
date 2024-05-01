import { StyleSheet } from 'react-native'
import { width, height} from './dimensions'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  header: {
    width: '100%',
    height: '30%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 80,
    textAlign: 'center',
  },
  subHeaderText: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
  },
  signUp: {
    width: '100%',
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    height: '15%',
    borderRadius: 25,
    borderWidth: 2,
    borderBlockColor: '#000',
    color: '#162b9e',
    fontSize: '125%',
    fontWeight: 'bold',
    paddingLeft: '2%',
    backgroundColor: '#fff',
  },
  button1: {
    width: '80%',
    height: '15%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  button2: {
    width: '40%',
    height: '15%',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#162b9e',
  },
  buttonBackgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  changeAccess: {
    width: '100%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  accessText: {
    color: '#fff',
    fontSize: 25,
  },
  navButton: {
    width: 'auto',
    height: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footer: {
    width: '100%',
    height: '5%',
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
});

export default styles;