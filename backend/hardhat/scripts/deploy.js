async function main() {
    const LiquorTrading = await ethers.getContractFactory("LiquorTrading");

    // Get the deployer's address
    const [deployer] = await ethers.getSigners();

    // Deploy the contract and pass the deployer's address as the initial owner
    const liquorTrading = await LiquorTrading.deploy(deployer.address);

    await liquorTrading.deployed();
    console.log("LiquorTrading deployed to:", liquorTrading.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });