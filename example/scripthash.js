const ElectrumClient = require('..')

const main = async () => {
    const ecl = new ElectrumClient(50002, 'bitcoins.sk', 'tls')
    await ecl.connect()
    try{
        const method = 'server_version';
        const params = ["3.0.5", "1.1"];
        const response = await ecl.electr_client(method,params) // json-rpc(promise)
        console.log(response);
        // or using the hard coded methods
        const balance = await ecl.blockchainScripthash_getBalance("676ca8550e249787290b987e12cebdb2e9b26d88c003d836ffb1cb03ffcbea7c")
        console.log(balance)
        const unspent = await ecl.blockchainScripthash_listunspent("676ca8550e249787290b987e12cebdb2e9b26d88c003d836ffb1cb03ffcbea7c")
        console.log(unspent)
        const history = await ecl.blockchainScripthash_getHistory("676ca8550e249787290b987e12cebdb2e9b26d88c003d836ffb1cb03ffcbea7c")
        console.log(history)
        const mempool = await ecl.blockchainScripthash_getMempool("676ca8550e249787290b987e12cebdb2e9b26d88c003d836ffb1cb03ffcbea7c")
        console.log(mempool)
    }catch(e){
        console.log(e)
    }
    await ecl.close()
}
main().catch(console.log)
