import { StyleSheet } from 'react-native';
import { width, height } from '../dimensions';

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

    nav: {
        width: '90%',
        height: '10%',
        marginBottom: '5%',
        paddingHorizontal: '5%',
        borderWidth: 4,
        borderRadius: 10,
        borderColor: '#1179e3',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    navText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1179e2',
    },

    navButtonBot: {
        width: 50,
        height: 50,
        borderWidth: 4,
        borderRadius: 25,
        borderColor: '#1179e2',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1179e2',
    },
    navButtonBotImage: {
        width: '80%',
        height: '80%',
        borderRadius: 10,
    },

    rotineListBox: {
        width: '90%',
        height: '80%',
        borderWidth: 4,
        borderRadius: 10,
        borderColor: '#1179e2',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      },
      rotineList: {
        width: '100%',
        height: '100%',
        paddingLeft: '10%',
        borderRadius: 10,
        backgroundColor: '#fff',
      },
      rotineListTitle: {
        width: '90%',
        marginBottom: '2%',
        borderBottomWidth: 4,
        borderColor: '#000',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
      },
    
      exerciseList: {
        width: '90%',
        height: 'auto',
        marginBottom: '5%',
        paddingLeft: '5%',
        borderWidth: 1,
        borderColor: '#000',
        backgroundColor: '#d9d9d9',
      },
      exerciseListTitle: {
        fontSize: 30,
        color: '#000',
      },
      exerciseListSubTitle: {
        fontSize: 20,
        color: '#000',
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