import React, { useState } from 'react';
import styles from './styleBot';
import { SafeAreaView, View, ScrollView, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { run } from '../../../components/gemini';
import { useNavigation } from '@react-navigation/native';

export default function Bot() {
    const navigation = useNavigation();

    const [answer, setAnswer] = useState('')
    const [question, setQuestion] = useState('')
    const [responseText, setResponseText] = useState('')

    const handleSend = async () => {
        try {
            const result = await run(question)
            setResponseText(result)
        } catch (error) {
            console.error('Error fetching response:', error)
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.BackgroundImage} source={require('../../../assets/imgs/Fundo-GyMate.png')} />

            <View style={styles.header}>
                <Text style={styles.headerTitle}>GyMate</Text>
                <TouchableOpacity style={styles.buttonNotification}>
                    <Image style={styles.buttonNotificationImage} source={require('../../../assets/imgs/Bell-Icon.png')} />
                </TouchableOpacity>
            </View>

            <View style={styles.main}>
                <View style={styles.welcome}>
                    <Image style={styles.botImage} source={require('../../../assets/imgs/AI-Icon.png')} />
                    <Text style={styles.botText}>O que você deseja exercitar?</Text>
                    <Image style={styles.botImage} source={require('../../../assets/imgs/AI-Icon.png')} />
                </View>

                <View style={styles.divRotine}>
                    <ScrollView>
                        <Text style={styles.rotineText}>{responseText}</Text>
                    </ScrollView>
                </View>

                <View style={styles.divGemini}>
                    <TextInput
                        style={styles.geminiInput}
                        value={question}
                        onChangeText={setQuestion}
                        placeholder='Digite aqui'
                        placeholderTextColor={'#1179e2'}
                    />

                    <TouchableOpacity style={styles.geminiButton} onPress={handleSend}>
                        <Image style={styles.geminiButtonImage} source={require('../../../assets/imgs/AI-Icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerButtonChat}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Chat-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonHome} onPress={() => navigation.navigate('GyMate Main')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Home-Icon.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.footerButtonConfg} onPress={() => navigation.navigate('GyMate Profile')}>
                    <Image style={styles.footerButtonsImage} source={require('../../../assets/imgs/Profile-Icon.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}