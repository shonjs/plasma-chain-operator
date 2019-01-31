# Deploy your own Plasma Chain

## Prerequisites 
- `node.js` -- version 11.6.0
- `git` -- version 2.17.1
- `g++` -- version 7.3.1


$ npm install
$ ./bin/plasma-chain.js new
$ ./bin/plasma-chain.js init
$ ./bin/plasma-chain.js operator start

To deploy a new Plasma Chain, use the following commands:
```
0) $ npm install plasma-chain -g  # install the plasma chain operator

1) $ plasma-chain account new  # create a new account

2) # On Rinkeby testnet, send your new Operator address ~0.5 ETH.
You can use a faucet to get test ETH for free here: https://faucet.rinkeby.io/

3) $ plasma-chain deploy # initalizes a new Plasma Chain.
Note you will be prompted for a unique Plasma Chain name & IP address.
If you are running on your laptop, just set the IP to `0.0.0.0` as you probably don't
want to reveal your IP to the public. However, if you are running in a data center and would
like to accept Plasma transactions & serve a block explorer to the public, go ahead and set an IP.

4) $ plasma-chain start # start your new Plasma Chain
You can also view your local block explorer at http:127.0.0.1:8000

[optional]
5) $ plasma-chain testSwarm # spam your Plasma Chain with tons of test transactions 😁

```
