import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { HealthDataService, WeekData } from '../../../services/HealthDataService';
import { useNavigation } from 'expo-router';

const SonoScreen = () => {
  const service = new HealthDataService(65);
  const [data, setData] = React.useState<WeekData>();
  const navigation = useNavigation();
  navigation.setOptions({ headerTitle: 'Voltar' });
  React.useState(() => {
    setData(service.Sleep(new Date()));
  }, []);
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Day</DataTable.Title>
        <DataTable.Title numeric>Horas</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Segunda</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Monday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Terça</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Tuesday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Quarta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Wednesday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Quinta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Thursday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Sexta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Friday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Sábado</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Saturday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Domingo</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Sunday[23]}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

export default SonoScreen;