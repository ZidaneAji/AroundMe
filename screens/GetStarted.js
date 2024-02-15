import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const GetStarted = ({navigation}) => {
  return (
    <View style={styles.getStarted}>
      <Image
        style={styles.pizzaWoodenTrayRemovebgPreIcon}
        contentFit="cover"
        source={require("../assets/pizzawoodentrayremovebgpreview-2.png")}
      />
      <Pressable style={styles.getStartedChild} onPress={() => {navigation.navigate('Login')}}></Pressable>
      <Text
        style={[styles.bringingHappinesWith, styles.getStarted1FlexBox]}
      >{`Bringing happines 
with delicious food 
is our goal `}</Text>
      <Text style={[styles.getStarted1, styles.getStarted1FlexBox]}>
        Get Started
      </Text>
      <Image
        style={styles.freshBeefBurgerIsolated6Icon}
        contentFit="cover"
        source={require("../assets/78178795-fresh-beef-burger-isolated-6removebgpreview-1.png")}
      />
      <Image
        style={styles.frontViewFriedPotatoesTastIcon}
        contentFit="cover"
        source={require("../assets/frontviewfriedpotatoestastyfrenchfriesinsideplatedarkdeskfoodmealdinnerdishingredientspotatoremovebgpreview-1.png")}
      />
      <Image
        style={styles.cd3d3e2aed4ff0924b7399b201Icon}
        contentFit="cover"
        source={require("../assets/136164593-70cd3d3e2aed4ff0924b7399b201c1ebremovebgpreview-1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  getStarted1FlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  pizzaWoodenTrayRemovebgPreIcon: {
    top: 246,
    left: 27,
    width: 426,
    height: 298,
    position: "absolute",
  },
  getStartedChild: {
    top: 90,
    left: 21,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorWhite,
    width: 348,
    height: 62,
    position: "absolute",
  },
  bringingHappinesWith: {
    top: 318,
    left: 36,
    fontSize: FontSize.size_13xl,
    fontWeight: "700",
    fontFamily: FontFamily.poppinsBold,
    color: Color.colorGray_100,
  },
  getStarted1: {
    top: 101,
    left: 127,
    fontSize: FontSize.size_5xl,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  freshBeefBurgerIsolated6Icon: {
    top: 660,
    left: -138,
    width: 393,
    height: 393,
    position: "absolute",
  },
  frontViewFriedPotatoesTastIcon: {
    top: 876,
    left: 200,
    width: 303,
    height: 454,
    position: "absolute",
  },
  cd3d3e2aed4ff0924b7399b201Icon: {
    top: 1002,
    left: -80,
    width: 366,
    height: 410,
    position: "absolute",
  },
  getStarted: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGoldenrod,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default GetStarted;
