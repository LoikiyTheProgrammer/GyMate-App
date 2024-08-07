import { StyleSheet } from 'react-native';
import { width, height} from '../dimensions';

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
    height: '10%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: 40,
    color: '#fff',
  },

  buttonNotification: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationImage: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
  },

  main: {
    width: '100%',
    height: '85%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    width: '90%',
    height: '10%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },
  botImage: {
    width: 50,
    height: 50,
  },
  botText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  rotineListBox: {
    width: '90%',
    height: '80%',
    paddingVertical: '5%',
    borderWidth: 4,
    borderRadius: 10,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  GeminiBox: {
    width: '80%',
    height: '20%',
    justifyContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',

  },

  GeminiInput: {
    width: '75%',
    height: '50%',
    paddingLeft: '5%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#1179e2',
    fontSize: 20,
    color: '#1179e2',
    backgroundColor: '#fff',
  },

  GeminiButton: {
    width: '20%',
    height: '50%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
  },
  GeminiButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },

  GeminiAnswer: {
    width: '80%',
    height: '10%',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#1179e2',
  },

  footer: {
    width: '100%',
    height: '5%',
    paddingHorizontal: '5%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1179e2',
  },

  footerButtonChat: {
    width: 50,
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonHome: {
    width: 50,
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonConfg: {
    width: 50,
    height: '100%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonsImage: {
    width: '100%',
    height: '90%',
    borderRadius: 25,
  }
});

export default styles;