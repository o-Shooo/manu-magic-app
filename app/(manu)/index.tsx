import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const ManuTop = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>メニューを表示</Text>
      <TouchableOpacity
        style={{
          backgroundColor: "blue",
          padding: 10,
          borderRadius: 5,
        }}
        onPress={() => router.push("create-manu")}
      >
        <Text style={{ color: "white" }}>メニュー作成</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ManuTop;
