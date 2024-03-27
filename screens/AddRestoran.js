import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const AddRestoran = ({navigation}) => {
  return (
    <View style={styles.addRestoran}>
      <View style={styles.addRestoranChild} />
      <Text style={[styles.namaRestoran, styles.restoranTypo]}>
        Nama Restoran
      </Text>
      <Text style={[styles.deskripsiRestoran, styles.nomorTelefonTypo]}>
        Deskripsi Restoran
      </Text>
      <Text style={[styles.nomorTelefon, styles.nomorTelefonTypo]}>
        Nomor Telefon
      </Text>
      <Image
        style={styles.layer88Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      <View style={[styles.addRestoranItem, styles.rectangleViewShadowBox]} />
      <View style={[styles.akosukiRestaurantParent, styles.parentPosition]}>
        <Text style={[styles.akosukiRestaurant, styles.blaTypo]}>
          Akosuki Restaurant
        </Text>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
      </View>
      <View style={[styles.deskripsiBlaBlaBlaParent, styles.parentPosition]}>
        <Text style={[styles.deskripsiBlaBla, styles.blaTypo]}>
          Deskripsi Bla bla bla
        </Text>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
      </View>
      <View style={[styles.parent, styles.parentPosition]}>
        <Text style={[styles.deskripsiBlaBla, styles.blaTypo]}>
          0912345678910
        </Text>
        <View style={[styles.frameChild, styles.frameChildLayout]} />
      </View>
      <Text style={[styles.tambahRestoran, styles.ramenJepangClr]}>
        Tambah Restoran
      </Text>
      <View style={[styles.addRestoranInner, styles.frameChildLayout]} />
      <Text style={[styles.gambarRestoran, styles.restoranTypo]}>
        Gambar Restoran
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <Text style={styles.uploadGambar}>Upload Gambar</Text>
      <Text style={[styles.ramenJepang, styles.ramenJepangClr]}>
        Ramen Jepang
      </Text>
      <Image
        style={[styles.rectangleIcon, styles.parentPosition]}
        contentFit="cover"
        source={require("../assets/rectangle-2620.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  restoranTypo: {
    width: 189,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    left: 23,
    position: "absolute",
  },
  nomorTelefonTypo: {
    width: 206,
    textAlign: "left",
    color: Color.colorDarkslateblue_100,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
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
  blaTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    textAlign: "left",
  },
  frameChildLayout: {
    height: 2,
    width: 351,
    borderTopWidth: 2,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
  },
  ramenJepangClr: {
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  addRestoranChild: {
    top: 0,
    left: 0,
    borderBottomRightRadius: Border.br_base,
    borderBottomLeftRadius: Border.br_base,
    width: 390,
    height: 143,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
  },
  namaRestoran: {
    top: 153,
  },
  deskripsiRestoran: {
    top: 247,
  },
  nomorTelefon: {
    top: 342,
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
  addRestoranItem: {
    top: 731,
    left: 44,
    borderColor: Color.colorGainsboro_200,
    width: 302,
    height: 49,
  },
  akosukiRestaurant: {
    width: 175,
  },
  frameChild: {
    marginTop: 11,
  },
  akosukiRestaurantParent: {
    top: 193,
  },
  deskripsiBlaBla: {
    width: 183,
  },
  deskripsiBlaBlaBlaParent: {
    top: 287,
  },
  parent: {
    top: 382,
  },
  tambahRestoran: {
    top: 742,
    left: 117,
    width: 177,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
  },
  addRestoranInner: {
    top: 694,
    left: 20,
    position: "absolute",
  },
  gambarRestoran: {
    top: 434,
  },
  rectangleView: {
    top: 632,
    left: 244,
    borderColor: Color.colorGainsboro_100,
    width: 119,
    height: 30,
  },
  uploadGambar: {
    top: 638,
    left: 255,
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
  rectangleIcon: {
    top: 480,
    borderRadius: Border.br_5xs,
    width: 188,
    height: 181,
  },
  addRestoran: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default AddRestoran;
