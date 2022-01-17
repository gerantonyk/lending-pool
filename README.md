# Bank

This project is a basic lending pool where users can get interest from deposits on HAK and ETH. They can also take loans in ETH while the collateralization in HAK is above 150%

The HAK token is a typical ERC20 token deployed at this address: https://goerli.etherscan.io/address/0xbefeed4cb8c6dd190793b1c97b72b60272f3ea6c

In order to get the price of the HAK token in ETH, which will allow you to compute the collateral ratio, use the following PriceOracle contract: https://goerli.etherscan.io/address/0xc3F639B8a6831ff50aD8113B438E2Ef873845552


The smart contract is already deployed and verified on goerli:
https://goerli.etherscan.io/address/0xe08f95D59916ce2F30f73267c7c58cAd253A9749

To test it, run:

```shell
npx hardhat test
```
