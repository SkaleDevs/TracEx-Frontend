export const SupplyChainAbi = [
  {
    inputs: [
      {
        internalType: 'string',
        name: 'name_',
        type: 'string'
      },
      {
        internalType: 'string',
        name: 'email_',
        type: 'string'
      }
    ],
    stateMutability: 'nonpayable',
    type: 'constructor'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'email',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'enum Types.UserRole',
        name: 'role',
        type: 'uint8'
      }
    ],
    name: 'LostUser',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'manufacturerName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'scientificName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'barcodeId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'manDateEpoch',
        type: 'uint256'
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'expDateEpoch',
        type: 'uint256'
      }
    ],
    name: 'NewProduct',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'email',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'enum Types.UserRole',
        name: 'role',
        type: 'uint8'
      }
    ],
    name: 'NewUser',
    type: 'event'
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'name',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'manufacturerName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'scientificName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'barcodeId',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'buyerName',
        type: 'string'
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'buyerEmail',
        type: 'string'
      }
    ],
    name: 'ProductOwnershipTransfer',
    type: 'event'
  },
  {
    inputs: [],
    name: 'getAllProducts',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'manufacturerName',
            type: 'string'
          },
          {
            internalType: 'address',
            name: 'manufacturer',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'manDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'expDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'isInBatch',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'batchCount',
            type: 'uint256'
          },
          {
            internalType: 'string',
            name: 'barcodeId',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'productImage',
            type: 'string'
          },
          {
            internalType: 'enum Types.ProductType',
            name: 'productType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'scientificName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'usage',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'composition',
            type: 'string[]'
          },
          {
            internalType: 'string[]',
            name: 'sideEffects',
            type: 'string[]'
          }
        ],
        internalType: 'struct Types.Product[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getMyProducts',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'manufacturerName',
            type: 'string'
          },
          {
            internalType: 'address',
            name: 'manufacturer',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'manDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'expDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'isInBatch',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'batchCount',
            type: 'uint256'
          },
          {
            internalType: 'string',
            name: 'barcodeId',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'productImage',
            type: 'string'
          },
          {
            internalType: 'enum Types.ProductType',
            name: 'productType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'scientificName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'usage',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'composition',
            type: 'string[]'
          },
          {
            internalType: 'string[]',
            name: 'sideEffects',
            type: 'string[]'
          }
        ],
        internalType: 'struct Types.Product[]',
        name: '',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'barcodeId_',
        type: 'string'
      }
    ],
    name: 'getSingleProduct',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'manufacturerName',
            type: 'string'
          },
          {
            internalType: 'address',
            name: 'manufacturer',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'manDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'expDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'isInBatch',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'batchCount',
            type: 'uint256'
          },
          {
            internalType: 'string',
            name: 'barcodeId',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'productImage',
            type: 'string'
          },
          {
            internalType: 'enum Types.ProductType',
            name: 'productType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'scientificName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'usage',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'composition',
            type: 'string[]'
          },
          {
            internalType: 'string[]',
            name: 'sideEffects',
            type: 'string[]'
          }
        ],
        internalType: 'struct Types.Product',
        name: '',
        type: 'tuple'
      },
      {
        components: [
          {
            components: [
              {
                internalType: 'address',
                name: 'id_',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'date',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.UserHistory',
            name: 'manufacturer',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'id_',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'date',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.UserHistory',
            name: 'supplier',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'id_',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'date',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.UserHistory',
            name: 'vendor',
            type: 'tuple'
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'id_',
                type: 'address'
              },
              {
                internalType: 'uint256',
                name: 'date',
                type: 'uint256'
              }
            ],
            internalType: 'struct Types.UserHistory[]',
            name: 'customers',
            type: 'tuple[]'
          }
        ],
        internalType: 'struct Types.ProductHistory',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'manufacturerName',
            type: 'string'
          },
          {
            internalType: 'address',
            name: 'manufacturer',
            type: 'address'
          },
          {
            internalType: 'uint256',
            name: 'manDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'uint256',
            name: 'expDateEpoch',
            type: 'uint256'
          },
          {
            internalType: 'bool',
            name: 'isInBatch',
            type: 'bool'
          },
          {
            internalType: 'uint256',
            name: 'batchCount',
            type: 'uint256'
          },
          {
            internalType: 'string',
            name: 'barcodeId',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'productImage',
            type: 'string'
          },
          {
            internalType: 'enum Types.ProductType',
            name: 'productType',
            type: 'uint8'
          },
          {
            internalType: 'string',
            name: 'scientificName',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'usage',
            type: 'string'
          },
          {
            internalType: 'string[]',
            name: 'composition',
            type: 'string[]'
          },
          {
            internalType: 'string[]',
            name: 'sideEffects',
            type: 'string[]'
          }
        ],
        internalType: 'struct Types.Product',
        name: 'product_',
        type: 'tuple'
      },
      {
        internalType: 'uint256',
        name: 'currentTime_',
        type: 'uint256'
      }
    ],
    name: 'addProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'partyId_',
        type: 'address'
      },
      {
        internalType: 'string',
        name: 'barcodeId_',
        type: 'string'
      },
      {
        internalType: 'uint256',
        name: 'currentTime_',
        type: 'uint256'
      }
    ],
    name: 'sellProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: 'enum Types.UserRole',
            name: 'role',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'id_',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string'
          }
        ],
        internalType: 'struct Types.UserDetails',
        name: 'user_',
        type: 'tuple'
      }
    ],
    name: 'addParty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function'
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'id_',
        type: 'address'
      }
    ],
    name: 'getUserDetails',
    outputs: [
      {
        components: [
          {
            internalType: 'enum Types.UserRole',
            name: 'role',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'id_',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string'
          }
        ],
        internalType: 'struct Types.UserDetails',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getMyDetails',
    outputs: [
      {
        components: [
          {
            internalType: 'enum Types.UserRole',
            name: 'role',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'id_',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string'
          }
        ],
        internalType: 'struct Types.UserDetails',
        name: '',
        type: 'tuple'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  },
  {
    inputs: [],
    name: 'getMyUsersList',
    outputs: [
      {
        components: [
          {
            internalType: 'enum Types.UserRole',
            name: 'role',
            type: 'uint8'
          },
          {
            internalType: 'address',
            name: 'id_',
            type: 'address'
          },
          {
            internalType: 'string',
            name: 'name',
            type: 'string'
          },
          {
            internalType: 'string',
            name: 'email',
            type: 'string'
          }
        ],
        internalType: 'struct Types.UserDetails[]',
        name: 'usersList_',
        type: 'tuple[]'
      }
    ],
    stateMutability: 'view',
    type: 'function',
    constant: true
  }
];
