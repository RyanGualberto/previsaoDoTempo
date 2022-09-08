import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function Search(props) {
  const previsao = props.param;
  const previsaoProximosDias = props.param.forecast;
  return (
    <>
      <View style={styles.ViewPrincipal}>
        <Text style={styles.TextCityName}>{previsao.city}</Text>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://i.pinimg.com/originals/db/d9/0d/dbd90d367167db3967af692343915f5d.png",
            }}
            style={styles.iconWeather}
          ></Image>
          <Text style={{ fontSize: 78, color: "white" }}>
            {previsao.temp}°C
          </Text>
        </View>
        <Text style={styles.textDefault}>{previsao.description}</Text>
        <Text style={styles.textDefault}>
          {previsao.date} - {previsao.time}
        </Text>
      </View>
      <View style={styles.cardsContainer}>
        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[1].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[1].max + previsaoProximosDias[1].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[1].description}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[2].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[2].max + previsaoProximosDias[2].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[2].description}
          </Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[3].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[3].max + previsaoProximosDias[3].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[3].description}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[4].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[4].max + previsaoProximosDias[4].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[4].description}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[5].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[5].max + previsaoProximosDias[5].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[5].description}
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.textDefaultCard}>
            {previsaoProximosDias[6].weekday}
          </Text>
          <Text style={styles.textDefaultCard}>
            {(previsaoProximosDias[6].max + previsaoProximosDias[6].min) / 2}°C
          </Text>
          <Text style={[styles.textDefaultCard, { fontSize: 12 }]}>
            {previsaoProximosDias[6].description}
          </Text>
        </View>
      </View>
    </>
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
    color: "#ffd500",
  },
  textInput: {
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
