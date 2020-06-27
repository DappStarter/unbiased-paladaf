require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'install indoor olympic seed curve rare remind around hockey arctic blue snow'; 
let testAccounts = [
"0x931f71452469b0727fea03e1375ac166aa9c613fecd9460346e470da2a8f0e39",
"0x5c2a8a5f554234a39634ddf3675198e26f172339fca5ad5f0f12c96f040dff94",
"0xb3c3011976b8f876755a48dd89ade2c9d076747a3f7ae19f21170d5d32bf27de",
"0x1ae276758016bd342c44556ea6ef12db9bb45a37565a5e72ac97db6b63030e35",
"0x38003da5ae9f7149825becb670b9953dbf665221b8b0a3ed00de34bef59aea97",
"0x83d0b42fb20e0be617771cd8b37ca3dda7dc0a0951320babf2c443269464f1cf",
"0x4ad8e79d4ffc67565710bf3ad781599483194e68f596547e92b0adec450711d8",
"0x6c45e31c8b56cb3a53e443992398206691f5b58fc328226cd9a8b17dd4056530",
"0xd374ed4c6eea9fa9271c18bea388ca2d60e0f1691f03ac4e60850ab78c953658",
"0x46dce3ee61324d867d765d30fadf1acb90eefc24b781bd11557809c57d9cce92"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
