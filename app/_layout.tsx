import { Tabs } from "expo-router";

const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="shopping-list" options={{ headerShown: false }} />
    </Tabs>
  );
};

export default Layout;
