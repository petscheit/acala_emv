# Acala EVM Contract:
My hardhat config was of, and it turned out I was interacting with the hardhat simulated chain the entire time. Error makes sense then, hardhat doesn't know about the precompiles. I'm still facing issues deploying to mandala though.

## Steps:
- run mandala locally with `make run-eth` (pulled yesterday)
- start eth-rpc-adapter with `rushx dev` (config found below) -> Connection is working
- start subql with `docker-compose -f macos-docker-compose.yml up`
- run `yarn test-mandala` -> Fails during deployments

## Error:
The deployment fails, though the connection and certain RPC calls are working. E.g. this is printed in the adapter console.
```
[1639831617514] DEBUG (46261 on Pauls-MacBook-Pro-3.local): incoming request
    jsonrpc: "2.0"
    method: "eth_chainId"
    params: []
    id: 13
[1639831617514] DEBUG (46261 on Pauls-MacBook-Pro-3.local): request completed
    id: 13
    jsonrpc: "2.0"
    result: "0x253"
```

Deployment fails with this error (adapter console). The subql doesn't seem to store the tx id properly.
```
  methodName: "eth_getTransactionByHash"
    params: [
      "0xb40e7e45fc68b246b8923780889011c53614491b8c98aceaafe0d2337983391d"
    ]
    err: {
      "type": "Error",
      "message": "transaction hash not found (txHash=\"0xb40e7e45fc68b246b8923780889011c53614491b8c98aceaafe0d2337983391d\", code=UNKNOWN_ERROR, version=bodhi.js/providers/2.1.7)",
```

From the adapter logs however I see that the transaction was finalized:
```
id: 10
[1639833946323] DEBUG (95175 on Pauls-MacBook-Pro-3.local): request completed
    id: 10
    jsonrpc: "2.0"
    result: "0xb40e7e45fc68b246b8923780889011c53614491b8c98aceaafe0d2337983391d"
```


### Adapter Config:
```
ENDPOINT_URL=ws://localhost:9944
SUBQL_URL=http://localhost:3001
HTTP_PORT=8545
WS_PORT=3331
```

Am I on the right track? The other question is if I can clone the state from the current testnet with hardhat, I wouldnt need to run this large setup.  