import React, { useState } from 'react';
import { useNavigation } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView, TextInput } from 'react-native';
import { Button, useTheme } from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';
import DropDownPicker from "react-native-dropdown-picker";
import DatabaseService from '../../services/DatabaseService';


export default function ConsultasScreen() {
  let db = DatabaseService.getInstance();
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [consultas, setConsultas] = useState(db.consultas);
  const [consultaData, setConsultaData] = useState(new Date());
  const [consultaHospital, setConsultaHospital] = useState('');
  const [consultaSpecialty, setConsultaSpecialty] = useState('');
  const [consultaMedico, setConsultaMedico] = useState('');;
  const [show, setShow] = useState(false);
  const [mode, setMode] = useState('date');
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });
  
  
  const [showMultiSelectDropDown, setShowMultiSelectDropDown] = useState(false);


  const handleAddButtonPress = () => {
    if (consultaData && consultaHospital && consultaSpecialty && consultaMedico) {
      const consulta= {
        id: consultas.length + 1,
        data: consultaData,
        especialidade: consultaSpecialty,
        hospital: consultaHospital,
        medico: consultaMedico,
      }
      console.log(consultaData);
      db.addConsulta(consulta);
      setConsultas(db.consultas);
      setConsultaData(new Date());
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
    db.consultas = newConsultas;
  };
  const showMode = (currentMode) => {
    setShow(false);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
    setShow(true);
  };

  const showTimepicker = () => {
    showMode('time');
      setShow(true);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas</Text>
      {/* Este vai ser o container do nome do dispositivo e do botao remover */}
      <View >
        {consultas.map((consulta, index) => (
          <View  key={consulta.id}>
            <Text >Data: {(consulta.data as Date).toUTCString()}</Text>
            <Text >Especialidade: {consulta.especialidade}</Text>
            <Text >Hospital: {consulta.hospital}</Text>
            <Text >Medico: {consulta.medico}</Text>
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
            <Text style={{...styles.titleModal}}>Adicionar consulta</Text>
              <Button onPress={showDatepicker}>Data</Button>
              <Button onPress={showTimepicker}>Hora</Button >
            {show && <DateTimePicker
              testID="dateTimePicker"
              value={consultaData}
              mode={mode}
              is24Hour={true}
              onChange={(event, date)=>{setConsultaData(date as Date); setShow(false)}}
              onTouchEnd={()=>{setShow(false)}}
              onTouchCancel={()=>{setShow(false)}}
              />}
            <Text style={styles.label} >Medico: </Text>
            <DropDownPicker
              open={showMultiSelectDropDown}
              setOpen={() => setShowMultiSelectDropDown(true)}
              onClose={() => setShowMultiSelectDropDown(false)}
              value={consultaMedico}
              setValue={(val) => {setConsultaMedico(val); setShowMultiSelectDropDown(false);}}
              items={db.medicos.map((medico) => ({ label: medico.nome, value: medico.nome }))}
              labelStyle={{backgroundColor: 'white'}}
            />
            <Text style={styles.label} >Especialidade: </Text>
              <TextInput style={styles.inputs} value={consultaSpecialty} onChangeText={setConsultaSpecialty} />
            <Text style={styles.label} >Hospital: </Text>
              <TextInput style={styles.inputs} value={consultaHospital} onChangeText={setConsultaHospital} />
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