require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arena fog sugar noodle ribbon remember arrow hope clinic bottom gate'; 
let testAccounts = [
"0xff80fdeea202682c7bb75894db48125e8098001b8e9e9f292afc78ba47c7086e",
"0xae10fc3e422edf167e12fe5783d2e462753e66be21c42e29cb9b2274c7582e71",
"0xedc11bad3b4329ead281fab73805f8fc2f5eca178fb72cd2bfe4345909f169c1",
"0x09fd209b8c1c4afdfa9709e2e12945d56cb6d21bfc79da446628f6c96835becd",
"0xab36be011db4b7cea064498212d52bfa3880b2443d31dc381d95d6868f7d573c",
"0x162bc687c27a9f519d2d6b186cc2cfb7f09a16063688e70fe6984d4666ee8abb",
"0x974083f2ecdd0e153513ad2fa9cb89253fd629960f543f83145cd3c9448d01a6",
"0x2e5da28f867c9508448f12e31ae694a55fd7dd70e6f669c7f9903715da0245e2",
"0x9e01bf68f1521b6977c7c28fc7cd7bd2df85578fedc868e1122bee972fe8456d",
"0x3529cb3eeb8977f1720899a685656bb3bd8b7d97a535480a577c8cc086f2ec49"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
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
            version: '^0.8.0'
        }
    }
};

