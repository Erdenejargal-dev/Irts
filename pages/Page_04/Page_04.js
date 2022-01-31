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
import {image_Mask_2_link} from './assets/imageLinks.js'
import {image_Mask_4_link} from './assets/imageLinks.js'
const Page_04  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page6}    >
			<View style = {noneModeStyles._viewport}    >
				<View style = {noneModeStyles._Header}    >
					<View style = {noneModeStyles._Icon}    >
					</View>
					<Text style = {noneModeStyles._Footballer}   >
						Бүртгэл
					</Text>
					<View style = {noneModeStyles._Icon_2}    >
					</View>
				</View>
				<View style = {noneModeStyles._Section}    >
					<View style = {noneModeStyles._Image}    >
						<View style = {noneModeStyles._Mask}    >
						</View>
						<View style = {noneModeStyles._Mask_container}    >
							<View style = {noneModeStyles._Mask_2}   >
								<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Mask_2_link}}/>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Text}    >
						<View style = {noneModeStyles._Logo}    >
							<View style = {noneModeStyles._Mask_3}    >
							</View>
							<View style = {noneModeStyles._Mask_container_2}    >
								<View style = {noneModeStyles._Mask_4}   >
									<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Mask_4_link}}/>
								</View>
							</View>
						</View>
						<Text style = {noneModeStyles._Gordon_Norman}   >
							Д. ДОрж
						</Text>
						<Text style = {noneModeStyles._ID___22001}   >
							ID : 22001
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Section_2}    >
					<View style = {noneModeStyles._Rectangle}    >
					</View>
					<View style = {noneModeStyles._Icon_3}    >
						<View style = {noneModeStyles._Oval}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_2}    >
						<Text style = {noneModeStyles._Muscle_tear}   >
							Цахим хаяаг
						</Text>
						<Text style = {noneModeStyles._Integer_nec_est_at_i}   >
							dorjtuvshuu@tomujin.edu.mn
						</Text>
					</View>
					<View style = {noneModeStyles._Text_3}    >
						<View style = {noneModeStyles._Rectangle_2}    >
						</View>
						<Text style = {noneModeStyles.__2_341}   >
							өөрчлөх
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Section_3}    >
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<View style = {noneModeStyles._Icon_4}    >
						<View style = {noneModeStyles._Oval_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_4}    >
						<Text style = {noneModeStyles._Muscle_tear_2}   >
							Нэвтрэх нууц үг
						</Text>
						<Text style = {noneModeStyles._Integer_nec_est_at_i_2}   >
							*************
						</Text>
					</View>
					<View style = {noneModeStyles._Text_5}    >
						<View style = {noneModeStyles._Rectangle_4}    >
						</View>
						<Text style = {noneModeStyles.__2_341_2}   >
							өөрчлөх
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Section_4}    >
					<View style = {noneModeStyles._Rectangle_5}    >
					</View>
					<View style = {noneModeStyles._Icon_5}    >
						<View style = {noneModeStyles._Oval_3}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_6}    >
						<Text style = {noneModeStyles._Muscle_tear_3}   >
							Нэвтрэх код
						</Text>
						<Text style = {noneModeStyles._Integer_nec_est_at_i_3}   >
							+976 95443887
						</Text>
					</View>
					<View style = {noneModeStyles._Text_7}    >
						<View style = {noneModeStyles._Rectangle_6}    >
						</View>
						<Text style = {noneModeStyles.__2_341_3}   >
							өөрчлөх
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Section_5}    >
				</View>
				<View style = {noneModeStyles._Tab}    >
					<View style = {noneModeStyles._Base}    >
					</View>
					<View style = {noneModeStyles._This_Month}    >
						<View style = {noneModeStyles._Base_2}    >
						</View>
						<Text style = {noneModeStyles.__2_341_4}   >
							 Гарах
						</Text>
					</View>
					<Text style = {noneModeStyles.__2_341_5}   >
						хадгалах
					</Text>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_04

