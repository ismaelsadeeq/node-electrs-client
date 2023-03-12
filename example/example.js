const ElectrumClient = require('..')

const method = 'server_version';
const params = ["3.0.5", "1.1"];
const main = async () => {
    try{
        const ecl = new ElectrumClient(50002, 'bitcoins.sk', 'tls')
        await ecl.connect()
        const response = await ecl.electr_client(method,params) // json-rpc(promise)
        await ecl.close()
    }catch(e){
        console.log("error")
        console.log(e)
    }
}
main()
