import { NavigationContainer } from "@react-navigation/native";
import { LoginScreen, CategoryScreen, ProductScreen } from "../pages";
import { useApp } from "../context/app";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export function StackRouter() {
  const { user } = useApp();

  return (
    <NavigationContainer>
      {!user ? (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="LoginScreen"
          >
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName="CategoryScreen"
          >
            <Stack.Screen name="CategoryScreen" component={CategoryScreen} />
            <Stack.Screen name="ProductScreen" component={ProductScreen} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}
