import React, {useState} from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { View, TextInput, Image, Text} from 'react-native';

import { styles } from './style';

export const LoginScreen = () => {
    const [isName, setName] = useState('');
    const [isPassword, setPassword] = useState('');
    
    return (
        <View>
            <Image source={require('../../assets/proUnit.png')}/>
            <TextInput 
                placeholder='Email'
                style={styles.textInput}
                onChangeText={(texto) => setName(texto)}
            />

            <TextInput 
                placeholder='Senha'
                style={styles.textInput}
                onChangeText={(texto) => setPassword(texto)}
                keyboardType='numeric'
                secureTextEntry
            />
        </View>
  )
}
