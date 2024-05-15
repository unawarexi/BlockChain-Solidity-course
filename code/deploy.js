const ethers = require("ethers");
const fs = require("fs-extra");

async function main() {
  try {
    console.log("Checking provider connection...");

    // provider instance
    const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

    // Verify the connection to the provider
    await provider.getNetwork();
    console.log("Provider connected successfully.");

    // wallet instance
    const wallet = new ethers.Wallet(
      "0x4199cbfc886f0b5480481adf9ba70e36b49434a9c80b58834dc2de68b6049bc2",
      provider
    );

    // Read and parse ABI and binary
    const abi = JSON.parse(
      fs.readFileSync("./MainSimpleStorage_sol_SimpleStorage.abi", "utf8")
    );
    const binary = fs.readFileSync(
      "./MainSimpleStorage_sol_SimpleStorage.bin",
      "utf8"
    );

    // contract factory for deployment
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    console.log("Deploying, please wait...");

    // Deploy
    const contract = await contractFactory.deploy();

    // Wait for the deployment transaction
    const deploymentReceipt = await contract.waitForDeployment(1);
    console.log("Contract deployment transaction", contract.waitForDeployment);

    console.log("Deployment transaction receipt:", deploymentReceipt);

    // console.log("Contract deployed at address:", contract.address);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.error("Unhandled Error:", error);
    process.exit(1);
  });
