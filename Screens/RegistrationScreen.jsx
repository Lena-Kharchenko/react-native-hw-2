import React from "react";
import {
  TextInput,
  Text,
  SafeAreaView,
  Button,
  StyleSheet,
} from "react-native";

const RegistrScreen = () => {
  const [login, setLogin] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <SafeAreaView>
      <Text>Реєстрація</Text>

      <TextInput
        style={styles.input}
        onChangeText={setLogin}
        value={login}
        placeholder="Логін"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Пароль"

        // keyboardType="numeric"
      />
      <Button
        title="Зареєструватися"
        disabled
        onPress={() => Alert.alert("Cannot press this one")}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    // width: 343,
    marginBottom: 16,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "solid",
    padding: 16,
    fontSize: 16,
    fontFamily: "Roboto-Regular",
  },
});

export default RegistrScreen;
