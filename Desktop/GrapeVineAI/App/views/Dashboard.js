import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    LogBox,
    Dimensions,
    TouchableWithoutFeedback
} from 'react-native';
import { useState, useEffect } from 'react';

const Dashboard = ({ navigation }) => {
    console.log(navigation)

    const navHome = () => {
        navigation.navigate('Home');
    }

    return (
        <View style={styles.dashboardContainer}>
            <Text>Hi</Text>
            <TouchableWithoutFeedback style={styles.touchBtn} onPress={navHome}>
                <Text style={{fontSize : 40}}>Touch me</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    dashboardContainer: {
        flex: 1,
        backgroundColor: 'rgb(240 , 190 , 255 )',
        padding : 100
    },
    touchBtn : {
        height : 120,
        width : 125,
        backgroundColor : 'rgb(100 , 50, 120)',
        color : 'rgb(10 , 200 , 40)'
    }
})

export default Dashboard;