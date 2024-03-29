import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Order = ({navigation}) => {
  return (
    <View style={styles.order}>
      <Image
        style={[styles.image1Icon, styles.orderItemPosition]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.orderChild}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.layer85Icon}
        contentFit="cover"
        source={require("../assets/layer-85.png")}
      />
      <View style={[styles.orderItem, styles.orderItemPosition]} />
      <Image
        style={styles.imageRemovebgPreview1Icon}
        contentFit="cover"
        source={require("../assets/imageremovebgpreview-1.png")}
      />
      <Text style={[styles.shoyuRamen, styles.ramenFlexBox]}>Shoyu Ramen</Text>
      <Text style={[styles.waroenkRamen, styles.ramenFlexBox]}>
        WAROENK RAMEN
      </Text>
      <Text style={[styles.rp35000, styles.minTypo]}>RP 35.000</Text>
      <View style={[styles.rectangleParent, styles.groupChildLayout]}>
        <View style={[styles.groupChild, styles.text1Position]} />
        
      </View>
      <Text
        style={styles.shoyuRamenIs}
      >{`      Shoyu ramen is a popular Japanese noodle soup 
      dish characterized by its savory soy sauce-based 
      broth It is one of the classic and widely enjoyed 
      ramen varieties.`}</Text>
      <View style={styles.rectangleGroup}>
        <View style={[styles.rectangleView, styles.orderInnerLayout]} />
        <Text style={[styles.text1, styles.textLayout]}>-</Text>
        <View style={[styles.groupChild1, styles.orderInnerLayout]} />
        <Text style={[styles.text2, styles.textLayout]}>5</Text>
        <Text style={[styles.text3, styles.text3Position]}>+</Text>
      </View>
      <Pressable onPress={() => {navigation.navigate('Pesanankeranjang')}}>
      <View style={[styles.orderInner, styles.orderInnerLayout]} />
      <Text style={[styles.tambahPesanan, styles.pickUpTypo]}>
        Tambah Pesanan
      </Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  orderItemPosition: {
    width: 390,
    left: 0,
    position: "absolute",
  },
  ramenFlexBox: {
    textAlign: "left",
    position: "absolute",
  },
  minTypo: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  groupChildLayout: {
    width: 331,
    height: 49,
  },
  text1Position: {
    top: 0,
    position: "absolute",
  },
  kTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 7,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  ratingTypo: {
    color: Color.colorGray_1100,
    top: 29,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "left",
    position: "absolute",
  },
  imageLayout: {
    height: 28,
    position: "absolute",
  },
  groupLayout: {
    height: 36,
    width: 1,
    borderRightWidth: 1,
    borderColor: Color.colorBlack,
    borderStyle: "solid",
    top: 5,
    position: "absolute",
  },
  imageLayout1: {
    width: 30,
    top: 13,
  },
  orderInnerLayout: {
    height: 44,
    borderRadius: Border.br_mini,
    position: "absolute",
  },
  textLayout: {
    width: 19,
    color: Color.colorBlack,
    textAlign: "left",
  },
  text3Position: {
    left: 116,
    position: "absolute",
  },
  pickUpTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.biryaniRegular,
    textAlign: "left",
    position: "absolute",
  },
  image1Icon: {
    top: -51,
    height: 541,
  },
  orderChild: {
    top: 17,
    left: 24,
    width: 55,
    height: 55,
    position: "absolute",
  },
  layer85Icon: {
    height: "2.13%",
    width: "5.13%",
    top: "4.15%",
    right: "84.36%",
    bottom: "93.72%",
    left: "10.51%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  orderItem: {
    top: 435,
    borderRadius: 50,
    height: 456,
    backgroundColor: Color.colorGoldenrod,
  },
  imageRemovebgPreview1Icon: {
    width: 11,
    height: 15,
    left: 30,
    top: 474,
    position: "absolute",
  },
  shoyuRamen: {
    top: 520,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    color: Color.colorWhite,
    fontSize: FontSize.size_5xl,
    left: 31,
  },
  waroenkRamen: {
    left: 44,
    fontSize: FontSize.size_2xs,
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    top: 472,
  },
  rp35000: {
    top: 520,
    left: 250,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
    
  },
  groupChild: {
    borderRadius: 17,
    backgroundColor: Color.colorWhite,
    height: 125,
    width: 334,
    left: -5,
  },
  text: {
    left: 290,
  },
  k: {
    left: 176,
  },
  reviews: {
    left: 174,
  },
  imageRemovebgPreview11: {
    left: 12,
    width: 30,
    top: 13,
  },
  rating: {
    left: 290,
  },
  min: {
    top: 12,
    left: 47,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.poppinsRegular,
  },
  groupItem: {
    left: 125,
  },
  groupInner: {
    left: 240,
  },
  imageRemovebgPreview31: {
    left: 138,
    height: 26,
    position: "absolute",
  },
  imageRemovebgPreview61: {
    top: 9,
    left: 253,
    width: 31,
  },
  rectangleParent: {
    top: 569,
    left: 30,
    height: 49,
    position: "absolute",
  },
  description: {
    top: 627,
    fontSize: FontSize.size_5xl,
    left: 18,
  },
  shoyuRamenIs: {
    top: 600,
    color: "rgba(134, 123, 123, 1)",
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    left: 35,
    position: "absolute",
  },
  rectangleView: {
    width: 151,
    top: 5,
    height: 44,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  text1: {
    left: 16,
    height: 30,
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_13xl,
    width: 19,
    top: 0,
    position: "absolute",
  },
  groupChild1: {
    left: 102,
    backgroundColor: "rgba(168, 168, 168, 0.25)",
    width: 50,
    top: 5,
    height: 44,
  },
  text2: {
    top: 9,
    left: 64,
    fontFamily: FontFamily.lexendDecaRegular,
    height: 35,
    fontSize: FontSize.size_5xl,
    position: "absolute",
  },
  text3: {
    top: 2,
    height: 35,
    width: 19,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.biryaniRegular,
    fontSize: FontSize.size_13xl,
  },
  rectangleGroup: {
    top: 732,
    width: 151,
    height: 44,
    left: 24,
    position: "absolute",
  },
  orderInner: {
    top: 735,
    left: 190,
    width: 165,
    backgroundColor: Color.colorWhite,
  },
  orderChild1: {
    top: 26,
    left: 111,
    width: 250,
    height: 46,
    borderRadius: Border.br_mini,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  orderChild2: {
    top: 30,
    backgroundColor: Color.colorDarkgray_300,
    width: 120,
    height: 39,
    borderRadius: Border.br_mini,
  },
  pickUp: {
    left: 146,
    color: Color.colorWhite,
    top: 39,
    fontSize: FontSize.size_base,
  },
  tambahPesanan: {
    top: 742,
    left: 200,
    color: Color.colorBlack,
  },
  delivery: {
    left: 264,
    color: Color.colorDarkgray_300,
    top: 39,
    fontSize: FontSize.size_base,
  },
  order: {
    borderRadius: Border.br_xl,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorGoldenrod,
  },
});

export default Order;
