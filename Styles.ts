import { Dimensions, StyleSheet } from 'react-native';
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    PrimaryScreen: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'baseline',
      justifyContent: 'space-evenly',
      
    },

    IconCircule:{
      marginLeft: 68,
      width: 280,
      height: 290,
      borderRadius: '50%',
      backgroundColor: '#001524',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 100,
      marginTop: 80,    
    },

    IconComodos: {
      marginTop: 30,
      width: 370,
      height: 355,
    },
    
    TextContainer: {
      marginLeft: 30,
      backgroundColor: 'red',
      textAlign: 'left',
    },

    TextStyle: {
      fontFamily: 'Lexend',
      fontWeight: 'bold',
      lineHeight: 40,
      
      fontSize: 40,
    },

    InfoContainer: {
      backgroundColor: 'blue',
      textAlign: 'center',
    },
    
    Description: {
      fontFamily: 'Lexend',
      fontSize: 20,
    },

    Authenticate: {
      alignSelf: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'#F6F6F6',
      width: '100%',
      height: 214,
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
    },

    touchIdText: {
      fontSize: 16,
      color: '#959595',
      fontFamily: 'Lexend',
    },
    
    
    
});