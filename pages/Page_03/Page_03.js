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
const Page_03  = ({navigation}) => {
	useEffect(() => {
	}, []);
	return (
	<KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{height: Dimensions.get("window").height}}>
	<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {noneModeStyles._page5}    >
			<View style = {noneModeStyles._Header}    >
				<View style = {noneModeStyles._Icon}    >
				</View>
				<Text style = {noneModeStyles._Position}   >
					11Б АНГИЙН ИРЦ
				</Text>
				<View style = {noneModeStyles._Icon_2}    >
				</View>
			</View>
			<View style = {noneModeStyles._Card}    >
				<View style = {noneModeStyles._Rectangle}    >
				</View>
				<View style = {noneModeStyles._Text}    >
					<Text style = {noneModeStyles._Players_Selected}   >
						ИРСЭН
					</Text>
					<Text style = {noneModeStyles._6_16}   >
						31/34
					</Text>
				</View>
				<View style = {noneModeStyles._layer_d35fcc}    >
					<View style = {noneModeStyles._layer_ace4ba}   >
						<Svg style={{height: 43, width: 1}} viewBox = "0 0 1 43">
							<Path fill = {"none"}   stroke = {"#F2F2F2"}  d = "M0.499993 0V43"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Text_2}    >
					<Text style = {noneModeStyles._72_5_M}   >
						2
					</Text>
					<Text style = {noneModeStyles._Players_Selected_2}   >
						ТАСАЛСАН
					</Text>
				</View>
			</View>
			<View style = {noneModeStyles._Section}    >
				<Text style = {noneModeStyles._Selected_Player}   >
					чөлөө авсан
				</Text>
				<View style = {noneModeStyles._layer_b9aaa3}    >
					<View style = {noneModeStyles._layer_243eeb}   >
						<Svg style={{height: 19, width: 19}} viewBox = "0 0 19 19">
							<Path fill = {"#FF7A7A"}     d = "M0.850066 8.67509L0.974569 8.66483L8.41251 8.51752L8.26745 1.02131C8.25671 0.46818 8.69292 0.011 9.24175 0.000171292C9.74837 -0.00982456 10.1739 0.363997 10.2448 0.85662L10.255 0.982097L10.4011 8.47828L17.8391 8.33209C18.3879 8.32126 18.8415 8.76088 18.8523 9.31402C18.8622 9.8246 18.4913 10.2534 18.0025 10.3249L17.878 10.3352L10.44 10.4825L10.5851 17.9787C10.5959 18.5318 10.1596 18.989 9.61081 18.9998C9.10419 19.0098 8.6787 18.636 8.60779 18.1434L8.59761 18.0179L8.45144 10.5217L1.01348 10.6679C0.464644 10.6787 0.0110167 10.2391 0.00027233 9.68597C-0.00881905 9.21793 0.302096 8.8186 0.730476 8.70024L0.850066 8.67509Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Card_2}    >
					<View style = {noneModeStyles._Rectangle_2}    >
					</View>
					<View style = {noneModeStyles._Image}    >
						<View style = {noneModeStyles._Mask}    >
						</View>
						<View style = {noneModeStyles._Mask_2}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_3}    >
						<View style = {noneModeStyles._Text_4}    >
						</View>
						<View style = {noneModeStyles._Text_5}    >
							<View style = {noneModeStyles._Rectangle_3}    >
							</View>
							<Text style = {noneModeStyles._32_5M}   >
								1 ӨДӨР
							</Text>
						</View>
						<View style = {noneModeStyles._Text_6}    >
							<Text style = {noneModeStyles._Brian_Cumin}   >
								Намуун Төрхүү
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View style = {noneModeStyles._Section_2}    >
				<Text style = {noneModeStyles._Available_Players}   >
					сурагчид
				</Text>
				<View style = {noneModeStyles._layer_020bb8}    >
					<View style = {noneModeStyles._layer_2efc15}   >
						<Svg style={{height: 16, width: 18}} viewBox = "0 0 18 16">
							<Path fill = {"none"} fillRule = {"evenodd"} clipRule = {"evenodd"} stroke = {"#333A33"} strokeWidth = {2} d = "M16.8757 1H1L7.35029 8.35778V13.4444L10.5254 15V8.35778L16.8757 1V1Z"/>
						</Svg>
					</View>
				</View>
				<View style = {noneModeStyles._Card_3}    >
					<View style = {noneModeStyles._Rectangle_4}    >
					</View>
					<View style = {noneModeStyles._Image_2}    >
						<View style = {noneModeStyles._Mask_3}    >
						</View>
						<View style = {noneModeStyles._Mask_4}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_7}    >
						<View style = {noneModeStyles._Text_8}    >
							<View style = {noneModeStyles._Rectangle_5}    >
							</View>
							<Text style = {noneModeStyles._14_6M}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_9}    >
							<Text style = {noneModeStyles._Nathaneal_Down}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_6}    >
					</View>
					<View style = {noneModeStyles._Card_4}    >
						<View style = {noneModeStyles._Rectangle_7}    >
						</View>
						<View style = {noneModeStyles._Image_3}    >
							<View style = {noneModeStyles._Mask_5}    >
							</View>
							<View style = {noneModeStyles._Mask_6}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_10}    >
							<View style = {noneModeStyles._Text_11}    >
								<View style = {noneModeStyles._Rectangle_8}    >
								</View>
								<Text style = {noneModeStyles._14_6M_2}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_12}    >
								<Text style = {noneModeStyles._Nathaneal_Down_2}   >
									Амарбаясгалан Бүрэн
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_5}    >
					<View style = {noneModeStyles._Rectangle_9}    >
					</View>
					<View style = {noneModeStyles._Image_4}    >
						<View style = {noneModeStyles._Mask_7}    >
						</View>
						<View style = {noneModeStyles._Mask_8}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_13}    >
						<View style = {noneModeStyles._Text_14}    >
							<View style = {noneModeStyles._Rectangle_10}    >
							</View>
							<Text style = {noneModeStyles._14_6M_3}   >
								14.6M
							</Text>
						</View>
						<View style = {noneModeStyles._Text_15}    >
							<Text style = {noneModeStyles._Nathaneal_Down_3}   >
								Nathaneal Down
							</Text>
						</View>
					</View>
					<View style = {noneModeStyles._Rectangle_11}    >
					</View>
					<View style = {noneModeStyles._Card_6}    >
						<View style = {noneModeStyles._Rectangle_12}    >
						</View>
						<View style = {noneModeStyles._Image_5}    >
							<View style = {noneModeStyles._Mask_9}    >
							</View>
							<View style = {noneModeStyles._Mask_10}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_16}    >
							<View style = {noneModeStyles._Text_17}    >
								<View style = {noneModeStyles._Rectangle_13}    >
								</View>
								<Text style = {noneModeStyles._14_6M_4}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_18}    >
								<Text style = {noneModeStyles._Nathaneal_Down_4}   >
									Номон-Эрдэнэ Цэнгүүн
								</Text>
							</View>
						</View>
					</View>
					<View style = {noneModeStyles._Card_7}    >
						<View style = {noneModeStyles._Rectangle_14}    >
						</View>
						<View style = {noneModeStyles._Image_6}    >
							<View style = {noneModeStyles._Mask_11}    >
							</View>
							<View style = {noneModeStyles._Mask_12}    >
							</View>
						</View>
						<View style = {noneModeStyles._Text_19}    >
							<View style = {noneModeStyles._Text_20}    >
								<View style = {noneModeStyles._Rectangle_15}    >
								</View>
								<Text style = {noneModeStyles._14_6M_5}   >
									ИРСЭН
								</Text>
							</View>
							<View style = {noneModeStyles._Text_21}    >
								<Text style = {noneModeStyles._Nathaneal_Down_5}   >
									Бүрэнжаргал Энхмөнх
								</Text>
							</View>
						</View>
					</View>
				</View>
				<View style = {noneModeStyles._Card_8}    >
					<View style = {noneModeStyles._Rectangle_16}    >
					</View>
					<View style = {noneModeStyles._Image_7}    >
						<View style = {noneModeStyles._Mask_13}    >
						</View>
						<View style = {noneModeStyles._Mask_14}    >
						</View>
					</View>
					<View style = {noneModeStyles._Text_22}    >
						<View style = {noneModeStyles._Text_23}    >
							<View style = {noneModeStyles._Rectangle_17}    >
							</View>
							<Text style = {noneModeStyles._14_6M_6}   >
								ИРСЭН
							</Text>
						</View>
						<View style = {noneModeStyles._Text_24}    >
							<Text style = {noneModeStyles._Nathaneal_Down_6}   >
								Өнөржаргал Баатархүү
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	</ScrollView>
	</KeyboardAvoidingView>
)}
export default Page_03

