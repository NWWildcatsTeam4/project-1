import React, { useEffect } from 'react';
import { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Button
  } from 'react-native';

  var tabbarHeight = null;
  var tabbarWidth = null;

export default function Tabbar (props , {navigation}) {
    // console.log(props , "props for tab bar")
    console.log(navigation , "nav for tab bar")

    useEffect(() => {
        tabbarHeight = props.screenHeight;
        tabbarWidth = props.screenWidth;
        console.log(tabbarHeight , tabbarWidth , "tab bar dims")
    }, [props])

    return(
        <View style={styles.tabbar}>
         {/* <View style={{height : props.screenHeight - 900 }}> */}
            <Button title="home"></Button>
            <Button title="home"></Button>
            <Button title="home"></Button>
            <Button title="home"></Button>
            <Button title="home"></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    tabbar : {
        height : tabbarHeight + 60,
        width : tabbarWidth,
        flexDirection : 'row',
        justifyContent : 'space-between',
        backgroundColor : 'rgb(100 , 100 ,100)'
    }
})