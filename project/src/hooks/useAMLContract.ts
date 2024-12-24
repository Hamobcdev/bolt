import { useContractRead, useContractWrite } from 'wagmi';
import { amlABI } from '../contracts/abis/aml';
import { AML_CONTRACT_ADDRESS } from '../config/contracts';
import { useAccount } from 'wagmi';

export function useAMLContract() {
  const { address } = useAccount();

  const { data: alerts, isLoading: isAlertsLoading } = useContractRead({
    address: AML_CONTRACT_ADDRESS,
    abi: amlABI,
    functionName: 'getAlertsByAddress',
    args: [address!],
    enabled: !!address,
  });

  const { write: createAlert, isLoading: isCreating } = useContractWrite({
    address: AML_CONTRACT_ADDRESS,
    abi: amlABI,
    functionName: 'createAlert',
  });

  return {
    alerts,
    isAlertsLoading,
    createAlert,
    isCreating,
  };
}