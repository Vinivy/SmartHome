import React from "react"
import { View,Text, Image } from "react-native"
import { Styles } from "./ScreenStyles"
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen(){
    const date = new Date();
    const hour = date.getHours();
    const nomeDoDia = date.toLocaleDateString('pt-BR', { weekday: 'long' });

    return(
        <View>
            <View style={Styles.Header}>
                <View style={Styles.Profille}>
                    <Image 
                    style={Styles.Icon} 
                    source={require('../../assets/Modelos3D/Profile.png')} 
                    />

                    <View style={Styles.Name}>
                        <Text style={Styles.NameText}>Vinivy Gabriel</Text>
                        <Text style={Styles.HourText}>{nomeDoDia}, {hour}</Text>
                    </View>
                </View>
                    
                <Icon name="cog" size={30} color="#000" style={Styles.config}/>
                
            </View>
        </View>
    )
};