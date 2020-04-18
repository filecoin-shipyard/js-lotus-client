# Wallet

* WalletNew

  `WalletNew(context.Context, crypto.SigType) (address.Address, error)`

* WalletHas

  `WalletHas(context.Context, address.Address) (bool, error)`

* WalletList

  `WalletList(context.Context) ([]address.Address, error)`

* WalletBalance

  `WalletBalance(context.Context, address.Address) (types.BigInt, error)`

* WalletSign

  `WalletSign(context.Context, address.Address, []byte) (*crypto.Signature, error)`

* WalletSignMessage

  `WalletSignMessage(context.Context, address.Address, *types.Message) (*types.SignedMessage, error)`

* WalletVerify
 
  `WalletVerify(context.Context, address.Address, []byte, *crypto.Signature) bool`

* WalletDefaultAddress

  `WalletDefaultAddress(context.Context) (address.Address, error)`

* WalletSetDefault

  `WalletSetDefault(context.Context, address.Address) error`

* WalletExport

  `WalletExport(context.Context, address.Address) (*types.KeyInfo, error)`

* WalletImport

  `WalletImport(context.Context, *types.KeyInfo) (address.Address, error)`

## CLI

```
$ lotus wallet
NAME:
   lotus wallet - Manage wallet

USAGE:
   lotus wallet command [command options] [arguments...]

COMMANDS:
     new          Generate a new key of the given type
     list         List wallet address
     balance      Get account balance
     export       export keys
     import       import keys
     default      Get default wallet address
     set-default  Set default wallet address
     help, h      Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```