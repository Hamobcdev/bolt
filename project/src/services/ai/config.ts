import { HfInferenceEndpoint } from '@huggingface/inference';
import { Configuration, OpenAIApi } from 'openai';
import * as tf from '@tensorflow/tfjs';

export const OPENAI_CONFIG = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

export const HF_CONFIG = new HfInferenceEndpoint(
  process.env.HUGGING_FACE_API_KEY
);