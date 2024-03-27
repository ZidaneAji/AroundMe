import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const AdminRestoran = ({navigation}) => {
  return (
    <View style={styles.adminRestoran}>
      <Image
        style={styles.adminRestoranChild}
        contentFit="cover"
        source={require("../assets/rectangle-389.png")}
      />
      <Image
        style={styles.adminRestoranItem}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.layer85Icon}
        contentFit="cover"
        source={require("../assets/layer-851.png")}
      />
      <View style={styles.adminRestoranInner} />
      <Text style={styles.akosukiRestaurant}>Akosuki Restaurant</Text>
      <Text style={styles.description}>Description</Text>
      <Text style={[styles.shoyuRamenIs, styles.readMorePosition]}>
        Shoyu ramen is a popular Japanese noodle soup dish characterized by its
        savory soy sauce-based broth. It is one of the classic and widely
        enjoyed ramen varieties.
      </Text>
      <View style={styles.rectangleView} />
      <Text style={styles.hapusRestoran}>Hapus Restoran</Text>
      <View style={styles.wrapper}>
        <Text style={styles.text}>0912345678910</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  readMorePosition: {
    left: 33,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    position: "absolute",
  },
  adminRestoranChild: {
    top: -2,
    left: -1,
    borderRadius: Border.br_5xs,
    width: 391,
    height: 495,
    position: "absolute",
  },
  adminRestoranItem: {
    top: 17,
    left: 24,
    width: 55,
    height: 55,
    position: "absolute",
  },
  layer85Icon: {
    height: "2.14%",
    width: "5.13%",
    top: "4.14%",
    right: "84.36%",
    bottom: "93.72%",
    left: "10.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  adminRestoranInner: {
    top: 435,
    left: 0,
    borderRadius: Border.br_31xl,
    width: 390,
    height: 456,
    position: "absolute",
    backgroundColor: Color.colorGoldenrod,
  },
  akosukiRestaurant: {
    top: 465,
    left: 76,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  description: {
    top: 525,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsRegular,
    left: 31,
    textAlign: "left",
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  shoyuRamenIs: {
    top: 561,
    fontSize: FontSize.size_mini,
    color: Color.colorGray_1200,
    width: 343,
  },
  rectangleView: {
    top: 765,
    left: 123,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    width: 157,
    height: 44,
    position: "absolute",
  },
  hapusRestoran: {
    top: 773,
    left: 133,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.biryaniRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  text: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    width: 183,
    color: Color.colorBlack,
    textAlign: "left",
  },
  wrapper: {
    top: 695,
    width: 136,
    left: 31,
    position: "absolute",
  },
  adminRestoran: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 857,
    overflow: "hidden",
    backgroundColor: Color.colorGoldenrod,
  },
});

export default AdminRestoran;
