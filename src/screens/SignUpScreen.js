import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, SafeAreaView, Platform, StyleSheet } from "react-native";
import colors from "../config/colors";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";
import BlockStyle from "../components/BlockStyle";

import FirstScreen from "./FirstScreen";
import SecondScreen from "./Second";
import ThirdScreen from "./Third";
import FourthScreen from "./Fourth";
import FifthScreen from "./Fifth";
import SixthScreen from "./Sixth";
import SeventhScreen from "./Seventh";
import EigthScreen from "./Eigth";
import NinthScreen from "./Ninth";
import TenthScreen from "./Tenth";
import EleventhScreen from "./Eleventh";

const SignUpScreen = (props) => {
  const [first, setFirst] = useState(true);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);
  const [seven, setSeventh] = useState(false);
  const [eight, setEigth] = useState(false);
  const [nine, setNineth] = useState(false);
  const [ten, setTenth] = useState(false);
  const [eleven, setEleventh] = useState(false);
  const [counter, setCounter] = useState(1);

  const Counter = (count) => {
    setCounter(count);
    if (count === 1) {
      setFirst(true);
    } else if (count === 2) {
      setFirst(false);
      setSecond(true);
    } else if (count === 3) {
      setFirst(false);
      setSecond(false);
      setThird(true);
    } else if (count === 4) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(true);
    } else if (count === 5) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(true);
    } else if (count === 6) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(true);
    } else if (count === 7) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(false);
      setSeventh(true);
    } else if (count === 8) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(false);
      setSeventh(false);
      setEigth(true);
    } else if (count === 9) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(false);
      setSeventh(false);
      setEigth(false);
      setNineth(true);
    } else if (count === 10) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(false);
      setSeventh(false);
      setEigth(false);
      setNineth(false);
      setTenth(true);
    } else if (count === 11) {
      setFirst(false);
      setSecond(false);
      setThird(false);
      setFourth(false);
      setFifth(false);
      setSixth(false);
      setSeventh(false);
      setEigth(false);
      setNineth(false);
      setTenth(false);
      setEleventh(true);
    } else {
      return;
    }
  };

  const ScreenViewer = () => {
    if (first === true) {
      return <FirstScreen ScreenCounter={Counter} />;
    } else if (second === true) {
      return <SecondScreen ScreenCounter={Counter} />;
    } else if (third === true) {
      return <ThirdScreen ScreenCounter={Counter} />;
    } else if (fourth === true) {
      return <FourthScreen ScreenCounter={Counter} />;
    } else if (fifth === true) {
      return <FifthScreen ScreenCounter={Counter} />;
    } else if (sixth === true) {
      return <SixthScreen ScreenCounter={Counter} />;
    } else if (seven === true) {
      return <SeventhScreen ScreenCounter={Counter} />;
    } else if (eight === true) {
      return <EigthScreen ScreenCounter={Counter} />;
    } else if (nine === true) {
      return <NinthScreen ScreenCounter={Counter} />;
    } else if (ten === true) {
      return <TenthScreen ScreenCounter={Counter} />;
    } else if (eleven === true) {
      return <EleventhScreen ScreenCounter={Counter} />;
    } else {
      return;
    }
  };

  const greenBorderCounter = () => {
    if (counter === 1) {
      return <View style={styles.borderBlockStyle}></View>;
    } else if (counter == 2) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 3) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 4) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 5) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 6) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 7) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 8) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 9) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 10) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else if (counter == 11) {
      return (
        <>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
          <View style={styles.borderBlockStyle}></View>
        </>
      );
    } else {
      return;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("LoginScreen")}
          style={{ flexDirection: "row" }}
        >
          <Ionicons name="ios-arrow-back" size={18} color={colors.darkGreen} />
          <Text style={[styles.headerTextStyle, { marginLeft: 2 }]}> Back to login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.headerText}>
          <Text style={styles.headerTextStyle}>VIEW FULL FORM</Text>
        </TouchableOpacity>
      </View>

      {/* borderGreen */}

      <View style={styles.borderBlock}>{greenBorderCounter()}</View>

      <View style={BlockStyle.blockStyle}>
        <Text style={styles.screenCounterTextStyle}>{counter === 11 ? "10" : counter} of 10</Text>
        {ScreenViewer()}
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.02)",
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
  header: {
    marginTop: 25,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerTextStyle: {
    color: colors.darkGreen,
    fontWeight: "500",
  },
  screenCounterTextStyle: {
    textAlign: "center",
    color: colors.Gray,
    fontSize: 12,
    marginTop: 10,
  },
  borderBlock: {
    flexDirection: "row",
    marginTop: 25,
    alignSelf: "center",
    width: wp("85%"),
  },
  borderBlockStyle: {
    width: 29,
    height: 5,
    backgroundColor: colors.lightGreen,
  },
});
