import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const HomeAddRestoran = ({navigation}) => {
  return (
    <View style={styles.homeAddRestoran}>
      <View style={[styles.homeAddRestoranChild, styles.homeBg]} />
      <Text style={styles.buatRestoranBaru}>Buat Restoran Baru</Text>
      <Text style={[styles.restaurantKamu, styles.textClr]}>
        Restaurant Kamu
      </Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      <View style={[styles.homeAddRestoranItem, styles.homeBg]} />
      <Text style={[styles.text, styles.textClr]}>+</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  homeBg: {
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  textClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  homeAddRestoranChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
  },
  buatRestoranBaru: {
    top: 154,
    left: 23,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue_100,
    width: 221,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  restaurantKamu: {
    top: 55,
    left: 95,
    fontSize: FontSize.size_3xl,
    width: 201,
    height: 34,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorWhite,
  },
  layer88Icon: {
    height: "1.84%",
    width: "4.36%",
    top: "2.84%",
    right: "89.74%",
    bottom: "95.32%",
    left: "5.9%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeAddRestoranItem: {
    top: 718,
    left: 265,
    borderRadius: Border.br_31xl,
    width: 80,
    height: 74,
  },
  text: {
    top: 705,
    left: 289,
    fontSize: FontSize.size_45xl,
    fontFamily: FontFamily.biryaniRegular,
    width: 28,
    height: 52,
  },
  homeAddRestoran: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomeAddRestoran;
