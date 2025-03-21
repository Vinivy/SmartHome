import { StyleSheet } from 'react-native';
import { Animated } from 'react-native';

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

      /*  BoxesFunction  Colocar a função de Dark apos clicar  */
      BoxesFunction : {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',

        marginTop: 25,
      },

      Lights : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingRight: 30,
        width: 180,
        height: 200,
        backgroundColor: '#EDEDED',
      },

      IconLight : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 60,
        backgroundColor: '#F5F5F5',
      },

      Title : {
        fontFamily: 'Lexend',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        paddingRight: 30,
      },

      TitleCond : {
        fontFamily: 'Lexend',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
      },

      Description : {
        fontFamily: 'Lexend',
        fontSize: 15,
        fontWeight: 'medium',
        color: '#848484',
        marginTop: 5,
        paddingRight: 40,
        marginBottom: 10,
      },

      StatusLaps : {
        fontFamily: 'Lexend',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7D7D7D',
        paddingEnd: 50,
        marginLeft: 40,
      },

      MovLight : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#D6D6D6',
      },

      RadioLight : {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        margin: 5,
      },

      /*  Smarth    */
      Smart : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingRight: 30,
        width: 180,
        height: 220,
        backgroundColor: '#EDEDED',
      },

      IconSmart : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 60,
        backgroundColor: '#F5F5F5',
      },

      StatusSmart : {
        fontFamily: 'Lexend',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7D7D7D',
        paddingEnd: 50,
        marginLeft: 40,
      },

      MovSmart : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#D6D6D6',
      },

      RadioSmart : {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        margin: 5,
      },

      Conditionar : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingRight: 30,
        width: 180,
        height: 220,
        backgroundColor: '#EDEDED',
      },

      IconConditionar : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 60,
        backgroundColor: '#F5F5F5',
      },

      StatusConditionar : {
        fontFamily: 'Lexend',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7D7D7D',
        paddingEnd: 50,
        marginLeft: 40,
      },

      MovCond : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#D6D6D6',
      },

      RadioConditionar : {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        margin: 5,
      },

      Studio : {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        paddingRight: 30,
        width: 180,
        height: 250,
        backgroundColor: '#EDEDED',
        marginTop: 20,
      },

      IconStudio : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        marginBottom: 10,
        marginRight: 60,
        backgroundColor: '#F5F5F5',
      },

      StatusStudio : {
        fontFamily: 'Lexend',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#7D7D7D',
        paddingEnd: 50,
        marginLeft: 40,
      },

      MovStudio : {
        flexDirection: 'row',
        alignItems: 'center',
        width: 65,
        height: 35,
        borderRadius: 20,
        backgroundColor: '#D6D6D6',
      },

      RadioStudio : {
        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#F5F5F5',
        margin: 5,
      },

      /*  HotBar  */
      HotBar : {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 20,
      },

      iconHome : { justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
      },

      iconadd : {
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
        height: 50, 
        borderRadius: 25,
        backgroundColor: '#000000',
      },

      iconstats : {},
});