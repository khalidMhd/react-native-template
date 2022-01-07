import * as SecureStore from 'expo-secure-store';

export const localStore = {
    user: {},
    async function() {
    return this.user =  await SecureStore.getItemAsync("userInfo")
    }
  };
