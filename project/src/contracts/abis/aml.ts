export const amlABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subject",
        type: "address"
      },
      {
        internalType: "string",
        name: "alertType",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "riskScore",
        type: "uint256"
      }
    ],
    name: "createAlert",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "subject",
        type: "address"
      }
    ],
    name: "getAlertsByAddress",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
] as const;