require("dotenv").config();
const ethers = require("ethers");

// npx hardhat run scripts/testRandomNumberConsumer.js

async function main() {
  const provider = new ethers.providers.JsonRpcProvider(
    process.env.RINKEBY_URL
  );
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  const randomNumberConsumerAddress =
    "0x4cba13e0692c83cd8908cfd216cd2cafec4e7f9c";
  const randomNumberConsumerABI =
    require("../artifacts/contracts/RandomNumberConsumer.sol/RandomNumberConsumer.json").abi;
  const randomNumberConsumer = new ethers.Contract(
    randomNumberConsumerAddress,
    randomNumberConsumerABI,
    signer
  );

  const signerAddress = await signer.getAddress();

  // Already called this (Only 1 call per address)

  //   const rollDice = await randomNumberConsumer.rollDice(signerAddress);
  //   await rollDice.wait();
  //   console.log(rollDice);

  const house = await randomNumberConsumer.house(signerAddress);
  console.log(`${signerAddress} has received: ${house}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
