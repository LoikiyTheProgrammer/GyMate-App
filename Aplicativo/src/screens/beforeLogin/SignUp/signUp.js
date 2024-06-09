import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../constants/beforeLogin/styleSignUp';
import { getAuth, createUserWithEmailAndPassword } from '@firebase/auth';
import { app } from '../../../components/confg';

export default function SignUp() {
  const navigation = useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    const auth = getAuth(app);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully!');
      navigation.navigate('GyMate Initial-Screen');
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GyMate</Text>
        <Text style={styles.subHeaderText}>coloque seus dados de acesso para criar sua conta</Text>
      </View>

      <View style={styles.signUp}>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder='Digite seu e-mail'
          keyboardType='email-address'
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder='Digite sua senha'
          secureTextEntry={true}
        />
        <Pressable style={styles.buttonCreateAccount} onPress={handleSignUp}>
          <Image style={styles.buttonBackgroundImage} source={require('../../../assets/Fundo-GyMate-90º.png')} />
          <Text style={styles.buttonCreateAccountText}>CRIAR CONTA</Text>
        </Pressable>
        <Pressable style={styles.buttonBack} onPress={() => navigation.navigate('GyMate')}>
          <Text style={styles.buttonBackText}>VOLTAR</Text>
        </Pressable>
      </View>

      <View style={styles.changeAccess}>
        <Text style={styles.changeAccessText}>Já possui uma conta?</Text>
        <Pressable style={styles.navButtonSignIn} onPress={() => navigation.navigate('GyMate Sign-in')}>
          <Text style={styles.buttonSignInText}>CLIQUE AQUI</Text>
        </Pressable>
      </View>

      <View style={styles.footer} />
    </SafeAreaView>
  );
}