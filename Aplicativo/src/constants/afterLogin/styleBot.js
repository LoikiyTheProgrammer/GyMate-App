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
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  notificationImage: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
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
    marginBottom: '1%',
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
    color: '#fff',
  },

  rotineListBox: {
    width: '90%',
    height: '80%',
    marginTop: '1%',
    borderWidth: 2,
    borderRadius: 25,
    borderColor: '#1179e2',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  rotineList: {
    width: '100%',
    height: '100%',
    borderRadius: 25,
    backgroundColor: '#fff',
  },
  rotineListTitle: {
    fontSize: 40,
    color: '#000',
  },

  exerciseList: {
    width: '90%',
    height: '100%',
    paddingLeft: '5%',
    backgroundColor: '#d9d9d9',
  },
  exerciseListTitle: {
    fontSize: 30,
    color: '#000',
  },

  buttonAdd: {
    width: '40%',
    height: '20%',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
  },
  buttonAddText: {
    fontSize: 20,
    color: '#fff',
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
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonHome: {
    width: 50,
    height: '100%',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonConfg: {
    width: 50,
    height: '100%',
    borderRadius: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerButtonsImage: {
    width: '100%',
    height: '100%',
    borderRadius: '100%',
  }
});

export default styles;