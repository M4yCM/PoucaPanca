import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import { Provider as PaperProvider } from 'react-native-paper';

// Tela Home
export default function Config() {
  return (
    <View style={estilo.caixa}>
      <View style={estilo.principal}>
              
              <View >
                <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Café da Manhã</Text></TouchableOpacity>
              </View>
      
              <View >
                <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Lanche</Text></TouchableOpacity>
              </View>
      
              <View >
                <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Almoço</Text></TouchableOpacity>
              </View>
      
              <View >
                <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Lanche da Tarde</Text></TouchableOpacity>
              </View>
      
              <View >
                <TouchableOpacity style={estilo.caixinha1}><Text style={estilo.textinho}>Jantar</Text></TouchableOpacity>
              </View>
      
              <View >
                <TouchableOpacity style={estilo.caixinha2}><Text style={estilo.textinho}>Lanche da Noite</Text></TouchableOpacity>
              </View>

              <TouchableOpacity>
              <MaterialCommunityIcons name='plus-circle' style={{marginTop:50, marginLeft:120, fontSize:100}} />
              </TouchableOpacity>
      
            </View>
    </View>
  );  
}

const estilo = StyleSheet.create({
  


  caixa:{
    marginTop:40,
    marginLeft:40,
    //marginTop:-5
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
})


