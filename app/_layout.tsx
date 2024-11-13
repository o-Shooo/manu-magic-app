import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="(manu)"
        options={{
          title: "１週間メニュー",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="shopping-list"
        options={{
          title: "買い出しリスト",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="shopping-basket" color={color} />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
