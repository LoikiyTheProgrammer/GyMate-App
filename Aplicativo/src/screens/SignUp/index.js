import React from 'react'
import styles from '../../constants/styleSignUp'
import { SafeAreaView, View, Text, TextInput, Pressable, Image } from 'react-native'
import { useState } from 'react/cjs/react.development'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../components/confg'
import { useNavigation } from '@react-navigation/native'

export default function SignUp() {
  const navigation = useNavigation()

  const [NomeC, setNomeC] = useState('');
  const [EmailC, setEmailC] = useState('');
  const [SenhaC, setSenhaC] = useState('');

  // create
  function crudCreate() {
    if (NomeC && EmailC && SenhaC) {
      addDoc(collection(db, 'Usuarios'), {
        Nome_usu: NomeC,
        Email_usu: EmailC,
        Senha_usu: SenhaC,
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
        <TextInput style={styles.input} value={NomeC} onChangeText={(NomeC) => {setNomeC(NomeC)}} placeholder='Digite seu nome de usuário'/>
        <br></br>
        <TextInput style={styles.input} value={EmailC} onChangeText={(EmailC) => {setEmailC(EmailC)}} placeholder='Digite seu e-mail' keyboardType='email-address'/>
        <br></br>
        <TextInput style={styles.input} value={SenhaC} onChangeText={(SenhaC) => {setSenhaC(SenhaC)}}placeholder='Digite sua senha' secureTextEntry={true}/>
        <br></br>
        <Pressable style={styles.button1}>
          <Image style={styles.buttonBackgroundImage} source={require('../../assets/Fundo-GyMate-90º.png')}/>
          <Text style={styles.buttonText} onClick={crudCreate}>CRIAR CONTA</Text>
        </Pressable>
        <br></br>
        <Pressable style={styles.button2}>
          <Text style={styles.buttonText} onPress={ () => navigation.navigate('GyMate')}>VOLTAR</Text>
        </Pressable>
      </View>

      <View style={styles.changeAccess}>
        <Text style={styles.accessText}>Já possui uma conta?</Text>
        <Pressable style={styles.navButton} onPress={ () => navigation.navigate('GyMate Sign-in')}>
          <Text style={styles.buttonText}>CLIQUE AQUI</Text>
        </Pressable>
      </View>

      <View style={styles.footer}/>
    </SafeAreaView>
  )
}