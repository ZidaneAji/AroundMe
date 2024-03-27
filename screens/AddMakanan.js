import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AddMakanan = ({navigation}) => {
  return (
    <View style={styles.addMakanan}>
      <View style={styles.addMakananChild} />
      <Text style={[styles.namaProduk, styles.produkTypo]}>Nama Produk</Text>
      <Text style={[styles.deskripsiProduk, styles.produkTypo]}>
        Deskripsi Produk
      </Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      <View style={[styles.addMakananItem, styles.rectangleViewShadowBox]} />
      <View style={[styles.shoyuRamenParent, styles.parentPosition]}>
        <Text style={styles.shoyuRamen}>Shoyu Ramen</Text>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.deskripsiBlaBlaBlaParent, styles.parentPosition]}>
        <Text style={styles.blaTypo}>Deskripsi Bla bla bla</Text>
        <View style={styles.frameChild} />
      </View>
      <View style={[styles.addMakananInner, styles.lineViewPosition]} />
      <Text style={[styles.rp25000, styles.blaTypo]}>Rp 25.000</Text>
      <Text style={[styles.tambahProduk, styles.ramenJepangClr]}>
        Tambah Produk
      </Text>
      <Text style={[styles.hargaProduk, styles.produkTypo]}>Harga Produk</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <Text style={[styles.gambarProduk, styles.produkTypo]}>
        Gambar Produk
      </Text>
      <Image
        style={[styles.image9Icon, styles.parentPosition]}
        contentFit="cover"
        source={require("../assets/image-7.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={styles.uploadGambar}>Upload Gambar</Text>
      <Text style={[styles.ramenJepang, styles.ramenJepangClr]}>
        Ramen Jepang
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  produkTypo: {
    width: 189,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 23,
    position: "absolute",
  },
  rectangleViewShadowBox: {
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  parentPosition: {
    left: 23,
    position: "absolute",
  },
  lineViewPosition: {
    left: 20,
    height: 2,
    width: 351,
    borderTopWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    position: "absolute",
  },
  blaTypo: {
    width: 183,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  ramenJepangClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  addMakananChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  namaProduk: {
    top: 153,
  },
  deskripsiProduk: {
    top: 247,
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
  addMakananItem: {
    top: 731,
    left: 44,
    borderColor: Color.colorGainsboro_200,
    width: 302,
    height: 49,
  },
  shoyuRamen: {
    width: 140,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frameChild: {
    marginTop: 11,
    height: 2,
    width: 351,
    borderTopWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  shoyuRamenParent: {
    top: 193,
  },
  deskripsiBlaBlaBlaParent: {
    top: 287,
  },
  addMakananInner: {
    top: 416,
  },
  rp25000: {
    top: 381,
    left: 23,
    position: "absolute",
  },
  tambahProduk: {
    top: 742,
    left: 117,
    width: 161,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  hargaProduk: {
    top: 344,
  },
  lineView: {
    top: 582,
  },
  gambarProduk: {
    top: 433,
  },
  image9Icon: {
    top: 476,
    width: 82,
    height: 83,
    borderRadius: Border.br_xl,
    left: 23,
  },
  rectangleView: {
    top: 522,
    left: 238,
    borderColor: Color.colorGainsboro_100,
    width: 119,
    height: 30,
  },
  uploadGambar: {
    top: 528,
    left: 249,
    fontSize: FontSize.size_xs,
    width: 107,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  ramenJepang: {
    top: 55,
    left: 110,
    fontSize: FontSize.size_3xl,
    width: 171,
    height: 34,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  addMakanan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default AddMakanan;
