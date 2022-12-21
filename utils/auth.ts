import * as SecureStore from 'expo-secure-store';
import * as Device from 'expo-device';

const KEY = 'accessToken';

export function createAccessTokenName() {
  return `${Device.deviceName} ${Device.modelName}`;
}

export async function getAccessToken() {
  return await SecureStore.getItemAsync(KEY);
}

export async function setAccessToken(key: string) {
  return await SecureStore.setItemAsync(KEY, key);
}

export async function removeAccessToken() {
  return await SecureStore.deleteItemAsync(KEY);
}
