import React from 'react';
import styles from '../../constants/styleSignUp';
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react/cjs/react.development';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../components/confg';

export default function SignUp() {
  const navigation = useNavigation();

  const [nomeCreate, setNomeCreate] = useState('');
  const [emailCreate, setEmailCreate] = useState('');
  const [senhaCreate, setSenhaCreate] = useState('');

  // create
  function crudCreate() {
    if (nomeCreate && emailCreate && senhaCreate) {
      addDoc(collection(db, 'Usuarios'), {
        Nome_usu: nomeCreate,
        Email_usu: emailCreate,
        Senha_usu: senhaCreate,
      }).then(() => {
        console.log('Dados enviados!');
      }).catch((error) => {
        console.log(error);
      });
    } else {
      console.log('Por favor, preencha todos os campos.');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>GyMate</Text>
        <Text style={styles.subHeaderText}>coloque seus dados de acesso para criar sua conta</Text>
      </View>

      <View style={styles.signUp}>
        <TextInput style={styles.input} value={nomeCreate} onChangeText={(nomeCreate) => {setNomeCreate(nomeCreate)}} placeholder='Digite seu nome de usuário'/>
        <br></br>
        <TextInput style={styles.input} value={emailCreate} onChangeText={(emailCreate) => {setEmailCreate(emailCreate)}} placeholder='Digite seu e-mail' keyboardType='email-address'/>
        <br></br>
        <TextInput style={styles.input} value={senhaCreate} onChangeText={(senhaCreate) => {setSenhaCreate(senhaCreate)}} placeholder='Digite sua senha' secureTextEntry={true}/>
        <br></br>
        <Pressable style={styles.buttonCreateAccount}>
          <Image style={styles.buttonBackgroundImage} source={require('../../assets/Fundo-GyMate-90º.png')}/>
          <Text style={styles.buttonCreateAccountText} onClick={crudCreate}>CRIAR CONTA</Text>
        </Pressable>
        <br></br>
        <Pressable style={styles.buttonBack} onPress={ () => navigation.navigate('GyMate')}>
          <Text style={styles.buttonBackText}>VOLTAR</Text>
        </Pressable>
      </View>

      <View style={styles.changeAccess}>
        <Text style={styles.changeAccessText}>Já possui uma conta?</Text>
        <Pressable style={styles.navButtonSignIn} onPress={ () => navigation.navigate('GyMate Sign-in')}>
          <Text style={styles.buttonSignInText}>CLIQUE AQUI</Text>
        </Pressable>
      </View>

      <View style={styles.footer}/>
    </SafeAreaView>
  );
}