import { Text, View,StyleSheet } from "react-native";

import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={style.container}
    >
     <Link href="/(auth)/signup">Signup</Link>
     <Link href="/(auth)">Login</Link>
      
      <Text style={
        style.title
      }>Haniya</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
  title:{
    fontSize: 30,
    color: "blue",
  }

  

})
