import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Stack, Tabs, useNavigation } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import { DefaultTheme } from '@react-navigation/native';

import Colors from '../../constants/Colors';
import { Provider as PaperProvider } from 'react-native-paper';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });

  return (
    <PaperProvider theme={DefaultTheme}>
    <Stack initialRouteName="index"/>
    </PaperProvider>
  );
}
