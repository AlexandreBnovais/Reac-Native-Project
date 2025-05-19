import React from 'react';
import { 
    View, 
    Text,
    TouchableOpacity,
    ImageBackground,
    Image,
    FlatList,
    StyleSheet
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled, styles } from './style';

const Data = [
    {id: '1', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/reciclazs.png')},
    {id: '2', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/reciclazs.png')},
    {id: '3', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/reciclazs.png')}
]

export const TimeScreen = () => {
    const renderItems = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => {}}>
            <ImageBackground style={styles.imageBackground} source={item.image} resizeMode='stretch'borderRadius={20} >
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.local}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView>
            <View>
                <View>
                    <Image style={{width: 100, height: 100}} source={require('../../assets/proUnit.png')} resizeMode='contain'/>
                </View>
                <FlatList 
                    data={Data}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItems}
                    contentContainerStyle={{ padding: 10}}
                />
            </View>
        </SafeAreaView>
    )
}

