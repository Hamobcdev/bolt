import { useContractRead } from 'wagmi';
import { CHAINLINK_FEEDS } from '../config/chainlink';

export function useChainlinkPriceFeed(token: string) {
  const feed = CHAINLINK_FEEDS[token];
  
  const { data: price, isLoading } = useContractRead({
    address: feed?.address,
    abi: feed?.abi,
    functionName: 'latestRoundData',
    watch: true,
  });

  const formatPrice = (rawPrice: bigint) => {
    if (!rawPrice || !feed) return null;
    return Number(rawPrice) / Math.pow(10, feed.decimals);
  };

  return {
    price: price ? formatPrice(price[1]) : null,
    timestamp: price ? Number(price[3]) : null,
    isLoading,
  };
}