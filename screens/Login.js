import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Login = ({navigation}) => {
  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <Image
        style={styles.layer85Icon}
        contentFit="cover"
        source={require("../assets/layer-85.png")}
      />
      <View style={[styles.groupParent, styles.groupLayout]}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupChild} />
        </View>
        <Text style={[styles.facebook, styles.atauFlexBox]}>Facebook</Text>
        <Image
          style={[styles.facebookOriginal, styles.originalLayout]}
          contentFit="cover"
          source={require("../assets/facebook--original.png")}
        />
      </View>
      <Pressable onPress={() => {navigation.navigate('Beranda')}}>
      <View style={[styles.groupContainer, styles.groupLayout]}>
        <View style={styles.rectangleWrapper}>
          <View style={styles.groupItem} />
        </View>
        <Text style={[styles.google, styles.atauFlexBox]}>Google</Text>
        <Image
          style={[styles.googleOriginal, styles.originalLayout]}
          contentFit="cover"
          source={require("../assets/google--original.png")}
        />
      </View>
      </Pressable>
      
      <Text style={[styles.lupaPassword, styles.atauFlexBox]}>
        Lupa Password ?
      </Text>
      <Text style={[styles.username, styles.usernameTypo]}>Username</Text>
      <Text style={[styles.password, styles.usernameTypo]}>Password</Text>
      <Text style={[styles.atau, styles.atauFlexBox]}>Atau</Text>
      <Image
        style={styles.aroundMeHighResolutionLogoIcon}
        contentFit="cover"
        source={require("../assets/aroundmehighresolutionlogotransparent-1.png")}
      />
      <View style={[styles.loginItem, styles.loginLayout]} />
      <View style={[styles.loginInner, styles.loginLayout]} />
      <View style={[styles.lineView, styles.lineViewLayout]} />
      <View style={[styles.loginChild1, styles.lineViewLayout]} />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 39,
    width: 155,
    top: 763,
    position: "absolute",
  },
  atauFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  originalLayout: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  usernameTypo: {
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_base,
    left: 58,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  loginLayout: {
    height: 43,
    width: 299,
    borderRadius: Border.br_3xs,
    left: 46,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  lineViewLayout: {
    height: 2,
    width: 102,
    borderTopWidth: 2,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    top: 696,
    position: "absolute",
  },
  loginChild: {
    top: 339,
    borderRadius: 47,
    backgroundColor: Color.colorGoldenrod,
    width: 390,
    height: 534,
    left: 0,
    position: "absolute",
  },
  layer85Icon: {
    height: "2.13%",
    width: "5.13%",
    top: "2.96%",
    right: "89.23%",
    bottom: "94.91%",
    left: "5.64%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    backgroundColor: "#3b5998",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    top: 0,
    height: 39,
    width: 155,
    left: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    top: 0,
    height: 39,
    width: 155,
    left: 0,
    position: "absolute",
  },
  facebook: {
    top: 7,
    left: 51,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  facebookOriginal: {
    top: 9,
    left: 27,
  },
  groupParent: {
    left: 209,
  },
  groupItem: {
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_8xs,
    top: 0,
    height: 39,
    width: 155,
    left: 0,
    position: "absolute",
  },
  google: {
    top: 8,
    left: 62,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_mini,
  },
  googleOriginal: {
    top: 10,
    left: 38,
  },
  groupContainer: {
    left: 26,
  },
  lupaPassword: {
    top: 624,
    left: 231,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  username: {
    top: 439,
  },
  password: {
    top: 526,
  },
  atau: {
    top: 685,
    left: 181,
    fontSize: FontSize.size_xs,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    textAlign: "left",
  },
  aroundMeHighResolutionLogoIcon: {
    top: 156,
    left: 91,
    width: 209,
    height: 36,
    position: "absolute",
  },
  loginItem: {
    top: 467,
  },
  loginInner: {
    top: 554,
  },
  lineView: {
    left: 45,
  },
  loginChild1: {
    left: 244,
  },
  login: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Login;
