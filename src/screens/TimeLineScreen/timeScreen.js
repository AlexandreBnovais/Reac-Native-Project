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
import { styles } from './style';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const Data = [
    {id: '1', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/reciclazs.png')},
    {id: '2', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/cine.png')},
    {id: '3', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/capoeira.png')},
    {id: '4', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/horta.png')},
    {id: '5', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/refloresta.png')},
    {id: '6', title: 'Recicla ZS', local: '(Zona sul de SP)', image: require('../../assets/feira.png')},
    {id: '7', title: 'Recicla ZS', local: '(Zona sul de SP)'},
]

const tags = [
    {id: '1', tag: 'Popular' },
    {id: '2', tag: 'Local' },
    {id: '3', tag: 'Novo' },
    {id: '4', tag: 'Escolar' },
    {id: '5', tag: ' ' },

]

export const TimeScreen = () => {
    const tagItems = ({ item }) => (
        <TouchableOpacity style={styles.tagCard} onPress={() => {}}>
            <Text>{item.tag}</Text>
        </TouchableOpacity>
    )

    const renderItems = ({ item }) => (
        <TouchableOpacity style={styles.card} onPress={() => {}}>
            <ImageBackground style={styles.imageBackground} source={item.image} resizeMode='cover'borderRadius={20} >
                <View>
                    <Text>{item.title}</Text>
                    <Text>{item.local}</Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView>
            <View style={{marginHorizontal: 20, }}>
                <View style={styles.overlay}>
                    <Image style={{width: 100, height: 100}} source={require('../../assets/proUnit.png')} resizeMode='contain'/>
                    <MaterialCommunityIcons name="email-outline" size={24} color="black" />
                </View>
                <FlatList 
                    data={tags}
                    renderItem={tagItems}
                    keyExtractor={(item) => item.id}
                />

                <FlatList        
                    data={Data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItems}
                    contentContainerStyle={{ padding: 10}}
                />
            </View>
        </SafeAreaView>
    )
}

