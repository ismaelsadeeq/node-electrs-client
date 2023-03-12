const Client = require("..")

const proc = async(cl) => {
    try{
        const method = 'server_version';
        const params = ["3.0.5", "1.1"];
        const response = await cl.electr_client(method,params) // json-rpc(promise)
        console.log(response);
        // or using the hard coded methods
        const balance = await cl.blockchainAddress_getBalance("MS43dMzRKfEs99Q931zFECfUhdvtWmbsPt")
        console.log(balance)
        const utxo = await cl.blockchainAddress_listunspent("MS43dMzRKfEs99Q931zFECfUhdvtWmbsPt")
        console.log(utxo)
    }catch(e){
        console.log(e)
    }
}

const main = async(port, host) => {
    const cl = new Client(port, host);
    await cl.connect()
    for(let i = 0; i<100; ++i){
        await proc(cl)
    }
    await cl.close()
}

main(4444, "localhost")
