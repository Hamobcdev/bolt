import { createHash } from 'crypto';

class Keystore {
  private static instance: Keystore;
  private keys: Map<string, string>;
  private readonly encryptionKey: string;

  private constructor() {
    this.keys = new Map();
    this.encryptionKey = process.env.ENCRYPTION_KEY || '';
    this.initializeKeys();
  }

  private initializeKeys() {
    // Initialize keys securely
    const envKeys = {
      // Blockchain keys
      polygon: process.env.POLYGON_RPC_URL,
      polygonscan: process.env.POLYGONSCAN_API_KEY,
      
      // AI Service keys
      openai: process.env.OPENAI_API_KEY,
      huggingface: process.env.HUGGING_FACE_API_KEY,
      tensorflow: process.env.TENSORFLOW_SERVING_URL,
      
      // Security keys
      mfa: process.env.MFA_SECRET_KEY,
    };

    Object.entries(envKeys).forEach(([service, key]) => {
      if (key) {
        const secureKey = this.encryptKey(key);
        this.keys.set(service, secureKey);
      }
    });
  }

  private encryptKey(key: string): string {
    return createHash('sha256')
      .update(`${key}${this.encryptionKey}`)
      .digest('hex');
  }

  public static getInstance(): Keystore {
    if (!Keystore.instance) {
      Keystore.instance = new Keystore();
    }
    return Keystore.instance;
  }

  public getKey(service: string): string | undefined {
    return this.keys.get(service);
  }

  public isKeyValid(service: string): boolean {
    return this.keys.has(service) && Boolean(this.keys.get(service));
  }
}

export const keystore = Keystore.getInstance();