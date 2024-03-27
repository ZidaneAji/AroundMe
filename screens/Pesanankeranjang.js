import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View,Pressable } from "react-native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Pesanankeranjang = ({navigation}) => {
  return (
    <View style={styles.pesanankeranjang}>
      <Image
        style={[styles.pesanankeranjangChild, styles.pesanankeranjangLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-44.png")}
      />
      <Text 
      style={[styles.pesanan, styles.pesananTypo]}
      >{`     Waroenk Ramen,
      Kauman Lama, Purwokerto Lor`}</Text>
      <Text style={[styles.daftarPesanan, styles.pesananTypo]}>
        Daftar Pesanan
      </Text>
      <Image
        style={styles.pesanankeranjangInner}
        contentFit="cover"
        source={require("../assets/group-64.png")}
      />
      <Text style={[styles.indomieTelorSpecial, styles.indomieLayout]}>{`
Indomie Telor Special`}</Text>
      <View style={[styles.rectangleParent, styles.rectangleLayout]}>
        <View style={[styles.groupChild, styles.groupPosition]} />
        <Text style={[styles.text, styles.textLayout]}>-</Text>
        <View style={[styles.groupItem, styles.groupPosition]} />
        <Text style={[styles.text1, styles.textLayout]}>5</Text>
        <Text style={[styles.text2, styles.textLayout]}>+</Text>
      </View>
      <Text style={[styles.rp50k, styles.rp50kTypo]}>Rp. 50K</Text>
      <View style={styles.pesanankeranjangChild1} />
      <Text style={[styles.totalPesanan, styles.rp50kTypo]}>Total Pesanan</Text>
      <Text
        style={[styles.jumlahItem, styles.itemTypo]}
      >{`Jumlah Item     `}</Text>
      <Text style={[styles.rp150k, styles.rp50kTypo]}>Rp. 150K</Text>
      <Text style={[styles.item, styles.itemTypo]}>15 Item</Text>
      <Pressable onPress={() => {navigation.navigate('Pembayaran')}}>
      <View style={[styles.pesanankeranjangChild2, styles.indomieLayout]} />
      <Text style={styles.pesanSekarang}>Pesan Sekarang</Text>
      </Pressable>
      <View style={[styles.pesanankeranjangdeli]} />
      <View style={[styles.pesanankeranjangvery]} />
      <Text style={styles.deliv}>Delivery</Text>
      <View style={[styles.pesanankeranjangpup]} />
      <Text style={styles.pup}>Pick Up</Text>
      <Text style={styles.alamat}>Alamat Pengiriman</Text>
      <Text style={styles.alamat1}>Kost Komar</Text>
      <View style={[styles.gantialamat]} />
      <Text style={styles.gantialamat2}>Ganti Alamat</Text>
      <Image
        style={[
          styles.joshuaRyderI51a7yy7mqaUnsplIcon1,
          styles.joshuaIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/joshuaryderi51a7yy7mqaunsplash-9.png")}
      />
      <View style={styles.pesanankeranjangChild3} />
      <View style={styles.menu}>
        <Image
          style={[
            styles.iconlyregularbolddiscovery,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery2.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Eksplor')}}>
        <Text style={[styles.eksplor, styles.akunTypo]}>Eksplor</Text>
        </Pressable>
        <Image
          style={[
            styles.iconlyregularboldbag2,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldbag-22.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Pesanankeranjang')}}>
        <Text style={[styles.pesanan1, styles.akunTypo]}>Pesanan</Text>
        </Pressable>
        <Image
          style={[
            styles.iconlyregularboldprofile,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldprofile2.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Profil')}}>
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        </Pressable>
        <Image
          style={[
            styles.iconlyregularbulkhome,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome1.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Beranda')}}>
        <Text style={[styles.beranda, styles.akunTypo]}>Beranda</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.iconlybolddelete, styles.iconlybolddeleteLayout]}
        contentFit="cover"
        source={require("../assets/iconlybolddelete.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  pesanankeranjangLayout: {
    width: 365,
    position: "absolute",
  },
  pesananTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    color: Color.colorBlack,
    position: "absolute",
  },
  indomieLayout: {
    height: 49,
    position: "absolute",
  },
  rectangleLayout: {
    height: 27,
    width: 64,
    left: 151,
    position: "absolute",
  },
  groupPosition: {
    height: 24,
    top: 3,
    position: "absolute",
  },
  textLayout: {
    width: 8,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  rp50kTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  joshuaIconLayout: {
    height: 83,
    width: 89,
    borderRadius: Border.br_mini,
    left: 32,
    position: "absolute",
  },
  itemTypo: {
    top: 582,
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  iconlyregularboldbag2Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    position: "absolute",
    overflow: "hidden",
  },
  akunTypo: {
    width: 45,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    fontWeight: "700",
    position: "absolute",
  },
  iconlybolddeleteLayout: {
    left: "86.62%",
    right: "9.23%",
    width: "6.15%",
    height: "2.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  pesanankeranjangChild: {
    top: 286,
    height: 105,
    borderRadius: Border.br_mid,
    left: 10,
  },
  pesanankeranjangItem: {
    top: 279,
    left: 6,
    height: 111,
  },
  pesanan: {
    top: 48,
    left: 45,
  },
  daftarPesanan: {
    top: 247,
    left: 20
  },
  pesanankeranjangInner: {
    top: 44,
    left: 23,
    width: 36,
    height: 36,
    position: "absolute",
  },
  indomieTelorSpecial: {
    top: 267,
    width: 211,
    height: 49,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    left: 151,
    textAlign: "left",
    color: Color.colorBlack,
  },
  groupChild: {
    backgroundColor: Color.colorOrange_100,
    borderRadius: Border.br_8xs,
    height: 24,
    left: 0,
    top: 3,
    width: 64,
  },
  text: {
    top: 0,
    height: 16,
    fontFamily: FontFamily.biryaniRegular,
    width: 8,
    fontSize: FontSize.size_lg,
    left: 7,
  },
  groupItem: {
    left: 43,
    borderTopRightRadius: Border.br_8xs,
    borderBottomRightRadius: Border.br_8xs,
    backgroundColor: Color.colorDarkslategray_100,
    width: 21,
    height: 24,
    top: 3,
  },
  text1: {
    top: 6,
    left: 27,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.lexendDecaRegular,
    height: 1,
  },
  text2: {
    top: 1,
    left: 49,
    height: 18,
    fontFamily: FontFamily.biryaniRegular,
    width: 8,
    fontSize: FontSize.size_lg,
  },
  rectangleParent: {
    top: 355,
  },
  rp50k: {
    top: 320,
    fontFamily: FontFamily.poppinsMedium,
    left: 151,
    color: Color.colorBlack,
  },
  groupInner: {
    backgroundColor: Color.colorOrange_200,
    borderRadius: Border.br_8xs,
    height: 24,
    left: 0,
    top: 3,
    width: 64,
  },
  rectangleGroup: {
    top: 339,
  },
  rp50k1: {
    top: 308,
    fontFamily: FontFamily.poppinsMedium,
    left: 151,
    color: Color.colorBlack,
  },
  pesanankeranjangChild1: {
    top: 549,
    left: 2,
    borderTopLeftRadius: Border.br_11xl,
    borderTopRightRadius: Border.br_11xl,
    backgroundColor: Color.colorGoldenrod,
    width: 388,
    height: 272,
    position: "absolute",
  },
  totalPesanan: {
    top: 616,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "600",
    left: 30,
  },
  jumlahItem: {
    left: 30,
  },
  rp150k: {
    top: 616,
    left: 298,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "600",
  },
  item: {
    left: 306,
    width: 51,
    height: 17,
  },
  pesanankeranjangChild2: {
    top: 666,
    left: 39,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 302,
    height: 49,
    backgroundColor: Color.colorWhite,
  },
  pesanankeranjangdeli: {
    top: 112,
    left: 16,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 354,
    height: 50,
    backgroundColor: "rgba(255, 188, 57, 1)",
  },
  pesanankeranjangvery: {
    top: 70,
    left: 25,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#d8d8d8",
    borderWidth: 1,
    width: 123,
    height: 35,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  pesanankeranjangpup: {
    top: 35,
    left: 240,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(194, 191, 186, 1)",
    borderWidth: 1,
    width: 123,
    height: 35,
    backgroundColor: "rgba(194, 191, 186, 1)",
  },
  gantialamat: {
    top: 55,
    left: 240,
    borderRadius: Border.br_xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "rgba(255, 188, 57, 1)",
    borderWidth: 1,
    width: 123,
    height: 35,
    backgroundColor: Color.colorWhite,
  },
  pesanSekarang: {
    top: 678,
    left: 134,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  deliv: {
    top: 125,
    left: 55,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: "rgba(194, 191, 186, 1)",
    position: "absolute",
  },
  pup: {
    top: 125,
    left: 275,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorWhite,
    position: "absolute",
  },
  gantialamat2: {
    top: 180,
    left: 252,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  alamat: {
    top: 173,
    left: 25,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  alamat1: {
    top: 195,
    left: 25,
    fontFamily: FontFamily.biryaniSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    textAlign: "left",
    color: Color.colorBlack,
    position: "absolute",
  },
  joshuaRyderI51a7yy7mqaUnsplIcon1: {
    top: 297,
  },
  pesanankeranjangChild3: {
    top: 750,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGainsboro_100,
    width: 390,
    height: 120,
    left: 0,
    position: "absolute",
  },
  iconlyregularbolddiscovery: {
    right: "59.47%",
    left: "32.44%",
  },
  iconlyregularboldbag2: {
    right: "31.44%",
    left: "61.47%",
  },
  iconlyregularboldprofile: {
    right: "3.41%",
    left: "89.5%",
  },
  iconlyregularbulkhome: {
    right: "87.5%",
    left: "4.41%",
  },
  beranda: {
    color: Color.colorDarkgray_300,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    left: 0,
  },
  eksplor: {
    left: 74,
    color: Color.colorDarkgray_300,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
  },
  pesanan1: {
    left: 148,
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    color: Color.colorBlack,
  },
  akun: {
    left: 222,
    color: "#949494",
    textAlign: "center",
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
  },
  menu: {
    height: "4.38%",
    width: "67.69%",
    top: "93.6%",
    right: "16.15%",
    bottom: "2.01%",
    left: "16.15%",
    position: "absolute",
  },
  iconlybolddelete: {
    top: "44%",
    bottom: "70.62%",
  },
  pesanankeranjang: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Pesanankeranjang;