const noneModeStyles = StyleSheet.create({
_page5: {
	height: 896,
	width: Dimensions.get("window").width,
	minHeight: Dimensions.get("window").height,
	backgroundColor: "rgb(250, 250, 250)",
	},
_Header: {
	width: 383,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 15,
	top: 48,
	},
_Icon: {
	width: 17.8601,
	height: 18,
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Position: {
	width: 127.005,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 127.997},
		{translateY: -11.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 24,
	fontWeight: "700",
	fontFamily: "Buyan",
	letterSpacing: 1,
	textAlign: "center",
	},
_Icon_2: {
	width: 3.97388,
	height: 18,
	position: "absolute",
	transform: [
		{translateX: 355.535},
		{translateY: 3},
	],
	},
_Card: {
	width: 382.979,
	height: 71,
	position: "absolute",
	left: 14,
	top: 101,
	},
_Rectangle: {
	width: 382.979,
	height: 71,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	left: 0,
	top: 0,
	borderRadius: 6,
	},
_Text: {
	width: 114.1,
	height: 43,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 38.6947,
	top: 14,
	},
_Players_Selected: {
	width: 44.6478,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 34.7261},
		{translateY: -21.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_6_16: {
	width: 41.6713,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 35.7183},
		{translateY: 1.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_layer_d35fcc: {
	width: 0.992188,
	height: 43,
	position: "absolute",
	left: 190.993,
	top: 14,
	},
_layer_ace4ba: {
	},
_Text_2: {
	width: 126.006,
	height: 43,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 224.231,
	top: 14,
	},
_72_5_M: {
	width: 8.92944,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 58.5381},
		{translateY: 1.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Players_Selected_2: {
	width: 68.46,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 28.7729},
		{translateY: -21.5},
	],
	color: "rgb(141, 143, 141)",
	fontSize: 12,
	fontWeight: "400",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Section: {
	width: 383,
	height: 145,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 202,
	},
_Selected_Player: {
	width: 102.266,
	height: "auto",
	position: "absolute",
	top: 4,
	bottom: 94.125,
	color: "rgba(51, 58, 51, 0.79)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
_layer_b9aaa3: {
	position: "absolute",
	transform: [
		{translateX: 344.026},
		{translateY: 5.10242},
	],
	},
_layer_243eeb: {
	},
_Card_2: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0,
	top: 43,
	},
_Rectangle_2: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_2: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_3: {
	width: 275.839,
	height: 70,
	position: "absolute",
	left: 91.285,
	top: 14,
	},
_Text_4: {
	width: 39.6891,
	height: 23,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	},
_Text_5: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 196.461},
		{translateY: 23},
	],
	},
_Rectangle_3: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_32_5M: {
	width: 63.3228,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 7.41919},
		{translateY: -8},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_6: {
	width: 154.787,
	height: 37,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 33},
	],
	},
