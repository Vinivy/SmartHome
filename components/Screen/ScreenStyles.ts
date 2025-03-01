import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({

    Header : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        marginTop: 25,
    },

    Profille : {
        flexDirection: 'row',
        alignItems: 'center',
    },

    Icon : {
        width: 50,
        height: 50,
    },

    Name : {
        alignContent: 'flex-start',
        textAlign: 'left',
        marginLeft: 10,
    },

    NameText : {
        fontFamily: 'Lexend',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#000',
    },

    HourText : {
      fontFamily: 'Lexend',
      fontSize: 15,
      fontWeight: 'regular',
      color: '#959595',
    },

    config : {
// colocar animação ao clicar
    },

    Battery : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 10,
        height: 130,
        padding: 20,
        backgroundColor: 'green',
        marginLeft: 20,
        marginRight: 20,
    },

    Salving : {
        alignItems: 'baseline',
        justifyContent: 'space-between',
    },

    Energy : {
        fontFamily: 'Lexend',
        fontSize: 20,
        fontWeight: 'medium', 
    },

    Bateria : {
        fontFamily: 'Lexend',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#09D642',
    },

    Conver : {
        fontFamily: 'Lexend',
        fontSize: 15,
        color: '#838A8F',
    },
});