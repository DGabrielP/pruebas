import { Link, Stack } from 'expo-router';
import { StyleSheet, View, Text } from 'react-native';

import  TypoText  from '@/components/ui/TypoText';


export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={styles.container}>
        <Text style={[TypoText.title, styles.text]}>This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text style={[TypoText.title, styles.text]}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  text:{
    marginVertical: 10,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
