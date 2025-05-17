import * as React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import { ProgressChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width - 20;

const chartConfigTemplate = (r, g, b) => ({
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  decimalPlaces: 2,
  color: (opacity = 1) => `rgba(${r}, ${g}, ${b}, ${opacity})`,
  style: {
    borderRadius: 90,
  },
});

export default function Perfil() {
  const categorias = [
    { label: 'Gastos', value: 0.87, color: [255, 99, 132] },
    { label: 'Carboidratos', value: 0.14, color: [54, 162, 235] },
    { label: 'Proteínas', value: 0.48, color: [75, 192, 192] },
    { label: 'Gorduras', value: 0.14, color: [255, 206, 86] },
  ];

  return (
    <View style={css.tela}>
      <Text style={css.titulo}>Perfil</Text>
      {categorias.map((item, index) => (
        <View key={index} style={css.graficoItem}>
          <Text style={[css.label, { color: `rgb(${item.color.join(',')})` }]}>
            {item.label}: {(item.value * 100).toFixed(0)}%
          </Text>
          <ProgressChart
            data={[item.value]}
            width={screenWidth}
            height={100}
            strokeWidth={8}
            radius={40}
            chartConfig={chartConfigTemplate(...item.color)}
            hideLegend={true}
          />
        </View>
      ))}
    </View>
  );
}

const css = StyleSheet.create({
  tela: {
    flex: 1
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  graficoItem: {
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 8
  },
});
