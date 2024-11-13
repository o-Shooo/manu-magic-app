import { SafeAreaView, Text } from "react-native";

const Top = () => {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>献立を表示</Text>
      {/* <Pressable>献立作成ボタン</Pressable> */}
    </SafeAreaView>
  );
};

export default Top;
