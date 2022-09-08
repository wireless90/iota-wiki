"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8165],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>p});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var r=n.createContext({}),u=function(t){var e=n.useContext(r),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},c=function(t){var e=u(t.components);return n.createElement(r.Provider,{value:e},t.children)},_={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},d=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,o=t.originalType,r=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),d=u(a),p=l,k=d["".concat(r,".").concat(p)]||d[p]||_[p]||o;return a?n.createElement(k,s(s({ref:e},c),{},{components:a})):n.createElement(k,s({ref:e},c))}));function p(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var o=a.length,s=new Array(o);s[0]=d;var i={};for(var r in e)hasOwnProperty.call(e,r)&&(i[r]=e[r]);i.originalType=t,i.mdxType="string"==typeof t?t:l,s[1]=i;for(var u=2;u<o;u++)s[u]=a[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58236:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>r,contentTitle:()=>s,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var n=a(87462),l=(a(67294),a(3905));const o={},s=void 0,i={unversionedId:"libraries/python/api_reference",id:"libraries/python/api_reference",title:"api_reference",description:"Account Objects",source:"@site/content/build/wallet.rs/develop/documentation/docs/libraries/python/api_reference.md",sourceDirName:"libraries/python",slug:"/libraries/python/api_reference",permalink:"/wallet.rs/develop/libraries/python/api_reference",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/content/build/wallet.rs/develop/documentation/docs/libraries/python/api_reference.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How To Send A Transaction",permalink:"/wallet.rs/develop/libraries/python/how_to/send_transaction"},next:{title:"Troubleshooting",permalink:"/wallet.rs/develop/troubleshooting"}},r={},u=[{value:"Account Objects",id:"account-objects",level:2},{value:"build_alias_output",id:"build_alias_output",level:4},{value:"build_basic_output",id:"build_basic_output",level:4},{value:"build_foundry_output",id:"build_foundry_output",level:4},{value:"build_nft_output",id:"build_nft_output",level:4},{value:"burn_native_token",id:"burn_native_token",level:4},{value:"burn_nft",id:"burn_nft",level:4},{value:"cnsolidate_outputs",id:"cnsolidate_outputs",level:4},{value:"destroy_alias",id:"destroy_alias",level:4},{value:"destroy_foundry",id:"destroy_foundry",level:4},{value:"generate_addresses",id:"generate_addresses",level:4},{value:"get_outputs_with_additional_unlock_conditions",id:"get_outputs_with_additional_unlock_conditions",level:4},{value:"get_output",id:"get_output",level:4},{value:"get_transaction",id:"get_transaction",level:4},{value:"list_addresses",id:"list_addresses",level:4},{value:"list_addresses_with_unspent_outputs",id:"list_addresses_with_unspent_outputs",level:4},{value:"list_outputs",id:"list_outputs",level:4},{value:"list_unspent_outputs",id:"list_unspent_outputs",level:4},{value:"list_transactions",id:"list_transactions",level:4},{value:"list_pending_transactions",id:"list_pending_transactions",level:4},{value:"melt_native_token",id:"melt_native_token",level:4},{value:"mint_native_token",id:"mint_native_token",level:4},{value:"minimum_required_storage_deposit",id:"minimum_required_storage_deposit",level:4},{value:"mint_nfts",id:"mint_nfts",level:4},{value:"get_balance",id:"get_balance",level:4},{value:"prepare_send_amount",id:"prepare_send_amount",level:4},{value:"prepare_transaction",id:"prepare_transaction",level:4},{value:"sync_account",id:"sync_account",level:4},{value:"send_amount",id:"send_amount",level:4},{value:"send_micro_transaction",id:"send_micro_transaction",level:4},{value:"send_native_tokens",id:"send_native_tokens",level:4},{value:"send_nft",id:"send_nft",level:4},{value:"set_alias",id:"set_alias",level:4},{value:"send_transaction",id:"send_transaction",level:4},{value:"sign_transaction_essence",id:"sign_transaction_essence",level:4},{value:"submit_and_store_transaction",id:"submit_and_store_transaction",level:4},{value:"try_claim_outputs",id:"try_claim_outputs",level:4},{value:"claim_outputs",id:"claim_outputs",level:4},{value:"send_outputs",id:"send_outputs",level:4},{value:"LedgerNanoSecretManager Objects",id:"ledgernanosecretmanager-objects",level:2},{value:"__init__",id:"__init__",level:4},{value:"MnemonicSecretManager Objects",id:"mnemonicsecretmanager-objects",level:2},{value:"__init__",id:"__init__-1",level:4},{value:"StrongholdSecretManager Objects",id:"strongholdsecretmanager-objects",level:2},{value:"__init__",id:"__init__-2",level:4},{value:"send_message_routine",id:"send_message_routine",level:4},{value:"IotaWalletError Objects",id:"iotawalleterror-objects",level:2},{value:"IotaWallet Objects",id:"iotawallet-objects",level:2},{value:"__init__",id:"__init__-3",level:4},{value:"create_account",id:"create_account",level:4},{value:"get_account",id:"get_account",level:4},{value:"get_account_data",id:"get_account_data",level:4},{value:"get_accounts",id:"get_accounts",level:4},{value:"backup",id:"backup",level:4},{value:"change_stronghold_password",id:"change_stronghold_password",level:4},{value:"clear_stronghold_password",id:"clear_stronghold_password",level:4},{value:"is_stronghold_password_available",id:"is_stronghold_password_available",level:4},{value:"recover_accounts",id:"recover_accounts",level:4},{value:"remove_latest_account",id:"remove_latest_account",level:4},{value:"restore_back",id:"restore_back",level:4},{value:"delete_accounts_and_database",id:"delete_accounts_and_database",level:4},{value:"generate_mnemonic",id:"generate_mnemonic",level:4},{value:"verify_mnemonic",id:"verify_mnemonic",level:4},{value:"set_client_options",id:"set_client_options",level:4},{value:"get_node_info",id:"get_node_info",level:4},{value:"set_stronghold_password",id:"set_stronghold_password",level:4},{value:"set_stronghold_password_clear_interval",id:"set_stronghold_password_clear_interval",level:4},{value:"store_mnemonic",id:"store_mnemonic",level:4},{value:"start_background_sync",id:"start_background_sync",level:4},{value:"stop_background_sync",id:"stop_background_sync",level:4}],c={toc:u};function _(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("a",{id:"iota_wallet"}),(0,l.kt)("h1",{id:"iota_wallet"},"iota","_","wallet"),(0,l.kt)("a",{id:"iota_wallet.account"}),(0,l.kt)("h1",{id:"iota_walletaccount"},"iota","_","wallet.account"),(0,l.kt)("a",{id:"iota_wallet.account.Account"}),(0,l.kt)("h2",{id:"account-objects"},"Account Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class Account()\n")),(0,l.kt)("a",{id:"iota_wallet.account.Account.build_alias_output"}),(0,l.kt)("h4",{id:"build_alias_output"},"build","_","alias","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_alias_output(amount, native_tokens, alias_id, state_index,\n                       state_metadata, foundry_counter, unlock_conditions,\n                       features, immutable_features)\n")),(0,l.kt)("p",null,"Build alias output."),(0,l.kt)("a",{id:"iota_wallet.account.Account.build_basic_output"}),(0,l.kt)("h4",{id:"build_basic_output"},"build","_","basic","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_basic_output(amount, native_tokens, unlock_conditions, features)\n")),(0,l.kt)("p",null,"Build basic output."),(0,l.kt)("a",{id:"iota_wallet.account.Account.build_foundry_output"}),(0,l.kt)("h4",{id:"build_foundry_output"},"build","_","foundry","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_foundry_output(amount, native_tokens, serial_number, token_scheme,\n                         unlock_conditions, features, immutable_features)\n")),(0,l.kt)("p",null,"Build foundry output."),(0,l.kt)("a",{id:"iota_wallet.account.Account.build_nft_output"}),(0,l.kt)("h4",{id:"build_nft_output"},"build","_","nft","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def build_nft_output(amount, native_tokens, nft_id, unlock_conditions,\n                     features, immutable_features)\n")),(0,l.kt)("p",null,"BuildNftOutput."),(0,l.kt)("a",{id:"iota_wallet.account.Account.burn_native_token"}),(0,l.kt)("h4",{id:"burn_native_token"},"burn","_","native","_","token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def burn_native_token(native_token, options)\n")),(0,l.kt)("p",null,"Burn native tokens. This doesn't require the foundry output which minted them, but will not increase\nthe foundries ",(0,l.kt)("inlineCode",{parentName:"p"},"melted_tokens")," field, which makes it impossible to destroy the foundry output. Therefore it's\nrecommended to use melting, if the foundry output is available."),(0,l.kt)("a",{id:"iota_wallet.account.Account.burn_nft"}),(0,l.kt)("h4",{id:"burn_nft"},"burn","_","nft"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def burn_nft(nft_id, options)\n")),(0,l.kt)("p",null,"Burn an nft output. Outputs controlled by it will be sweeped before if they don't have a storage\ndeposit return, timelock or expiration unlock condition. This should be preferred over burning, because after\nburning, the foundry can never be destroyed anymore."),(0,l.kt)("a",{id:"iota_wallet.account.Account.cnsolidate_outputs"}),(0,l.kt)("h4",{id:"cnsolidate_outputs"},"cnsolidate","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def cnsolidate_outputs(force, output_consolidation_threshold)\n")),(0,l.kt)("p",null,"Consolidate outputs."),(0,l.kt)("a",{id:"iota_wallet.account.Account.destroy_alias"}),(0,l.kt)("h4",{id:"destroy_alias"},"destroy","_","alias"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def destroy_alias(alias_id, options)\n")),(0,l.kt)("p",null,"Destroy an alias output. Outputs controlled by it will be sweeped before if they don't have a\nstorage deposit return, timelock or expiration unlock condition. The amount and possible native tokens will be\nsent to the governor address."),(0,l.kt)("a",{id:"iota_wallet.account.Account.destroy_foundry"}),(0,l.kt)("h4",{id:"destroy_foundry"},"destroy","_","foundry"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def destroy_foundry(foundry_id, options)\n")),(0,l.kt)("p",null,"Destroy a foundry output with a circulating supply of 0.\nNative tokens in the foundry (minted by other foundries) will be transactioned to the controlling alias"),(0,l.kt)("a",{id:"iota_wallet.account.Account.generate_addresses"}),(0,l.kt)("h4",{id:"generate_addresses"},"generate","_","addresses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_addresses(amount, options=None)\n")),(0,l.kt)("p",null,"Generate new addresses."),(0,l.kt)("a",{id:"iota_wallet.account.Account.get_outputs_with_additional_unlock_conditions"}),(0,l.kt)("h4",{id:"get_outputs_with_additional_unlock_conditions"},"get","_","outputs","_","with","_","additional","_","unlock","_","conditions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_outputs_with_additional_unlock_conditions(outputs_to_claim)\n")),(0,l.kt)("p",null,"Get outputs with additional unlock conditions."),(0,l.kt)("a",{id:"iota_wallet.account.Account.get_output"}),(0,l.kt)("h4",{id:"get_output"},"get","_","output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_output(output_id)\n")),(0,l.kt)("p",null,"Get output."),(0,l.kt)("a",{id:"iota_wallet.account.Account.get_transaction"}),(0,l.kt)("h4",{id:"get_transaction"},"get","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_transaction(transaction_id)\n")),(0,l.kt)("p",null,"Get transaction."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_addresses"}),(0,l.kt)("h4",{id:"list_addresses"},"list","_","addresses"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_addresses()\n")),(0,l.kt)("p",null,"List addresses."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_addresses_with_unspent_outputs"}),(0,l.kt)("h4",{id:"list_addresses_with_unspent_outputs"},"list","_","addresses","_","with","_","unspent","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_addresses_with_unspent_outputs()\n")),(0,l.kt)("p",null,"Returns only addresses of the account with unspent outputs."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_outputs"}),(0,l.kt)("h4",{id:"list_outputs"},"list","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_outputs(filter_options=None)\n")),(0,l.kt)("p",null,"Returns all outputs of the account."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_unspent_outputs"}),(0,l.kt)("h4",{id:"list_unspent_outputs"},"list","_","unspent","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_unspent_outputs(filter_options=None)\n")),(0,l.kt)("p",null,"Returns all unspent outputs of the account."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_transactions"}),(0,l.kt)("h4",{id:"list_transactions"},"list","_","transactions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_transactions()\n")),(0,l.kt)("p",null,"Returns all transaction of the account."),(0,l.kt)("a",{id:"iota_wallet.account.Account.list_pending_transactions"}),(0,l.kt)("h4",{id:"list_pending_transactions"},"list","_","pending","_","transactions"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def list_pending_transactions()\n")),(0,l.kt)("p",null,"Returns all pending transaction of the account."),(0,l.kt)("a",{id:"iota_wallet.account.Account.melt_native_token"}),(0,l.kt)("h4",{id:"melt_native_token"},"melt","_","native","_","token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def melt_native_token(native_token, options)\n")),(0,l.kt)("p",null,"Melt native tokens. This happens with the foundry output which minted them, by increasing it's\n",(0,l.kt)("inlineCode",{parentName:"p"},"melted_tokens")," field."),(0,l.kt)("a",{id:"iota_wallet.account.Account.mint_native_token"}),(0,l.kt)("h4",{id:"mint_native_token"},"mint","_","native","_","token"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def mint_native_token(native_token_options, options)\n")),(0,l.kt)("p",null,"Mint native token."),(0,l.kt)("a",{id:"iota_wallet.account.Account.minimum_required_storage_deposit"}),(0,l.kt)("h4",{id:"minimum_required_storage_deposit"},"minimum","_","required","_","storage","_","deposit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def minimum_required_storage_deposit(output)\n")),(0,l.kt)("p",null,"Minimum required storage deposit."),(0,l.kt)("a",{id:"iota_wallet.account.Account.mint_nfts"}),(0,l.kt)("h4",{id:"mint_nfts"},"mint","_","nfts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def mint_nfts(nfts_options, options)\n")),(0,l.kt)("p",null,"Mint nfts."),(0,l.kt)("a",{id:"iota_wallet.account.Account.get_balance"}),(0,l.kt)("h4",{id:"get_balance"},"get","_","balance"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_balance()\n")),(0,l.kt)("p",null,"Get account balance information."),(0,l.kt)("a",{id:"iota_wallet.account.Account.prepare_send_amount"}),(0,l.kt)("h4",{id:"prepare_send_amount"},"prepare","_","send","_","amount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def prepare_send_amount(addresses_with_amount, options)\n")),(0,l.kt)("p",null,"Prepare send amount."),(0,l.kt)("a",{id:"iota_wallet.account.Account.prepare_transaction"}),(0,l.kt)("h4",{id:"prepare_transaction"},"prepare","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def prepare_transaction(outputs, options)\n")),(0,l.kt)("p",null,"Prepare transaction."),(0,l.kt)("a",{id:"iota_wallet.account.Account.sync_account"}),(0,l.kt)("h4",{id:"sync_account"},"sync","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sync_account(options=None)\n")),(0,l.kt)("p",null,"Sync the account by fetching new information from the nodes.\nWill also retry pending transactions and consolidate outputs if necessary."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_amount"}),(0,l.kt)("h4",{id:"send_amount"},"send","_","amount"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_amount(addresses_with_amount, options=None)\n")),(0,l.kt)("p",null,"Send amount."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_micro_transaction"}),(0,l.kt)("h4",{id:"send_micro_transaction"},"send","_","micro","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_micro_transaction(addresses_with_micro_amount, options)\n")),(0,l.kt)("p",null,"Send micro transaction."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_native_tokens"}),(0,l.kt)("h4",{id:"send_native_tokens"},"send","_","native","_","tokens"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_native_tokens(addresses_native_tokens, options)\n")),(0,l.kt)("p",null,"Send native tokens."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_nft"}),(0,l.kt)("h4",{id:"send_nft"},"send","_","nft"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_nft(addresses_nft_ids, options)\n")),(0,l.kt)("p",null,"Send nft."),(0,l.kt)("a",{id:"iota_wallet.account.Account.set_alias"}),(0,l.kt)("h4",{id:"set_alias"},"set","_","alias"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_alias(alias)\n")),(0,l.kt)("p",null,"Set alias."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_transaction"}),(0,l.kt)("h4",{id:"send_transaction"},"send","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_transaction(outputs, options)\n")),(0,l.kt)("p",null,"Send a transaction."),(0,l.kt)("a",{id:"iota_wallet.account.Account.sign_transaction_essence"}),(0,l.kt)("h4",{id:"sign_transaction_essence"},"sign","_","transaction","_","essence"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def sign_transaction_essence(prepared_transaction_data)\n")),(0,l.kt)("p",null,"Sign a transaction essence."),(0,l.kt)("a",{id:"iota_wallet.account.Account.submit_and_store_transaction"}),(0,l.kt)("h4",{id:"submit_and_store_transaction"},"submit","_","and","_","store","_","transaction"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def submit_and_store_transaction(signed_transaction_data)\n")),(0,l.kt)("p",null,"Submit and store transaction."),(0,l.kt)("a",{id:"iota_wallet.account.Account.try_claim_outputs"}),(0,l.kt)("h4",{id:"try_claim_outputs"},"try","_","claim","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def try_claim_outputs(outputs_to_claim)\n")),(0,l.kt)("p",null,"Try to claim outputs."),(0,l.kt)("a",{id:"iota_wallet.account.Account.claim_outputs"}),(0,l.kt)("h4",{id:"claim_outputs"},"claim","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def claim_outputs(output_ids_to_claim)\n")),(0,l.kt)("p",null,"Claim outputs."),(0,l.kt)("a",{id:"iota_wallet.account.Account.send_outputs"}),(0,l.kt)("h4",{id:"send_outputs"},"send","_","outputs"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"@send_message_routine\ndef send_outputs(outputs, options=None)\n")),(0,l.kt)("p",null,"Send outputs in a transaction."),(0,l.kt)("a",{id:"iota_wallet.secret_manager"}),(0,l.kt)("h1",{id:"iota_walletsecret_manager"},"iota","_","wallet.secret","_","manager"),(0,l.kt)("a",{id:"iota_wallet.secret_manager.LedgerNanoSecretManager"}),(0,l.kt)("h2",{id:"ledgernanosecretmanager-objects"},"LedgerNanoSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class LedgerNanoSecretManager(dict)\n")),(0,l.kt)("a",{id:"iota_wallet.secret_manager.LedgerNanoSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(is_simulator)\n")),(0,l.kt)("p",null,"Initialize a ledger nano secret manager."),(0,l.kt)("a",{id:"iota_wallet.secret_manager.MnemonicSecretManager"}),(0,l.kt)("h2",{id:"mnemonicsecretmanager-objects"},"MnemonicSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class MnemonicSecretManager(dict)\n")),(0,l.kt)("a",{id:"iota_wallet.secret_manager.MnemonicSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__-1"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(mnemonic)\n")),(0,l.kt)("p",null,"Initialize a mnemonic secret manager."),(0,l.kt)("a",{id:"iota_wallet.secret_manager.StrongholdSecretManager"}),(0,l.kt)("h2",{id:"strongholdsecretmanager-objects"},"StrongholdSecretManager Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class StrongholdSecretManager(dict)\n")),(0,l.kt)("a",{id:"iota_wallet.secret_manager.StrongholdSecretManager.__init__"}),(0,l.kt)("h4",{id:"__init__-2"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(snapshot_path, password)\n")),(0,l.kt)("p",null,"Initialize a stronghold secret manager."),(0,l.kt)("a",{id:"iota_wallet.common"}),(0,l.kt)("h1",{id:"iota_walletcommon"},"iota","_","wallet.common"),(0,l.kt)("a",{id:"iota_wallet.common.send_message_routine"}),(0,l.kt)("h4",{id:"send_message_routine"},"send","_","message","_","routine"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def send_message_routine(func)\n")),(0,l.kt)("p",null,"The routine of dump json string and call send_message()"),(0,l.kt)("a",{id:"iota_wallet.common.IotaWalletError"}),(0,l.kt)("h2",{id:"iotawalleterror-objects"},"IotaWalletError Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class IotaWalletError(Exception)\n")),(0,l.kt)("p",null,"iota-wallet error"),(0,l.kt)("a",{id:"iota_wallet.wallet"}),(0,l.kt)("h1",{id:"iota_walletwallet"},"iota","_","wallet.wallet"),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet"}),(0,l.kt)("h2",{id:"iotawallet-objects"},"IotaWallet Objects"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"class IotaWallet()\n")),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.__init__"}),(0,l.kt)("h4",{id:"__init__-3"},"_","_","init","_","_"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def __init__(storage_path='./walletdb',\n             client_options=None,\n             coin_type=None,\n             secret_manager=None)\n")),(0,l.kt)("p",null,"Initialize the IOTA Wallet."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.create_account"}),(0,l.kt)("h4",{id:"create_account"},"create","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def create_account(alias=None)\n")),(0,l.kt)("p",null,"Create a new account"),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.get_account"}),(0,l.kt)("h4",{id:"get_account"},"get","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_account(alias_index)\n")),(0,l.kt)("p",null,"Get the account instance"),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.get_account_data"}),(0,l.kt)("h4",{id:"get_account_data"},"get","_","account","_","data"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_account_data(alias_index)\n")),(0,l.kt)("p",null,"Get account data"),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.get_accounts"}),(0,l.kt)("h4",{id:"get_accounts"},"get","_","accounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_accounts()\n")),(0,l.kt)("p",null,"Get accounts"),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.backup"}),(0,l.kt)("h4",{id:"backup"},"backup"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def backup(destination, password)\n")),(0,l.kt)("p",null,"Backup storage."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.change_stronghold_password"}),(0,l.kt)("h4",{id:"change_stronghold_password"},"change","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def change_stronghold_password(password)\n")),(0,l.kt)("p",null,"Change stronghold password."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.clear_stronghold_password"}),(0,l.kt)("h4",{id:"clear_stronghold_password"},"clear","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def clear_stronghold_password()\n")),(0,l.kt)("p",null,"Clear stronghold password."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.is_stronghold_password_available"}),(0,l.kt)("h4",{id:"is_stronghold_password_available"},"is","_","stronghold","_","password","_","available"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def is_stronghold_password_available()\n")),(0,l.kt)("p",null,"Is stronghold password available."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.recover_accounts"}),(0,l.kt)("h4",{id:"recover_accounts"},"recover","_","accounts"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def recover_accounts(account_gap_limit, address_gap_limit, sync_options)\n")),(0,l.kt)("p",null,"Recover accounts."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.remove_latest_account"}),(0,l.kt)("h4",{id:"remove_latest_account"},"remove","_","latest","_","account"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def remove_latest_account()\n")),(0,l.kt)("p",null,"Remove latest account."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.restore_back"}),(0,l.kt)("h4",{id:"restore_back"},"restore","_","back"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def restore_back(source, password)\n")),(0,l.kt)("p",null,"Restore a backup from a Stronghold file\nReplaces client_options, coin_type, secret_manager and accounts. Returns an error if accounts were already created\nIf Stronghold is used as secret_manager, the existing Stronghold file will be overwritten. If a mnemonic was\nstored, it will be gone."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.delete_accounts_and_database"}),(0,l.kt)("h4",{id:"delete_accounts_and_database"},"delete","_","accounts","_","and","_","database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def delete_accounts_and_database()\n")),(0,l.kt)("p",null,"Deletes the accounts and database."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.generate_mnemonic"}),(0,l.kt)("h4",{id:"generate_mnemonic"},"generate","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def generate_mnemonic()\n")),(0,l.kt)("p",null,"Generates a new mnemonic."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.verify_mnemonic"}),(0,l.kt)("h4",{id:"verify_mnemonic"},"verify","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def verify_mnemonic(mnemonic)\n")),(0,l.kt)("p",null,"Checks if the given mnemonic is valid."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.set_client_options"}),(0,l.kt)("h4",{id:"set_client_options"},"set","_","client","_","options"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_client_options(client_options)\n")),(0,l.kt)("p",null,"Updates the client options for all accounts."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.get_node_info"}),(0,l.kt)("h4",{id:"get_node_info"},"get","_","node","_","info"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def get_node_info(url, auth)\n")),(0,l.kt)("p",null,"Get node info."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.set_stronghold_password"}),(0,l.kt)("h4",{id:"set_stronghold_password"},"set","_","stronghold","_","password"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_stronghold_password(password)\n")),(0,l.kt)("p",null,"Set stronghold password."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.set_stronghold_password_clear_interval"}),(0,l.kt)("h4",{id:"set_stronghold_password_clear_interval"},"set","_","stronghold","_","password","_","clear","_","interval"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def set_stronghold_password_clear_interval(interval_in_milliseconds)\n")),(0,l.kt)("p",null,"Set stronghold password clear interval."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.store_mnemonic"}),(0,l.kt)("h4",{id:"store_mnemonic"},"store","_","mnemonic"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def store_mnemonic(mnemonic)\n")),(0,l.kt)("p",null,"Store mnemonic."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.start_background_sync"}),(0,l.kt)("h4",{id:"start_background_sync"},"start","_","background","_","sync"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def start_background_sync(options, interval_in_milliseconds)\n")),(0,l.kt)("p",null,"Start background sync."),(0,l.kt)("a",{id:"iota_wallet.wallet.IotaWallet.stop_background_sync"}),(0,l.kt)("h4",{id:"stop_background_sync"},"stop","_","background","_","sync"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"def stop_background_sync()\n")),(0,l.kt)("p",null,"Stop background syncing."))}_.isMDXComponent=!0}}]);