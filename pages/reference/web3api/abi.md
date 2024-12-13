
## Web3Api.ABI property

**Signature:**

```typescript
ABI: {
        readonly ERC721: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "ERC721IncorrectOwner";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ERC721InsufficientApproval";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "approver";
                readonly type: "address";
            }];
            readonly name: "ERC721InvalidApprover";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "ERC721InvalidOperator";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "ERC721InvalidOwner";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly name: "ERC721InvalidReceiver";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }];
            readonly name: "ERC721InvalidSender";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ERC721NonexistentToken";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "approved";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "Approval";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "bool";
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "ApprovalForAll";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "Transfer";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "getApproved";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ownerOf";
            readonly outputs: readonly [{
                readonly internalType: "address";
                readonly name: "";
                readonly type: "address";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes4";
                readonly name: "interfaceId";
                readonly type: "bytes4";
            }];
            readonly name: "supportsInterface";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "tokenURI";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }];
        readonly ERC20: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "allowance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "needed";
                readonly type: "uint256";
            }];
            readonly name: "ERC20InsufficientAllowance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "needed";
                readonly type: "uint256";
            }];
            readonly name: "ERC20InsufficientBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "approver";
                readonly type: "address";
            }];
            readonly name: "ERC20InvalidApprover";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly name: "ERC20InvalidReceiver";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }];
            readonly name: "ERC20InvalidSender";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "ERC20InvalidSpender";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "Approval";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "Transfer";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }];
            readonly name: "allowance";
            readonly outputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "spender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "approve";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "decimals";
            readonly outputs: readonly [{
                readonly internalType: "uint8";
                readonly name: "";
                readonly type: "uint8";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "name";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "symbol";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [];
            readonly name: "totalSupply";
            readonly outputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "transfer";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "transferFrom";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }];
        readonly ERC1155: readonly [{
            readonly inputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "constructor";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "balance";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "needed";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "tokenId";
                readonly type: "uint256";
            }];
            readonly name: "ERC1155InsufficientBalance";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "approver";
                readonly type: "address";
            }];
            readonly name: "ERC1155InvalidApprover";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "idsLength";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "valuesLength";
                readonly type: "uint256";
            }];
            readonly name: "ERC1155InvalidArrayLength";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "ERC1155InvalidOperator";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }];
            readonly name: "ERC1155InvalidReceiver";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "sender";
                readonly type: "address";
            }];
            readonly name: "ERC1155InvalidSender";
            readonly type: "error";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "owner";
                readonly type: "address";
            }];
            readonly name: "ERC1155MissingApprovalForAll";
            readonly type: "error";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "bool";
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "ApprovalForAll";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256[]";
                readonly name: "ids";
                readonly type: "uint256[]";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256[]";
                readonly name: "values";
                readonly type: "uint256[]";
            }];
            readonly name: "TransferBatch";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly indexed: true;
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly indexed: false;
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }];
            readonly name: "TransferSingle";
            readonly type: "event";
        }, {
            readonly anonymous: false;
            readonly inputs: readonly [{
                readonly indexed: false;
                readonly internalType: "string";
                readonly name: "value";
                readonly type: "string";
            }, {
                readonly indexed: true;
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }];
            readonly name: "URI";
            readonly type: "event";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }];
            readonly name: "balanceOf";
            readonly outputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address[]";
                readonly name: "accounts";
                readonly type: "address[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "ids";
                readonly type: "uint256[]";
            }];
            readonly name: "balanceOfBatch";
            readonly outputs: readonly [{
                readonly internalType: "uint256[]";
                readonly name: "";
                readonly type: "uint256[]";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "account";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }];
            readonly name: "isApprovedForAll";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "ids";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "uint256[]";
                readonly name: "values";
                readonly type: "uint256[]";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeBatchTransferFrom";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "from";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "to";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "id";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "value";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "data";
                readonly type: "bytes";
            }];
            readonly name: "safeTransferFrom";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "address";
                readonly name: "operator";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "approved";
                readonly type: "bool";
            }];
            readonly name: "setApprovalForAll";
            readonly outputs: readonly [];
            readonly stateMutability: "nonpayable";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "bytes4";
                readonly name: "interfaceId";
                readonly type: "bytes4";
            }];
            readonly name: "supportsInterface";
            readonly outputs: readonly [{
                readonly internalType: "bool";
                readonly name: "";
                readonly type: "bool";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }, {
            readonly inputs: readonly [{
                readonly internalType: "uint256";
                readonly name: "";
                readonly type: "uint256";
            }];
            readonly name: "uri";
            readonly outputs: readonly [{
                readonly internalType: "string";
                readonly name: "";
                readonly type: "string";
            }];
            readonly stateMutability: "view";
            readonly type: "function";
        }];
    };
```
