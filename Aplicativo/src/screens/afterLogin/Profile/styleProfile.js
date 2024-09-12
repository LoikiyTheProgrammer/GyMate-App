import { StyleSheet } from 'react-native';
import { width, height } from '../../../constants/dimensions';

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
        marginTop: height*0.05,
        alignItems: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'row',
    },

    headerTitle: {
        fontSize: 40,
        fontFamily: 'Lexend Bold',
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

    buttonNotificationImage: {
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

    divProfile: {
        width: '90%',
        height: '90%',
        paddingVertical: '5%',
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#1179e2',
        alignItems: 'center',
        justifyContent: 'center',
        justifyContent: 'space-between',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#fff',
    },

    profile: {
        width: '100%',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
    },

    profileImage: {
        width: 200,
        height: 200,
    },

    profileText: {
        fontSize: 20,
        fontFamily: 'Lexend Bold',
        color: '#000',
        textAlign: 'center',
    },

    buttonLogout: {
        width: '90%',
        height: 60,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
    },

    buttonLogoutText: {
        fontSize: 25,
        fontFamily: 'Lexend Bold',
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