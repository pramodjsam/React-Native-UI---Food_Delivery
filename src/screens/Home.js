import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { CATAGORY, PIZZA } from "../data";

const Home = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  const renderCategoryItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => setSelected(index)}>
        <View
          style={[
            styles.category,
            { backgroundColor: selected === index ? "#FED016" : "#fff" },
          ]}
        >
          <Image
            style={{ width: 70, height: 70, marginVertical: 10 }}
            source={item.image}
          />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              marginVertical: 10,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: selected === index ? "#FFF" : "#F67779",
            }}
          >
            <Ionicons size={35} name="chevron-forward-outline" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const renderPopularItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Details", { details: item })}
      >
        <View style={styles.popularView}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="pizza-outline"
              size={18}
              style={{ color: "#FED016" }}
            />
            <Text>{item.top}</Text>
          </View>
          <Text style={{ fontWeight: "bold", fontSize: 20, marginTop: 15 }}>
            {item.name}
          </Text>
          <Text style={{ fontWeight: "100", fontSize: 16, marginTop: 4 }}>
            Weight 540 gr
          </Text>
          <View
            style={{
              height: 50,
              width: 70,
              backgroundColor: "#FED016",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 5,
            }}
          >
            <Ionicons name="add-circle-outline" size={35} />
          </View>
          <View style={{ position: "absolute", top: 10, right: 10 }}>
            <Image source={item.image} style={{ height: 120, width: 120 }} />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.avatar} source={require("../assets/avatar.png")} />
        <Ionicons name="menu-outline" size={35} />
      </View>
      <View style={{ paddingHorizontal: 25, marginVertical: 20 }}>
        <Text style={{ fontSize: 18 }}>Food</Text>
        <Text style={{ fontSize: 35, fontWeight: "bold" }}>Delivery</Text>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginVertical: 20,
          }}
        >
          <Ionicons name="search-outline" size={25} />
          <View
            style={{
              borderBottomWidth: 0.5,
              width: "90%",
              borderColor: "#ccc",
              marginHorizontal: 10,
            }}
          >
            <TextInput placeholder="Search..." />
          </View>
        </View>
      </View>

      <View style={{ flex: 3 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            paddingHorizontal: 30,
            paddingVertical: 10,
          }}
        >
          Categories
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={CATAGORY}
          keyExtractor={(item) => item.id}
          renderItem={renderCategoryItem}
        />
      </View>

      <View style={{ flex: 3, paddingHorizontal: 30 }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            marginVertical: 10,
          }}
        >
          Popular
        </Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PIZZA}
          keyExtractor={(item) => item.id}
          renderItem={renderPopularItem}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    paddingTop: 40,
    width: "100%",
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  category: {
    height: 200,
    width: 150,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignItems: "center",
  },
  popularView: {
    height: 150,
    width: "100%",
    backgroundColor: "#FFF",
    marginVertical: 10,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    padding: 15,
  },
});
