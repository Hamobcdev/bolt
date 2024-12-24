export const kycABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "documentHash",
        type: "bytes32"
      },
      {
        internalType: "string",
        name: "metadataURI",
        type: "string"
      }
    ],
    name: "submitKYC",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address"
      }
    ],
    name: "getUserKYCStatus",
    outputs: [
      {
        internalType: "enum KYCVerification.VerificationStatus",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;