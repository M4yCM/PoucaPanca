import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { SafeAreaView } from 'react-native-safe-area-context';

// Tela Home
export default function Home() {
  return (
    <SafeAreaView>
      <View style={estilo.principal}>
        <Text style={estilo.almoco}>Almoço</Text>
        
        <View style={{flex: 0.5, height: 1, borderRadius:20, marginLeft:40, width:350, backgroundColor: 'white'}}>
          <MaterialCommunityIcons name='close-circle' style={{marginLeft:10, marginTop:5, fontSize:20}} />
          <TextInput style={{marginTop:-29, marginLeft:40}}></TextInput>
        </View> 
        
      </View>
      <View style={estilo.texto}>
          <Text style={estilo.cadabra}>Alimento</Text>
          <Text style={estilo.cadabra}>Peso</Text>
          <Text style={estilo.cadabra}>Kcal</Text>
        </View>
      <View style={estilo.caixa}>
        
        <View >
          <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Maçã</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Macarrão</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Arroz</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Feijão</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Purê</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Frango</Text></TouchableOpacity>
        </View>

        <View >
          <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Batata</Text></TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  principal:{
    backgroundColor:'#90ee90',
    opacity:0.8,
    borderRadius:10,
    height:100,
    marginTop:-20
  },

  almoco:{
    fontWeight:'bold',
    fontSize:30,
    paddingLeft:50,
    //fontFamily:'serif'
  },

  caixa:{
    marginTop:90,
    marginLeft:40,
    marginTop:-5
  },

  texto:{
    flexDirection:'row',
    justifyContent:'space-around',
    marginRight:50,
    backgroundColor:'#a9a9a9',
    height:50,
    width:'100%'
    
  },

  cadabra:{
    fontSize:20,
    color:'#fff',
    marginTop:10
  },


  caixinha1:{
    borderRadius:18, 
    backgroundColor:'#d3cecd', 
    marginTop:20, 
    width:330, 
    height:65

  },

  caixinha2:{
    borderRadius:18, 
    backgroundColor:'#a9a9a9', 
    marginTop:20, 
    width:360, 
    height:65

  },

  textinho:{
    fontSize:20, 
    fontWeight:'bold', 
    marginTop:18, 
    marginLeft:15
  }
});


