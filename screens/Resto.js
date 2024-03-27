import * as React from "react";
import { StyleSheet, View, Text, Pressable, TouchableOpacity } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Resto = ({navigation}) => {
  return (
    
    <View style={styles.order}>
      <View style={styles.orderChild} />
      <View style={styles.orderItem} />
      <View style={[styles.orderInner, styles.orderInnerLayout]} />
      <View style={[styles.rectangleView, styles.orderInnerLayout]} />
      <View style={[styles.orderChild1, styles.orderChildLayout1]} />
      <View style={[styles.orderChild2, styles.orderChildLayout1]} />
      <View>
      <TouchableOpacity onPress={() => {navigation.navigate('Beranda')}}>
      <Image
        style={styles.layer87Icon}
        contentFit="cover"
        source={require("../assets/layer-87.png")}
      />
      </TouchableOpacity>
      </View>
      <Text style={[styles.waroenkRamen, styles.waroenkRamenTypo]}>
        Waroenk Ramen
      </Text>
      <Text style={[styles.kategori, styles.waroenkRamenTypo1]}>
      Ramen, Makanan Jepang
      </Text>
      <Text style={[styles.alamat, styles.waroenkRamenTypo1]}>
      Jl. Pierre Tendean No.9B, Kauman Lama
Purwokerto Lor
      </Text>
      <View style={styles.rectangleParent}>
        <View style={styles.groupChild} />
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
        <Text style={styles.atau}>Or</Text>
        <Text style={[styles.delivery, styles.pickUpTypo]}>Delivery</Text>
        <Text style={[styles.pickUp, styles.pickUpTypo]}>Pick up</Text>
      </View>
      <View style={styles.rating} />
      <Image
        style={[styles.locationPinIcon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/locationpin2.png")}
      />
      <Text style={[styles.KM, styles.locationKM]}>1,5 KM</Text>
      <Text style={[styles.KM, styles.rating1]}>4</Text>
      <Text style={[styles.KM, styles.harga]}>16rb-40rb</Text>
      <Image
        style={[styles.star2Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/star-22.png")}
      />
      <Image
        style={[styles.image2Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={[styles.image3Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View style={[styles.orderChild3, styles.orderChildLayout]} />
      <Image
        style={[styles.image5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.shoyuRamen, styles.ramenTypo]}>Shoyu Ramen</Text>
      <Text style={[styles.rp35000, styles.ramenTypo]}>Rp. 35.000</Text>
      <Text style={[styles.tambah, styles.tambahTypo1]}>Tambah</Text>
      <Text style={[styles.palingFavorit, styles.waroenkRamenTypo]}>
        Paling Favorit
      </Text>
      <Text style={[styles.shoyuRamen1, styles.shoyuTypo]}>Shoyu Ramen</Text>
      <Text style={[styles.dryRamen, styles.ramenTypo]}>Dry Ramen</Text>
      <Text style={[styles.rp350001, styles.rp350001Typo]}>Rp. 35.000</Text>
      <Text style={[styles.tambah1, styles.tambahTypo]}>Tambah</Text>
      <View style={[styles.orderChild4, styles.orderChildLayout]} />
      <Image
        style={[styles.image4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Text style={[styles.shoyuRamen2, styles.shoyuTypo]}>Shoyu Ramen</Text>
      <Text style={[styles.rp350002, styles.rp350001Typo]}>Rp. 35.000</Text>
      <Text style={[styles.tambah2, styles.tambahTypo1]}>Tambah</Text>
      <Text style={[styles.tambah3, styles.tambahTypo]}>Tambah</Text>
      <Text style={[styles.rp350003, styles.ramenTypo]}>Rp. 35.000</Text>
      <View style={styles.orderChild5} />
      <View style={styles.menu}>
        <Image
          style={[
            styles.iconlyregularbolddiscovery,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery2.png")}
        />
        <Image
          style={[
            styles.iconlyregularboldbag2,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldbag-2.png")}
        />
        <Image
          style={[
            styles.iconlyregularboldprofile,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldprofile2.png")}
        />
        <Image
          style={[
            styles.iconlyregularbulkhome,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome2.png")}
        />
        <Text style={[styles.beranda, styles.akunTypo]}>Beranda</Text>
        <Text style={[styles.eksplor, styles.akunTypo]}>Eksplor</Text>
        <Text style={[styles.pesanan, styles.akunTypo]}>Pesanan</Text>
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  orderInnerLayout: {
    top: 195,
    height: 58,
    width: 117,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  orderChildLayout1: {
    height: 28,
    top: 556,
    width: 117,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  waroenkRamenTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  waroenkRamenTypo1: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    fontWeight: "600",
    position: "absolute",
  },
  groupLayout: {
    height: 29,
    top: 6,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  pickUpTypo: {
    top: 11,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.biryaniRegular,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout2: {
    height: 21,
    width: 21,
    position: "absolute",
  },
  iconLayout1: {
    height: 127,
    width: 125,
    top: 378,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  orderChildLayout: {
    top: 790,
    height: 28,
    width: 117,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  iconLayout: {
    top: 612,
    height: 127,
    width: 125,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  ramenTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  tambahTypo1: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    top: 795,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  shoyuTypo: {
    left: 44,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_base,
    textAlign: "left",
    position: "absolute",
  },
  rp350001Typo: {
    left: 68,
    color: Color.colorBlack,
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  tambahTypo: {
    top: 561,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  iconlyregularboldbag2Layout: {
    bottom: "33.7%",
    top: "0%",
    width: "9.09%",
    height: "66.3%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  akunTypo: {
    width: 45,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    position: "absolute",
  },
  orderChild: {
    top: -47,
    height: 222,
    width: 390,
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  orderItem: {
    top: 197,
    height: 58,
    width: 117,
    left: 13,
    backgroundColor: Color.colorGoldenrod,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  rating: {
    top: 197,
    height: 58,
    width: 117,
    left: 137,
    backgroundColor: Color.colorDarkgray_100,
    position: "absolute",
    borderRadius: Border.br_xl,
  },
  orderInner: {
    left: 260,
    backgroundColor: Color.colorGoldenrod,
    top: 195,
  },
  rectangleView: {
    left: 137,
    backgroundColor: Color.colorSilver_100,
  },
  orderChild1: {
    left: 40,
  },
  orderChild2: {
    left: 239,
  },
  layer87Icon: {
    height: "1.81%",
    width: "4.36%",
    top: "3.85%",
    right: "91.03%",
    bottom: "94.34%",
    left: "4.62%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  waroenkRamen: {
    top: 64,
    left: 26,
    fontSize: 26,
    color: Color.colorWhite,
  },
  alamat: {
    top: 100,
    left: 26,
    fontSize: 14,
    color: Color.colorWhite,
  },
  kategori: {
    top: 40,
    left: 220,
    fontSize: 10,
    color: Color.colorWhite,
  },
  groupChild: {
    top: 0,
    borderRadius: Border.br_xs,
    height: 44,
    width: 364,
    backgroundColor: Color.colorGoldenrod,
    left: 0,
    position: "absolute",
  },
  groupItem: {
    left: 7,
    width: 103,
    backgroundColor: Color.colorWhite,
    height: 29,
    top: 6,
  },
  groupInner: {
    left: 251,
    width: 107,
    backgroundColor: Color.colorSilver_100,
  },
  min: {
    top: 9,
    left: 132,
    fontSize: FontSize.size_sm,
    width: 76,
    fontFamily: FontFamily.biryaniRegular,
    height: 29,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  atau: {
    left: 180,
    fontSize: FontSize.size_smi,
    width: 21,
    top: 11,
    fontFamily: FontFamily.biryaniRegular,
    height: 29,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  delivery: {
    color: Color.colorDarkgray_300,
    fontSize: FontSize.size_xs,
    left: 36,
  },
  KM: {
    color: Color.colorWhite,
    fontSize: FontSize.size_lg,
    left: 36,
  },
  pickUp: {
    left: 284,
    fontSize: FontSize.size_xs,
    color: Color.colorWhite,
  },
  rectangleParent: {
    top: 270,
    height: 44,
    width: 364,
    left: 13,
    position: "absolute",
  },
  locationPinIcon: {
    top: 215,
    left: 30,
  },
  locationKM: {
    top: 212,
    left: 54,
  },
  rating1: {
    top: 183,
    left: 180,
  },
  harga: {
    top: 156,
    left: 277,
  },
  star2Icon: {
    top: 212,
    left: 198,
  },
  image2Icon: {
    left: 36,
  },
  image3Icon: {
    left: 234,
  },
  orderChild3: {
    left: 238,
  },
  image5Icon: {
    left: 234,
  },
  shoyuRamen: {
    left: 242,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "300",
    top: 743,
  },
  rp35000: {
    left: 266,
    top: 767,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  tambah: {
    left: 272,
  },
  palingFavorit: {
    top: 329,
    left: 20,
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
  },
  shoyuRamen1: {
    top: 509,
  },
  dryRamen: {
    left: 254,
    top: 509,
    color: Color.colorBlack,
    fontSize: FontSize.size_base,
    fontWeight: "300",
  },
  rp350001: {
    top: 533,
  },
  tambah1: {
    left: 74,
  },
  orderChild4: {
    left: 40,
  },
  image4Icon: {
    left: 36,
  },
  shoyuRamen2: {
    top: 743,
  },
  rp350002: {
    top: 767,
  },
  tambah2: {
    left: 74,
  },
  tambah3: {
    left: 274,
  },
  rp350003: {
    left: 269,
    top: 533,
    color: Color.colorBlack,
    fontSize: FontSize.size_xs,
  },
  orderChild5: {
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGainsboro_100,
    height: 123,
    top: 765,
    width: 400,
    left: 0,
    position: "absolute",
  },
  iconlyregularbolddiscovery: {
    right: "59.47%",
    left: "32%",
  },
  iconlyregularboldbag2: {
    right: "31.44%",
    left: "60.8%",
  },
  iconlyregularboldprofile: {
    right: "3.41%",
    left: "89.6%",
  },
  iconlyregularbulkhome: {
    right: "87.5%",
    left: "4%",
  },
  beranda: {
    color: Color.colorBlack,
    left: 0,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
  },
  eksplor: {
    left: 74,
    color: Color.colorDarkgray_300,
  },
  pesanan: {
    left: 148,
    color: Color.colorDarkgray_300,
  },
  akun: {
    left: 222,
    color: Color.colorDarkgray_300,
  },
  menu: {
    height: "4.29%",
    width: "67.69%",
    top: "94.28%",
    right: "16.15%",
    bottom: "1.42%",
    left: "16.15%",
    position: "absolute",
  },
  order: {
    flex: 1,
    width: "100%",
    height: 857,
    overflow: "hidden",
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorWhite,
  },
});

export default Resto;
