import * as React from 'react';
import { DataTable } from 'react-native-paper';
import { HealthDataService, WeekData } from '../../../services/HealthDataService';

const BatimentoScreen = () => {
  const service = new HealthDataService(65);
  const [data, setData] = React.useState<WeekData>();
  React.useState(() => {
    setData(service.HeartRate(new Date()));
  }, []);
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Day</DataTable.Title>
        <DataTable.Title numeric>06h00</DataTable.Title>
        <DataTable.Title numeric>12h00</DataTable.Title>
        <DataTable.Title numeric>18h00</DataTable.Title>
        <DataTable.Title numeric>24h00</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Segunda</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Monday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Monday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Monday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Monday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Terça</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Tuesday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Tuesday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Tuesday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Tuesday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Quarta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Wednesday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Wednesday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Wednesday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Wednesday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Quinta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Thursday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Thursday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Thursday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Thursday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Sexta</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Friday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Friday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Friday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Friday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Sábado</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Saturday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Saturday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Saturday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Saturday[23]}</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Domingo</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Sunday[5]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Sunday[11]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Sunday[17]}</DataTable.Cell>
        <DataTable.Cell numeric>{data?.Sunday[23]}</DataTable.Cell>
      </DataTable.Row>
    </DataTable>
  );
}

export default BatimentoScreen;