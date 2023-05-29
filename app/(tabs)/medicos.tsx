import React, { useEffect, useState } from 'react';
import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, useTheme } from 'react-native-paper';
import DatabaseService from '../../services/DatabaseService';


export default function MedicosScreen() {
  let db = DatabaseService.getInstance();
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [medicos, setMedicos] = useState(db.medicos);
  const [medicoName, setMedicoName] = useState('');
  const [medicoSpecialty, setMedicoSpecialty] = useState('');
  const [medicoContact, setMedicoContact] = useState('');;
  const theme = useTheme();

  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });
  
  

  const handleAddButtonPress = () => {
    if (medicoName && medicoSpecialty && medicoContact) {
      const medico= {
        id: medicos.length + 1,
        nome: medicoName,
        especialidade: medicoSpecialty,
        contacto: medicoContact,
      }
      db.addMedico(medico);
      setMedicos(db.medicos);
      console.log(medicos);
      setMedicoName('');
      setMedicoSpecialty('');
      setMedicoContact('');
      setDropdownOpen(false);
      setModalVisible(false);
      
    }
  };

  const handleRemoveButtonPress = (index) => {
    const newMedicos = [...medicos];
    newMedicos.splice(index, 1);
    setMedicos(newMedicos);
    db.medicos = newMedicos;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Médicos</Text>
      {/* Este vai ser o container do nome do dispositivo e do botao remover */}
      <View >
        {medicos.map((medico, index) => (
          <View key={medico.id}>
            <View>
              <Text >Nome: {medico.nome}</Text>
              <Text >Especialidade: {medico.especialidade}</Text>
              <Text >Contacto: {medico.contacto}</Text>
            </View>
              <View>
                <Text style={styles.remover} onPress={() => handleRemoveButtonPress(index)}>Remover</Text>
              </View>
          </View>

        ))}
      </View>


      <TouchableOpacity style={styles.floatingButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.floatingButtonText}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType='fade'
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>

            <Button style={{width:10, alignSelf:"flex-end"}} onPress={() => setModalVisible(false)} mode='contained'>X</Button>
            <Text style={{...styles.titleModal}}>Adicionar médico</Text>

              <Text  style={{...styles.label}}>Nome: </Text>
              <TextInput style={styles.inputs} value={medicoName} onChangeText={setMedicoName} />

            <Text style={styles.label} >Contacto: </Text>
              <TextInput  style={styles.inputs} value={medicoContact} onChangeText={setMedicoContact} />

            <Text style={styles.label} >Especialidade: </Text>
              <TextInput style={styles.inputs} value={medicoSpecialty} onChangeText={setMedicoSpecialty} />

              <Button style={{width:"60%", alignSelf:"center", margin:20}} onPress={() => {
                handleAddButtonPress();
                }} mode='contained'>Adicionar</Button>

        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 10,
    },
    titleModal: {
      fontSize: 30,
      fontWeight: 'bold',
      color: 'black',
      marginTop: 10,
      textAlign: 'center',
    },
    inputs: {
      borderStyle: 'solid',
      fontSize: 18,
      backgroundColor: 'gray',
      width: '100%',
      minWidth: 200,
      padding: 5,
      margin : 2,
      borderRadius: 10,
    },
    floatingButton: {
      position: 'absolute',
      bottom: 20,
      right: 20,
      width: 50,
      height: 50,
      backgroundColor: '#2196F3',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
    floatingButtonText: {
      color: '#fff',
      fontSize: 25,
    },
    modalBackground: {
      maxWidth: '80%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: "auto",
      backgroundColor: "white",
      padding: 10,
      alignSelf: 'center',
    },
    modalContent: {
      marginTop: 50,
      marginBottom: 50,
      alignItems: 'flex-start',
      backgroundColor: '#fff',
      padding: 20,
      elevation: 1,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: 'black',
    },
    addButton: {
      backgroundColor: '#2196F3',
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginTop: 20,
      alignSelf: 'flex-end',
    },

    closeButton: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 40,
      height: 40,
      borderRadius: 35,
      backgroundColor: 'gray',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeButtonText: {
      color: 'white',
      fontSize: 25,
      marginTop: '10%',
      fontWeight: 'bold',
    },
    remover: {
      backgroundColor: 'red',
      borderRadius: 35,
      color: 'white',
      width: 90,
      textAlign: 'center',
      lineHeight: 40,
    },
    addButtonLabel: {
      color: '#fff',
      fontWeight: 'bold'
    },
    label: {
      fontSize: 18,
    },
  });