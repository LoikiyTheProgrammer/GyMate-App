import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../constants/afterLogin/styleInitialScreen';
import { RoutineContext } from '../../../context/routineContext';

export default function InitialScreen() {
    const navigation = useNavigation();
    const { routines } = useContext(RoutineContext);

    const groupedRoutines = routines.reduce((acc, routine) => {
        if (!acc[routine.type]) {
            acc[routine.type] = [];
        }
        acc[routine.type].push(routine.exercise);
        return acc;
    }, {});

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/Fundo-GyMate.png')}/>

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <Pressable style={styles.buttonNotification}>
                    <Image style={styles.notificationImage} source={require('../../../assets/Bell-Icon.png')}/>
                </Pressable>
            </View>

            <View style={styles.main}>
                <View style={styles.nav}>
                    <Text style={styles.navText}>Faça sua nova rotina agora:</Text>
                    <Pressable style={styles.navButtonBot} onPress={() => navigation.navigate('GyMate AI-Bot')}>
                        <Image style={styles.navButtonBotImage} source={require('../../../assets/AI-Icon.png')}/>
                    </Pressable>
                </View>
                
                <View style={styles.rotineListBox}>
                    <ScrollView style={styles.rotineList}>
                        {Object.keys(groupedRoutines).map((type, index) => (
                            <View key={index}>
                                <Text style={styles.rotineListTitle}>{type}:</Text>
                                <ScrollView style={styles.exerciseList}>
                                    {groupedRoutines[type].map((exercise, idx) => (
                                        <Text key={idx} style={styles.exerciseListTitle}>{exercise}</Text>
                                    ))}
                                </ScrollView>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <Pressable style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')}/>
                </Pressable>

                <Pressable style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Home-Icon.png')}/>
                </Pressable>

                <Pressable style={styles.footerButtonConfg}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')}/>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}