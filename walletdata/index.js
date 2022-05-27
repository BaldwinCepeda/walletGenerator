const person = require('./data')
const ethers = require('ethers')


//Number of wallets to be generated 
const numWallet = 3;





console.log('generating wallets....')

//FUNCTION THAT GENERATES WALLETS 
for(let i = 0; i < numWallet;i++)
{
    const wallet = ethers.Wallet.createRandom()
    console.log('address: ', wallet.address)
    console.log('mnemonic: ', wallet.mnemonic.phrase)
    console.log('privateKey:', wallet.privateKey)

}



