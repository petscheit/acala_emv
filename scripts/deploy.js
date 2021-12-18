const { calcEthereumTransactionParams } = require("@acala-network/eth-providers");

const txFeePerGas = '199999946752';
const storageByteDeposit = '100000000000000';

async function main() {
  const ethParams = calcEthereumTransactionParams({
    gasLimit: '2100001',
    validUntil: '360001',
    storageLimit: '64001',
    txFeePerGas,
    storageByteDeposit
  });

  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());

  const Escrow = await ethers.getContractFactory("Escrow");
  const instance = await Escrow.deploy({
    gasPrice: ethParams.txGasPrice
  });

  await instance.deployed();

  console.log("Contract address:", instance.address);

  const value = await instance.test();

  console.log("Res:", value);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });