import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeAddMakanan = ({navigation}) => {
  return (
    <View style={styles.homeAddMakanan}>
      <View style={[styles.homeAddMakananChild, styles.rectangleViewBg]} />
      <View style={[styles.homeAddMakananItem, styles.homeLayout]} />
      <View style={[styles.homeAddMakananInner, styles.homeLayout]} />
      <Text style={[styles.ramenJepang, styles.jepangFlexBox]}>
        Ramen Jepang
      </Text>
      <Text style={[styles.minumanJepang, styles.jepangFlexBox]}>
        Minuman Jepang
      </Text>
      <Text style={[styles.kategori, styles.kategoriTypo]}>Kategori</Text>
      <Text style={[styles.produkMakananmu, styles.textClr]}>{`Produk 
Makananmu & Minumanmu`}</Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewBg]} />
      <Text style={[styles.text, styles.textClr]}>+</Text>
      <Image
        style={[styles.iconlybolddelete, styles.iconlybolddeleteLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddelete1.png")}
      />
      <Image
        style={[styles.iconlybolddelete1, styles.iconlybolddeleteLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddelete1.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewBg: {
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  homeLayout: {
    opacity: 0.3,
    height: 41,
    width: 350,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 20,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  jepangFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  kategoriTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  textClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconlybolddeleteLayout: {
    left: "84.1%",
    right: "10.77%",
    width: "5.13%",
    height: "2.41%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  homeAddMakananChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
  },
  homeAddMakananItem: {
    top: 201,
  },
  homeAddMakananInner: {
    top: 265,
  },
  ramenJepang: {
    top: 208,
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 44,
    textAlign: "left",
  },
  minumanJepang: {
    top: 272,
    width: 163,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    left: 44,
    textAlign: "left",
  },
  kategori: {
    top: 154,
    left: 23,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue_100,
    width: 189,
    textAlign: "left",
    position: "absolute",
  },
  produkMakananmu: {
    top: 40,
    left: 41,
    fontSize: FontSize.size_3xl,
    width: 324,
    height: 34,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  layer88Icon: {
    height: "1.84%",
    width: "4.36%",
    top: "2.84%",
    right: "89.74%",
    bottom: "95.32%",
    left: "5.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
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
  iconlybolddelete: {
    top: "25.12%",
    bottom: "72.48%",
  },
  iconlybolddelete1: {
    top: "32.7%",
    bottom: "64.89%",
  },
  homeAddMakanan: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default HomeAddMakanan;
