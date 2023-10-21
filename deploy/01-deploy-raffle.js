const { network, ethers } = require("hardhat")
const {networkConfig} = require("../helper-hardhat-config")
module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    let VRFCoordinatorAddress

    if(chainId ===31337){
        const VRFMock = await ethers.getContract("mock")
        VRFCoordinatorAddress = VRFMock.address
    }else{
        VRFCoordinatorAddress = networkConfig[chainId]["vrfCoordinatorV2"]
    }

    const args = []
    const raffle = await deploy("Raffle", {
        from: deployer,
        args: [],
        log: true,
        waitConfirmations: network.config.blockConfirmations || 1,
    })
}
