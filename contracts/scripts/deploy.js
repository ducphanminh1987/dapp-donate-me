const { ethers } = require("hardhat");

async function main() {
  // deploy contract
  const DonateMe = await ethers.getContractFactory("DonateMe");
  const donateMe = await DonateMe.deploy();
  await donateMe.deployed();
  console.log("DonateMe deployed to:", donateMe.address);
}

main()
  .then(() => process.exit(1))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
