const { ethers } = require("hardhat");

async function getBalance(address) {
  const balanceBigInt = await ethers.provider.getBalance(address);
  return ethers.utils.parseUnits(balanceBigInt.toString(), "ether");
}

async function main() {
  const [owner, tipper1, tipper2, tipper3] = await ethers.getSigners();

  // deploy contract
  const DonateMe = await ethers.getContractFactory("DonateMe");
  const donateMe = await DonateMe.deploy();
  await donateMe.deployed();

  console.log("owner balance: ", await getBalance(owner.address));
  console.log("tipper1 balance: ", await getBalance(tipper1.address));
  console.log("tipper2 balance: ", await getBalance(tipper2.address));
  console.log("tipper3 balance: ", await getBalance(tipper3.address));
  console.log("contract balance: ", await getBalance(donateMe.address));

  const tip = { value: ethers.utils.parseEther("1") };
  await donateMe.connect(tipper1).donate("my name", "my message", tip);
  await donateMe.connect(tipper2).donate("my name", "my message", tip);
  await donateMe.connect(tipper3).donate("my name", "my message", tip);

  console.log("owner balance: ", await getBalance(owner.address));
  console.log("tipper1 balance: ", await getBalance(tipper1.address));
  console.log("tipper2 balance: ", await getBalance(tipper2.address));
  console.log("tipper3 balance: ", await getBalance(tipper3.address));
  console.log("contract balance: ", await getBalance(donateMe.address));

  await donateMe.connect(owner).withdrawTips();

  console.log("owner balance: ", await getBalance(owner.address));
  console.log("tipper1 balance: ", await getBalance(tipper1.address));
  console.log("tipper2 balance: ", await getBalance(tipper2.address));
  console.log("tipper3 balance: ", await getBalance(tipper3.address));
  console.log("contract balance: ", await getBalance(donateMe.address));

  const memos = await donateMe.connect(owner).getMemos();
  console.log(memos);
}

main()
  .then(() => process.exit(1))
  .catch((error) => {
    console.error(error);
    process.exit(0);
  });
