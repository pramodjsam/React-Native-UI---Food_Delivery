import React from "react";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import Ionicon from "@expo/vector-icons/Ionicons";

const Details = ({ route, navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.headerButtonView}
        >
          <Ionicon name="chevron-back-outline" size={35} />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.headerButtonView, { backgroundColor: "#FED016" }]}
        >
          <Ionicon name="star-outline" size={35} />
        </TouchableOpacity>
      </View>
      <View style={{ paddingHorizontal: 30, marginVertical: 20 }}>
        <Text style={styles.nameText}>{route.params.details.name}</Text>
        <Text style={[styles.nameText, { color: "#F97520" }]}>
          {route.params.details.price}
        </Text>
        <Text style={styles.size}>Size</Text>
        <Text style={styles.desc}>Medium 14"</Text>
        <Text style={styles.size}>Crust</Text>
        <Text style={styles.desc}>Thin Crust</Text>
        <Text style={styles.size}>Delivery in</Text>
        <Text style={styles.desc}>30 min</Text>

        <Image
          source={route.params.details.image}
          style={{
            height: 200,
            width: 200,
            position: "absolute",
            top: 150,
            right: 0,
          }}
        />
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Place an Order</Text>
        <Ionicon name="chevron-forward-outline" size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9FAFC",
  },
  header: {
    paddingHorizontal: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 60,
  },
  headerButtonView: {
    height: 45,
    width: 45,
    borderRadius: 15,
    backgroundColor: "#FFF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  nameText: {
    fontSize: 40,
    fontWeight: "bold",
    marginVertical: 10,
  },
  size: {
    fontSize: 18,
    fontWeight: "100",
    marginVertical: 10,
    marginTop: 40,
  },
  desc: {
    fontSize: 25,
    fontWeight: "bold",
    // marginVertical: 10,
  },
  button: {
    height: 100,
    width: "100%",
    backgroundColor: "#FED016",
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
