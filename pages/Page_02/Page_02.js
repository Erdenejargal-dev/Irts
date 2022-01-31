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
import {image_Rectangle_link} from './assets/imageLinks.js'
import {image_photo_1_link} from './assets/imageLinks.js'
const Page_02  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page4}    >
			<View style = {noneModeStyles._Image}    >
				<View style = {noneModeStyles._Mask}    >
				</View>
				<View style = {noneModeStyles._Mask_2}    >
				</View>
				<View style = {noneModeStyles._Rectangle_container}    >
					<View style = {noneModeStyles._Rectangle}   >
						<Image style={{height: "100%", width: "100%"}} source = {{uri: image_Rectangle_link}}/>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Header}    >
				<View style = {noneModeStyles._Icon}    >
				</View>
				<Text style = {noneModeStyles._Academy_Detail}   >
					ХУВААРЬ
				</Text>
				<View style = {noneModeStyles._Icon_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Tab}    >
				<View style = {noneModeStyles._Base}    >
				</View>
				<Text style = {noneModeStyles._Programs}   >
					Хөтөлбөр
				</Text>
				<View style = {noneModeStyles._Schedule}    >
					<View style = {noneModeStyles._Base_2}    >
					</View>
					<Text style = {noneModeStyles._Schedule_2}   >
						хуваарь
					</Text>
				</View>
				<Text style = {noneModeStyles._About}   >
					Дэлгэрэнгүй
				</Text>
			</View>
			<View style = {noneModeStyles._Section}    >
				<View style = {noneModeStyles._Text}    >
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<Text style = {noneModeStyles._U9}   >
						U9
					</Text>
					<View style = {noneModeStyles._layer_526779}    >
						<View style = {noneModeStyles._layer_4463cc}   >
							<Svg style={{height: 5, width: 9}} viewBox = "0 0 9 5">
								<Path fill = {"#C3C3C3"}     d = "M0.188288 0.183058C0.420028 -0.0422442 0.784677 -0.0595752 1.03686 0.131065L1.09743 0.183058L4.5 3.49062L7.90257 0.183058C8.13431 -0.0422442 8.49896 -0.0595752 8.75115 0.131065L8.81171 0.183058C9.04345 0.408361 9.06128 0.76288 8.86519 1.00806L8.81171 1.06694L4.95457 4.81694C4.72283 5.04224 4.35818 5.05958 4.10599 4.86893L4.04543 4.81694L0.188288 1.06694C-0.0627628 0.822864 -0.0627628 0.427136 0.188288 0.183058Z"/>
							</Svg>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Text_2}    >
					<View style = {noneModeStyles._Rectangle_3}    >
					</View>
					<Text style = {noneModeStyles._Mon}   >
						ДАВ
					</Text>
				</View>
				<View style = {noneModeStyles._Text_3}    >
					<View style = {noneModeStyles._Rectangle_4}    >
					</View>
					<Text style = {noneModeStyles._Wed}   >
						МЯГ
					</Text>
				</View>
				<View style = {noneModeStyles._Text_4}    >
					<View style = {noneModeStyles._Rectangle_5}    >
					</View>
					<Text style = {noneModeStyles._Fri}   >
						ЛХА
					</Text>
				</View>
				<View style = {noneModeStyles._Text_5}    >
					<View style = {noneModeStyles._Rectangle_6}    >
					</View>
					<Text style = {noneModeStyles._Sun}   >
						ПҮР
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Section_2}    >
				<View style = {noneModeStyles._Card}    >
					<Text style = {noneModeStyles._Now}   >
						Одоо
					</Text>
					<View style = {noneModeStyles._Card_2}    >
						<View style = {noneModeStyles._Rectangle_7}    >
						</View>
						<View style = {noneModeStyles._Text_6}    >
							<Text style = {noneModeStyles._Lessons}   >
								 101 тоот 12Г анги
							</Text>
							<Text style = {noneModeStyles._90_mins}   >
								60мин
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Line}    >
						<View style = {noneModeStyles._layer_89449f}    >
							<View style = {noneModeStyles._layer_4b0c0d}   >
								<Svg style={{height: 1, width: 354}} viewBox = "0 0 354 1">
									<Path fill = {"none"}   stroke = {"#FF0000"}  d = "M0 0.5H354"/>
								</Svg>
							</View>
						</View>
						<View style = {noneModeStyles._Oval}    >
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_3}    >
					<Text style = {noneModeStyles._02_30_pm}   >
						14:30
					</Text>
					<View style = {noneModeStyles._Card_4}    >
						<View style = {noneModeStyles._Rectangle_8}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_7}    >
						<Text style = {noneModeStyles._Lessons_2}   >
							202 тоот 12а анги
						</Text>
						<Text style = {noneModeStyles._90_mins_2}   >
							60мин
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Card_5}    >
					<Text style = {noneModeStyles._04_00_pm}   >
						15:30
					</Text>
					<View style = {noneModeStyles._Card_6}    >
						<View style = {noneModeStyles._Rectangle_9}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_8}    >
						<Text style = {noneModeStyles._Lessons_3}   >
							202 тоот 12а анги
						</Text>
						<Text style = {noneModeStyles._90_mins_3}   >
							60мин
						</Text>
					</View>
				</View>
				<View style = {noneModeStyles._Card_7}    >
					<Text style = {noneModeStyles._05_15_pm}   >
						16:00
					</Text>
					<View style = {noneModeStyles._Card_8}    >
						<View style = {noneModeStyles._Rectangle_10}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_9}    >
						<Text style = {noneModeStyles._Lessons_4}   >
							202 тоот 12а анги
						</Text>
						<Text style = {noneModeStyles._90_mins_4}   >
							60мин
						</Text>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Rectangle_1}    >
			</View>
			<Text style = {noneModeStyles._IRTS_B_RTGEh}   >
				  ИРЦ БҮРТГЭх
			</Text>
			<View style = {noneModeStyles._photo_1_container}    >
				<View style = {noneModeStyles._photo_1}   >
					<Image style={{height: "100%", width: "100%"}} source = {{uri: image_photo_1_link}}/>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_02

