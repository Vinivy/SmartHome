import React, { useEffect, useState } from "react"
import { View,Text, Image, Touchable, TouchableOpacity, Button } from "react-native"
import { Styles } from "./ScreenStyles"
import * as Battery from 'expo-battery';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen(){
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const monthNames = ["Jan", "Fev", "Mar", "Abr", "Maio", "Jun", "Jul", "Agos", "Set", "Out", "Nov", "Dez"];
    const monthName = monthNames[month];
    const nomeDoDia = date.toLocaleDateString('pt-BR', { weekday: 'long' });

    const [BatteryPorcent, setBatteryPorcent] = useState<string>("");
    const [batteryKWh, setBatteryKWh] = useState<number | null>(null);
    const [Convertio, setConvertio] = useState<string>("");
     // Capacidade total da bateria do dispositivo em mAh (você pode ajustar este valor conforme necessário)
     const batteryCapacitymAh = 5000;
     const batteryVoltage = 3.7; // Tensão nominal da bateria em volts (geralmente 3.7V)

    const [selectedRoom, setSelectedRoom] = useState<string>("");

    const [OnLaps, setOnLaps] = useState<boolean>(false);
    const [OnSmart, setOnSmart] = useState<boolean>(false);
    const [OnConditionar, setOnConditionar] = useState<boolean>(false);
    const [OnStudio, setOnStudio] = useState<boolean>(false);

    function Light(){
        setOnLaps(!OnLaps);
    }

    function Smart(){
        setOnSmart(!OnSmart);
    }

    const handlePress = (room: string) => {
        setSelectedRoom(room);
    };
    
    useEffect(() => {
        async function Porcent(){
            const Level = await Battery.getBatteryLevelAsync();
            setBatteryPorcent(Math.round(Level * 100) + "%");
            
            // Converter o nível da bateria para kWh
          const capacityAtCurrentLevel = (batteryCapacitymAh * Level); // Capacidade em mAh no nível atual
          const kWh = (capacityAtCurrentLevel * batteryVoltage) / 1000000; // Converter mAh para kWh
          setBatteryKWh(kWh);
          //
        const kWhFormatted = kWh.toFixed(6);
        const Kilowart = kWhFormatted.substring(3); // Formatar o valor de kWh com duas casas decimais
        setConvertio(Kilowart);
        }
        Porcent();
    }, []);

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
                        <Text style={Styles.HourText}>{nomeDoDia}, {day} {monthName}</Text>
                    </View>
                </View>
                <TouchableOpacity>
                    <Icon name="cog" size={30} color="#000" style={Styles.config}/>
                </TouchableOpacity>
            </View>
            <View style={Styles.Battery}>
                <View style={Styles.Salving}>
                    <Text style={Styles.Energy}>Energy Salving</Text>
                    <Text style={Styles.Bateria}>+ {BatteryPorcent}</Text>
                    <Text style={Styles.Conver}>{Convertio} kWh</Text>
                </View>
                <Image
                 source={require('../../assets/Modelos3D/ThunderIlustration.png')}
                 style={{width: 120, height: 120, alignSelf: 'center',}}
                 />
            </View>
            
            <View style={Styles.Options}>
                <TouchableOpacity onPress={() => handlePress('Living Room')}>
                    <Text style={[Styles.OneOp, selectedRoom === 'Living Room' && Styles.selectedText]}>
                    Living Room
                    </Text>
                    {selectedRoom === 'Living Room' && <View style={Styles.indicator} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Bedroom')}>
                    <Text style={[Styles.OneOp, selectedRoom === 'Bedroom' && Styles.selectedText]}>
                    Bedroom
                    </Text>
                    {selectedRoom === 'Bedroom' && <View style={Styles.indicator} />}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => handlePress('Kitchen')}>
                    <Text style={[Styles.OneOp, selectedRoom === 'Kitchen' && Styles.selectedText]}>
                    Kitchen
                    </Text>
                    {selectedRoom === 'Kitchen' && <View style={Styles.indicator} />}
                </TouchableOpacity>
            </View>

            <View style={Styles.BoxesFunction}>
                <View style={Styles.Lights}>
                    <View style={Styles.IconLight}>
                     <Icon name="lightbulb-o" size={30} color="#000" />
                    </View>
                    <Text style={Styles.Title}>Lighting</Text>
                    <Text style={Styles.Description}>4 lamps</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Styles.StatusLaps}>{OnLaps ? 'On' : 'Off'}</Text>
                        <Button title="Turn On" onPress={Light}/>
                    </View>
                </View>
                <View style={Styles.Smart}>
                    <View style={Styles.IconSmart}>
                        <Icon name="lightbulb-o" size={30} color="#000" />
                    </View>1
                    <Text style={Styles.Title}>Smart</Text>
                    <Text style={Styles.Description}>4 lamps</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Styles.StatusSmart}>{OnSmart ? 'On' : 'Off'}</Text>
                        <Button title="Turn On" onPress={Smart}/>
                    </View>
                </View>
                <View style={Styles.Conditionar}>
                    <View style={Styles.IconConditionar}>
                        <Icon name="lightbulb-o" size={30} color="#000" />
                    </View>
                    <Text style={Styles.Title}>Conditionar</Text>
                    <Text style={Styles.Description}>4 lamps</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Styles.StatusConditionar}>{OnConditionar ? 'On' : 'Off'}</Text>
                        <Button title="Turn On" onPress={Light}/>
                    </View>
                </View>
                <View style={Styles.Studio}>
                    <View style={Styles.IconStudio}>
                        <Icon name="lightbulb-o" size={30} color="#000" />
                    </View>
                    <Text style={Styles.Title}>Studio</Text>
                    <Text style={Styles.Description}>4 lamps</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={Styles.StatusStudio}>{OnStudio ? 'On' : 'Off'}</Text>
                        <Button title="Turn On" onPress={Light}/>
                    </View>
                </View>
            </View>
        </View>
    )
};