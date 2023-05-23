import { StyleSheet, TouchableOpacity, Pressable, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from '../../components/Themed';
import { Button } from 'react-native-paper';

export default function TabOneScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: '' });
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
    <View style={{...styles.container}}>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={dados}>Dados de Saúde</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={medicos}>Médicos</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={consultas}>Consultas</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={dispositivos}>Dispositivos</Button>
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
