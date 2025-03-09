import { task } from "hardhat/config";

task("deposit", "Deposit tokens to an address")
  .addPositionalParam("from", "Private key depositing the tokens")
  .addPositionalParam("amount", "Amount of tokens to deposit (in ether)")
  .setAction(async (taskArgs, hre) => {
    const escrow = await hre.ethers.getContractAt(
      "EscrowNative",
      process.env.ESCROW_ADDRESS!
    );

    const wallet = new hre.ethers.Wallet(taskArgs.from, hre.ethers.provider);
    console.log("Connected to wallet:", await wallet.getAddress());

    console.log("Depositing...");
    const tx1 = await escrow
      .connect(wallet)
      .deposit({ value: hre.ethers.parseEther(taskArgs.amount) });
    await tx1.wait();

    console.log("Done.");
  });
