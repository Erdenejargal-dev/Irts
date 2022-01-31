import React, { useState, useRef, useEffect } from "react";
import { View, Text, Image, ScrollView, TextInput, StyleSheet, Animated, Dimensions, Vibration, Alert, KeyboardAvoidingView, Platform} from "react-native";
import { Svg, Path } from "react-native-svg";
import axios from 'axios';
import SwitchSZ from "../../customComponents/SwitchSZ.js";
import Checkbox from "../../customComponents/Checkbox.js";
import InPageNavigator from "../../customComponents/InPageNavigator.js";
import {Select} from "../../customComponents/Select.js";
import {AccordionItem} from "../../customComponents/AccordionItem.js";
import {Map} from "../../customComponents/Map.js";
import {image_image_link} from './assets/imageLinks.js'
const Page_01_Welcome  = ({navigation}) => {
	useEffect(() => {
	}, []);
	const onClick_login = () => {
					navigation.navigate("Page_02_Login")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page0]}    >
			<View style = {noneModeStyles._Background}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._login}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_login();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_2}    >
				</View>
				<Text style = {noneModeStyles._Login}   >
					нэвтрэх
				</Text>
			</View>
			<View style = {noneModeStyles._LOGO}    >
				<Text style = {noneModeStyles._LOGO_2}   >
					ИРЦ
				</Text>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_01_Welcome

const noneModeStyles = StyleSheet.create({
_page0: {
	height: 1334,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Background: {
	width: 751,
	height: 601,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Object: {
	width: 100,
	height: 100,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_container: {
	width: 750,
	height: 601,
	position: "absolute",
	transform: [
		{translateX: 1},
	],
	},
_image: {
	width: "100%",
	height: "100%",
	},
_login: {
	width: 650,
	height: 132,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 901},
	],
	},
_Background_2: {
	width: 650,
	height: 100,
	backgroundColor: "rgb(126, 170, 124)",
	flexShrink: 0,
	alignSelf: "flex-start",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 21,
	},
_Login: {
	width: "auto",
	height: "auto",
	flexShrink: 0,
	alignSelf: "flex-start",
	color: "rgb(255, 255, 255)",
	fontSize: 55,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_LOGO: {
	width: 214,
	height: 104,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 269},
		{translateY: 18},
	],
	},
_LOGO_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 46},
		{translateY: -64},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 96,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
})

