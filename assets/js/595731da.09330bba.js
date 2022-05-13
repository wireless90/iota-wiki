"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[42697],{95286:function(t,e,a){a.r(e),a.d(e,{assets:function(){return s},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],o={},d=void 0,p={unversionedId:"libraries/java/api/AccountManager",id:"libraries/java/api/AccountManager",title:"AccountManager",description:"The account manager.",source:"@site/content/build/wallet.rs/production/documentation/docs/libraries/java/api/AccountManager.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/AccountManager",permalink:"/wallet.rs/libraries/java/api/AccountManager",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/content/build/wallet.rs/production/documentation/docs/libraries/java/api/AccountManager.mdx",tags:[],version:"current",frontMatter:{}},s={},u=[{value:"Builder(): AccountManagerBuilder",id:"builder-accountmanagerbuilder",level:3},{value:"getMigrationData(nodes, seed, permanode, security_level, initial_address_index, gap_limit): MigrationData",id:"getmigrationdatanodes-seed-permanode-security_level-initial_address_index-gap_limit-migrationdata",level:3},{value:"getMigrationAddress(ledger_prompt, account_id): MigrationAddress",id:"getmigrationaddressledger_prompt-account_id-migrationaddress",level:3},{value:"createMigrationBundle(seed, input_address_indexes, options): MigrationBundle",id:"createmigrationbundleseed-input_address_indexes-options-migrationbundle",level:3},{value:"sendMigrationBundle(nodes, bundle_hash, mwm): void",id:"sendmigrationbundlenodes-bundle_hash-mwm-void",level:3},{value:"startBackgroundSync(polling_interval, automatic_output_consolidation): void",id:"startbackgroundsyncpolling_interval-automatic_output_consolidation-void",level:3},{value:"stopBackgroundSync(): void",id:"stopbackgroundsync-void",level:3},{value:"setStoragePassword(password): void",id:"setstoragepasswordpassword-void",level:3},{value:"setStrongholdPassword(password): void",id:"setstrongholdpasswordpassword-void",level:3},{value:"changeStrongholdPassword(current_password, new_password): void",id:"changestrongholdpasswordcurrent_password-new_password-void",level:3},{value:"isLatestAddressUnused(): boolean",id:"islatestaddressunused-boolean",level:3},{value:"setClientOptions(options): void",id:"setclientoptionsoptions-void",level:3},{value:"storeMnemonic(signer_type, mnemonic): void",id:"storemnemonicsigner_type-mnemonic-void",level:3},{value:"generateMnemonic(): String",id:"generatemnemonic-string",level:3},{value:"verifyMnemonic(mnemonic): void",id:"verifymnemonicmnemonic-void",level:3},{value:"createAccount(client_options): AccountInitialiser",id:"createaccountclient_options-accountinitialiser",level:3},{value:"removeAccount(account_id): void",id:"removeaccountaccount_id-void",level:3},{value:"syncAccounts(): AccountsSynchronizer",id:"syncaccounts-accountssynchronizer",level:3},{value:"internalTransfer(from_account_id, to_account_id, amount): Message",id:"internaltransferfrom_account_id-to_account_id-amount-message",level:3},{value:"backup(destination, stronghold_password): Path",id:"backupdestination-stronghold_password-path",level:3},{value:"importAccounts(source, stronghold_password): void",id:"importaccountssource-stronghold_password-void",level:3},{value:"getAccount(account_id): Account",id:"getaccountaccount_id-account",level:3},{value:"getAccounts(): Account[]",id:"getaccounts-account",level:3},{value:"reattach(account_id, message_id): Message",id:"reattachaccount_id-message_id-message",level:3},{value:"promote(account_id, message_id): Message",id:"promoteaccount_id-message_id-message",level:3},{value:"retry(account_id, message_id): Message",id:"retryaccount_id-message_id-message",level:3}],m={toc:u};function c(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"The account manager."),(0,l.kt)("p",null," Used to manage multiple accounts."),(0,l.kt)("h3",{id:"builder-accountmanagerbuilder"},"Builder(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountmanagerbuilder"},"AccountManagerBuilder")),(0,l.kt)("p",null,"Initialises the account manager builder."),(0,l.kt)("h3",{id:"getmigrationdatanodes-seed-permanode-security_level-initial_address_index-gap_limit-migrationdata"},"getMigrationData(nodes, seed, permanode, security_level, initial_address_index, gap_limit): ",(0,l.kt)("a",{parentName:"h3",href:"#migrationdata"},"MigrationData")),(0,l.kt)("p",null,"Gets the legacy migration data for the seed."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"String[]"),(0,l.kt)("td",{parentName:"tr",align:null},"List of legacy nodes to connect to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The seed we want to get data for")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permanode"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The legacy permanode URL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"security_level"),(0,l.kt)("td",{parentName:"tr",align:null},"byte"),(0,l.kt)("td",{parentName:"tr",align:null},"The seed security level")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial_address_index"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The starting index of the seed we searc")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gap_limit"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum gap we cross without finding an address with balance")))),(0,l.kt)("h3",{id:"getmigrationaddressledger_prompt-account_id-migrationaddress"},"getMigrationAddress(ledger_prompt, account_id): ",(0,l.kt)("a",{parentName:"h3",href:"#migrationaddress"},"MigrationAddress")),(0,l.kt)("p",null,"Convert the first address from the first account to a migration tryte address"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"ledger_prompt"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"createmigrationbundleseed-input_address_indexes-options-migrationbundle"},"createMigrationBundle(seed, input_address_indexes, options): ",(0,l.kt)("a",{parentName:"h3",href:"#migrationbundle"},"MigrationBundle")),(0,l.kt)("p",null,"Creates the bundle for migration associated with the given input indexes,\nPerforms bundle mining if the address is spent and ",(0,l.kt)("inlineCode",{parentName:"p"},"mine")," is true,\nAnd signs the bundle. Returns the bundle hash.\nIt logs the operations to ",(0,l.kt)("inlineCode",{parentName:"p"},"$storage_path.join(log_file_name)"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"seed"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"input_address_indexes"),(0,l.kt)("td",{parentName:"tr",align:null},"long[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#migrationbundleoptions"},"MigrationBundleOptions")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"sendmigrationbundlenodes-bundle_hash-mwm-void"},"sendMigrationBundle(nodes, bundle_hash, mwm): void"),(0,l.kt)("p",null,"Sends the migration bundle to the given node. mwm 0 for default(14)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nodes"),(0,l.kt)("td",{parentName:"tr",align:null},"String[]"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bundle_hash"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mwm"),(0,l.kt)("td",{parentName:"tr",align:null},"short"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"startbackgroundsyncpolling_interval-automatic_output_consolidation-void"},"startBackgroundSync(polling_interval, automatic_output_consolidation): void"),(0,l.kt)("p",null,"Initialises the background polling and MQTT monitoring."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"polling_interval"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the polling interval in seconds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"automatic_output_consolidation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"If we automatically consolidate outputs")))),(0,l.kt)("h3",{id:"stopbackgroundsync-void"},"stopBackgroundSync(): void"),(0,l.kt)("p",null,"Stops the background polling and MQTT monitoring."),(0,l.kt)("h3",{id:"setstoragepasswordpassword-void"},"setStoragePassword(password): void"),(0,l.kt)("p",null,"Sets the password for the stored accounts."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The Storage password")))),(0,l.kt)("h3",{id:"setstrongholdpasswordpassword-void"},"setStrongholdPassword(password): void"),(0,l.kt)("p",null,"Sets the stronghold password."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The Stronghold snapshot password")))),(0,l.kt)("h3",{id:"changestrongholdpasswordcurrent_password-new_password-void"},"changeStrongholdPassword(current_password, new_password): void"),(0,l.kt)("p",null,"Changes the stronghold password."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"current_password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The current Stronghold password")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"new_password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null},"The new Stronghold password")))),(0,l.kt)("h3",{id:"islatestaddressunused-boolean"},"isLatestAddressUnused(): boolean"),(0,l.kt)("p",null,"Determines whether all accounts has the latest address unused."),(0,l.kt)("h3",{id:"setclientoptionsoptions-void"},"setClientOptions(options): void"),(0,l.kt)("p",null,"Sets the client options for all accounts."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clientoptions"},"ClientOptions")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"storemnemonicsigner_type-mnemonic-void"},"storeMnemonic(signer_type, mnemonic): void"),(0,l.kt)("p",null,"Stores a mnemonic for the given signer type.\nIf the mnemonic is not provided, we'll generate one."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"signer_type"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#accountsignertype"},"AccountSignerType")),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"generatemnemonic-string"},"generateMnemonic(): String"),(0,l.kt)("p",null,"Generates a new mnemonic."),(0,l.kt)("h3",{id:"verifymnemonicmnemonic-void"},"verifyMnemonic(mnemonic): void"),(0,l.kt)("p",null,"Checks is the mnemonic is valid. If a mnemonic was generated with ",(0,l.kt)("inlineCode",{parentName:"p"},"generate_mnemonic()"),", the mnemonic here\nshould match the generated."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mnemonic"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"createaccountclient_options-accountinitialiser"},"createAccount(client_options): ",(0,l.kt)("a",{parentName:"h3",href:"#accountinitialiser"},"AccountInitialiser")),(0,l.kt)("p",null,"Adds a new account."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"client_options"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#clientoptions"},"ClientOptions")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"removeaccountaccount_id-void"},"removeAccount(account_id): void"),(0,l.kt)("p",null,"Deletes an account."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"syncaccounts-accountssynchronizer"},"syncAccounts(): ",(0,l.kt)("a",{parentName:"h3",href:"#accountssynchronizer"},"AccountsSynchronizer")),(0,l.kt)("p",null,"Syncs all accounts."),(0,l.kt)("h3",{id:"internaltransferfrom_account_id-to_account_id-amount-message"},"internalTransfer(from_account_id, to_account_id, amount): ",(0,l.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,l.kt)("p",null,"Transfers an amount from an account to another."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"from_account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"to_account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"backupdestination-stronghold_password-path"},"backup(destination, stronghold_password): Path"),(0,l.kt)("p",null,"Backups the storage to the given destination"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destination"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stronghold_password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"importaccountssource-stronghold_password-void"},"importAccounts(source, stronghold_password): void"),(0,l.kt)("p",null,"Import backed up accounts."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"source"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stronghold_password"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"getaccountaccount_id-account"},"getAccount(account_id): ",(0,l.kt)("a",{parentName:"h3",href:"#account"},"Account")),(0,l.kt)("p",null,"Gets the account associated with the given identifier."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"getaccounts-account"},"getAccounts(): ",(0,l.kt)("a",{parentName:"h3",href:"#account"},"Account[]")),(0,l.kt)("p",null,"Gets all accounts from storage."),(0,l.kt)("h3",{id:"reattachaccount_id-message_id-message"},"reattach(account_id, message_id): ",(0,l.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,l.kt)("p",null,"Reattaches an unconfirmed transaction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"promoteaccount_id-message_id-message"},"promote(account_id, message_id): ",(0,l.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,l.kt)("p",null,"Promotes an unconfirmed transaction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"retryaccount_id-message_id-message"},"retry(account_id, message_id): ",(0,l.kt)("a",{parentName:"h3",href:"#message"},"Message")),(0,l.kt)("p",null,"Retries an unconfirmed transaction."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"account_id"),(0,l.kt)("td",{parentName:"tr",align:null},"String"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message_id"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#messageid"},"MessageId")),(0,l.kt)("td",{parentName:"tr",align:null})))))}c.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return s},kt:function(){return c}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),p=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},s=function(t){var e=p(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(d,".").concat(c)]||m[c]||u[c]||l;return a?n.createElement(g,i(i({ref:e},s),{},{components:a})):n.createElement(g,i({ref:e},s))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=m;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);