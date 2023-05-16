import React, { useEffect, useState } from 'react';
import { Link, Stack, useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, useTheme } from 'react-native-paper';


export default function ConsultasScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [consultas, setConsultas] = useState([]);
  const [consultaData, setConsultaData] = useState('');
  const [consultaHospital, setConsultaHospital] = useState('');
  const [consultaSpecialty, setConsultaSpecialty] = useState('');
  const [consultaMedico, setConsultaMedico] = useState('');;
  const theme = useTheme();
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });
  
  

  const handleAddButtonPress = () => {
    if (consultaData && consultaHospital && consultaSpecialty && consultaMedico) {
      const consulta= {
        id: consultas.length + 1,
        data: consultaData,
        especialidade: consultaSpecialty,
        hospital: consultaHospital,
        medico: consultaMedico,
      }
      setConsultas([...consultas, consultas]);
      setConsultaData('');
      setConsultaHospital('');
      setConsultaSpecialty('');
      setConsultaMedico('');
      setDropdownOpen(false);
      setModalVisible(false);
      
    }
  };

  const handleRemoveButtonPress = (index) => {
    const newConsultas = [...consultas];
    newConsultas.splice(index, 1);
    setConsultas(newConsultas);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>
      {/* Este vai ser o container do nome do dispositivo e do botao remover */}
      <View >
        {consultas.map((consulta, index) => (
          <View style={styles.medicoContainer} key={consulta.id}>
            <Text style={styles.medicoName}>{consulta.nome}</Text>
            <Text style={styles.medicoSpecialty}>{consulta.especialidade}</Text>
            <Text style={styles.medicoType}>{consulta.tipo}</Text>
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
            <Text style={styles.modalTitle}>Adicionar consulta</Text>

            <View style={styles.container}>
              <Text style={styles.label}>Data: </Text>
              <TextInput style={styles.subTitle} value={consultaData} onChangeText={setConsultaData} />
            </View>

            <View style={styles.container}>
            <Text style={styles.label}>Médico: </Text>
              <TextInput style={styles.subTitle} value={consultaMedico} onChangeText={setConsultaMedico} />
            </View>

            <View style={styles.container}>
            <Text style={styles.label}>Especialidade: </Text>
              <TextInput style={styles.subTitle} value={consultaSpecialty} onChangeText={setConsultaSpecialty} />
            </View>

            <View style={styles.container}>
            <Text style={styles.label}>Hospital: </Text>
              <TextInput style={styles.subTitle} value={consultaHospital} onChangeText={setConsultaHospital} />
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