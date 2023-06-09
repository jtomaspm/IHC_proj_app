import { useNavigation } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Modal, ScrollView } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Button, useTheme } from 'react-native-paper';


export default function DispositivosScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);
  const [dispositivos, setDispositivos] = useState([]);
  let colorText = 'white';
  const theme = useTheme();
  if (theme.colors.primary === "rgb(120, 69, 172)") {
    colorText = "white";
  }
  const navigation = useNavigation();
  
  navigation.setOptions({ headerTitle: 'Voltar' });
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
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
      backgroundColor: '#fff',
      width: '80%',
      padding: 20,
      borderRadius: 10,
      elevation: 5,
    },
    modalTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 20,
      color: colorText,
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
    id: {
      fontWeight: 'bold',
      height: 50,
      marginLeft: 100,
      color: "black",
    },
    dispositivos: {
      color: "black",
      marginRight: 150,
      fontSize: 25,
    },
    addButtonLabel: {
      color: '#fff',
      fontWeight: 'bold'
    },
    divContent: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: 25,
    }
  });

  const handleAddButtonPress = () => {
    if (selectedValue) {
      const dispositivo = {
        id: dispositivos.length + 1,
        tipo: selectedValue
      }
      setDispositivos([...dispositivos, dispositivo]);
      setSelectedValue(null);
      setDropdownOpen(false);
      setModalVisible(false);
    }
  };

  const handleRemoveButtonPress = (index) => {
    const newDispositivos = [...dispositivos];
    newDispositivos.splice(index, 1);
    setDispositivos(newDispositivos);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dispositivos</Text>
      {/* Este vai ser o container do nome do dispositivo e do botao remover */}
      <View >
        {dispositivos.map((dispositivo, index) => (
          <View style={styles.divContent}>
            <Text style={styles.dispositivos} key={index}> {dispositivo.tipo}</Text>
            <Button mode='contained' onPress={() => handleRemoveButtonPress(index)}>Remover</Button>
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
            <Text style={styles.modalTitle}>Adicionar dispositivo</Text>

            <DropDownPicker
              items={[
                { label: 'Relógio ', value: 'Relógio ' },
                { label: 'Pulseira', value: 'Pulseira' },
              ]}
              placeholder="Selecione o tipo de dispositivo"
              containerStyle={{ height: 40, width: '100%', marginTop: 20 }}
              onOpen={() => setDropdownOpen(true)}
              onClose={() => setDropdownOpen(false)}
              open={dropdownOpen}
              value={selectedValue}
              setValue={setSelectedValue}
            />
            <TouchableOpacity style={styles.addButton} onPress={handleAddButtonPress}>
              <Text style={styles.addButtonLabel}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

