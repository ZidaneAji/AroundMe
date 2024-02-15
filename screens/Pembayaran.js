import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Pembayaran = () => {
  return (
    <View style={styles.pembayaran}>
      <View style={styles.pembayaranInner}>
        <View style={styles.groupChildPosition}>
          <View style={[styles.groupChild, styles.groupChildShadowBox]} />
        </View>
      </View>
      <Image
        style={styles.iconlylightarrowLeft2}
        contentFit="cover"
        source={require("../assets/iconlylightarrow--left-2.png")}
      />
      <Text style={styles.title}>Checkout</Text>
      <Text style={styles.address}>Payment Option</Text>
      <View style={styles.pembayaranChild} />
      <Image
        style={styles.pembayaranItem}
        contentFit="cover"
        source={require("../assets/ellipse-140.png")}
      />
      <Text style={[styles.label, styles.labelTypo]}>Credit / Debit Card</Text>
      <View style={[styles.rectangleParent, styles.groupItemLayout]}>
        <View style={[styles.groupItem, styles.groupItemLayout]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/ellipse-141.png")}
        />
        <Text style={[styles.label1, styles.labelTypo]}>Dana</Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.groupWrapper, styles.wrapperPosition]}>
          <View style={[styles.totalPembayaranWrapper, styles.wrapperPosition]}>
            <Text
              style={[styles.totalPembayaran, styles.rectangleViewTransform]}
            >
              Total Pembayaran
            </Text>
          </View>
        </View>
        <View style={[styles.rectangleView, styles.rectangleViewTransform]} />
        <Text style={styles.rp132000}>Rp. 132.000</Text>
        <Text style={styles.bayar}>Bayar</Text>
      </View>
      <View style={styles.subTotalParent}>
        <Text style={[styles.subTotal, styles.subTotalTypo]}>Sub-total</Text>
        <Text style={[styles.rp1320001, styles.rp12000Typo]}>Rp. 132.000</Text>
      </View>
      <View style={[styles.biayaPengirimanParent, styles.lineViewPosition]}>
        <Text style={[styles.biayaPengiriman, styles.subTotalTypo]}>
          Biaya Pengiriman
        </Text>
        <Text style={[styles.rp12000, styles.rp12000Typo]}>Rp. 12.000</Text>
      </View>
      <View style={[styles.lineView, styles.lineViewPosition]} />
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
    top: 10,
    left: 13,
    width: 27,
    height: 27,
    position: "absolute",
  },
  title: {
    marginTop: -412,
    width: "22.31%",
    left: "39.23%",
    lineHeight: 24,
    color: "#001833",
    textAlign: "center",
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    letterSpacing: 0,
    fontSize: FontSize.size_base,
    top: "50%",
    height: 27,
    position: "absolute",
  },
  address: {
    top: 142,
    width: 149,
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
    marginTop: -215,
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
  groupInner: {
    top: 20,
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
    height: "48.03%",
    width: "96.51%",
    top: "51.13%",
    right: "3.46%",
    bottom: "0.85%",
    left: "0.03%",
    borderRadius: 70,
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
    width: "25.28%",
    top: "0.66%",
    left: "74.72%",
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
    width: "22.47%",
    left: "77.53%",
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
    width: "20.18%",
    left: "79.82%",
  },
  biayaPengirimanParent: {
    top: 653,
    width: 358,
    height: 26,
  },
  lineView: {
    top: 699,
    borderColor: "#f4f5f7",
    borderTopWidth: 1,
    width: 343,
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
