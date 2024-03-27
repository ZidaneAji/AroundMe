import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { FontFamily, Color, Border, Padding, FontSize } from "../GlobalStyles";

const Search = ({navigation}) => {
  return (
    <View style={styles.search}>
      <Pressable>
        <View style={[styles.rectangleWrapper]}>
        
        <Image
        style={[styles.arrowIcon, styles.arrowIconPosition]}
        contentFit="cover"
        source={require("../assets/arrow.png")}
      />
        </View>
      </Pressable>
      
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
      <Image
        style={styles.filter2Icon}
        contentFit="cover"
        source={require("../assets/filter-2.png")}
      />
      <View style={[styles.searchInner, styles.searchInnerPosition]}>
        <View style={styles.myTemplates8Parent}>
          <View style={styles.myTemplates8}>
            <View style={styles.spacexUj3hvdfqujiUnsplash1Parent}>
              <Image
                style={[
                  styles.spacexUj3hvdfqujiUnsplash1Icon,
                  styles.iconLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/spacexuj3hvdfqujiunsplash-1.png")}
              />
              <View style={[styles.buttonSmall, styles.searchInnerPosition]}>
                <Text style={[styles.text, styles.textClr]}>5</Text>
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-2.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
              <View style={styles.blackRicePepperSaltyParent}>
                <Text style={styles.blackRicePepper}>Japanese Noodle</Text>
                <Image
                  style={styles.discount1Icon}
                  contentFit="cover"
                  source={require("../assets/discount-1.png")}
                />
              </View>
              <Text style={styles.westernFoodMain}>
                Western Food, Main Course, Halal, Pasta, Sauce...
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.blackRicePepperSaltyParent}>
                  <View style={styles.locationPinParent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/locationpin.png")}
                    />
                    <Text style={[styles.m, styles.mClr]}>500 m</Text>
                  </View>
                  <View style={styles.clock1Parent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/clock-1.png")}
                    />
                    <Text style={[styles.minute, styles.mClr]}>10 minute</Text>
                  </View>
                </View>
                <View style={styles.sortByGroup}>
                  <View style={styles.sortBorder}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Free Delivery
                    </Text>
                  </View>
                  <View style={[styles.sortBy4, styles.sortBorder]}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Disc 20%
                    </Text>
                  </View>
                  <View style={[styles.sortBy5, styles.sortBorder]}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Cashback 20%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.myTemplates5}>
            <View style={styles.spacexUj3hvdfqujiUnsplash1Parent}>
              <Image
                style={[
                  styles.spacexUj3hvdfqujiUnsplash1Icon,
                  styles.iconLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/spacexuj3hvdfqujiunsplash-11.png")}
              />
              <View style={[styles.buttonSmall, styles.searchInnerPosition]}>
                <Text style={[styles.text, styles.textClr]}>5</Text>
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-2.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
              <View style={styles.blackRicePepperSaltyParent}>
                <Text style={styles.blackRicePepper}>Cak To Noodle</Text>
                <Image
                  style={styles.discount1Icon}
                  contentFit="cover"
                  source={require("../assets/discount-1.png")}
                />
              </View>
              <Text style={styles.westernFoodMain}>
                Western Food, Main Course, Halal, Pasta, Sauce...
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.blackRicePepperSaltyParent}>
                  <View style={styles.locationPinParent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/locationpin.png")}
                    />
                    <Text style={[styles.m, styles.mClr]}>500 m</Text>
                  </View>
                  <View style={styles.clock1Parent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/clock-1.png")}
                    />
                    <Text style={[styles.minute, styles.mClr]}>10 minute</Text>
                  </View>
                </View>
                <View style={[styles.sortBy6, styles.sortBorder]}>
                  <Text style={[styles.disc20, styles.textTypo]}>
                    Cashback 50%
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.myTemplates5}>
            <View style={styles.spacexUj3hvdfqujiUnsplash1Parent}>
              <Image
                style={[
                  styles.spacexUj3hvdfqujiUnsplash1Icon,
                  styles.iconLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/spacexuj3hvdfqujiunsplash-12.png")}
              />
              <View style={[styles.buttonSmall, styles.searchInnerPosition]}>
                <Text style={[styles.text, styles.textClr]}>5</Text>
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-2.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
              <View style={styles.blackRicePepperSaltyParent}>
                <Text style={styles.blackRicePepper}>
                  Barbeque Ramen Noodle
                </Text>
                <Image
                  style={styles.discount1Icon}
                  contentFit="cover"
                  source={require("../assets/discount-1.png")}
                />
              </View>
              <Text style={styles.westernFoodMain}>
                Western Food, Main Course, Halal, Pasta, Sauce...
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.blackRicePepperSaltyParent}>
                  <View style={styles.locationPinParent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/locationpin.png")}
                    />
                    <Text style={[styles.m, styles.mClr]}>500 m</Text>
                  </View>
                  <View style={styles.clock1Parent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/clock-1.png")}
                    />
                    <Text style={[styles.minute, styles.mClr]}>10 minute</Text>
                  </View>
                </View>
                <View style={[styles.sortBy6, styles.sortBorder]}>
                  <Text style={[styles.disc20, styles.textTypo]}>
                    Free Delivery
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.myTemplates5}>
            <View style={styles.spacexUj3hvdfqujiUnsplash1Parent}>
              <Image
                style={[
                  styles.spacexUj3hvdfqujiUnsplash1Icon,
                  styles.iconLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/spacexuj3hvdfqujiunsplash-13.png")}
              />
              <View style={[styles.buttonSmall, styles.searchInnerPosition]}>
                <Text style={[styles.text, styles.textClr]}>5</Text>
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-2.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
              <View style={styles.blackRicePepperSaltyParent}>
                <Text style={styles.blackRicePepper}>Korean Sushi Noodle</Text>
                <Image
                  style={styles.discount1Icon}
                  contentFit="cover"
                  source={require("../assets/discount-1.png")}
                />
              </View>
              <Text style={styles.westernFoodMain}>
                Western Food, Main Course, Halal, Pasta, Sauce...
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.blackRicePepperSaltyParent}>
                  <View style={styles.locationPinParent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/locationpin.png")}
                    />
                    <Text style={[styles.m, styles.mClr]}>500 m</Text>
                  </View>
                  <View style={styles.clock1Parent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/clock-1.png")}
                    />
                    <Text style={[styles.minute, styles.mClr]}>10 minute</Text>
                  </View>
                </View>
                <View style={styles.sortByGroup}>
                  <View style={styles.sortBorder}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Free Delivery
                    </Text>
                  </View>
                  <View style={[styles.sortBy4, styles.sortBorder]}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Disc 20%
                    </Text>
                  </View>
                  <View style={[styles.sortBy5, styles.sortBorder]}>
                    <Text style={[styles.disc20, styles.textTypo]}>
                      Cashback 20%
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.myTemplates5}>
            <View style={styles.spacexUj3hvdfqujiUnsplash1Parent}>
              <Image
                style={[
                  styles.spacexUj3hvdfqujiUnsplash1Icon,
                  styles.iconLayout1,
                ]}
                contentFit="cover"
                source={require("../assets/spacexuj3hvdfqujiunsplash-14.png")}
              />
              <View style={[styles.buttonSmall, styles.searchInnerPosition]}>
                <Text style={[styles.text, styles.textClr]}>5</Text>
                <Image
                  style={[styles.star2Icon, styles.iconLayout]}
                  contentFit="cover"
                  source={require("../assets/star-2.png")}
                />
              </View>
            </View>
            <View style={[styles.frameParent, styles.parentSpaceBlock]}>
              <View style={styles.blackRicePepperSaltyParent}>
                <Text style={styles.blackRicePepper}>Spicy Jakarta Noodle</Text>
                <Image
                  style={styles.discount1Icon}
                  contentFit="cover"
                  source={require("../assets/discount-1.png")}
                />
              </View>
              <Text style={styles.westernFoodMain}>
                Western Food, Main Course, Halal, Pasta, Sauce...
              </Text>
              <View style={styles.frameGroup}>
                <View style={styles.blackRicePepperSaltyParent}>
                  <View style={styles.locationPinParent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/locationpin.png")}
                    />
                    <Text style={[styles.m, styles.mClr]}>500 m</Text>
                  </View>
                  <View style={styles.clock1Parent}>
                    <Image
                      style={styles.iconLayout}
                      contentFit="cover"
                      source={require("../assets/clock-1.png")}
                    />
                    <Text style={[styles.minute, styles.mClr]}>10 minute</Text>
                  </View>
                </View>
                <View style={[styles.sortBy6, styles.sortBorder]}>
                  <Text style={[styles.disc20, styles.textTypo]}>Disc 20%</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.iconParent, styles.iconLayout1]}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text style={[styles.noodle, styles.textClr]}>Noodle</Text>
      </View>
      <View style={styles.searchChild} />
      <View style={styles.menu}>
        <Image
          style={[
            styles.iconlyregularbolddiscovery,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbolddiscovery1.png")}
        />
        <Image
          style={[
            styles.iconlyregularboldbag2,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldbag-21.png")}
        />
        <Image
          style={[
            styles.iconlyregularboldprofile,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularboldprofile.png")}
        />
        <Image
          style={[
            styles.iconlyregularbulkhome,
            styles.iconlyregularboldbag2Layout,
          ]}
          contentFit="cover"
          source={require("../assets/iconlyregularbulkhome.png")}
        />
        <Pressable onPress={() => {navigation.navigate('Beranda')}}>
        <Text style={[styles.beranda, styles.akunTypo]}>Beranda</Text>
        </Pressable>
        
        <Text style={[styles.eksplor, styles.akunTypo]}>Eksplor</Text>
        <Text style={[styles.pesanan, styles.akunTypo]}>Pesanan</Text>
        <Text style={[styles.akun, styles.akunTypo]}>Akun</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  arrowIconPosition: {
    left: 38,
    position: "absolute",
  },
  rectangleWrapper: {
    width: 77,
    top: 0,
    height: 44,
    left: 0,
    position: "absolute",
  },
  parentSpaceBlock: {
    marginLeft: 12,
    justifyContent: "center",
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
  searchInnerPosition: {
    left: 25,
    justifyContent: "center",
    position: "absolute",
  },
  iconLayout1: {
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  textClr: {
    color: Color.colorGray_900,
    lineHeight: 20,
    letterSpacing: 0,
  },
  iconLayout: {
    height: 10,
    width: 10,
  },
  sortBorder: {
    paddingHorizontal: Padding.p_7xs,
    borderColor: Color.colorCoral_100,
    backgroundColor: Color.colorCoral_200,
    borderRadius: Border.br_7xs,
    borderWidth: 0.6,
    borderStyle: "solid",
    paddingVertical: 0,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
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
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    top: 24,
    fontWeight: "700",
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    position: "absolute",
  },
  arrowIcon: {
    marginTop: -362,
    top: "50%",
    width: 8,
    height: 14,
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
  terlaris: {
    color: Color.colorWhite,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: "500",
    fontSize: FontSize.size_xs,
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
  terlaris1: {
    textAlign: "center",
    fontSize: FontSize.size_xs,
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
  sortByParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  urutkanParent: {
    top: 93,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  filter2Icon: {
    top: 41,
    left: 332,
    width: 24,
    height: 24,
    position: "absolute",
  },
  spacexUj3hvdfqujiUnsplash1Icon: {
    top: 0,
    height: 88,
    left: 0,
    width: 88,
  },
  text: {
    fontSize: FontSize.size_3xs,
    textAlign: "center",
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  star2Icon: {
    marginLeft: 3,
  },
  buttonSmall: {
    top: 79,
    borderRadius: Border.br_3xs,
    borderColor: Color.colorGray_700,
    borderWidth: 0.4,
    width: 38,
    height: 18,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.colorWhite,
    left: 25,
  },
  spacexUj3hvdfqujiUnsplash1Parent: {
    height: 97,
    width: 88,
  },
  blackRicePepper: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    color: Color.colorGray_500,
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.size_xs,
    flex: 1,
  },
  discount1Icon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  blackRicePepperSaltyParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  westernFoodMain: {
    lineHeight: 18,
    marginTop: 2,
    fontSize: FontSize.size_3xs,
    alignSelf: "stretch",
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    color: Color.colorGray_500,
    letterSpacing: 0,
  },
  m: {
    marginLeft: 2,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  locationPinParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  minute: {
    marginLeft: 4,
    fontSize: FontSize.size_3xs,
    textAlign: "left",
  },
  clock1Parent: {
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
  },
  disc20: {
    fontSize: FontSize.size_4xs,
    color: Color.colorCoral_100,
    textAlign: "center",
    lineHeight: 20,
    letterSpacing: 0,
    fontWeight: "500",
  },
  sortBy4: {
    marginLeft: 6,
  },
  sortBy5: {
    display: "none",
    marginLeft: 6,
  },
  sortByGroup: {
    marginTop: 4,
    flexDirection: "row",
  },
  frameGroup: {
    marginTop: 2,
    justifyContent: "center",
  },
  frameParent: {
    flex: 1,
  },
  myTemplates8: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  sortBy6: {
    marginTop: 4,
  },
  myTemplates5: {
    marginTop: 18,
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
  },
  myTemplates8Parent: {
    width: 336,
    height: 616,
    justifyContent: "center",
    alignItems: "center",
  },
  searchInner: {
    top: 147,
  },
  icon: {
    width: 12,
    height: 12,
  },
  noodle: {
    fontSize: FontSize.size_sm,
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    marginLeft: 6,
    textAlign: "left",
    flex: 1,
  },
  iconParent: {
    top: 33,
    left: 44,
    backgroundColor: "#fafafa",
    borderColor: "rgba(25, 25, 25, 0.1)",
    borderWidth: 1,
    width: 276,
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_3xs,
    paddingBottom: Padding.p_3xs,
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  searchChild: {
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
    left: "32.5%",
  },
  iconlyregularboldbag2: {
    right: "31.44%",
    left: "60.8%",
  },
  iconlyregularboldprofile: {
    right: "3.41%",
    left: "89.8%",
  },
  iconlyregularbulkhome: {
    right: "87.5%",
    left: "4.41%",
  },
  beranda: {
    color: Color.colorDarkgray_300,
    width: 42,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    top: 24,
    left: 0,
  },
  eksplor: {
    left: 74,
    color: Color.colorDarkgray_300,
    width: 42,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    top: 24,
  },
  pesanan: {
    left: 148,
    color: Color.colorDarkgray_300,
    width: 42,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
    top: 24,
  },
  akun: {
    left: 222,
    color: Color.colorBlack,
    width: 42,
    fontFamily: FontFamily.mulishBold,
    lineHeight: 13,
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
  search: {
    width: "100%",
    height: 844,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
});

export default Search;
