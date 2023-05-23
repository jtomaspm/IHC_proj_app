import { StyleSheet, TouchableOpacity, Pressable, useColorScheme } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { View } from '../../components/Themed';
import { Button } from 'react-native-paper';

export default function DispositivosScreen() {
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });
  const passos = () => {
    navigation.navigate('saude/passos'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const batimentocardiaco = () => {
    navigation.navigate('saude/batimentocardiaco'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const calorias = () => {
    navigation.navigate('saude/calorias'); // substitua 'NovaPagina' pelo nome da sua nova página
  };
  const sono = () => {
    navigation.navigate('saude/sono'); // substitua 'NovaPagina' pelo nome da sua nova página
  };

  return (
    <View style={styles.container}>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={passos}>Passos : 3452</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={batimentocardiaco}>Batimento Cardíaco : 80</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={calorias}>Calorias : 2489</Button>
          <Button style={{ paddingBottom: 16, paddingTop : 16, width: '60%', margin:10 }} mode='contained' onPress={sono}>Sono : 7h</Button>
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
