import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";

const KategoriMakanan = ({naviggatiion}) => {
  return (
    <View style={styles.kategoriMakanan}>
      <View style={styles.kategoriMakananChild} />
      <Text style={[styles.ramenJepang, styles.ramenJepangPosition]}>
        Ramen Jepang
      </Text>
      <Text style={[styles.namaKategori, styles.kategoriTypo]}>
        Nama Kategori
      </Text>
      <Text style={[styles.tambahKategoriProdukmu, styles.tambahClr]}>{`Tambah 
Kategori Produkmu`}</Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      <View style={[styles.kategoriMakananItem, styles.kategoriBorder]} />
      <View style={[styles.kategoriMakananInner, styles.kategoriBorder]} />
      <Text style={[styles.tambahKategori, styles.tambahClr]}>
        Tambah Kategori
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  ramenJepangPosition: {
    textAlign: "left",
    left: 23,
    position: "absolute",
  },
  kategoriTypo: {
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  tambahClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  kategoriBorder: {
    borderStyle: "solid",
    position: "absolute",
  },
  kategoriMakananChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  ramenJepang: {
    top: 220,
    color: Color.colorBlack,
    width: 140,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  namaKategori: {
    top: 154,
    fontSize: FontSize.size_xl,
    color: Color.colorDarkslateblue_100,
    width: 189,
    textAlign: "left",
    left: 23,
    position: "absolute",
  },
  tambahKategoriProdukmu: {
    top: 38,
    left: 43,
    fontSize: FontSize.size_3xl,
    width: 234,
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  kategoriMakananItem: {
    top: 731,
    left: 44,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderColor: Color.colorGainsboro_200,
    borderWidth: 1,
    width: 302,
    height: 49,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_xl,
  },
  kategoriMakananInner: {
    top: 257,
    left: 22,
    borderColor: Color.colorBlack,
    borderTopWidth: 2,
    width: 351,
    height: 2,
  },
  tambahKategori: {
    top: 742,
    left: 127,
    width: 161,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
  },
  kategoriMakanan: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default KategoriMakanan;
