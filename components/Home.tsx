import { Alert, Button, Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles'; 
import * as LocalAuthentication from 'expo-local-authentication';
import { useEffect, useState } from 'react';


export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //função assincrona da API
 async function verifyAuthentication() {
  //verificar se o dispositivo tem o suporte para o API
  const compitable = await LocalAuthentication.hasHardwareAsync();
  console.log(compitable);

  //verificar se o disponsitivo funciona outros recursos da API. com mapeação dos tipos que ira funcionar
  const types = await LocalAuthentication.supportedAuthenticationTypesAsync();
  console.log(types.map( (type) => LocalAuthentication.AuthenticationType[type]));
 }

 //função para verificar se o usuario tem cadastro de biometria
  async function handleAuthentication() {
    const isBiometricEnrolled = await LocalAuthentication.isEnrolledAsync();
    console.log(isBiometricEnrolled);

    // se não tiver suporte para biometria
    if (!isBiometricEnrolled){
      return Alert.alert('Biometria não cadastrada', 'cadastre no dispositivo!');
    }

    // se tiver suporte para biometria 
    const auth = await LocalAuthentication.authenticateAsync({
      //mensagem que ira aparecer na tela
      promptMessage: 'Autentique-se para acessar',
      //mensagem que ira aparecer no botão de cancelar
      fallbackLabel: 'Biometria não conhecida',
    });

    //verificar se a autenticação foi bem sucedida, ira retornar um booleano
    setIsAuthenticated(auth.success);
  }

 useEffect(() => {
    verifyAuthentication();
    
 }, []);

  return (
    <View style={styles.PrimaryScreen}>
      <View style={styles.IconCircule}>
        <Image 
          style={styles.IconComodos} 
          source={require('../assets/Modelos3D/ComodosIcon.png')} />
      </View>

      <View style={styles.TextContainer}>
        <Text style={styles.TextStyle}>Easily Control</Text>
        <Text style={styles.TextStyle}>Your Home</Text>
        
         <View>
            <Text style={styles.Description }>Manage your home from anytime,</Text>
            <Text style={styles.Description }>anywhere.</Text>
         </View>
      </View>

      <View style={styles.Authenticate}>
        <Text style={styles.touchIdText}>Place your finger to open</Text>
        
        <TouchableOpacity onPress={handleAuthentication}>
          <Image source={require('../assets/Modelos3D/TouchFinger.png')} style={styles.FingerTOUCH}/>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}


