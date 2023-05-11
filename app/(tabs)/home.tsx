import { StyleSheet, TouchableOpacity, Pressable, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { Button, TextInput } from 'react-native-paper';


// const navigation = useNavigation();


export default function TabOneScreen() {
  const navigation = useNavigation();
  const dados = () => {
    navigation.navigate('dados'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const medicos = () => {
    navigation.navigate('medicos'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const consultas = () => {
    navigation.navigate('consultas'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const dispositivos = () => {
    navigation.navigate('dispositivos'); // substitua 'NovaPagina' pelo nome da sua nova página
  };

  return (
    <View style={styles.container}>

      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <TouchableOpacity onPress={dados}>
          <Button style={{ padding: 16, width: '100%' }} mode='contained'>Dados de Saúde</Button>
        </TouchableOpacity>

      </View>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <TouchableOpacity onPress={medicos}>
          <Button style={{ padding: 16, width: '140%', marginLeft: '-20%' }} mode='contained'>Médicos</Button>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <TouchableOpacity onPress={consultas}>
          <Button style={{ padding: 16, width: '130%', marginLeft: '-15%' }} mode='contained'>Consultas</Button>
        </TouchableOpacity>
      </View>
      <View
        style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
        <TouchableOpacity onPress={dispositivos}>
          <Button style={{ padding: 16, width: '120%', marginLeft: '-10%' }} mode='contained'>Dispositivos</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 15,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});
