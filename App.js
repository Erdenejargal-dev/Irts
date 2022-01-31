import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, ActivityIndicator, KeyboardAvoidingView, TouchableWithoutFeedback, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Entypo';
import RNPickerSelect from 'react-native-picker-select';
import {fonts} from './fonts/fonts.js';
import {useFonts} from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Page_01_Welcome from "./pages/Page_01_Welcome/Page_01_Welcome.js";
import Page_02_Login from "./pages/Page_02_Login/Page_02_Login.js";
import Page_04_Walkthrough from "./pages/Page_04_Walkthrough/Page_04_Walkthrough.js";
import Page_03_Register from "./pages/Page_03_Register/Page_03_Register.js";
import Page_02 from "./pages/Page_02/Page_02.js";
import Page_03 from "./pages/Page_03/Page_03.js";
import Page_04 from "./pages/Page_04/Page_04.js";
const Tab = createBottomTabNavigator();
const Page_01_WelcomeStackNavigator = createStackNavigator();
const ScreenForPage_01_Welcome = () => {
	return (
		<Page_01_WelcomeStackNavigator.Navigator>
			<Page_01_WelcomeStackNavigator.Screen
				name = "Page_01_Welcome"
				component = {Page_01_Welcome}
				options = {{
					headerShown: false
				}}
			/>
		</Page_01_WelcomeStackNavigator.Navigator>
	)
};
const Page_02_LoginStackNavigator = createStackNavigator();
const ScreenForPage_02_Login = () => {
	return (
		<Page_02_LoginStackNavigator.Navigator>
			<Page_02_LoginStackNavigator.Screen
				name = "Page_02_Login"
				component = {Page_02_Login}
				options = {{
					headerShown: false
				}}
			/>
		</Page_02_LoginStackNavigator.Navigator>
	)
};
const Page_04_WalkthroughStackNavigator = createStackNavigator();
const ScreenForPage_04_Walkthrough = () => {
	return (
		<Page_04_WalkthroughStackNavigator.Navigator>
			<Page_04_WalkthroughStackNavigator.Screen
				name = "Page_04_Walkthrough"
				component = {Page_04_Walkthrough}
				options = {{
					headerShown: false
				}}
			/>
		</Page_04_WalkthroughStackNavigator.Navigator>
	)
};
const Page_03_RegisterStackNavigator = createStackNavigator();
const ScreenForPage_03_Register = () => {
	return (
		<Page_03_RegisterStackNavigator.Navigator>
			<Page_03_RegisterStackNavigator.Screen
				name = "Page_03_Register"
				component = {Page_03_Register}
				options = {{
					headerShown: false
				}}
			/>
		</Page_03_RegisterStackNavigator.Navigator>
	)
};
const Page_02StackNavigator = createStackNavigator();
const ScreenForPage_02 = () => {
	return (
		<Page_02StackNavigator.Navigator>
			<Page_02StackNavigator.Screen
				name = "Page_02"
				component = {Page_02}
				options = {{
					headerShown: false
				}}
			/>
		</Page_02StackNavigator.Navigator>
	)
};
const Page_03StackNavigator = createStackNavigator();
const ScreenForPage_03 = () => {
	return (
		<Page_03StackNavigator.Navigator>
			<Page_03StackNavigator.Screen
				name = "Page_03"
				component = {Page_03}
				options = {{
					headerShown: false
				}}
			/>
		</Page_03StackNavigator.Navigator>
	)
};
const Page_04StackNavigator = createStackNavigator();
const ScreenForPage_04 = () => {
	return (
		<Page_04StackNavigator.Navigator>
			<Page_04StackNavigator.Screen
				name = "Page_04"
				component = {Page_04}
				options = {{
					headerShown: false
				}}
			/>
		</Page_04StackNavigator.Navigator>
	)
};
const App = () => {
	let [fontsLoaded] = useFonts(fonts);
const Stack = createStackNavigator();
	const [isPage0Open, setIsPage0Open] = useState(true)
	const zIndexPage0 = useRef(1)
	const [isPage1Open, setIsPage1Open] = useState(false)
	const zIndexPage1 = useRef(2)
	const [isPage2Open, setIsPage2Open] = useState(false)
	const zIndexPage2 = useRef(2)
	const [isPage3Open, setIsPage3Open] = useState(false)
	const zIndexPage3 = useRef(2)
	const [isPage4Open, setIsPage4Open] = useState(false)
	const zIndexPage4 = useRef(2)
	const [isPage5Open, setIsPage5Open] = useState(false)
	const zIndexPage5 = useRef(2)
	const [isPage6Open, setIsPage6Open] = useState(false)
	const zIndexPage6 = useRef(2)
	if(!fontsLoaded){
		return <AppLoading/>
	}
	const mainScreen = () => { return (
					<Tab.Navigator
						tabBarOptions={{
							showLabel: false,
							style: noneModeStyles.style0,
							iconStyle: {width: "100%", height: "100%"},
						}}>
						<Tab.Screen
							name = "Page_01_Welcome"
							component = {ScreenForPage_01_Welcome}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_02_Login"
							component = {ScreenForPage_02_Login}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_04_Walkthrough"
							component = {ScreenForPage_04_Walkthrough}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_03_Register"
							component = {ScreenForPage_03_Register}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_02"
							component = {ScreenForPage_02}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_03"
							component = {ScreenForPage_03}
							options = {{tabBarVisible: false}}						/> 
						<Tab.Screen
							name = "Page_04"
							component = {ScreenForPage_04}
							options = {{tabBarVisible: false}}						/> 
					</Tab.Navigator>
	)};
	return (
				<NavigationContainer>
					<Stack.Navigator>
					<Stack.Screen name = "main" options={{headerShown: false}} component={mainScreen}/>
</Stack.Navigator>
				</NavigationContainer>
)};

const noneModeStyles = StyleSheet.create({
style0 : {position: "absolute", bottom: 0, left: 0, right: 0, width: 0, height: 0},
})
export default App;

