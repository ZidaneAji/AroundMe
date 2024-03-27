import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";

const Eksplor = ({navigation}) => {
  return (
    <View style={styles.eksplor}>
      <View style={[styles.urutkanParent, styles.arrowIconPosition]}>
        <Text style={styles.urutkan}>Urutkan</Text>
        <View style={[styles.sortByParent, styles.parentSpaceBlock]}>
          <View style={styles.sortBy}>
            <Text style={[styles.terlaris, styles.textTypo]}>Terkait</Text>
          </View>
          <View style={styles.sortBy1}>
            <Text style={[styles.terlaris1, styles.mClr]}>Terdekat</Text>
          </View>
          <View style={styles.sortBy1}>
            <Text style={[styles.terlaris1, styles.mClr]}>Populer</Text>
          </View>
        </View>
      </View>
      <View style={styles.eksplorChild} />
      <View style={styles.menu}>
        <Image
          style={[styles.iconlyregularbolddiscovery, 
                  styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery3.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Eksplor')}}>
        <Text style={[styles.eksplor1, styles.akunTypo]}>Eksplor</Text>
        </Pressable>
        <Image
          style={[styles.iconlyregularboldbag2, 
                  styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldbag-21.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Pesanankeranjang')}}>
        <Text style={[styles.pesanan, styles.akunTypo]}>Pesanan</Text>
        </Pressable>
        <Image
          style={[styles.iconlyregularboldprofile, 
                  styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldprofile3.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Profil')}}>
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
        </Pressable>
        <Image
          style={[styles.iconlyregularbulkhome, 
                  styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome1.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Beranda')}}>
        <Text style={[styles.beranda, styles.akunTypo]}>Beranda</Text>
        </Pressable>
      </View>
      <Image
        style={styles.filter2Icon}
        contentFit="cover"
        source={require("../assets/filter-2.png")}
      />
      <View style={[styles.rectangleParent, styles.parentLayout1]}>
        <View style={[styles.groupChild, styles.parentLayout1]} />
        <View style={styles.searchParent}>
          <Text style={[styles.search, styles.searchTypo]}>Search</Text>
          <Image
            style={[styles.frameIcon, styles.frameIconLayout]}
            contentFit="cover"
            source={require("../assets/frame.png")}
          />
        </View>
      </View>
      <View style={[styles.groupParent, styles.parentLayout]}>
        <View style={[styles.eksploreRestoranParent, styles.parentLayout]}>
          <Text style={styles.eksploreRestoran}>Eksplore Restoran</Text>
          <Text style={[styles.cekRestoranYang, styles.seeAllClr]}>
            Cek restoran yang dekat dengan anda
          </Text>
        </View>
        <View style={[styles.seeAllParent, styles.parentLayout1]}>
          <Text style={[styles.seeAll, styles.seeAllClr]}>See All</Text>
          <Image
            style={[styles.vectorIcon, styles.vectorIconLayout]}
            contentFit="cover"
            source={require("../assets/vector5.png")}
          />
        </View>
      </View>
      <View style={[styles.rectangleGroup, styles.rectangleLayout1]}>
        <View style={[styles.groupItem, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-387.png")}
        />
        <View style={[styles.groupContainer, styles.frameParentLayout]}>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text
              style={[styles.kaziDeiryTaiger, styles.seeAllClr]}
            >{`kazi Deiry, Taiger Pass
Chittagong`}</Text>
          </View>
          <Text style={styles.eksploreRestoran}>Restaurant</Text>
        </View>
        <Pressable onPress={() => {navigation.navigate('Reservate')}}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.reservate, styles.orderTypo]}>Reservate</Text>
        </View>
        </Pressable>
        
      </View>
      <View style={[styles.groupView, styles.groupViewPosition]}>
        <View style={[styles.groupChild1, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-387.png")}
        />
        <View style={[styles.groupContainer, styles.frameParentLayout]}>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.kaziDeiryTaiger, styles.seeAllClr]}>
              6 Surson Road, Chittagong
            </Text>
          </View>
          <Text style={styles.eksploreRestoran}>Haatkhola</Text>
        </View>
        <Pressable onPress={() => {navigation.navigate('Reservate')}}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.reservate, styles.orderTypo]}>Reservate</Text>
        </View>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent2, styles.rectangleLayout1]}>
        <View style={[styles.groupChild3, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-387.png")}
        />
        <View style={[styles.groupContainer, styles.frameParentLayout]}>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.kaziDeiryTaiger, styles.seeAllClr]}>
              6 Surson Road, Chittagong
            </Text>
          </View>
          <Text style={styles.eksploreRestoran}>Haatkhola</Text>
        </View>
        <Pressable onPress={() => {navigation.navigate('Reservate')}}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.reservate, styles.orderTypo]}>Reservate</Text>
        </View>
        </Pressable>
      </View>
      <View style={[styles.rectangleParent4, styles.groupViewPosition]}>
        <View style={[styles.groupChild6, styles.groupChildShadowBox]} />
        <Image
          style={styles.groupInner}
          contentFit="cover"
          source={require("../assets/rectangle-3871.png")}
        />
        <View style={[styles.groupContainer, styles.frameParentLayout]}>
          <View style={[styles.frameParent, styles.frameParentLayout]}>
            <Image
              style={[styles.frameIcon1, styles.frameIconLayout]}
              contentFit="cover"
              source={require("../assets/frame1.png")}
            />
            <Text style={[styles.kaziDeiryTaiger, styles.seeAllClr]}>
              Zakir Hossain Rd, Chittagong
            </Text>
          </View>
          <Text style={styles.eksploreRestoran}>Tava Restaurant</Text>
        </View>
        <Pressable onPress={() => {navigation.navigate('Reservate')}}>
        <View style={[styles.rectangleContainer, styles.rectangleLayout]}>
          <View style={[styles.rectangleView, styles.rectangleLayout]} />
          <Text style={[styles.reservate, styles.orderTypo]}>Reservate</Text>
        </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  urutkanParent: {
    top: 103,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  urutkan: {
    textAlign: "left",
    color: Color.colorGray_500,
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
  },
  sortByParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  sortBy: {
    backgroundColor: Color.colorCoral_100,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    borderRadius: Border.br_5xs,
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  sortBy1: {
    borderColor: Color.colorGray_600,
    marginLeft: 8,
    borderWidth: 0.6,
    borderStyle: "solid",
    paddingVertical: 0,
    paddingHorizontal: Padding.p_xs,
    height: 24,
    borderRadius: Border.br_5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  parentSpaceBlock: {
    marginLeft: 12,
    justifyContent: "center",
  },
  terlaris: {
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
  },
  terlaris1: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
    textAlign: "center",
  },
  mClr: {
    color: Color.colorGray_800,
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 20,
    letterSpacing: 0,
  },
  arrowIconPosition: {
    left: 38,
    position: "absolute",
  },
  filter2Icon: {
    top: 57,
    left: 340,
    width: 24,
    height: 24,
    position: "absolute",
  },
  akunTypo: {
    width: 45,
    textAlign: "center",
    color: Color.colorDarkgray_300,
    fontFamily: FontFamily.mulishBold,
    fontWeight: "700",
    lineHeight: 13,
    top: 24,
    fontSize: FontSize.size_3xs,
    position: "absolute",
  },
  parentLayout1: {
    height: 36,
    position: "absolute",
  },
  searchTypo: {
    fontFamily: FontFamily.interRegular,
    top: 0,
  },
  frameIconLayout: {
    height: 16,
    width: 16,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  parentLayout: {
    height: 53,
    position: "absolute",
  },
  seeAllClr: {
    color: Color.colorSlategray,
    textAlign: "left",
    position: "absolute",
  },
  rectangleLayout1: {
    height: 88,
    width: 340,
    position: "absolute",
  },
  groupChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
  },
  frameParentLayout: {
    width: 137,
    position: "absolute",
  },
  rectangleLayout: {
    width: 90,
    height: 28,
    position: "absolute",
  },
  orderTypo: {
    color: Color.colorWhite,
    textAlign: "left",
    fontWeight: "600",
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  groupViewPosition: {
    left: 25,
    height: 88,
    width: 340,
    position: "absolute",
  },
  eksplorChild: {
    top: 755,
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
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    maxWidth: "100%",
  },
  iconlyregularboldbag2: {
    right: "31.44%",
    left: "60.47%",
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    maxWidth: "100%",
  },
  iconlyregularboldprofile: {
    right: "3.41%",
    left: "89.8%",
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    maxWidth: "100%",
  },
  iconlyregularbulkhome: {
    right: "87.5%",
    left: "4.41%",
    bottom: "35.14%",
    top: "0%",
    width: "9.09%",
    height: "64.86%",
    maxWidth: "100%",
  },
  beranda: {
    left: 0,
  },
  eksplor1: {
    left: 74,
  },
  pesanan: {
    left: 148,
  },
  akun: {
    left: 222,
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
  groupChild: {
    borderRadius: Border.br_2xs,
    backgroundColor: "#e6e7e9",
    top: 0,
    width: 280,
    height: 36,
    left: 0,
  },
  search: {
    left: 22,
    letterSpacing: 0.1,
    lineHeight: 28,
    color: "#9ca3af",
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    position: "absolute",
  },
  frameIcon: {
    top: 6,
    height: 16,
    width: 16,
  },
  searchParent: {
    left: 27,
    width: 63,
    height: 28,
    top: 4,
    position: "absolute",
  },
  rectangleParent: {
    top: 52,
    left: 55,
    width: 280,
    height: 36,
  },
  eksploreRestoran: {
    left: 1,
    fontSize: FontSize.size_base,
    color: Color.colorGray_300,
    textAlign: "left",
    fontWeight: "700",
    fontFamily: FontFamily.interSemiBold,
    top: 0,
    position: "absolute",
  },
  cekRestoranYang: {
    top: 23,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorSlategray,
    fontSize: FontSize.size_xs,
    left: 0,
    width: 217,
  },
  eksploreRestoranParent: {
    width: 217,
    top: 0,
    left: 0,
  },
  seeAll: {
    lineHeight: 36,
    fontFamily: FontFamily.interMedium,
    fontWeight: "500",
    color: Color.colorSlategray,
    fontSize: FontSize.size_xs,
    left: 0,
    top: 0,
  },
  vectorIcon: {
    height: "24.44%",
    width: "9.8%",
    top: "36.11%",
    right: "0%",
    bottom: "39.44%",
    left: "90.2%",
  },
  seeAllParent: {
    top: 1,
    left: 290,
    width: 51,
  },
  groupParent: {
    top: 149,
    width: 341,
    left: 27,
  },
  groupItem: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(34, 34, 34, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 88,
    width: 340,
    top: 0,
    left: 0,
    position: "absolute",
  },
  groupInner: {
    top: 12,
    left: 12,
    width: 64,
    height: 64,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  frameIcon1: {
    height: 16,
    width: 16,
    top: 4,
  },
  kaziDeiryTaiger: {
    left: 20,
    width: 117,
    fontFamily: FontFamily.interRegular,
    top: 0,
    color: Color.colorSlategray,
    fontSize: FontSize.size_3xs,
  },
  frameParent: {
    top: 25,
    height: 24,
    left: 0,
  },
  groupContainer: {
    top: 20,
    left: 91,
    height: 49,
  },
  rectangleView: {
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_5xs,
    top: 0,
    left: 0,
  },
  reservate: {
    top: 5,
    left: 13,
    fontFamily: FontFamily.poppinsSemiBold,
  },
  rectangleContainer: {
    top: 48,
    left: 240,
  },
  rectangleGroup: {
    top: 229,
    left: 25,
  },
  groupChild1: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(34, 34, 34, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 88,
    width: 340,
    top: 0,
    left: 0,
    position: "absolute",
  },
  order: {
    left: 12,
    fontFamily: FontFamily.interSemiBold,
    color: Color.colorWhite,
    top: 3,
  },
  groupView: {
    top: 470,
  },
  groupChild3: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(34, 34, 34, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 88,
    width: 340,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent2: {
    top: 598,
    left: 25,
  },
  groupChild6: {
    elevation: 4,
    shadowRadius: 4,
    shadowColor: "rgba(34, 34, 34, 0.06)",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 88,
    width: 340,
    top: 0,
    left: 0,
    position: "absolute",
  },
  rectangleParent4: {
    top: 354,
    shadowColor: "rgba(25, 217, 103, 0.22)",
    shadowRadius: 33,
    elevation: 33,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    left: 25,
  },
  eksplor: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.colorGray_100,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default Eksplor;
