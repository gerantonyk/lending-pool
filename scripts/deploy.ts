
import { ethers } from "hardhat";

async function main() {

  const hakAddress = "0xbefeed4cb8c6dd190793b1c97b72b60272f3ea6c"
  const priceOracleAddress = "0xc3F639B8a6831ff50aD8113B438E2Ef873845552"
  const Bank = await ethers.getContractFactory("Bank");
  const bank = await Bank.deploy(priceOracleAddress,hakAddress);

  await bank.deployed();

  console.log("Bank deployed to:", bank.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});


//npx hardhat verify --network goerli "0xe08f95D59916ce2F30f73267c7c58cAd253A9749" "0xc3F639B8a6831ff50aD8113B438E2Ef873845552" "0xbefeed4cb8c6dd190793b1c97b72b60272f3ea6c"