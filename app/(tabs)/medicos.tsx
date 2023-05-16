import React, { useEffect, useState } from 'react';
import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, useTheme } from 'react-native-paper';


export default function MedicosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [medicos, setMedicos] = useState([]);
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
      setMedicos([...medicos, medicos]);
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
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Médicos</Text>
      {/* Este vai ser o container do nome do dispositivo e do botao remover */}
      <View >
        {medicos.map((medico, index) => (
          <View style={styles.medicoContainer} key={medico.id}>
            <Text style={styles.medicoName}>{medico.nome}</Text>
            <Text style={styles.medicoSpecialty}>{medico.especialidade}</Text>
            <Text style={styles.medicoType}>{medico.tipo}</Text>
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
        <TouchableOpacity
          style={styles.modalBackground}
          activeOpacity={1}
          onPress={() => setDropdownOpen(false)}
        >
          <View style={styles.modalContent}>
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>Adicionar médico</Text>

            <View style={styles.container}>
              <Text style={styles.label}>Nome: </Text>
              <TextInput style={styles.subTitle} value={medicoName} onChangeText={setMedicoName} />
            </View>

            <View style={styles.container}>
            <Text style={styles.label}>Contacto: </Text>
              <TextInput style={styles.subTitle} value={medicoContact} onChangeText={setMedicoContact} />
            </View>

            <View style={styles.container}>
            <Text style={styles.label}>Especialidade: </Text>
              <TextInput style={styles.subTitle} value={medicoSpecialty} onChangeText={setMedicoSpecialty} />
            </View>

            <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
              <Text style={styles.addButtonLabel}>Adicionar</Text>
            </TouchableOpacity>

          </View>
        </TouchableOpacity>
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
      color: 'white',
      marginTop: 10,
    },
    subTitle: {
      borderStyle: 'solid',
      fontSize: 18,
      marginBottom: 1,
      backgroundColor: 'gray',
      width: '100%',
      padding: 5,
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
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      alignItems: 'center',
      justifyContent: 'center',
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
      marginBottom: 5,
      alignSelf: 'flex-start',
    },
  });