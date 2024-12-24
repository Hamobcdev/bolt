import { useContractRead, useContractWrite } from 'wagmi';
import { kycABI } from '../contracts/abis/kyc';
import { KYC_CONTRACT_ADDRESS } from '../config/contracts';
import { useAccount } from 'wagmi';

export function useKYCContract() {
  const { address } = useAccount();

  const { data: kycStatus, isLoading: isStatusLoading } = useContractRead({
    address: KYC_CONTRACT_ADDRESS,
    abi: kycABI,
    functionName: 'getUserKYCStatus',
    args: [address!],
    enabled: !!address,
  });

  const { write: submitKYC, isLoading: isSubmitting } = useContractWrite({
    address: KYC_CONTRACT_ADDRESS,
    abi: kycABI,
    functionName: 'submitKYC',
  });

  return {
    kycStatus,
    isStatusLoading,
    submitKYC,
    isSubmitting,
  };
}