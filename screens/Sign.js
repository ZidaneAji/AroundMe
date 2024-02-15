import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const Sign = () => {
  return (
    <View style={styles.sign}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <View style={[styles.groupChild, styles.groupChildLayout1]} />
        <Text style={[styles.signUp, styles.signUpFlexBox]}>Sign Up</Text>
      </View>
      <Image
        style={styles.signChild}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Text style={[styles.buatAkunBarumu, styles.signUpFlexBox]}>{`Buat Akun 
Barumu !`}</Text>
      <View style={[styles.groupParent, styles.groupParentLayout]}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <View style={[styles.groupContainer, styles.groupLayout]}>
              <Image
                style={[styles.groupItem, styles.groupChildLayout]}
                contentFit="cover"
                source={require("../assets/vector-11.png")}
              />
              <Image
                style={[styles.vectorIcon, styles.vectorIconLayout]}
                contentFit="cover"
                source={require("../assets/vector.png")}
              />
              <Text style={styles.password}>Password</Text>
            </View>
          </View>
        </View>
        <View style={[styles.groupFrame, styles.groupLayout]}>
          <View style={[styles.groupContainer, styles.groupLayout]}>
            <Image
              style={[styles.groupItem, styles.groupChildLayout]}
              contentFit="cover"
              source={require("../assets/vector-11.png")}
            />
            <Image
              style={[styles.vectorIcon, styles.vectorIconLayout]}
              contentFit="cover"
              source={require("../assets/vector.png")}
            />
            <Text style={styles.password}>Confirm Password</Text>
          </View>
        </View>
        <View style={[styles.vectorContainer, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild1, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
          <Image
            style={[styles.vectorIcon2, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector1.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Email</Text>
        </View>
        <View style={[styles.groupView, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild2, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
          <Image
            style={[styles.vectorIcon3, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector2.png")}
          />
          <Text style={[styles.email, styles.emailTypo]}>Nama</Text>
        </View>
        <View style={[styles.vectorParent1, styles.groupParentLayout]}>
          <Image
            style={[styles.groupChild3, styles.groupChildLayout]}
            contentFit="cover"
            source={require("../assets/vector-11.png")}
          />
          <Image
            style={[styles.vectorIcon4, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector3.png")}
          />
          <Text style={[styles.noTelepon, styles.emailTypo]}>No. Telepon</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 52,
    width: 332,
    position: "absolute",
  },
  signUpFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  groupParentLayout: {
    width: 321,
    position: "absolute",
  },
  groupLayout: {
    height: 28,
    width: 321,
    left: 0,
    position: "absolute",
  },
  groupChildLayout: {
    maxHeight: "100%",
    width: 321,
    left: 0,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  emailTypo: {
    fontSize: FontSize.size_xs,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.biryaniSemiBold,
    left: 27,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  groupChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.colorGoldenrod,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    left: 0,
    top: 0,
  },
  signUp: {
    top: 8,
    left: 134,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.beVietnam,
    color: Color.colorWhite,
    width: 85,
    height: 19,
    fontWeight: "600",
    textAlign: "left",
  },
  rectangleParent: {
    top: 720,
    left: 20,
  },
  signChild: {
    top: 31,
    left: -244,
    width: 613,
    height: 327,
    position: "absolute",
  },
  buatAkunBarumu: {
    top: 131,
    left: 28,
    fontSize: 36,
    fontWeight: "800",
    fontFamily: FontFamily.biryaniExtraBold,
    color: Color.colorBlack,
  },
  groupItem: {
    top: 28,
  },
  vectorIcon: {
    height: "67.86%",
    width: "4.36%",
    right: "95.64%",
    bottom: "32.14%",
    left: "0%",
    maxWidth: "100%",
    top: "0%",
  },
  password: {
    fontSize: FontSize.size_smi,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.biryaniSemiBold,
    left: 27,
    top: 2,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  groupContainer: {
    top: 0,
  },
  groupWrapper: {
    top: 144,
  },
  groupFrame: {
    top: 194,
  },
  groupChild1: {
    top: 25,
  },
  vectorIcon2: {
    height: "56%",
    width: "5.61%",
    top: "8%",
    right: "94.39%",
    bottom: "36%",
    left: "0%",
    maxWidth: "100%",
  },
  email: {
    top: 0,
  },
  vectorContainer: {
    top: 46,
    height: 25,
    left: 0,
  },
  groupChild2: {
    top: 26,
  },
  vectorIcon3: {
    height: "61.54%",
    width: "4.98%",
    top: "3.85%",
    right: "95.02%",
    bottom: "34.62%",
    left: "0%",
    maxWidth: "100%",
  },
  groupView: {
    height: 26,
    left: 0,
    top: 0,
  },
  groupChild3: {
    top: 29,
  },
  vectorIcon4: {
    height: "68.97%",
    width: "3.74%",
    right: "95.33%",
    bottom: "31.03%",
    left: "0.93%",
    top: "0%",
  },
  noTelepon: {
    top: 2,
    fontSize: FontSize.size_xs,
  },
  vectorParent1: {
    top: 93,
    height: 29,
    left: 0,
  },
  groupParent: {
    top: 422,
    left: 35,
    height: 222,
  },
  sign: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Sign;
