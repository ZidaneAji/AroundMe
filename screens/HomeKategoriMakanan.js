import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const HomeKategoriMakanan = ({navigation}) => {
  return (
    <View style={styles.homeKategoriMakanan}>
      <View style={[styles.homeKategoriMakananChild, styles.rectangleViewBg]} />
      <View style={[styles.homeKategoriMakananItem, styles.homeLayout]} />
      <View style={[styles.homeKategoriMakananInner, styles.homeLayout]} />
      <Text style={[styles.shoyuRamen, styles.shoyuRamenFlexBox]}>
        Shoyu Ramen
      </Text>
      <Text style={[styles.rp25000, styles.rp25000Typo]}>Rp. 25.000</Text>
      <Text style={[styles.rp250001, styles.rp25000Typo]}>Rp. 25.000</Text>
      <Text style={[styles.dryRamen, styles.rp25000Typo]}>Dry Ramen</Text>
      <Text style={[styles.ramenJepang, styles.textClr]}>Ramen Jepang</Text>
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
      <Image
        style={[styles.image7Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Image
        style={[styles.image8Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <Text style={[styles.namaProduk, styles.namaProdukTypo]}>
        Nama Produk
      </Text>
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
    height: 123,
    width: 350,
    borderWidth: 1,
    borderColor: Color.colorGray_1200,
    borderStyle: "solid",
    borderRadius: Border.br_mini,
    left: 20,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  shoyuRamenFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  rp25000Typo: {
    left: 142,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    position: "absolute",
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
  iconLayout: {
    height: 83,
    width: 82,
    left: 40,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  namaProdukTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  homeKategoriMakananChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
  },
  homeKategoriMakananItem: {
    top: 350,
  },
  homeKategoriMakananInner: {
    top: 195,
  },
  shoyuRamen: {
    top: 229,
    left: 141,
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  rp25000: {
    top: 254,
    width: 140,
  },
  rp250001: {
    top: 412,
    width: 140,
  },
  dryRamen: {
    top: 385,
    width: 163,
  },
  ramenJepang: {
    top: 55,
    left: 110,
    fontSize: FontSize.size_3xl,
    width: 171,
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
    top: "33.41%",
    bottom: "64.18%",
  },
  iconlybolddelete1: {
    top: "51.54%",
    bottom: "46.05%",
  },
  image7Icon: {
    top: 215,
  },
  image8Icon: {
    top: 370,
  },
  namaProduk: {
    top: 154,
    left: 27,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue_100,
    width: 189,
    textAlign: "left",
    position: "absolute",
  },
  homeKategoriMakanan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default HomeKategoriMakanan;
