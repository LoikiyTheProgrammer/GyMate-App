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
    width: '90%',
    height: '10%',
    marginTop: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },

  headerTitle: {
    fontSize: 40,
    fontWeight: 'light',
    color: '#fff',
    textAlign: 'center',
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
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  welcome: {
    width: '90%',
    height: '10%',
    alignItems: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
  },

  botImage: {
    width: 25,
    height: 25,
  },

  botText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  divRotine: {
    width: '90%',
    height: '60%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  divGemini: {
    width: '90%',
    height: '20%',
    alignItems: 'flex-end',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'row',
  },

  GeminiInput: {
    width: '80%',
    height: 60,
    paddingLeft: '5%',
    borderWidth: 2,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderColor: '#1179e2',
    fontSize: 20,
    color: '#1179e2',
    backgroundColor: '#fff',
  },

  GeminiButton: {
    width: '20%',
    height: 60,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1179e2',
  },

  GeminiButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },

  footer: {
    width: '100%',
    height: '5%',
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#1179e2',
  },

  footerButtonChat: {
      width: 50,
      height: '90%',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
  },

  footerButtonHome: {
      width: 50,
      height: '90%',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
  },

  footerButtonConfg: {
      width: 50,
      height: '90%',
      borderRadius: 25,
      alignItems: 'center',
      justifyContent: 'center',
  },

  footerButtonsImage: {
      width: '100%',
      height: '100%',
      borderRadius: 25,
  },
});

export default styles;