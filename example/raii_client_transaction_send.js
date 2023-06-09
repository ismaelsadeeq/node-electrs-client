'use strict';
const ElectrumClient = require('..');

const createRaiiClient = (port, host, protocol, options) => {
    return (params, promise) => {
        const name = params.join(':')
        const client = new ElectrumClient(port, host, protocol, options)
        console.time(name)
        return client.connect().then( () => {
            return promise(client)
        }).catch( e => {
            client.close()
            console.timeEnd(name)
            throw e
        }).then( res => {
            client.close()
            console.timeEnd(name)
            return res
        })
    }

}

const main = async(hex) => {
    const hosts = ['electrum-mona.bitbank.cc', 'electrumx.tamami-foundation.org']
    const host = hosts[Math.floor(Math.random() * hosts.length)]
    const connect = createRaiiClient(50001, host, 'tcp')
    await connect(['blockchainTransaction_broadcast', hex], async(client) => {
        const method = 'server_version';
        const params = ["3.0.5", "1.1"];
        const response = await client.electr_client(method,params) // json-rpc(promise)
        console.log(response);
        // or using the hard coded methods
        const result = await client.blockchainTransaction_broadcast(hex)
        console.log(result)
    })
}

const getopt = () => {
    return process.argv.slice(2)[0]
}

main(getopt()).catch(console.log)
