const ElectrumClient = require('..')

const main = async () => {
    const ecl = new ElectrumClient(995, 'btc.smsys.me', 'tls')
    await ecl.connect()
    try{
        const method = 'server_version';
        const params = ["3.0.5", "1.1"];
        const response = await ecl.electr_client(method,params) // json-rpc(promise)
        console.log(response);
        // or using the hard coded methods
        const balance = await ecl.blockchainAddress_getBalance("12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX")
        console.log(balance)
        const unspent = await ecl.blockchainAddress_listunspent("12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX")
        console.log(unspent)
    }catch(e){
        console.log(e)
    }
    await ecl.close()
}
main().catch(console.log)
