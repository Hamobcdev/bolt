import { keystore } from '../config/keystore';

export const validateApiKey = (service: string): boolean => {
  return keystore.isKeyValid(service);
};

export const getServiceKey = (service: string): string | undefined => {
  return keystore.getKey(service);
};