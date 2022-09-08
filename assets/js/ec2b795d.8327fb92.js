"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[66958],{18594:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(87462),o=(a(67294),a(3905)),s=a(44393);const r={description:"Official IOTA Wallet Library Software Node.js examples.",image:"/img/logo/wallet_light.png",keywords:["account","address","nodejs","dust protection","password","stronghold","Chrysalis","reference"]},i="Examples in Node.js",l={unversionedId:"examples/nodejs",id:"examples/nodejs",title:"Examples in Node.js",description:"Official IOTA Wallet Library Software Node.js examples.",source:"@site/content/build/wallet.rs/production/documentation/docs/examples/nodejs.mdx",sourceDirName:"examples",slug:"/examples/nodejs",permalink:"/wallet.rs/examples/nodejs",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/examples/nodejs.mdx",tags:[],version:"current",frontMatter:{description:"Official IOTA Wallet Library Software Node.js examples.",image:"/img/logo/wallet_light.png",keywords:["account","address","nodejs","dust protection","password","stronghold","Chrysalis","reference"]},sidebar:"docs",previous:{title:"Examples in Rust",permalink:"/wallet.rs/examples/rust"},next:{title:"Examples in Python",permalink:"/wallet.rs/examples/python"}},c={},d=[{value:"Account Manager and Individual Accounts",id:"account-manager-and-individual-accounts",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Alias",id:"alias",level:4},{value:"Generating Address(es)",id:"generating-addresses",level:2},{value:"Checking Balance",id:"checking-balance",level:2},{value:"Sending Tokens",id:"sending-tokens",level:2},{value:"Dust Protection",id:"dust-protection",level:3},{value:"Backing Up a Database",id:"backing-up-a-database",level:2},{value:"Restore a Database",id:"restore-a-database",level:2},{value:"Listen to Events",id:"listen-to-events",level:2}],u={toc:d};function p(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"examples-in-nodejs"},"Examples in Node.js"),(0,o.kt)("p",null,"In this section, you will go over several examples that use the node.js binding of the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library. You can also find examples of the code in the ",(0,o.kt)("inlineCode",{parentName:"p"},"/bindings/nodejs/examples")," folder of the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/dev/bindings/nodejs/examples"},"official GitHub repository"),"."),(0,o.kt)("p",null,"ll the examples in this section expect you to set your custom password  in the ",(0,o.kt)("em",{parentName:"p"},".env")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'SH_PASSWORD="here is your super secure password"\n')),(0,o.kt)("h2",{id:"account-manager-and-individual-accounts"},"Account Manager and Individual Accounts"),(0,o.kt)("p",null,"You can initialize (open) secure storage for individual accounts. This storage is backed up by ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," by default, using an AccountManager instance.  "),(0,o.kt)("p",null,"The following example creates a new database and account:"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example creates a new database and account\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager, SignerType } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    try {\n        manager.setStrongholdPassword(process.env.SH_PASSWORD);\n        let account;\n        try {\n            account = manager.getAccount('Alice');\n        } catch (e) {\n            console.log(\"Couldn't get account, creating a new one\");\n        }\n\n        // Create account only if it does not already exist\n        if (!account) {\n            manager.storeMnemonic(SignerType.Stronghold);\n            account = manager.createAccount({\n                clientOptions: {\n                    node: { url: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe' },\n                    localPow: true,\n                },\n                alias: 'Alice',\n            });\n            console.log('Account created:', account.id());\n        }\n\n        const synced = await account.sync();\n        console.log('Synced account', synced);\n    } catch (error) {\n        console.log('Error: ' + error);\n    }\n}\n\nrun();\n"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Storage is initialized under the given path (",(0,o.kt)("inlineCode",{parentName:"li"},"./alice-database"),")."),(0,o.kt)("li",{parentName:"ul"},"The password is set based on your password in ",(0,o.kt)("em",{parentName:"li"},".env")," file (",(0,o.kt)("inlineCode",{parentName:"li"},"manager.setStrongholdPassword(process.env.SH_PASSWORD)")," )."),(0,o.kt)("li",{parentName:"ul"},"When you initialize the new database, a Stronghold mnemonic (seed) is automatically generated and stored by default (",(0,o.kt)("inlineCode",{parentName:"li"},"manager.storeMnemonic(SignerType.Stronghold)")," )."),(0,o.kt)("li",{parentName:"ul"},"You will only need to set the seed when you initialize the database for the first time. You can open an already initialized database using your password.")),(0,o.kt)("p",null,"The storage is encrypted at rest, so you need a strong password and location to place your storage. "),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"We recommended that you store your ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," password encrypted on rest and separated from ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," snapshots. "),(0,o.kt)("p",{parentName:"admonition"},"Deal with the password with utmost care.")),(0,o.kt)("p",null,"Storage is made of two things:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A single file called ",(0,o.kt)("em",{parentName:"li"},"wallet.stronghold")," contains the ",(0,o.kt)("em",{parentName:"li"},"seed"),". ",(0,o.kt)("inlineCode",{parentName:"li"},"Stronghold")," will secure the seed and encrypt it at rest. The generated seed (mnemonic) serves as a cryptographic key, which is used to generate all accounts and related addresses."),(0,o.kt)("li",{parentName:"ul"},"Other data used by the library that is stored under ",(0,o.kt)("em",{parentName:"li"},"db")," sub-directory. The includes account information, generated addresses, fetched messages, etc. This data is used to speed up some operations, such as account creation, address generation, etc.")),(0,o.kt)("p",null,"One of the key principles behind ",(0,o.kt)("inlineCode",{parentName:"p"},"Stronghold")," based storage is that no one can extract a seed from the storage. You manage your accounts via an ",(0,o.kt)("em",{parentName:"p"},"AccountManager")," instance and all the complexities are hidden under the hood and are dealt with securely."),(0,o.kt)("p",null,"If you also want to store a seed somewhere else, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.generateMnemonic()")," method. Using this method generates a random seed. You can also use it before the actual account initialization."),(0,o.kt)("p",null,"You can find detailed information about seed generation in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/developer#seed"},"Developer Guide to Chrysalis"),"."),(0,o.kt)("h3",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library uses a model of individual accounts to separate individual users or clients from each other. You can generate multiple addresses for each account deterministically. You can find more information about account management in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/guides/exchange#implementation-guide"},"Developer Guide to Chrysalis"),"."),(0,o.kt)("p",null,"Once you have created the backend storage, you can create individual accounts for individual users can be created by running the ",(0,o.kt)("inlineCode",{parentName:"p"},"manager.createAccount()")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"    let account = await manager.createAccount({\n        alias: 'Alice',  // an unique id from your existing user\n        clientOptions: { node: 'https://api.lb-0.h.chrysalis-devnet.iota.cafe', localPow: false }\n    })\n")),(0,o.kt)("p",null,"Each account is related to a specific IOTA network (mainnet and devnet), which is referenced by node properties such as node url. In this example, it is on the ",(0,o.kt)("inlineCode",{parentName:"p"},"Chrysalis")," devnet balancer."),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/reference/nodejs"},"Wallet Node.js API Reference")," for more information about ",(0,o.kt)("em",{parentName:"p"},"clientOptions")," ."),(0,o.kt)("h4",{id:"alias"},"Alias"),(0,o.kt)("p",null,"An ",(0,o.kt)("em",{parentName:"p"},"Alias")," should be unique, and it can be any string that you see fit. The ",(0,o.kt)("em",{parentName:"p"},"alias")," is used to identify the account later on. Each account is also represented by an ",(0,o.kt)("em",{parentName:"p"},"index")," which is incremented by 1 every time new account is created.\nAny account can be then referred to by its ",(0,o.kt)("em",{parentName:"p"},"index")," , ",(0,o.kt)("em",{parentName:"p"},"alias")," , or one of its generated ",(0,o.kt)("em",{parentName:"p"},"addresses")," ."),(0,o.kt)("p",null,"Several API calls can be performed via an ",(0,o.kt)("em",{parentName:"p"},"account")," instance."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"It is good practice to sync accounts with the Tangle every time you work with an ",(0,o.kt)("em",{parentName:"p"},"account")," instance. This way, you can ensure that you rely on the latest available information."),(0,o.kt)("p",{parentName:"admonition"},"You can do this using ",(0,o.kt)("inlineCode",{parentName:"p"},"account.sync()"),".",(0,o.kt)("inlineCode",{parentName:"p"},"account.sync()")," is performed automatically on ",(0,o.kt)("inlineCode",{parentName:"p"},"send"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"retry"),",",(0,o.kt)("inlineCode",{parentName:"p"},"reattach")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"promote")," API calls.")),(0,o.kt)("p",null,"Once an account has been created, you can retrieve an instance using the following methods: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/reference/nodejs#getaccountaccountid"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountManager.getAccount(accountId)")," "),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/reference/nodejs#getaccountbyaliasalias"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountManager.getAccountByAlias(alias)")," "),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/wallet.rs/reference/nodejs#getaccounts"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountManager.getAccounts()")," ."),".")),(0,o.kt)("p",null,"The most common methods of ",(0,o.kt)("em",{parentName:"p"},"account")," instance are:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"account.alias()")," : Returns an alias of the given account.\n"),(0,o.kt)("inlineCode",{parentName:"p"},"account.listAddresses()")," : Returns list of addresses related to the account.\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"account.getUnusedAddress()")," : Returns a first unused address.\n"),(0,o.kt)("inlineCode",{parentName:"p"},"account.generateAddress()")," : Generate a new address for the address index incremented by 1.\n",(0,o.kt)("em",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"em"},"account.balance()")," : Returns the balance for the given account.\n"),(0,o.kt)("inlineCode",{parentName:"p"},"account.sync()")," : Sync the account information with the Tangle."),(0,o.kt)("h2",{id:"generating-addresses"},"Generating Address(es)"),(0,o.kt)("p",null,"Each account can have multiple addresses. Addresses are generated deterministically based on the account and address index. This means that the combination of account and index uniquely identifies the given address."),(0,o.kt)("p",null,"There are two types of addresses, ",(0,o.kt)("em",{parentName:"p"},"internal")," and ",(0,o.kt)("em",{parentName:"p"},"public")," (external), and each set of addresses is independent of each other and has an independent ",(0,o.kt)("em",{parentName:"p"},"index")," id."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can create ",(0,o.kt)("em",{parentName:"li"},"Public")," addresses using the ",(0,o.kt)("inlineCode",{parentName:"li"},"account.generateAddress()")," function. Public addresses are flagged as ",(0,o.kt)("em",{parentName:"li"},"internal=false")," (public)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"Internal")," addresses are also called ",(0,o.kt)("inlineCode",{parentName:"li"},"change")," addresses. ",(0,o.kt)("em",{parentName:"li"},"Internal")," addresses are used to store the excess funds and are indicated as ",(0,o.kt)("em",{parentName:"li"},"internal=false"),".")),(0,o.kt)("p",null,"This approach is also known as a ",(0,o.kt)("em",{parentName:"p"},"BIP32 Hierarchical Deterministic wallet (HD Wallet)"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The IOTA 1.5 (Chrysalis) network supports reusing addresses multiple times.")),(0,o.kt)("p",null,"You can use the following example to generate a new address:"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example generates a new address.\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet');\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD);\n\n    const account = manager.getAccount('Alice');\n    console.log('Account:', account.alias());\n\n    // Always sync before doing anything with the account\n    await account.sync();\n    console.log('Syncing...');\n\n    const address = account.generateAddress();\n    console.log('New address:', address);\n\n    // You can also get the latest unused address:\n    const addressObject = account.latestAddress();\n    console.log('Address:', addressObject.address);\n\n    // Use the Chrysalis Faucet to send testnet tokens to your address:\n    console.log(\n        'Fill your address with the Faucet: https://faucet.chrysalis-devnet.iota.cafe/',\n    );\n\n    const addresses = account.listAddresses();\n    console.log('Addresses:', addresses);\n}\n\nrun();\n"),(0,o.kt)("h2",{id:"checking-balance"},"Checking Balance"),(0,o.kt)("p",null,"Before continuing, you should visit the ",(0,o.kt)("a",{parentName:"p",href:"https://faucet.chrysalis-devnet.iota.cafe/"},"IOTA devnet faucet service")," and send some tokens to your devnet addresses."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"IOTA Faucet Service",src:a(76507).Z,width:"875",height:"464"})),(0,o.kt)("p",null,"You can use the following example to generate a new database and account:"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example creates a new database and account\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD);\n\n    const account = manager.getAccount('Alice');\n\n    console.log('Account:', account.alias());\n\n    // Always sync before doing anything with the account\n    await account.sync();\n    console.log('Syncing...');\n\n    console.log('Available balance', account.balance().available);\n}\n\nrun();\n"),(0,o.kt)("p",null,"IOTA is based on ",(0,o.kt)("em",{parentName:"p"},"Unspent Transaction Output")," model. You can find a detailed explanation in the ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/learn/about-iota/messages#utxo"},"Developer Guide to Chrysalis"),"."),(0,o.kt)("h2",{id:"sending-tokens"},"Sending Tokens"),(0,o.kt)("p",null,"You can use the following example to send tokens using an Account instance to any desired  address:"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example sends IOTA tokens to an address.\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const {\n        AccountManager,\n        RemainderValueStrategy,\n    } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD);\n\n    const account = manager.getAccount('Alice');\n\n    console.log('Alias', account.alias());\n    console.log('Syncing...');\n    await account.sync();\n    console.log('Available balance', account.balance().available);\n\n    //TODO: Replace with the address of your choice!\n    const address =\n        'atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r';\n    const amount = 1000000;\n\n    const response = await account.send(address, amount, {\n        remainderValueStrategy: RemainderValueStrategy.reuseAddress(),\n    });\n\n    console.log(\n        `Check your message on https://explorer.iota.org/devnet/message/${response.id}`,\n    );\n}\n\nrun();\n"),(0,o.kt)("p",null,"The full function signature is ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send(address, amount, [options])"),".\nYou can use the default options. However, you can provide additional options, such as ",(0,o.kt)("inlineCode",{parentName:"p"},"remainderValueStrategy")," , which has the following strategies:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"changeAddress()"),": Send the remainder value to an internal address."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"reuseAddress()"),": Send the remainder value back to its original address.")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.send()")," function returns a ",(0,o.kt)("em",{parentName:"p"},"wallet message")," that fully describes the given transaction. You can use the ",(0,o.kt)("em",{parentName:"p"},"messageId")," to check confirmation statuses. You can also retrieve individual messages related to any given account using the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.listMessages()")," function."),(0,o.kt)("h3",{id:"dust-protection"},"Dust Protection"),(0,o.kt)("p",null,"The network uses a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/faq#what-is-dust-protection-and-how-does-it-work"},"dust protection")," protocol to prevent malicious actors from spamming the network while also keeping track of the unspent amount ( ",(0,o.kt)("em",{parentName:"p"},"UTXO")," )."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Micro-transactions below 1Mi of IOTA tokens can be sent to another address if there is already at least 1Mi on that address.\nThat is why we sent 1Mi in the last example, to comply with the dust protection."),(0,o.kt)("p",{parentName:"admonition"},"Dust protection also means you cannot leave less than 1Mi on a spent address (leave a dust behind).")),(0,o.kt)("h2",{id:"backing-up-a-database"},"Backing Up a Database"),(0,o.kt)("p",null,"Due to security practices that are incorporated in the Stronghold's DNA, there is no way to retrieve a seed, as it is encrypted at rest. So, if you are using the default options, you should make sure that you back up your seed regularly. "),(0,o.kt)("p",null,"The following example will guide you in backing up your data in secure files. You can move this file to another app or device, and restore it."),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example backups your data in a secure file.\n * You can move this file to another app or device and restore it.\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD);\n\n    const path = await manager.backup('./backup', process.env.SH_PASSWORD);\n\n    console.log('Backup path:', path);\n}\n\nrun();\n"),(0,o.kt)("p",null,"Alternatively, you can create a copy of the ",(0,o.kt)("em",{parentName:"p"},"wallet.stronghold")," file and use it as seed backup. This can be achieved by a daily ",(0,o.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/crontab"},(0,o.kt)("em",{parentName:"a"},"cronjob")),", ",(0,o.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/rsync"},(0,o.kt)("em",{parentName:"a"},"rsync")),", or ",(0,o.kt)("a",{parentName:"p",href:"https://linux.die.net/man/1/scp"},(0,o.kt)("em",{parentName:"a"},"scp"))," with a datetime suffix for example."),(0,o.kt)("h2",{id:"restore-a-database"},"Restore a Database"),(0,o.kt)("p",null,"To restore a database via ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs"),", you will need to create a new empty database with a password (without the mnemonic seed). After you have created the empty database, you will need to import all accounts from the file that has been backed up earlier."),(0,o.kt)("p",null,"The following example restores a secured backup file:"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example restores a secured backup file.\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    // Add the path to the file from example 5-backup.js\n    // for example: ./backup/2021-02-12T01-23-11-iota-wallet-backup-wallet.stronghold\n    const path = 'input your backup file';\n\n    manager.importAccounts(path, process.env.SH_PASSWORD);\n    const account = manager.getAccount('Alice');\n    console.log('Account:', account.alias());\n}\n\nrun();\n"),(0,o.kt)("p",null,"Since the backup file is just a copy of the original database, it can be also be renamed to ",(0,o.kt)("em",{parentName:"p"},"wallet.stronghold")," and opened in a standard way."),(0,o.kt)("h2",{id:"listen-to-events"},"Listen to Events"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library can listen to several supported events. As soon as the event occurs, a provided callback will be triggered."),(0,o.kt)("p",null,"You can use the following example to fetch an existing ",(0,o.kt)("em",{parentName:"p"},"Account")," and listen to transaction events related to that ",(0,o.kt)("em",{parentName:"p"},"Account")," :"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},"/**\n * This example shows how to use events.\n */\n\nrequire('dotenv').config();\n\nasync function run() {\n    const { AccountManager } = require('@iota/wallet');\n\n    const manager = new AccountManager({\n        storagePath: './alice-database',\n    });\n\n    manager.setStrongholdPassword(process.env.SH_PASSWORD);\n\n    const account = manager.getAccount('Alice');\n    console.log('Account:', account.alias());\n\n    // Always sync before doing anything with the account\n    await account.sync();\n    console.log('Syncing...');\n    // let address = account.generateAddress()\n\n    // get latest address\n    let addressObject = account.latestAddress();\n\n    console.log('Address:', addressObject.address);\n\n    // Use the Chrysalis Faucet to send testnet tokens to your address:\n    console.log(\n        'Fill your address with the Faucet: https://faucet.chrysalis-devnet.iota.cafe/',\n    );\n\n    const callback = function (err, data) {\n        if (err) {\n            console.error(err);\n        } else {\n            console.log('Data:', data);\n        }\n    };\n\n    manager.listen('BalanceChange', callback);\n\n    // Event listeners would be removed after 30 seconds.\n    setTimeout(() => {\n        manager.removeEventListeners('BalanceChange');\n        console.log('Event listeners removed');\n\n        // Exit the process\n        process.exit(0);\n    }, 30000);\n\n    // Possible Event Types:\n    //\n    // ErrorThrown\n    // BalanceChange\n    // NewTransaction\n    // ConfirmationStateChange\n    // Reattachment\n    // Broadcast\n}\n\nrun();\n"),(0,o.kt)("p",null,"Example output:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},"data: {\n  accountId: 'wallet-account://1666fc60fc95534090728a345cc5a861301428f68a237bea2b5ba0c844988566',\n  address: {\n    address: 'atoi1q9c6r2ek5w2yz54en78m8dxwl4qmwd7gmh9u0krm45p8txxyhtfry6apvwj',\n    balance: 20000000,\n    keyIndex: 0,\n    internal: false,\n    outputs: [ [Object], [Object] ]\n  },\n  balance: 20000000\n}\n")),(0,o.kt)("p",null,"You can then use the ",(0,o.kt)("em",{parentName:"p"},"accountId")," to identify the account via ",(0,o.kt)("inlineCode",{parentName:"p"},"AccountManager.getAccount(accountId)"),"."),(0,o.kt)("p",null,"Read more about Events in the ",(0,o.kt)("a",{parentName:"p",href:"/wallet.rs/reference/nodejs#addeventlistenerevent-cb"},"API reference"),"."))}p.isMDXComponent=!0},76507:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/screenshot_faucet-463b151b10627e967d2ba2b79de1db89.png"}}]);