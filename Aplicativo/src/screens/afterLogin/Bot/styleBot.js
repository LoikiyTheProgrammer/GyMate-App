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
    width: '100%',
    height: '90%',
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
  },

  GeminiAnswer: {
    width: '90%',
    height: '10%',
    marginVertical: '5%',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: '#1179e2',
    backgroundColor: '#fff',
  },

  GeminiBox: {
    width: '90%',
    height: 'auto',
    marginVertical: '5%',
    justifyContent: 'center',
    justifyContent: 'space-between',
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