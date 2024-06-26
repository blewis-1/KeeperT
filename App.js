import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppBar from './components/AppBar';

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Text>Michael</Text>
      <Text style={styles.title}>Hello</Text>
      <InputTodo></InputTodo>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
