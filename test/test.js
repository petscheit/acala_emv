const { expect } = require("chai");
const { calcEthereumTransactionParams } = require("@acala-network/eth-providers");

const txFeePerGas = '199999946752';
const storageByteDeposit = '100000000000000';
let instance;

describe("Escrow contract", async function () {
    it("Deploys", async function () {
        const ethParams = calcEthereumTransactionParams({
                gasLimit: '2100001',
                validUntil: '360001',
                storageLimit: '64001',
                txFeePerGas,
                storageByteDeposit
        });
        
        const Escrow = await ethers.getContractFactory("Escrow");
        
        instance = await Escrow.deploy({
                gasPrice: ethParams.txGasPrice
        });

        await instance.deployed();

        console.log("Contract address:", instance.address);

        
    });

    it("can return sender balance", async () => {
        const value = await instance.test();

        console.log("Value:", value)
    })

    it("Contract Works", async () => {
        const value = await instance.contractWorks();

        console.log("Contract Works:", value)
    })
});