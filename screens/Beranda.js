import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const Beranda = ({navigation}) => {
  return (
    <View style={styles.beranda}>
      <View style={styles.vectorParent}>
        <View style={[styles.groupWrapper, styles.groupLayout]}>
          <View style={[styles.groupParent, styles.groupLayout]}>
            <View style={styles.groupContainerPosition}>
              <View style={styles.groupContainerPosition}>
                <View
                  style={[styles.rectangleWrapper, styles.rectangleShadowBox]}
                >
                  <View style={styles.groupItem} />
                </View>
              </View>
              <Text style={styles.semua}>Semua</Text>
            </View>
            <View style={[styles.groupView, styles.groupViewLayout]}>
              <View style={[styles.rectangleParent, styles.groupViewLayout]}>
                <View style={[styles.groupInner, styles.groupInnerLayout]} />
                <View style={[styles.rectangleView, styles.groupInnerLayout]} />
                <View style={[styles.rectangleWrapper, styles.groupPosition]}>
                <View style={styles.groupKid1} />
                <Text style={[styles.makanan, styles.makananTypo]}>
                  Makanan
                </Text>
                </View>
                <View style={[styles.rectangleWrapper, styles.groupPosition]}>
                <View style={styles.groupKid2} />
                <Text style={[styles.minuman, styles.makananTypo]}>
                  Minuman
                </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Pressable onPress={() => {navigation.navigate('Search')}}>
        <View style={[styles.rectangleWrapper, styles.groupPosition]}>
            <View>
              <View style={styles.groupChildren} /></View>
            
              <Image
                style={styles.iconlyboldsearch}
                contentFit="cover"
                source={require("../assets/iconlyboldsearch.png")}
              />
              <Text style={styles.cariLauk}>Cari Lauk...</Text>
              <Image
                style={[styles.ellipseIcon, styles.iconLayout]}
                contentFit="cover"
                source={require("../assets/ellipse-11.png")}
              />
          </View>
        </Pressable>
      </View>
      <View style={styles.berandaChild} />
      <View style={styles.menu}>
      <Image
          style={styles.iconlyregularbulkhome}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome.png")}
        />
        <Image
          style={[
            styles.iconlyregularbolddiscovery,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery.png")}
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
          source={require("../assets/iconlyregularboldbag-2.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Pesanankeranjang')}}>
        <Text style={[styles.pesanan, styles.akunTypo]}>Pesanan</Text>
        </Pressable>
        <Image
              style={[
                styles.iconlyregularboldprofile,
                styles.iconlyregularboldbag2Layout,
              ]}
              contentFit="cover"
              source={require("../assets/iconlyregularboldprofile.png")}
            />
        <Pressable onPress={() => {navigation.navigate('Profil')}}>
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        </Pressable>
        <Text style={styles.beranda1}>Beranda</Text>
        
        
        
      </View>
      <Text style={[styles.disekitar, styles.minuman1Typo]}>Disekitar</Text>
      
      <Pressable onPress={() => {navigation.navigate('Resto')}}>
      <View style={[styles.chickenKatsu, styles.chickenLayout]}>
        <View style={styles.chickenChildShadowBox} />
        <Image
          style={[
            styles.img89892048x13651Icon,
            styles.chickenKatsuItemPosition,
          ]}
          contentFit="cover"
          source={require("../assets/img-89892048x1365-1.png")}
        />
        <Text style={[styles.parjo, styles.parjoPosition]}>PARJO</Text>
        <Text style={[styles.rp22000, styles.text2Clr]}>Rp. 22.000</Text>
        <LinearGradient
          style={[styles.chickenKatsuItem, styles.chickenKatsuItemPosition]}
          locations={[0, 1]}
          colors={["rgba(217, 217, 217, 0)", "rgba(0, 0, 0, 0.7)"]}
        />
        <Text style={styles.km}>0.8 Km</Text>
        <Image
          style={[
            styles.iconlyregularboldlocation,
            styles.iconlyregularboldlocationLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldlocation.png")}
        />
        <View style={[styles.chickenKatsuInner, styles.parjoPosition]} />
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
        <Text style={styles.text}>
          <Text style={styles.parjoTypo}>4.5</Text>
          <Text style={styles.text2Clr}> (120)</Text>
        </Text>
      </View>
      <View style={[styles.chickenKatsu1, styles.chickenLayout]}>
        <View style={styles.chickenChildShadowBox} />
        <Image
          style={[
            styles.img89892048x13651Icon,
            styles.chickenKatsuItemPosition,
          ]}
          contentFit="cover"
          source={require("../assets/img-89892048x1365-1.png")}
        />
        <Text style={[styles.parjo, styles.parjoPosition]}>PARJO</Text>
        <Text style={[styles.rp22000, styles.text2Clr]}>Rp. 22.000</Text>
        <LinearGradient
          style={[styles.chickenKatsuItem, styles.chickenKatsuItemPosition]}
          locations={[0, 1]}
          colors={["rgba(217, 217, 217, 0)", "rgba(0, 0, 0, 0.7)"]}
        />
        <Text style={styles.km}>0.8 Km</Text>
        <Image
          style={[
            styles.iconlyregularboldlocation,
            styles.iconlyregularboldlocationLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldlocation.png")}
        />
        <View style={[styles.chickenKatsuInner, styles.parjoPosition]} />
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
        <Text style={styles.text}>
          <Text style={styles.parjoTypo}>4.5</Text>
          <Text style={styles.text2Clr}> (120)</Text>
        </Text>
      </View>
      </Pressable>
      
      
      
      
      <Text style={[styles.minuman1, styles.minuman1Typo]}>Minuman</Text>
      
      <Pressable onPress={() => {navigation.navigate('Resto')}}>
      <View style={[styles.chickenKatsu2, styles.chickenPosition]}>
        <View style={styles.chickenChildShadowBox} />
        <Image
          style={[
            styles.img89892048x13651Icon,
            styles.chickenKatsuItemPosition,
          ]}
          contentFit="cover"
          source={require("../assets/img-89892048x1365-1.png")}
        />
        <Text style={[styles.parjo, styles.parjoPosition]}>PARJO</Text>
        <Text style={[styles.rp22000, styles.text2Clr]}>Rp. 22.000</Text>
        <LinearGradient
          style={[styles.chickenKatsuItem, styles.chickenKatsuItemPosition]}
          locations={[0, 1]}
          colors={["rgba(217, 217, 217, 0)", "rgba(0, 0, 0, 0.7)"]}
        />
        <Text style={styles.km}>0.8 Km</Text>
        <Image
          style={[
            styles.iconlyregularboldlocation2,
            styles.iconlyregularboldlocationLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldlocation1.png")}
        />
        <View style={[styles.chickenKatsuInner, styles.parjoPosition]} />
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
        <Text style={styles.text}>
          <Text style={styles.parjoTypo}>4.5</Text>
          <Text style={styles.text2Clr}> (120)</Text>
        </Text>
      </View>
      </Pressable>
      <Pressable onPress={() => {navigation.navigate('Resto')}}>
      <View style={[styles.chickenKatsu3, styles.chickenPosition]}>
        <View style={styles.chickenChildShadowBox} />
        <Image
          style={[
            styles.img89892048x13651Icon,
            styles.chickenKatsuItemPosition,
          ]}
          contentFit="cover"
          source={require("../assets/img-89892048x1365-1.png")}
        />
        <Text style={[styles.parjo, styles.parjoPosition]}>PARJO</Text>
        <Text style={[styles.rp22000, styles.text2Clr]}>Rp. 22.000</Text>
        <LinearGradient
          style={[styles.chickenKatsuItem, styles.chickenKatsuItemPosition]}
          locations={[0, 1]}
          colors={["rgba(217, 217, 217, 0)", "rgba(0, 0, 0, 0.7)"]}
        />
        <Text style={styles.km}>0.8 Km</Text>
        <Image
          style={[
            styles.iconlyregularboldlocation2,
            styles.iconlyregularboldlocationLayout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldlocation1.png")}
        />
        <View style={[styles.chickenKatsuInner, styles.parjoPosition]} />
        <Image
          style={[styles.starIcon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/star-1.png")}
        />
        <Text style={styles.text}>
          <Text style={styles.parjoTypo}>4.5</Text>
          <Text style={styles.text2Clr}> (120)</Text>
        </Text>
      </View>
      </Pressable>
      <Text style={[styles.mauMakanApa, styles.parjoTypo]}>Mau makan apa</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 44,
    width: 300,
    left: 0,
    position: "absolute",
  },
  groupKid2: {
    backgroundColor: "white",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "black",
    borderRadius: Border.br_2xs,
    top: 0,
    height: 45,
    width: 90,
    left: 111,
    position: "absolute",
  },
  groupKid1: {
    backgroundColor: "white",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "black",
    borderRadius: Border.br_2xs,
    top: 0,
    height: 45,
    width: 85,
    left: -7,
    position: "absolute",
  },
  groupChildren: {
    backgroundColor: "white",
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "black",
    borderRadius: Border.br_16xl,
    top: 5,
    height: 45,
    width: 304,
    left: 0,
    position: "absolute",
  },
  rectangleShadowBox: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  groupViewLayout: {
    width: 192,
    top: 0,
    height: 44,
    position: "absolute",
  },
  groupInnerLayout: {
    borderWidth: 1,
    borderColor: Color.colorWhite,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_2xs,
    width: 77,
    top: 0,
    height: 44,
    position: "absolute",
  },
  makananTypo: {
    color: Color.colorLightgray_100,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupPosition: {
    height: 49,
    top: 0,
    width: 300,
    left: 0,
    position: "absolute",
  },
  iconLayout: {
    height: 12,
    position: "absolute",
  },
  iconlyregularboldbag2Layout: {
    bottom: "1.61%",
    top: "0%",
    width: "9.09%",
    height: "98.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  akunTypo: {
    color: Color.colorDarkgray_300,
    width: 45,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    top: 24,
    position: "absolute",
  },
  chickenLayout: {
    height: 153,
    width: 216,
    top: 389,
    
    position: "absolute",
  },
  chickenKatsuItemPosition: {
    width: 216,
    left: 0,
    position: "absolute",
  },
  parjoPosition: {
    left: 14,
    position: "absolute",
  },
  text2Clr: {
    color: Color.colorGray_1000,
    fontFamily: FontFamily.mulishRegular,
  },
  iconlyregularboldlocationLayout: {
    left: "6.48%",
    width: "6.02%",
    height: "9.22%",
    right: "87.5%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  minuman1Typo: {
    width: 235,
    lineHeight: 23,
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  chickenPosition: {
    top: 603,
    height: 153,
    width: 216,
    position: "absolute",
  },
  parjoTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
  },
  groupChild: {
    top: 144,
    left: 295,
    width: 15,
    height: 9,
    position: "absolute",
  },
  groupItem: {
    backgroundColor: "#fbbc04",
    borderRadius: Border.br_2xs,
    width: 77,
    top: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    top: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
  groupContainerPosition: {
    width: 77,
    top: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
  semua: {
    left: 13,
    color: Color.colorWhite,
    fontFamily: FontFamily.jostRegular,
    fontSize: FontSize.size_mid,
    top: 10,
    textAlign: "left",
    position: "absolute",
  },
  groupInner: {
    left: 0,
  },
  rectangleView: {
    left: 115,
  },
  makanan: {
    left: 0,
  },
  minuman: {
    left: 120,
  },
  rectangleParent: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    left: 0,
  },
  groupView: {
    left: 108,
  },
  groupParent: {
    top: 0,
  },
  groupWrapper: {
    top: 76,
  },
  rectangleIcon: {
    Color: Color.colorBlack,
    borderRadius: Border.br_xl,
    height: 49,
  },
  iconlyboldsearch: {
    height: "43.47%",
    width: "7%",
    top: "34.29%",
    right: "87.33%",
    bottom: "22.24%",
    left: "5.67%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  cariLauk: {
    top: 15,
    left: 52,
    color: "#d8d6d6",
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.jostRegular,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    top: 17,
    left: 20,
    width: 12,
  },
  vectorGroup: {
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorParent: {
    top: 166,
    left: 49,
    width: 301,
    height: 146,
    position: "absolute",
  },
  berandaChild: {
    top: 760,
    borderRadius: Border.br_mid,
    backgroundColor: Color.colorGainsboro_100,
    width: 390,
    height: 93,
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
    left: "89.8%",
  },
  iconlyregularbulkhome: {
    left: "3.41%",
    right: "87.5%",
    bottom: "1.61%",
    top: "0%",
    width: "9.09%",
    height: "98.39%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  beranda1: {
    width: 42,
    top: 22,
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    left: 0,
    position: "absolute",
  },
  eksplor: {
    left: 74,
  },
  pesanan: {
    left: 148,
  },
  akun: {
    left: 222,
  },
  menu: {
    height: "2.89%",
    width: "67.69%",
    top: "93.61%",
    right: "16.15%",
    bottom: "3.5%",
    left: "16.15%",
    position: "absolute",
  },
  chickenChildShadowBox: {
    backgroundColor: Color.colorOrange_200,
    borderRadius: Border.br_3xs,
    height: 153,
    width: 216,
    shadowOpacity: 1,
    elevation: 10,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    left: 0,
    position: "absolute",
  },
  img89892048x13651Icon: {
    borderTopLeftRadius: Border.br_3xs,
    borderTopRightRadius: Border.br_3xs,
    height: 93,
    top: 0,
  },
  parjo: {
    top: 101,
    fontSize: FontSize.size_mini,
    lineHeight: 20,
    width: 157,
    height: 22,
    color: Color.colorBlack,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    textAlign: "left",
  },
  rp22000: {
    top: 123,
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    width: 90,
    height: 19,
    left: 14,
    position: "absolute",
    textAlign: "left",
  },
  chickenKatsuItem: {
    top: 41,
    height: 52,
    backgroundColor: "transparent",
  },
  km: {
    top: 71,
    width: 38,
    height: 15,
    left: 28,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    fontSize: FontSize.size_3xs,
    color: Color.colorWhite,
    textAlign: "left",
    position: "absolute",
  },
  iconlyregularboldlocation: {
    top: "50.85%",
    bottom: "39.93%",
  },
  chickenKatsuInner: {
    top: 8,
    width: 65,
    height: 17,
    borderRadius: Border.br_3xs,
    left: 14,
    backgroundColor: Color.colorWhite,
  },
  starIcon: {
    left: 21,
    width: 11,
    top: 10,
    height: 12,
  },
  text: {
    top: 9,
    left: 32,
    fontSize: FontSize.size_4xs,
    lineHeight: 12,
    width: 41,
    height: 14,
    textAlign: "center",
    position: "absolute",
  },
  chickenKatsu: {
    left: 28,
  },
  disekitar: {
    top: 346,
    left: 33,
  },
  chickenKatsu1: {
    left: 294,
  },
  minuman1: {
    top: 562,
    left: 28,
  },
  iconlyregularboldlocation2: {
    top: "53.01%",
    bottom: "37.78%",
  },
  chickenKatsu2: {
    left: 28,
  },
  chickenKatsu3: {
    left: 294,
  },
  mauMakanApa: {
    top: 48,
    left: 44,
    fontSize: FontSize.size_13xl,
    lineHeight: 42,
    width: 195,
    textAlign: "left",
    position: "absolute",
  },
  beranda: {
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 857,
    overflow: "hidden",
    borderRadius: Border.br_xl,
  },
});

export default Beranda;
