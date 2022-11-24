import * as SecureStore from 'expo-secure-store';

const KEY = 'refreshToken';

export async function getRefreshToken() {
  return await SecureStore.getItemAsync(KEY);
}

export async function setRefreshToken(refresh: string) {
  return await SecureStore.setItemAsync(KEY, refresh);
}

export async function removeRefreshToken() {
  return await SecureStore.deleteItemAsync(KEY);
}
