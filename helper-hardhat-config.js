const { ethers } = require("hardhat")

const networkConfig = {
    11155111:{
        name : "sepolia",
        vrfCoordinatorV2:"0x779877A7B0D9E8603169DdbD7836e478b4624789",
        entranceFee:ethers.utils.parseEther("0.01"),
        gasLane: "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c"
    },
    31337:{
        name:"hardhat",
        entranceFee:ethers.utils.parseEther("0.01")
    }
}
const developementChains = ["hardhat" , "localhost"]

module.exports = {networkConfig, developementChains}