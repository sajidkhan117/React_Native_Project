import React from 'react'

import {
    View,
    Text,
    StyleSheet,
    useColorScheme,
} from 'react-native'


function AppPro() : JSX.Element{
    const isDarkmode = useColorScheme() === 'dark'


    return(
        <View style={styles.container}>
            <Text style={isDarkmode ?  styles.whiteText : styles.whiteText}>Hello world welcome to react native WYA KANA GORO </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1, 
        alignItems: 'center',
        justifyContent : "center",
        backgroundColor : "#a9a9a9"
    } ,
    whiteText: {    
        color: '#FFFFFF'
    },
    darkText: {
        color : '#000000'
    }
})


export default AppPro;