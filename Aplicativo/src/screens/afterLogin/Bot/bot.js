import React, { useContext } from 'react';
import styles from '../../../constants/afterLogin/styleBot';
import { SafeAreaView, ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RoutineContext } from '../../../context/routineContext';

export default function AI() {
    const navigation = useNavigation();
    const { addRoutine } = useContext(RoutineContext);

    const handleAddRoutine = (type, exercise, subtitle) => {
        addRoutine({ type, exercise, subtitle });
    };

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
                <View style={styles.welcome}>
                    <Image style={styles.botImage} source={require('../../../assets/AI-Icon.png')} />
                    <Text style={styles.botText}>O que você deseja exercitar?</Text>
                </View>

                <View style={styles.rotineListBox}>
                    <ScrollView style={styles.rotineList}>
                        <Text style={styles.rotineListTitle}>Treino de Braço:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>Exemplo1</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 30</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'Exemplo1', 'Bi-set 30')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo2</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 30</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'Exemplo2', 'Bi-set 30')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo3</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 30</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'Exemplo3', 'Bi-set 30')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.rotineListTitle}>Treino de Perna:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>Exemplo1</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 10</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'Exemplo1', 'Bi-set 10')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo2</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 10</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'Exemplo2', 'Bi-set 10')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo3</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 10</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'Exemplo3', 'Bi-set 10')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </ScrollView>

                        <Text style={styles.rotineListTitle}>Treino de Abdômen:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>Exemplo1</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 20</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Abdômen', 'Exemplo1', 'Bi-set 20')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo2</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 20</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Abdômen', 'Exemplo2', 'Bi-set 20')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>

                            <Text style={styles.exerciseListTitle}>Exemplo3</Text>
                            <Text style={styles.exerciseListSubTitle}>Bi-set 20</Text>
                            <TouchableOpacity style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Abdômen', 'Exemplo3', 'Bi-set 20')}>
                                <Text style={styles.buttonAddText}>ADICIONAR</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Main')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Return-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}