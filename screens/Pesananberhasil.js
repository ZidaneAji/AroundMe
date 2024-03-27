import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Pembayaran = ({navigation}) => {
  return (
    <View style={styles.pembayaran}>
      
      <Text style={styles.title}>{`      Pesanan Berhasil
      Di bayar di tempat`}</Text>
      <Image
      style={styles.iconlyberhasil}
      contentFit="cover"
      source={require("../assets/Group-33519.png")}
      />
      <View style={[styles.rectanglepesanan, styles.rectangleViewTransform]} />
      <View style={styles.groupParent}>
        <Pressable onPress={() => {navigation.navigate('Beranda')}}>
          <View style={[styles.rectangleView, styles.rectangleViewTransform]} />
          <Text style={styles.bayar}>Home</Text>
        </Pressable>
        
        <View style={[styles.rectangleproses, styles.rectangleViewTransform]} />
        <View style={[styles.rectangleantar, styles.rectangleViewTransform]} />
        <View style={[styles.rectangleselesai, styles.rectangleViewTransform]} />
        <Text style={styles.proses}>Pesanan sedang di proses</Text>
        <Text style={styles.antar}>Pesanan sedang di antar</Text>
        <Text style={styles.selesai}>Pesanan sedang di antar</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  labelTypo: {
    height: 20,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    top: "50%",
    position: "absolute",
  },
  label1Typo: {
    height: 20,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    letterSpacing: 0,
    top: "185%",
    position: "absolute",
  },
  groupItemLayout: {
    width: 323,
    height: 62,
    position: "absolute",
  },
  wrapperPosition: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  rectangleViewTransform: {
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    position: "absolute",
  },
  subTotalTypo: {
    height: 24,
    lineHeight: 20,
    top: 1,
    fontSize: FontSize.size_sm,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    textAlign: "left",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    left: 0,
    position: "absolute",
  },
  rp12000Typo: {
    height: "99.22%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    top: "0%",
    textAlign: "left",
    color: Color.colorGray_400,
    fontWeight: "600",
    position: "absolute",
  },
  lineViewPosition: {
    left: 22,
    position: "absolute",
  },
  groupChild: {
    borderTopLeftRadius: Border.br_16xl,
    borderTopRightRadius: Border.br_16xl,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    shadowRadius: 100,
    elevation: 100,
    left: 0,
    top: 0,
    height: 289,
    width: 414,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  groupChildPosition: {
    left: 0,
    top: 0,
    height: 289,
    width: 414,
    position: "absolute",
  },
  pembayaranInner: {
    top: 563,
    left: -12,
    height: 289,
    width: 414,
    position: "absolute",
  },
  iconlylightarrowLeft2: {
    top: 40,
    left: 13,
    width: 27,
    height: 27,
    position: "absolute",
  },
  iconlyberhasil: {
    top: 135,
    left: 65,
    width: 270,
    height: 270,
    position: "absolute",
  },
  title: {
    marginTop: -771,
    width: "35.31%",
    left: "2.5%",
    lineHeight:25,
    color: "#001833",
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "500",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "100%",
    height: 85,
    width: 350,
    position: "absolute",
  },
  address: {
    top: 142,
    width: 160,
    color: Color.colorGray_400,
    left: 35,
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  pembayaranChild: {
    top: 186,
    borderColor: Color.colorBlack,
    width: 324,
    height: 62,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_5xs,
    left: 35,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  pembayaranItem: {
    top: 210,
    width: 14,
    height: 13,
    left: 57,
    position: "absolute",
  },
  label: {
    marginTop: -202,
    left: 93,
    width: 114,
  },
  groupItem: {
    borderColor: "#c1c7d0",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    width: 323,
    borderStyle: "solid",
    left: 0,
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  groupcod: {
    borderColor: "#c1c7d0",
    borderWidth: 1,
    borderRadius: Border.br_5xs,
    width: 323,
    borderStyle: "solid",
    left: 0,
    top: 83,
    backgroundColor: Color.colorWhite,
  },
  groupInner: {
    top: 20,
    left: 18,
    width: 22,
    height: 22,
    position: "absolute",
  },
  groupInner1: {
    top: 102,
    left: 18,
    width: 22,
    height: 22,
    position: "absolute",
  },
  label1: {
    marginTop: -10,
    width: 123,
    left: 57,
  },
  rectangleParent: {
    top: 270,
    width: 323,
    left: 35,
  },
  totalPembayaran: {
    height: "98.89%",
    left: "0.06%",
    top: "0%",
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    textAlign: "left",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    color: Color.colorGray_400,
    fontSize: FontSize.size_base,
    width: "100%",
  },
  totalPembayaranWrapper: {
    height: "100%",
    right: "0%",
    bottom: "0%",
    width: "100%",
  },
  groupWrapper: {
    height: "25.38%",
    width: "43.11%",
    right: "56.89%",
    bottom: "74.62%",
  },
  rectangleView: {
    height: 51.1,
    width: 349,
    top: 55,
    right: "3.46%",
    bottom: "0.85%",
    left: -4,
    borderRadius: 20,
    backgroundColor: Color.colorOrange_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectangleproses: {
    height: 62.21,
    width: 323.47,
    top: -190,
    right: "3.46%",
    bottom: "0.85%",
    left: "3.03%",
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectangleantar: {
    height: 62.21,
    width: 323.47,
    top: -115,
    right: "3.46%",
    bottom: "0.85%",
    left: "3.03%",
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectangleselesai: {
    height: 62.21,
    width: 323.47,
    top: -40,
    right: "3.46%",
    bottom: "0.85%",
    left: "3.03%",
    borderRadius: 20,
    backgroundColor: Color.colorWhite,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rectanglepesanan: {
    height: 239,
    width: 349,
    top: "59.2%",
    right: "3.46%",
    bottom: "0.85%",
    left: "5.1%",
    borderRadius: 20,
    backgroundColor: Color.colorOrange_100,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowRadius: 6,
    elevation: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  rp132000: {
    height: "24.06%",
    width: "45.28%",
    top: "0.66%",
    left: "66.72%",
    fontFamily: FontFamily.poppinsSemiBold,
    transform: [
      {
        rotate: "0.14deg",
      },
    ],
    textAlign: "left",
    color: Color.colorGray_400,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    position: "absolute",
  },
  bayar: {
    top: 70,
    left: 128,
    lineHeight: 23,
    color: Color.colorWhite,
    width: 92,
    height: 26,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  proses: {
    top: -170,
    left: 45,
    lineHeight: 23,
    color: Color.colorBlack,
    width: 260,
    height: 45,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  antar: {
    top: -97,
    left: 43,
    lineHeight: 23,
    color: Color.colorBlack,
    width: 260,
    height: 45,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  selesai: {
    top: -23,
    left: 43,
    lineHeight: 23,
    color: Color.colorBlack,
    width: 260,
    height: 45,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.poppinsSemiBold,
    textAlign: "center",
    fontWeight: "600",
    position: "absolute",
  },
  groupParent: {
    height: "12.61%",
    width: "92.62%",
    top: "84.16%",
    right: "1.46%",
    bottom: "3.23%",
    left: "5.92%",
    position: "absolute",
  },
  subTotal: {
    width: 99,
  },
  rp1320001: {
    width: "45%",
    left: "66.72%",
  },
  subTotalParent: {
    top: 608,
    left: 23,
    width: 356,
    height: 26,
    position: "absolute",
  },
  biayaPengiriman: {
    width: 131,
  },
  rp12000: {
    width: "45.18%",
    left: "66.72%",
  },
  biayaPengirimanParent: {
    top: 653,
    width: 358,
    height: 26,
  },
  lineView: {
    top: 682,
    borderColor: Color.colorBlack,
    borderTopWidth: 1,
    width: 335,
    height: 1,
    borderStyle: "solid",
    left: 22,
  },
  pembayaran: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorWhite,
  },
});

export default Pembayaran;
