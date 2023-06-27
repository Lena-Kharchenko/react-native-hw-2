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
    width: 343,
    margin: 16,
    backgroundColor: "yellow",
    color: "BDBDBD",
    borderColor: "E8E8E8",
    borderRadius: 8,
    // borderWidth: 1,
    padding: 10,
  },
});

export default RegistrScreen;