const noneModeStyles = StyleSheet.create({
_page4: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Image: {
	width: 414,
	height: 448,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask: {
	width: 414,
	height: 448,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Mask_2: {
	width: 414,
	height: 448,
	backgroundColor: "rgb(216, 216, 216)",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_container: {
	width: 414,
	height: 448,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle: {
	width: "100%",
	height: "100%",
	},
_Header: {
	width: 386,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 48,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	},
_Icon: {
	width: 18,
	height: 18,
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Academy_Detail: {
	width: 79,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 154},
		{translateY: -11.5},
	],
	color: "rgb(255, 255, 255)",
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
_Tab: {
	width: 386,
	height: 48,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 424,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	},
_Base: {
	width: 386,
	height: 48,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 15,
	shadowOffset: {
		width: 0,
		height: 12
	},
	shadowColor: "rgba(248,247,248,0.35)",
	shadowRadius: 36,
	},
_Programs: {
	width: 54,
	height: "auto",
	position: "absolute",
	top: 18,
	bottom: -2.76562,
	transform: [
		{translateX: 46},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "center",
	},
_Schedule: {
	width: 123,
	height: 37,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 132},
		{translateY: 6},
	],
	},
_Base_2: {
	width: 123,
	height: 37,
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
_Schedule_2: {
	width: 52,
	height: "auto",
	position: "absolute",
	top: 10,
	bottom: -5.76562,
	transform: [
		{translateX: 39},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "center",
	},
_About: {
	width: 78,
	height: "auto",
	position: "absolute",
	top: 18,
	bottom: -2.76562,
	transform: [
		{translateX: 277},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "right",
	},
_Section: {
	width: 343,
	height: 31,
	position: "absolute",
	left: 14,
	top: 502,
	},
_Text: {
	width: 63,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_2: {
	width: 63,
	height: 31,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_U9: {
	width: 17,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 11},
		{translateY: -8.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_layer_526779: {
	position: "absolute",
	transform: [
		{translateX: 44},
		{translateY: 13},
	],
	},
_layer_4463cc: {
	},
_Text_2: {
	width: 55,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 93,
	top: 0,
	},
_Rectangle_3: {
	width: 55,
	height: 31,
	backgroundColor: "rgb(126, 170, 124)",
	position: "absolute",
	borderRadius: 6,
	},
_Mon: {
	width: 28,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 14},
		{translateY: -8.5},
	],
	color: "rgb(255, 255, 255)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_3: {
	width: 55,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 158,
	top: 0,
	},
_Rectangle_4: {
	width: 55,
	height: 31,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Wed: {
	width: 31,
	height: "auto",
	position: "absolute",
	top: 7,
	bottom: -4.125,
	transform: [
		{translateX: 13},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_4: {
	width: 55,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 223,
	top: 0,
	},
_Rectangle_5: {
	width: 55,
	height: 31,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Fri: {
	width: 30,
	height: "auto",
	position: "absolute",
	top: 7,
	bottom: -4.125,
	transform: [
		{translateX: 14},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_5: {
	width: 55,
	height: 31,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 288,
	top: 0,
	},
_Rectangle_6: {
	width: 55,
	height: 31,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Sun: {
	width: 35,
	height: "auto",
	position: "absolute",
	top: 7,
	bottom: -4.125,
	transform: [
		{translateX: 14},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section_2: {
	width: 400,
	height: 348,
	position: "absolute",
	left: 14,
	top: 563,
	},
_Card: {
	width: 400,
	height: 93,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 0,
	},
_Now: {
	width: 41,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -32.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_2: {
	width: 326,
	height: 93,
	position: "absolute",
	left: 60,
	top: 1,
	},
_Rectangle_7: {
	width: 326,
	height: 93,
	backgroundColor: "rgb(242, 242, 242)",
	position: "absolute",
	borderTopWidth: 3,
	borderRightWidth: 3,
	borderBottomWidth: 3,
	borderLeftWidth: 3,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	borderRadius: 6,
	},
_Text_6: {
	width: 306,
	height: 42,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 10},
		{translateY: 13},
	],
	borderTopWidth: 3,
	borderRightWidth: 3,
	borderBottomWidth: 3,
	borderLeftWidth: 3,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Lessons: {
	width: 306,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -21},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_90_mins: {
	width: 262.286,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 5.81067},
		{translateY: 9},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Line: {
	width: 360,
	height: 12,
	position: "absolute",
	left: 40,
	top: 67,
	},
_layer_89449f: {
	position: "absolute",
	transform: [
		{translateX: 6},
		{translateY: 5.5},
	],
	},
_layer_4b0c0d: {
	},
_Oval: {
	width: 12,
	height: 12,
	position: "absolute",
	},
_Card_3: {
	width: 386,
	height: 69,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 109,
	},
_02_30_pm: {
	width: 41,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_4: {
	width: 326,
	height: 69,
	position: "absolute",
	left: 60,
	top: 0,
	},
_Rectangle_8: {
	width: 326,
	height: 69,
	backgroundColor: "rgb(126, 170, 124)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_7: {
	width: 306,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 70},
		{translateY: 6},
	],
	borderTopWidth: 3,
	borderRightWidth: 3,
	borderBottomWidth: 3,
	borderLeftWidth: 3,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Lessons_2: {
	width: 306,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -21},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_90_mins_2: {
	width: 262.286,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1.81067},
		{translateY: 7},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_5: {
	width: 386,
	height: 69,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 194,
	},
_04_00_pm: {
	width: 41,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_6: {
	width: 326,
	height: 69,
	position: "absolute",
	left: 60,
	top: 0,
	},
_Rectangle_9: {
	width: 326,
	height: 69,
	backgroundColor: "rgb(255, 122, 122)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_8: {
	width: 306,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 70},
		{translateY: 7},
	],
	borderTopWidth: 3,
	borderRightWidth: 3,
	borderBottomWidth: 3,
	borderLeftWidth: 3,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Lessons_3: {
	width: 306,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -21},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_90_mins_3: {
	width: 262.286,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1.81067},
		{translateY: 7},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_7: {
	width: 386,
	height: 69,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 0,
	top: 279,
	},
_05_15_pm: {
	width: 41,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 14,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_8: {
	width: 326,
	height: 69,
	position: "absolute",
	left: 60,
	top: 0,
	},
_Rectangle_10: {
	width: 326,
	height: 69,
	backgroundColor: "rgb(62, 144, 220)",
	position: "absolute",
	borderRadius: 6,
	},
_Text_9: {
	width: 306,
	height: 56,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 70},
		{translateY: 2},
	],
	borderTopWidth: 3,
	borderRightWidth: 3,
	borderBottomWidth: 3,
	borderLeftWidth: 3,
	borderStyle: "solid",
	borderColor: "rgb(151, 151, 151)",
	},
_Lessons_4: {
	width: 306,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -21},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 24,
	fontWeight: "400",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_90_mins_4: {
	width: 262.286,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 1.81067},
		{translateY: 7},
	],
	color: "rgb(250, 250, 250)",
	fontSize: 14,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_1: {
	width: 252,
	height: 62,
	backgroundColor: "rgba(255, 232, 109, 0.72)",
	position: "absolute",
	left: 81,
	top: 355,
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	},
_IRTS_B_RTGEh: {
	width: 174,
	height: "auto",
	position: "absolute",
	left: 157,
	top: 367,
	bottom: 487.625,
	transform: [
		{translateX: -8},
	],
	shadowOffset: {
		width: 0,
		height: 4
	},
	shadowColor: "rgba(0,0,0,0.25)",
	shadowRadius: 4,
	color: "rgb(255, 206, 0)",
	fontSize: 36,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
_photo_1_container: {
	width: 43,
	height: 45,
	position: "absolute",
	left: 95,
	top: 363,
	},
_photo_1: {
	width: "100%",
	height: "100%",
	},
})

