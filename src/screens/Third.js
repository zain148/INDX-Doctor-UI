import React, { useState } from "react";
import { View, Image, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import colors from "../config/colors";
import InputStyle from "../components/InputStyle";
import { widthPercentageToDP, heightPercentageToDP } from "react-native-responsive-screen";
import Images from "../assets/Images";

const Third = (props) => {
  const [input, setInput] = useState("");
  const [repeat, setRepeat] = useState("");
  const [inputOne, setInputOne] = useState(true);
  const [inputTwo, setInputTwo] = useState(true);

  return (
    <View>
      <Text style={styles.textStyle}>Now Fill Out password below</Text>

      <View>
        <View style={InputStyle.UserNameBlock}>
          <Text style={[InputStyle.UserNameTextStyle]}>Password</Text>
          <Text style={[InputStyle.UserNameTextStyle, { fontWeight: "300", fontSize: 12 }]}>
            Password must be minimum of six
          </Text>
        </View>

        <View
          style={[
            InputStyle.InputBlockStyle,
            {
              width: widthPercentageToDP("60%"),
              marginTop: 10,
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={inputOne}
              onChangeText={(val) => setInput(val)}
              value={input}
              style={[
                InputStyle.TextInputStyle,
                { marginLeft: 0, width: widthPercentageToDP("40%") },
              ]}
              placeholder="Enter your password"
            />

            {/* PasswordViewer*/}
            <TouchableOpacity
              onPress={() => setInputOne(!inputOne)}
              style={{ marginLeft: 25, marginTop: 14 }}
            >
              <Image source={Images.Eye} style={{ width: 18, height: 18 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={[
            InputStyle.InputBlockStyle,
            {
              width: widthPercentageToDP("60%"),
              marginTop: 20,
            },
          ]}
        >
          <View style={{ flexDirection: "row" }}>
            <TextInput
              secureTextEntry={inputTwo}
              onChangeText={(val) => setRepeat(val)}
              value={repeat}
              style={[
                InputStyle.TextInputStyle,
                {
                  marginLeft: 0,
                  width: widthPercentageToDP("40%"),
                },
              ]}
              placeholder="Repeat Password"
            />

            {/* Image_Viewer */}
            <TouchableOpacity
              onPress={() => setInputTwo(!inputTwo)}
              style={{ marginLeft: 25, marginTop: 14 }}
            >
              <Image source={Images.Eye} style={{ width: 18, height: 18 }} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Proceed */}

      <TouchableOpacity
        onPress={() => props.ScreenCounter(4)}
        disabled={input !== "" ? false : true}
        style={[
          InputStyle.InputBlockStyle,
          {
            opacity: input !== "" ? 1 : 0.3,
            backgroundColor: colors.darkGreen,
            width: widthPercentageToDP("60%"),
          },
        ]}
      >
        <Text style={{ color: "white" }}>Proceed</Text>
      </TouchableOpacity>

      <View style={styles.BelowPart}>
        <TouchableOpacity onPress={() => props.ScreenCounter(2)} style={{ flexDirection: "row" }}>
          <Ionicons name="ios-arrow-back" size={18} color={colors.darkGreen} />
          <Text style={{ marginLeft: 5, color: colors.darkGreen }}>Back</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => props.ScreenCounter(4)}>
          <Text style={{ marginLeft: 5, opacity: 0.45, color: colors.darkGreen }}>Skip</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Third;

//Styles
const styles = StyleSheet.create({
  textStyle: {
    color: colors.lightGreen,
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 20,
  },
  BelowPart: {
    top: "48%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
