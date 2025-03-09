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
        borderRadius: 20,
        height: 130,
        padding: 20,
        backgroundColor: '#F5F5F5',
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

    Options : {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginTop: 20,
    },

    OneOp : {
        fontFamily: 'Lexend',
        color: '#959595',
        fontSize: 17,
        fontWeight: 'semibold',
    },

      selectedText: {
        color: 'black',
        fontWeight: 'bold',
      },
      
      indicator: {
        width: 7,
        height: 7,
        borderRadius: 5,
        backgroundColor: 'black',
        alignSelf: 'center',
        
      },

      BoxesFunction : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',

        marginLeft: 20,
        marginTop: 20,
      },

      Lights : {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        width: 180,
        height: 190,
        backgroundColor: '#EDEDED',
      },

      IconLight : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        backgroundColor: '#F5F5F5',
      },

      Title : {},

      Description : {},

      StatusLaps : {},

      /*  Smarth    */
      Smart : {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        width: 180,
        height: 220,
        backgroundColor: '#EDEDED',
      },

      IconSmart : {},

      StatusSmart : {},

      Conditionar : {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        width: 180,
        height: 220,
        backgroundColor: '#EDEDED',
      },

      IconConditionar : {},

      StatusConditionar : {},

      Studio : {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderRadius: 20,
        width: 180,
        height: 220,
        backgroundColor: '#EDEDED',
        marginTop: 20,
      },

      IconStudio : {},

      StatusStudio : {},
});