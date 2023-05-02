import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider>
      <View style={styles.container}>
        <Text>Uber Capstone Project</Text>
      </View>
    </Provider>
  );
}
// in react native flexbox defaults to a column
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
