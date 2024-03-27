import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Recipe = () => {
  return (
    <View style={styles.receip}>
      <View style={styles.receipChild} />
      <View style={[styles.receipItem, styles.receipLayout]} />
      <Text style={[styles.rp3000021112022, styles.rp3000021112022Typo]}>
        <Text style={styles.rp30000}>{`Rp.30.000
`}</Text>
        <Text style={styles.text}> 21/11/2022</Text>
      </Text>
      <Text
        style={[styles.waroenkRamenKauman, styles.waroenkTypo]}
      >{`Waroenk Ramen, 
Kauman Lama, Purwokerto Lor`}</Text>
      <Text
        style={[styles.waroenkRamenKauman1, styles.waroenkTypo]}
      >{`Waroenk Ramen, 
Kauman Lama, Purwokerto Lor`}</Text>
      <Text style={[styles.pesananDiProses, styles.pesananTypo]}>
        Pesanan di proses
      </Text>
      <Text style={[styles.pesananSelesai, styles.pesananTypo]}>
        Pesanan selesai
      </Text>
      <View style={[styles.receipInner, styles.receipLayout]} />
      <Text style={[styles.rp2000012022023, styles.rp3000021112022Typo]}>
        <Text style={styles.rp30000}>{`Rp.20.000
`}</Text>
        <Text style={styles.text}> 12/02/2023</Text>
      </Text>
      <Text style={styles.pesananDiproses}>Pesanan Diproses</Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  receipLayout: {
    opacity: 0.3,
    height: 103,
    width: 350,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    backgroundColor: Color.colorLightcyan,
    borderRadius: Border.br_mini,
    left: 20,
    position: "absolute",
  },
  rp3000021112022Typo: {
    textAlign: "center",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 38,
    position: "absolute",
  },
  waroenkTypo: {
    width: 189,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 163,
    textAlign: "left",
    position: "absolute",
  },
  pesananTypo: {
    fontSize: FontSize.size_mini,
    left: 23,
    width: 189,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  receipChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    backgroundColor: Color.colorGoldenrod,
    width: 390,
    height: 169,
    position: "absolute",
  },
  receipItem: {
    top: 233,
  },
  rp30000: {
    fontSize: FontSize.size_xl,
  },
  text: {
    fontSize: FontSize.size_2xs,
  },
  rp3000021112022: {
    top: 263,
  },
  waroenkRamenKauman: {
    top: 245,
  },
  waroenkRamenKauman1: {
    top: 424,
  },
  pesananDiProses: {
    top: 195,
  },
  pesananSelesai: {
    top: 363,
  },
  receipInner: {
    top: 413,
  },
  rp2000012022023: {
    top: 443,
  },
  pesananDiproses: {
    top: 67,
    left: 86,
    fontSize: FontSize.size_5xl,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  layer88Icon: {
    height: "1.84%",
    width: "4.36%",
    top: "2.84%",
    right: "87.95%",
    bottom: "95.32%",
    left: "7.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  receip: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Recipe;
