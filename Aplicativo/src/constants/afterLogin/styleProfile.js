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

    logoutBox: {
        width: '90%',
        height: width*0.9,
        padding: '5%',
        borderWidth: 4,
        borderRadius: 25,
        borderColor: '#1179e2',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    profileImage: {
        width: '60%',
        height: '60%',
    },
    emailText: {
        width: '80%',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
    },

    buttonLogout: {
        width: '90%',
        height: '20%',
        marginBottom: '1%',
        borderWidth: 4,
        borderRadius: 25,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
      },
      buttonLogoutText: {
        fontSize: 20,
        fontWeight: 'bold',
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
        height: '100%',
        borderRadius: 25,
    }
});

export default styles;