_Brian_Cumin: {
	width: 229.836,
	height: 20,
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	lineHeight: 16.4062,
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Section_2: {
	width: 383,
	height: 499,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	left: 14,
	top: 377,
	},
_Available_Players: {
	width: 78.4375,
	height: "auto",
	position: "absolute",
	top: 1,
	bottom: 451.125,
	transform: [
		{translateX: 0.992188},
	],
	color: "rgba(51, 58, 51, 0.79)",
	fontSize: 20,
	fontWeight: "700",
	fontFamily: "Buyan",
	fontStyle: "normal",
	textDecorationLine: "none",
	letterSpacing: 1,
	textAlign: "left",
	},
_layer_020bb8: {
	position: "absolute",
	transform: [
		{translateX: 353.847},
		{translateY: 5},
	],
	},
_layer_2efc15: {
	},
_Card_3: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0,
	top: 161,
	},
_Rectangle_4: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_2: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask_3: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_4: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_7: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 91.285,
	top: 33,
	},
_Text_8: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_5: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M: {
	width: 37.7046,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.8367},
		{translateY: -8},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_9: {
	width: 130.974,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down: {
	width: 129.982,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_6: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_4: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_7: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_3: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask_5: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_6: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_10: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 91.2849,
	top: 33,
	},
_Text_11: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_8: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_2: {
	width: 62.3013,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8.49878},
		{translateY: 8.99998},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_12: {
	width: 189.516,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down_2: {
	width: 189.516,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_5: {
	width: 383.992,
	height: 222,
	position: "absolute",
	left: 0,
	top: 277,
	},
_Rectangle_9: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_4: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask_7: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_8: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_13: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 91.285,
	top: 33,
	},
_Text_14: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_10: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_3: {
	width: 37.7046,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 20.8367},
		{translateY: -8},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_15: {
	width: 130.974,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down_3: {
	width: 129.982,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Rectangle_11: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Card_6: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0,
	top: 0,
	},
_Rectangle_12: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_5: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask_9: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_10: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_16: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 91.2849,
	top: 33,
	},
_Text_17: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_13: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_4: {
	width: 62.3013,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8.49878},
		{translateY: 9},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_18: {
	width: 189.516,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down_4: {
	width: 189.516,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_7: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0.992188,
	top: 120,
	},
_Rectangle_14: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_6: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 12.8989,
	top: 17,
	},
_Mask_11: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_12: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_19: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 90.2927,
	top: 32,
	},
_Text_20: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_15: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_5: {
	width: 62.3013,
	height: "auto",
	position: "absolute",
	transform: [
		{translateX: 8.49878},
		{translateY: 9},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_21: {
	width: 189.516,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down_5: {
	width: 189.516,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
_Card_8: {
	width: 383,
	height: 102,
	position: "absolute",
	left: 0,
	top: 45,
	},
_Rectangle_16: {
	width: 383,
	height: 102,
	backgroundColor: "rgb(255, 255, 255)",
	position: "absolute",
	borderRadius: 6,
	},
_Image_7: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	left: 13.8912,
	top: 18,
	},
_Mask_13: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Mask_14: {
	width: 65.4871,
	height: 66,
	position: "absolute",
	},
_Text_22: {
	width: 277.824,
	height: 44,
	position: "absolute",
	left: 91.2849,
	top: 33,
	},
_Text_23: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateX: 198.446},
	],
	},
_Rectangle_17: {
	width: 79.3782,
	height: 36,
	backgroundColor: "rgb(226, 237, 225)",
	position: "absolute",
	borderRadius: 6,
	},
_14_6M_6: {
	width: 62.3013,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateX: 6.45605},
		{translateY: -8},
	],
	color: "rgb(126, 170, 124)",
	fontSize: 12,
	fontWeight: "600",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "center",
	},
_Text_24: {
	width: 189.516,
	height: 41,
	backgroundColor: "rgba(0, 0, 0, 0)",
	overflow: "hidden",
	position: "absolute",
	transform: [
		{translateY: 3},
	],
	},
_Nathaneal_Down_6: {
	width: 189.516,
	height: "auto",
	position: "absolute",
	top: "50%",
	transform: [
		{translateY: -20.5},
	],
	color: "rgb(51, 58, 51)",
	fontSize: 14,
	fontWeight: "500",
	fontFamily: "Poppins",
	letterSpacing: 1,
	textAlign: "left",
	},
})

