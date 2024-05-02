import React, { useState, useEffect } from 'react';
import styles from '../../../constants/beforeLogin/styleCRUD';
import { SafeAreaView, View, Text, TextInput, Pressable, FlatList } from 'react-native';
import { collection, doc, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { firebaseBD } from '../../../components/confg';

export default function SignUp() {
  const [usuarios, setUsuarios] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);
  const [nomeEdit, setNomeEdit] = useState('');
  const [emailEdit, setEmailEdit] = useState('');
  const [senhaEdit, setSenhaEdit] = useState('');

  useEffect(() => {
    fetchUsuarios();
  }, []);

  const fetchUsuarios = async () => {
    const usuariosSnapshot = await getDocs(collection(firebaseBD, 'Usuarios'));
    const usuariosData = usuariosSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setUsuarios(usuariosData);
  };

  const handleUpdate = async (userId) => {
    setEditingUserId(userId);
    const userToUpdate = usuarios.find(user => user.id === userId);
    setNomeEdit(userToUpdate.Nome_usu);
    setEmailEdit(userToUpdate.Email_usu);
    setSenhaEdit(userToUpdate.Senha_usu);
  };

  const handleSaveUpdate = async () => {
    await updateDoc(doc(firebaseBD, 'Usuarios', editingUserId), {
      Nome_usu: nomeEdit,
      Email_usu: emailEdit,
      Senha_usu: senhaEdit,
    });
    setEditingUserId(null);
    setNomeEdit('');
    setEmailEdit('');
    setSenhaEdit('');
    fetchUsuarios();
  };

  const handleDelete = async (userId) => {
    await deleteDoc(doc(firebaseBD, 'Usuarios', userId));
    fetchUsuarios();
  };

  const renderItem = ({ item }) => (
    <View style={styles.userContainer}>
      {editingUserId === item.id ? (
        <View style={styles.editContainer}>
          <TextInput
            style={styles.input}
            value={nomeEdit}
            onChangeText={setNomeEdit}
            placeholder='Nome'
          />
          <TextInput
            style={styles.input}
            value={emailEdit}
            onChangeText={setEmailEdit}
            placeholder='Email'
            keyboardType='email-address'
          />
          <TextInput
            style={styles.input}
            value={senhaEdit}
            onChangeText={setSenhaEdit}
            placeholder='Senha'
            secureTextEntry={true}
          />
          <Pressable style={styles.button} onPress={handleSaveUpdate}>
            <Text style={styles.buttonText}>Salvar</Text>
          </Pressable>
        </View>
      ) : (
        <View style={styles.userInfoContainer}>
          <Text style={styles.label}>Nome: {item.Nome_usu}</Text>
          <Text style={styles.label}>Email: {item.Email_usu}</Text>
          <Text style={styles.label}>Senha: {item.Senha_usu}</Text>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={() => handleUpdate(item.id)}>
              <Text style={styles.buttonText}>Editar</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={() => handleDelete(item.id)}>
              <Text style={styles.buttonText}>Excluir</Text>
            </Pressable>
          </View>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.label}>Lista de Usuários</Text>
      <View style={styles.separator}></View>
      <FlatList
        data={usuarios}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}