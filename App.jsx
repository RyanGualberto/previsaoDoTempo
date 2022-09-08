import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  KeyboardAvoidingView,
  Keyboard,
} from "react-native";

import Search from "./src/components/search";
import axios from "axios";

export default function App() {
  const [city, setCity] = useState("");
  const [dados, setDados] = useState("");

  const buscaCity = async () => {
    await axios
      .get(`https://api.hgbrasil.com/weather?key=93a0eca5&city_name=${city}`)
      .then((response) => {
        // console.log(response.data.results);
        setDados(response.data.results);
      });
  };

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <ImageBackground
        source={{
          uri: "https://wallpaperaccess.com/full/851999.jpg",
        }}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>RV Previsõess</Text>
          <KeyboardAvoidingView style={styles.textInput}>
            <TextInput
              style={{
                width: "70%",
                padding: 5,
                fontWeight: "700",
                color: "white",
                minHeight: 40,
                fontSize: 20,
              }}
              placeholderTextColor="#fff"
              placeholder="Procure Por Uma Cidade"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
                flex: 1,
                height: "100%",
                borderColor: "#ffd500",
                borderRadius: 6,
              }}
              onPress={async () => {
                await buscaCity();
                Keyboard.dismiss();
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontSize: 18,
                  alignItems: "center",
                  fontWeight: "700",
                  justifyContent: "center",
                }}
              >
                Buscar
              </Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
        {dados ? <Search param={dados} /> : null}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
  header: {
    height: "10%",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    fontSize: 24,
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    fontWeight: "800",
    marginBottom: 15,
    color: "#ffd500",
  },
  textInput: {
    marginTop: 10,
    minHeight: 40,

    fontSize: 20,
    height: "50%",
    borderRadius: 3,
    width: "100%",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#ffd500",
    flexDirection: "row",
  },
  ViewPrincipal: {
    justifyContent: "space-around",
    height: "50%",
  },
  iconWeather: {
    width: 150,
    height: 150,
  },
  cardsContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    height: "30%",
  },
  card: {
    justifyContent: "space-around",
    alignItems: "center",
    flex: 1,
    height: "100%",
    backgroundColor: "#01010144",
    borderColor: "#FFFF",
    borderWidth: 0.5,
    padding: 5,
    borderRadius: 10,
  },
  TextCityName: {
    fontSize: 36,
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
  },
  textDefault: {
    fontSize: 26,
    fontWeight: "800",
    color: "white",
    textAlign: "center",
  },
  textDefaultCard: {
    textAlign: "center",
    fontWeight: "700",
    color: "white",
    fontSize: 20,
  },
});
