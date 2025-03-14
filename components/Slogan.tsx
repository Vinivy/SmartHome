import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';

interface SloganProps {
    onFinish: () => void;
}

export default function Slogan({onFinish}: SloganProps) {
    useEffect(() => {
        const timer = setTimeout(() => {
          onFinish();
        }, 5000);  // 5 segundos
    
        return () => clearTimeout(timer);  // Limpa o timer se o componente desmontar
      }, [onFinish]);

    return (
        <View style={styles.Content}>
            <Image style={styles.IconComodos} 
            source={require('../assets/Modelos3D/ComodosIcon.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    Content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    IconComodos: {
        width: 370,
        height: 355,
    },
});