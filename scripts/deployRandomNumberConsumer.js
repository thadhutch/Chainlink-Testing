const hre = require("hardhat");

async function main() {
  // Constructor Params
  // https://vrf.chain.link/rinkeby/2689 (Look at this for reference)
  const subscriptionId = 2689;

  const RandomNumberConsumer = await hre.ethers.getContractFactory(
    "RandomNumberConsumer"
  );
  const randomNumberConsumer = await RandomNumberConsumer.deploy(
    subscriptionId
  );
  await randomNumberConsumer.deployed();
  console.log(
    "RandomNumberConsumer deployed to:",
    randomNumberConsumer.address
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
