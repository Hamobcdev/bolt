import { defineConfig } from '@wagmi/cli';
import { foundry } from '@wagmi/cli/plugins';

export default defineConfig({
  out: 'src/contracts/generated.ts',
  plugins: [
    foundry({
      project: './',
      include: ['KYCVerification.sol/**', 'AMLRegistry.sol/**'],
    }),
  ],
});