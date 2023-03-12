# node-electrum-client

Electrum Server (Electrs) Protocol Client for Node.js

## what is this

https://github.com/romanz/electrs

An efficient re-implementation of Electrum Server, inspired by ElectrumX, Electrum Personal Server and bitcoincore-indexd.

## install

```
npm i electrs-client
```

## spec

* https://electrumx-spesmilo.readthedocs.io/en/latest/protocol-basics.html#script-hashes
* TCP / TLS
* JSON-RPC
* Subscribe Message
* High Performance Message
* no dependency for other library

## usage

```
const ElectrumCli = require('electrs-client')
const main = async () => {
    const ecl = new ElectrumCli(995, 'btc.smsys.me', 'tls') // tcp or tls
    await ecl.connect() // connect(promise)
    ecl.subscribe.on('blockchain.headers.subscribe', (v) => console.log(v)) // subscribe message(EventEmitter)
    try{
        const method = 'server_version';
        const params = ["3.0.5", "1.1"];
        const response = await ecl.electr_client(method,params) // json-rpc(promise)
        console.log(ver)
    }catch(e){
        console.log(e)
    }
    await ecl.close() // disconnect(promise)
}
main()
```



find reference to all 

