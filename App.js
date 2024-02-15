const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import GetStarted from "./screens/GetStarted";
import Order from "./screens/Order";
import Login from "./screens/Login";
import Beranda from "./screens/Beranda";
import Sign from "./screens/Sign";
import Profil from "./screens/Profil";
import Pesanankeranjang from "./screens/Pesanankeranjang";
import Pembayaran from "./screens/Pembayaran";
import Eksplor from "./screens/Eksplor";
import Search from "./screens/Search";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Poppins-Light": require("./assets/fonts/Poppins-Light.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Biryani-Regular": require("./assets/fonts/Biryani-Regular.ttf"),
    "Biryani-SemiBold": require("./assets/fonts/Biryani-SemiBold.ttf"),
    "Biryani-ExtraBold": require("./assets/fonts/Biryani-ExtraBold.ttf"),
    "LexendDeca-Regular": require("./assets/fonts/LexendDeca-Regular.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Mulish-Regular": require("./assets/fonts/Mulish-Regular.ttf"),
    "Mulish-Bold": require("./assets/fonts/Mulish-Bold.ttf"),
    "Montserrat-SemiBold": require("./assets/fonts/Montserrat-SemiBold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="GetStarted"
              component={GetStarted}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Order"
              component={Order}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Beranda"
              component={Beranda}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sign"
              component={Sign}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profil"
              component={Profil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pesanankeranjang"
              component={Pesanankeranjang}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Pembayaran"
              component={Pembayaran}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Eksplor"
              component={Eksplor}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Search"
              component={Search}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
