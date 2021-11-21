const main = async () => {
    // Compiles contract and generates files for contract under artifacts directory.
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    // Deploy.
    const waveContract = await waveContractFactory.deploy();
    // Hardhat creates local ethereum network.
    await waveContract.deployed();
    // Console log the address.
    console.log("Contract deployed to:", waveContract.address);
};

// Runs main program.
const runMain = async () => {
try {
    await main();
    process.exit(0);
} catch (error) {
    console.log(error);
    process.exit(1);
}
};

runMain();
