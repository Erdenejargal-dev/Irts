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
const Page_04_Walkthrough  = ({navigation}) => {
	const [focus0, setFocus0] = useState(false);
	useEffect(() => {
	}, []);
	const onClick_Get_Started = () => {
					navigation.navigate("Page_02")
	}
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<Animated.View style={[{}, noneModeStyles._page2]}    >
			<View style = {noneModeStyles._Register}    >
				<View style = {noneModeStyles._Background}    >
				</View>
				<Text style = {noneModeStyles._Register_2}   >
					бүртгүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._Background_2}    >
				<View style = {noneModeStyles._Object}    >
				</View>
				<View style = {noneModeStyles._page_background}    >
				</View>
				<View style = {noneModeStyles._image_container}    >
					<View style = {noneModeStyles._image}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_image_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Get_Started}  onStartShouldSetResponder = {() => {return true}} onResponderGrant = {() => {}} onResponderRelease = {() => {onClick_Get_Started();}} onStartShouldSetResponderCapture = {() => true}>
				<View style = {noneModeStyles._Background_3}    >
				</View>
				<Text style = {noneModeStyles._get_started}   >
					үргэлжлүүлэх
				</Text>
			</View>
			<View style = {noneModeStyles._Pagination}    >
				<View style = {noneModeStyles._layer_2e7b70}    >
					<View style = {noneModeStyles._layer_4336bc}   >
						<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
							<Path fill = {"#CCCCCC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.9988 0C9.312 0 11.9988 2.6868 11.9988 6C11.9988 9.3132 9.312 12 5.9988 12C2.6856 12 0 9.3144 0 6C0 2.6856 2.6856 0 5.9988 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_d43665}    >
					<View style = {noneModeStyles._layer_1d6da8}   >
						<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
							<Path fill = {"#CCCCCC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.9988 0C9.312 0 11.9988 2.6868 11.9988 6C11.9988 9.3132 9.312 12 5.9988 12C2.6856 12 0 9.3144 0 6C0 2.6856 2.6856 0 5.9988 0Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._layer_f400ea}    >
					<View style = {noneModeStyles._layer_863d36}   >
						<Svg style={{height: 12, width: 12}} viewBox = "0 0 12 12">
							<Path fill = {"#4DB6AC"} fillRule = {"evenodd"} clipRule = {"evenodd"}   d = "M5.9988 0C9.312 0 11.9988 2.6868 11.9988 6C11.9988 9.3132 9.312 12 5.9988 12C2.6856 12 0 9.3144 0 6C0 2.6856 2.6856 0 5.9988 0Z"/>
						</Svg>
					</View>
				</View>
			</View>
			<View style = {[noneModeStyles._Password, {borderColor: focus0 ? "#7E58FF" : "",backgroundColor: focus0 ? "rgba(0, 0, 0, 0)" : "rgba(0, 0, 0, 0)"}]}    >
				<View style = {noneModeStyles._Background_4}    >
				</View>
				<View style={noneModeStyles._Password_2}>
					<TextInput style = {[{flex: 1, outline: "none",color: "rgba(43,43,43,100)",}]} placeholderTextColor = {"rgb(117, 117, 117)"}  placeholder = "нэвтрэх код" onFocus = {() => setFocus0(true)} onBlur = {() => setFocus0(false)} />
				</View>
			</View>
		</Animated.View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_04_Walkthrough

const noneModeStyles = StyleSheet.create({
_page2: {
	height: 1334,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(255, 255, 255)",
	},
_Register: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: -2500},
		{translateY: 1050},
	],
	},
_Background: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(161, 136, 127, 0)",
	position: "absolute",
	borderTopWidth: 2,
	borderRightWidth: 2,
	borderBottomWidth: 2,
	borderLeftWidth: 2,
	borderStyle: "solid",
	borderColor: "rgb(126, 170, 124)",
	borderRadius: 50,
	shadowOffset: {
		width: 2,
		height: 2
	},
	shadowColor: "rgba(0,0,0,0.0691236)",
	shadowRadius: 15,
	},
_Register_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 218.5},
		{translateY: -16},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 55,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Background_2: {
	width: 750,
	height: 1514,
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
_page_background: {
	width: 750,
	height: 943,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	transform: [
		{translateY: 571},
	],
	borderRadius: 30,
	},
_image_container: {
	width: 750,
	height: 601,
	position: "absolute",
	},
_image: {
	width: "100%",
	height: "100%",
	},
_Get_Started: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 1075},
	],
	},
_Background_3: {
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
_get_started: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 192.5},
		{translateY: -16},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 55,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 0,
	textAlign: "center",
	},
_Pagination: {
	width: 56,
	height: 12,
	position: "absolute",
	left: 347,
	top: 961,
	},
_layer_2e7b70: {
	position: "absolute",
	},
_layer_4336bc: {
	},
_layer_d43665: {
	position: "absolute",
	transform: [
		{translateX: 22},
	],
	},
_layer_1d6da8: {
	},
_layer_f400ea: {
	position: "absolute",
	transform: [
		{translateX: 44},
	],
	},
_layer_863d36: {
	},
_Password: {
	width: 650,
	height: 100,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 50},
		{translateY: 775},
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
		{translateX: 226},
		{translateY: -25},
	],
	color: "rgb(117, 117, 117)",
	fontSize: 48,
	fontWeight: "400",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 0,
	textAlign: "left",
	},
})

