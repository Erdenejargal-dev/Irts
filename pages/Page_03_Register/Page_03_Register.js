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
const Page_03_Register  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	const [focus1, setFocus1] = useState(false);
	const [focus2, setFocus2] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_Already_have_an_acco = () => {
					navigation.navigate("Page_02_Login")
	}
	const onClick_register = () => {
					navigation.navigate("Page_04_Walkthrough")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page3]}    >
			<View style = {noneModeStyles._Background}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<Text style = {noneModeStyles._Already_have_an_acco} onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Already_have_an_acco();}}>
				Бүртгэлтэй бол нэвтрэх
			</Text>
			<View style = {noneModeStyles._register}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_register();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_2}    >
				</View>
				<Text style = {noneModeStyles._Register}   >
					бүртгүүлэх
				</Text>
			</View>
			<View style = {[noneModeStyles._Confirm_Password, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<View style={noneModeStyles._Confirm_Password_2}>
					<TextInput style = {[{flex: 1, outline: "none",color: "rgba(43,43,43,100)",}]} placeholderTextColor = {"rgb(117, 117, 117)"}  placeholder = "нууц үг давтах" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
				</View>
			</View>
			<View style = {[noneModeStyles._Password, {borderColor: focus1 ? "#7E58FF" : "",backgroundColor: focus1 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
				<View style = {noneModeStyles._Background_4}    >
				</View>
				<View style={noneModeStyles._Password_2}>
					<TextInput style = {[{flex: 1, outline: "none",color: "rgba(43,43,43,100)",}]} placeholderTextColor = {"rgb(117, 117, 117)"}  placeholder = "нууц үг " onFocus = {() => setFocus1(true)} onBlur = {() => setFocus1(false)} />
				</View>
			</View>
			<View style = {[noneModeStyles._Username, {borderColor: focus2 ? "#7E58FF" : "",backgroundColor: focus2 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
				<View style = {noneModeStyles._Background_5}    >
				</View>
				<View style={noneModeStyles._Username_2}>
					<TextInput style = {[{flex: 1, outline: "none",color: "rgba(43,43,43,100)",}]} placeholderTextColor = {"rgb(117, 117, 117)"}  placeholder = "нэвтрэх нэр" onFocus = {() => setFocus2(true)} onBlur = {() => setFocus2(false)} />
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_03_Register

const noneModeStyles = StyleSheet.create({
_page3: {
	height: 1334,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Background: {
	width: 750,
	height: 583,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Object: {
	width: 0,
	height: 0,
	position: "absolute",
	left: 0,
	top: 0,
	},
_image_container: {
	width: 750,
	height: 583,
	position: "absolute",
	},
_image: {
	width: "100%",
	height: "100%",
	},
_Already_have_an_acco: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 254},
		{translateY: 562},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 30,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "center",
	},
_register: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 1100},
	],
	},
_Background_2: {
	width: 650,
	height: 100,
	backgroundColor: "rgb(126, 170, 124)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 21,
	},
_Register: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 218.5},
		{translateY: -15},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 55,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Confirm_Password: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 950},
	],
	},
_Background_3: {
	width: 650,
	height: 100,
	backgroundColor: "rgb(238, 238, 238)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0531873)",
	shadowRadius: 13,
	},
_Confirm_Password_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 228},
		{translateY: -26},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 40,
	fontWeight: "400",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Password: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 800},
	],
	},
_Background_4: {
	width: 650,
	height: 100,
	backgroundColor: "rgb(238, 238, 238)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0531873)",
	shadowRadius: 13,
	},
_Password_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 271},
		{translateY: -24},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 40,
	fontWeight: "400",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
_Username: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 650},
	],
	},
_Background_5: {
	width: 650,
	height: 100,
	backgroundColor: "rgb(238, 238, 238)",
	position: "absolute",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0531873)",
	shadowRadius: 13,
	},
_Username_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 238},
		{translateY: -24},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 40,
	fontWeight: "400",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
})

