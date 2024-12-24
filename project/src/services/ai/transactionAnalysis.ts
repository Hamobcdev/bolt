import * as tf from '@tensorflow/tfjs';
import { OpenAIApi } from 'openai';
import { OPENAI_CONFIG } from './config';

const openai = new OpenAIApi(OPENAI_CONFIG);

export async function analyzeTransactionPattern(transactions: any[]) {
  // Convert transactions to tensor
  const tensor = tf.tensor(transactions.map(tx => [
    tx.amount,
    tx.timestamp,
    tx.riskScore
  ]));

  // Analyze patterns using TensorFlow.js
  const anomalyScores = tf.tidy(() => {
    const mean = tensor.mean(0);
    const stdDev = tensor.sub(mean).square().mean(0).sqrt();
    return tensor.sub(mean).div(stdDev);
  });

  return anomalyScores.arraySync();
}