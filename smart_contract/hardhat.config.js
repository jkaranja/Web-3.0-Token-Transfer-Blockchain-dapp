require('@nomiclabs/hardhat-waffle');


module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/-vKt3q1NqN8Ee7vvpSsh0GTd58YYpj03",
      accounts: [
        "120e3a3aaafba96697688c6f9832b37a4cb98471029db7634aa52cb88d206e72",
      ],
    },
  },
};