const ethers = require('ethers')


//const wallet[];



//Number of wallets to be generated 
function generateWallets(numWallet){

//FUNCTION THAT GENERATES WALLETS 
for(let i = 0; i < numWallet;i++)
{
    const wallet = ethers.Wallet.createRandom()
    let object = {
        'address: ': wallet.address,
        'nemonic: ': wallet.mnemonic.phrase,
        'privateKey:': wallet.privateKey
    }
    
    console.log(object)
    
    

}


}


console.log('generating wallets....')

//param take an integer to generate num of wallets
generateWallets(1);







