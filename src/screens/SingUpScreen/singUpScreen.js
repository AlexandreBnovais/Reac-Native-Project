import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Image, View, Text, TouchableOpacity, TextInput } from 'react-native';

export const singUpScreen = () => {
    const [user , setUse] = useState();
    const [nome , setNome] = useState();
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    return(
        <LinearGradient
            colors={["##E3B2FA" , "#B983CC" , "##44344B"]}
            style={styles.container}
            start={{x: 1, y: 0}}
            end={{x: 0, y: 1}}
        >
            <View>
                <Image style={styles.UniIcon} source={require('../../assets/proUnit.png')} resizeMode='contain'/>

                <TextInput 
                    onChangeText={(texto) => setUse(texto)}
                    value='user'
                    style={styles.textInput}
                /> 
                <TextInput 
                    onChangeText={(text) => setNa}
                />
                <TextInput 
                    onChangeText={(text) => }
                />
                <TextInput 
                    onChangeText={(text) => }
                />
                <TextInput 
                    onChangeText={(text) => }
                />
            </View>
        </LinearGradient>
    );

}