const noneModeStyles = StyleSheet.create({
_page6: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_viewport: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Header: {
	width: 386,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 48,
	},
_Icon: {
	width: 18,
	height: 18,
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Footballer: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 155},
		{translateY: -11.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 26,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Icon_2: {
	width: 4,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 382},
		{translateY: 3},
	],
	},
_Section: {
	width: 386,
	height: 229,
	position: "absolute",
	left: 14,
	top: 101,
	},
_Image: {
	width: 163,
	height: 229,
	position: "absolute",
	left: 223,
	top: 0,
	},
_Mask: {
	width: 163,
	height: 229,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Mask_container: {
	width: 163,
	height: 229,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_2: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Text: {
	width: 120,
	height: 128,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 51,
	},
_Logo: {
	width: 40,
	height: 40,
	position: "absolute",
	left: 20,
	top: 0,
	},
_Mask_3: {
	width: 40,
	height: 40,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	borderRadius: 6,
	},
_Mask_container_2: {
	width: 40,
	height: 40,
	position: "absolute",
	},
_Mask_4: {
	width: "100%",
	height: "100%",
	borderRadius: 6,
	},
_Gordon_Norman: {
	width: 172,
	height: 32,
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20},
		{translateY: 9},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 36,
	fontWeight: "700",
	lineHeight: 34,
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_ID___22001: {
	width: "auto",
	height: "auto",
	position: "absolute",
	left: 20,
	top: 105,
	color: "rgb(126, 170, 124)",
	fontSize: 13,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Section_2: {
	width: 386,
	height: 69,
	position: "absolute",
	left: 14,
	top: 360,
	},
_Rectangle: {
	width: 386,
	height: 69,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Icon_3: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 14,
	top: 14,
	},
_Oval: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Text_2: {
	width: 300,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 66,
	top: 15,
	},
_Muscle_tear: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -15.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Integer_nec_est_at_i: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 0.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Text_3: {
	width: 72,
	height: 30,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 305},
		{translateY: 20},
	],
	},
_Rectangle_2: {
	width: 72,
	height: 30,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	borderRadius: 6,
	},
__2_341: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: -7},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section_3: {
	width: 386,
	height: 69,
	position: "absolute",
	left: 14,
	top: 429,
	},
_Rectangle_3: {
	width: 386,
	height: 69,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Icon_4: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 14,
	top: 14,
	},
_Oval_2: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Text_4: {
	width: 300,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 66,
	top: 15,
	},
_Muscle_tear_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -15.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Integer_nec_est_at_i_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -0.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Text_5: {
	width: 72,
	height: 30,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 305},
		{translateY: 20},
	],
	},
_Rectangle_4: {
	width: 72,
	height: 30,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	borderRadius: 6,
	},
__2_341_2: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: -7},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section_4: {
	width: 386,
	height: 69,
	position: "absolute",
	left: 14,
	top: 501,
	},
_Rectangle_5: {
	width: 386,
	height: 69,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Icon_5: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 14,
	top: 14,
	},
_Oval_3: {
	width: 41,
	height: 41,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Text_6: {
	width: 300,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 66,
	top: 15,
	},
_Muscle_tear_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -15.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Integer_nec_est_at_i_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: 1.5},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 13,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Text_7: {
	width: 72,
	height: 30,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 305},
		{translateY: 20},
	],
	},
_Rectangle_6: {
	width: 72,
	height: 30,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	borderRadius: 6,
	},
__2_341_3: {
	width: "auto",
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 13},
		{translateY: -7},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section_5: {
	width: 386,
	height: 181,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 587,
	},
_Tab: {
	width: 340,
	height: 59,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 32,
	top: 785,
	},
_Base: {
	width: 340,
	height: 59,
	backgroundColor: "rgb(245, 245, 245)",
	position: "absolute",
	borderRadius: 15,
	shadowOffset: {
		width: 0,
		height: 12
	},
	shadowColor: "rgba(248,247,248,0.35)",
	shadowRadius: 36,
	},
_This_Month: {
	width: 184.445,
	height: 45.4792,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 8.88892},
		{translateY: 7.375},
	],
	},
_Base_2: {
	width: 184.445,
	height: 45.4792,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 10,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.06)",
	shadowRadius: 5,
	},
__2_341_4: {
	width: 141,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 21.1111},
		{translateY: 4.625},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 24,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
__2_341_5: {
	width: 141,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 192},
		{translateY: 20},
	],
	color: "rgba(51, 58, 51, 0.8)",
	fontSize: 18,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
})

