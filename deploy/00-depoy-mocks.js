const { GasCostPlugin } = require("ethers")
const { network, ethers } = require("hardhat")

const BASE_FEE = "250000000000000000"
const GAS_PRICE_LINK = 1e9

module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId
    if (chainId === 31337) {
        log("local network detected , deploying mocks ...")
        await deploy("mock", {
            from: deployer,
            log:true,
            args: [BASE_FEE,GAS_PRICE_LINK],
            blockConfirmations: network.config.blockConfirmations || 1
        })
        log("mocks deployedd!!!")
        log("8888888888888888888888888888888888888888888888888888888")
    }
}
module.exports.tags = ["all" , "mocks"]
