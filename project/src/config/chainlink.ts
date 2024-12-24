export const CHAINLINK_FEEDS = {
  ETH: {
    address: '0xF9680D99D6C9589e2a93a78A04A279e509205945',
    decimals: 8,
    abi: [
      {
        inputs: [],
        name: 'latestRoundData',
        outputs: [
          { name: 'roundId', type: 'uint80' },
          { name: 'answer', type: 'int256' },
          { name: 'startedAt', type: 'uint256' },
          { name: 'updatedAt', type: 'uint256' },
          { name: 'answeredInRound', type: 'uint80' }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    ]
  },
  // Add more price feeds as needed
};