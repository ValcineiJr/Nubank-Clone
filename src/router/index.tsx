import React, { useEffect, useState } from "react";

import AsyncStorage from "@react-native-async-storage/async-storage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { appRoutes } from "./routes/app";
import { authRoutes } from "./routes/auth";

import { IRoute, ISubRoute } from "./dtos/IRoute";

const Stack = createNativeStackNavigator();

function renderPages(pages: IRoute[] | ISubRoute[], parent?: string) {
  return pages.map((page: any) => (
    <Stack.Group key={`group-${page.name}`}>
      <Stack.Screen
        key={page.name}
        name={page.name}
        component={page.component}
        initialParams={{
          parent,
          icons: page.icons,
          label: page.label,
        }}
      />

      {page.subPages && renderPages(page.subPages, page.name)}
    </Stack.Group>
  ));
}

function AppRoutes() {
  const [user, setUser] = useState("");

  function getRoutes() {
    return user ? appRoutes : authRoutes;
  }

  useEffect(() => {
    async () => {
      const response = await AsyncStorage.getItem("@login");

      if (response) {
        setUser(response);
      }
    };
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {renderPages(getRoutes())}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppRoutes;
