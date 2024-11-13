import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

const manuData = [
  {
    date: "11/13(月)",
    menu: {
      lunch: "豚肉と野菜の炒め物・ごはん・味噌汁",
      dinner: "チキンカレー・サラダ・ヨーグルト",
    },
  },
  {
    date: "11/14(火)",
    menu: {
      lunch: "海老とブロッコリーのパスタ・ミニサラダ",
      dinner: "焼き魚・ごはん・豆腐の味噌汁・納豆",
    },
  },
  {
    date: "11/15(水)",
    menu: {
      lunch: "親子丼・ほうれん草のお浸し",
      dinner: "焼きそば・中華スープ",
    },
  },
  {
    date: "11/16(木)",
    menu: {
      lunch: "豚肉とキャベツの炒め物・ごはん・キムチ",
      dinner: "ハンバーグ・マッシュポテト・コンソメスープ",
    },
  },
  {
    date: "11/17(金)",
    menu: {
      lunch: "焼きうどん・野菜の浅漬け",
      dinner: "鮭のホイル焼き・ごはん・野菜スープ",
    },
  },
  {
    date: "11/18(土)",
    menu: {
      lunch: "冷やし中華・卵焼き",
      dinner: "おでん・ごはん",
    },
  },
  {
    date: "11/19(日)",
    menu: {
      lunch: "オムライス・サラダ・ヨーグルト",
      dinner: "鍋（鶏肉と野菜）・うどん",
    },
  },
];

const ManuTop = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <FlatList
        data={manuData}
        keyExtractor={(item) => item.date}
        renderItem={({ item }) => (
          <View style={{ padding: 10 }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {item.date}
            </Text>
            <Text>昼食: {item.menu.lunch}</Text>
            <Text>夕食: {item.menu.dinner}</Text>
          </View>
        )}
      />
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
