import { Stack } from "expo-router";

const ManuLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "メニュー TOP" }} />
      <Stack.Screen name="create-manu" options={{ title: "メニュー 作成" }} />
    </Stack>
  );
};

export default ManuLayout;
