import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from './App/views/Dashboard';
import HomeScreen from './App/views/Home';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';
import { useState, useEffect } from 'react';
import Tabbar from './App/components/Tabbar';

const App = () => {

  // VARIABLES FOR SCREEN DIMENSIONS //
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  // END SCREEN DIMENSIONS // 

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      {/* <SafeAreaView> */}
      {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}> */}
      <AppNavigation />
      {/* </ScrollView> */}
      {/* </SafeAreaView> */}
    </View>
  );
};

const Stack = createStackNavigator();
const AppNavigation = () => {

  // VARIABLES FOR SCREEN DIMENSIONS //
  const window = Dimensions.get("window");
  const screen = Dimensions.get("screen");
  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };

  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });

  console.log(`height : ${dimensions.window.height} width : ${dimensions.window.width}`)
  // END SCREEN DIMENSIONS // 

  return (
    <>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollView}>
        <View style={{ height: dimensions.window.height, width: dimensions.window.width }}>
          <NavigationContainer>
            <Stack.Navigator initialRouteName="Dashboard">
              <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Home" }} />
              <Stack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>

        </View>
      </ScrollView>
      <Tabbar screenHeight={dimensions.window.height} screenWidth={dimensions.window.width} />
    </>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'rgb(255 ,25, 125)',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default App;
