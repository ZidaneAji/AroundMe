import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profil = ({navigation}) => {
  return (
    <View style={styles.profil}>
      <View style={styles.profilChild} />
      <View style={styles.menu}>
        <Image
          style={[
            styles.iconlyregularbolddiscovery,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery1.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Eksplor')}}>
        <Text style={[styles.eksplor, styles.ProfilTypo]}>Eksplor</Text>
        </Pressable>
        <Image
          style={[
            styles.iconlyregularboldbag2,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldbag-21.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Pesanankeranjang')}}>
        <Text style={[styles.pesanan, styles.ProfilTypo]}>Pesanan</Text>
        </Pressable>
        
        <Image
          style={[
            styles.iconlyregularboldprofile,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldprofile1.png")}
        />
        <Image
          style={[
            styles.iconlyregularbulkhome,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome1.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Beranda')}}>
        <Text style={[styles.beranda, styles.ProfilTypo]}>Beranda</Text>
        </Pressable>
        <Text style={styles.akun}>Akun</Text>
      </View>
      <Text style={styles.profil1}>Profil</Text>
      <View style={styles.profilItem} />
      <Image
        style={styles.unsplash8kicpakvsu4Icon}
        contentFit="cover"
        source={require("../assets/unsplash8kicpakvsu4.png")}
      />
      <Text style={styles.zidaneAji}>Zidane Aji</Text>
      <Text style={[styles.text, styles.textTypo]}>08981235676</Text>
      <Text style={[styles.zidaneajigmailcom, styles.textTypo]}>
        zidaneAji@gmail.com
      </Text>
      <Text style={[styles.pesanan1, styles.logOutTypo]}>Pesanan</Text>
      <Text style={[styles.logOut, styles.logOutTypo]}>Log Out</Text>
      <Image
        style={[styles.profilInner, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.lineIcon, styles.lineIconLayout]}
        contentFit="cover"
        source={require("../assets/line-4.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.iconlybolddocument, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddocument.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconlyregularboldbag2Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    position: "absolute",
    overflow: "hidden",
  },
  ProfilTypo: {
    width: 45,
    textAlign: "center",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_2xs,
    left: 217,
    textAlign: "left",
    position: "absolute",
  },
  logOutTypo: {
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    left: 80,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  lineIconLayout: {
    height: 2,
    width: 286,
    left: 57,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "14.62%",
    right: "80.77%",
    width: "4.62%",
    height: "2.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  profilChild: {
    top: 758,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGainsboro_100,
    width: 390,
    height: 93,
    left: 0,
    position: "absolute",
  },
  iconlyregularbolddiscovery: {
    right: "59.47%",
    left: "32.44%",
  },
  iconlyregularboldbag2: {
    right: "31.44%",
    left: "61.47%",
  },
  iconlyregularboldprofile: {
    right: "3.41%",
    left: "88.5%",
  },
  iconlyregularbulkhome: {
    right: "87.5%",
    left: "4.41%",
  },
  beranda: {
    left: 0,
  },
  eksplor: {
    left: 74,
  },
  pesanan: {
    left: 148,
  },
  akun: {
    left: 222,
    color: Color.colorBlack,
    width: 42,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    position: "absolute",
  },
  menu: {
    height: "4.38%",
    width: "67.69%",
    top: "93.6%",
    right: "16.15%",
    bottom: "2.01%",
    left: "16.15%",
    position: "absolute",
  },
  profil1: {
    top: 48,
    left: 161,
    fontSize: FontSize.size_5xl,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    position: "absolute",
  },
  profilItem: {
    top: 167,
    left: 34,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.colorGoldenrod,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 10,
    elevation: 10,
    shadowOpacity: 1,
    width: 322,
    height: 335,
    position: "absolute",
  },
  unsplash8kicpakvsu4Icon: {
    top: 226,
    width: 138,
    height: 136,
    left: 57,
    position: "absolute",
  },
  zidaneAji: {
    top: 242,
    fontSize: FontSize.size_xl,
    width: 124,
    height: 25,
    left: 217,
    textAlign: "left",
    fontFamily: FontFamily.biryaniExtraBold,
    fontWeight: "800",
    color: Color.colorBlack,
    position: "absolute",
  },
  text: {
    top: 299,
  },
  zidaneajigmailcom: {
    top: 281,
  },
  pesanan1: {
    top: 406,
  },
  logOut: {
    top: 442,
  },
  profilInner: {
    top: 427,
  },
  lineIcon: {
    top: 464,
  },
  vectorIcon: {
    top: "52.25%",
    bottom: "45.62%",
  },
  iconlybolddocument: {
    top: "47.87%",
    bottom: "50%",
  },
  profil: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Profil;
