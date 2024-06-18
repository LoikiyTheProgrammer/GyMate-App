import React, { useContext } from 'react';
import styles from '../../../constants/afterLogin/styleMain';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoutineContext } from '../../../context/routineContext';

export default function Main() {
    const navigation = useNavigation();
    const { routines } = useContext(RoutineContext);

    const groupedRoutines = routines.reduce((acc, routine) => {
        if (!acc[routine.type]) {
            acc[routine.type] = [];
        }
        acc[routine.type].push({ exercise: routine.exercise, subtitle: routine.subtitle });
        return acc;
    }, {});

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/Fundo-GyMate.png')} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <Image style={styles.notificationImage} source={require('../../../assets/Bell-Icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.nav}>
                    <Text style={styles.navText}>Faça sua nova rotina agora:</Text>
                    <TouchableOpacity style={styles.navButtonBot} onPress={() => navigation.navigate('GyMate AI-Bot')}>
                        <Image style={styles.navButtonBotImage} source={require('../../../assets/AI-Icon.png')} />
                    </TouchableOpacity>
                </View>

                <View style={styles.rotineListBox}>
                    <ScrollView style={styles.rotineList}>
                        {Object.keys(groupedRoutines).map((type, index) => (
                            <View key={index}>
                                <Text style={styles.rotineListTitle}>{type}</Text>
                                {groupedRoutines[type].map((routine, subIndex) => (
                                    <View key={subIndex} style={styles.exerciseList}>
                                        <Text style={styles.exerciseListTitle}>{routine.exercise}</Text>
                                        <Text style={styles.exerciseListSubTitle}>{routine.subtitle}</Text>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Home-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}