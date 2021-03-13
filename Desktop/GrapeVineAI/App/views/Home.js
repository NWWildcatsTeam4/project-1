import React from 'react';
// import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    LogBox,
    Button
  } from 'react-native';

  export default function HomeScreen ({navigation}) {

    // console.log(navigation)
    

    return(
        <View style={styles.homePage}>
            <Text style={styles.homePageText}>
                Home Screen
            </Text>
        </View>
    )
  }

  const styles = StyleSheet.create({
      homePage : {
          flex : 1,
          backgroundColor : "rgb(250 , 255 , 195 )"
      },
      homePageText : {
          fontSize : 34 ,
          color : 'rgb(25 , 255 , 255)'
      }
  })