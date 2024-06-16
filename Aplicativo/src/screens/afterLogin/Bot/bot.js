import React, { useContext } from 'react';
import { SafeAreaView, ScrollView, View, Text, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../constants/afterLogin/styleBot';
import { RoutineContext } from '../../../context/routineContext';

export default function AI() {
    const navigation = useNavigation();
    const { addRoutine } = useContext(RoutineContext);

    const handleAddRoutine = (type, exercise) => {
        addRoutine({ type, exercise });
    };

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
                <View style={styles.welcome}>
                    <Image style={styles.botImage} source={require('../../../assets/AI-White-Icon.png')}/>
                    <Text style={styles.botText}>Escolha o que você deseja exercitar:</Text>
                </View>
                
                <View style={styles.rotineListBox}>
                    <ScrollView style={styles.rotineList}>
                        <Text style={styles.rotineListTitle}>Treino de Braço:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>A</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'A')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>B</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'B')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>C</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Braço', 'C')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>
                        </ScrollView>

                        <Text style={styles.rotineListTitle}>Treino de Perna:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>A</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'A')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>B</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'B')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>C</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Perna', 'C')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>
                        </ScrollView>

                        <Text style={styles.rotineListTitle}>Treino de Peito:</Text>
                        <ScrollView style={styles.exerciseList}>
                            <Text style={styles.exerciseListTitle}>A</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Peito', 'A')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>B</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Peito', 'B')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>

                            <Text style={styles.exerciseListTitle}>C</Text>
                            <Pressable style={styles.buttonAdd} onPress={() => handleAddRoutine('Treino de Peito', 'C')}>
                                <Text style={styles.buttonAddText}>Adicionar</Text>
                            </Pressable>
                        </ScrollView>
                    </ScrollView>
                </View>
            </View>

            <View style={styles.footer}>
                <Pressable style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Chat-Icon.png')}/>
                </Pressable>

                <Pressable style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Initial-Screen')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Return-Icon.png')}/>
                </Pressable>

                <Pressable style={styles.footerButtonConfg}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/Profile-Icon.png')}/>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}