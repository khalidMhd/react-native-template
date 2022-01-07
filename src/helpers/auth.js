import * as SecureStore from 'expo-secure-store';

export default function Auth({ navigation }) {
  SecureStore.getItemAsync('userInfo').then(userInfo => {
    if (!userInfo) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'StartScreen' }],
      })
    }
  })
}

