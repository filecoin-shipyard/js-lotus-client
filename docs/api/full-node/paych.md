# Payment Channels

* PaychGet

  `PaychGet(ctx context.Context, from, to address.Address, ensureFunds types.BigInt) (*ChannelInfo, error)`

* PaychList

  `PaychList(context.Context) ([]address.Address, error)`

* PaychStatus

  `PaychStatus(context.Context, address.Address) (*PaychStatus, error)`

* PaychClose

  `PaychClose(context.Context, address.Address) (cid.Cid, error)`

* PaychAllocateLane

  `PaychAllocateLane(ctx context.Context, ch address.Address) (uint64, error)`

* PaychNewPayment

  `PaychNewPayment(ctx context.Context, from, to address.Address, vouchers []VoucherSpec) (*PaymentInfo, error)`

* PaychVoucherCheckValid

  `PaychVoucherCheckValid(context.Context, address.Address, *types.SignedVoucher) error`

* PaychVoucherCheckSpendable

  `PaychVoucherCheckSpendable(context.Context, address.Address, *types.SignedVoucher, []byte, []byte) (bool, error)`

* PaychVoucherCreate

  `PaychVoucherCreate(context.Context, address.Address, types.BigInt, uint64) (*paych.SignedVoucher, error)`

* PaychVoucherAdd

  `PaychVoucherAdd(context.Context, address.Address, *paych.SignedVoucher, []byte, types.BigInt) (types.BigInt, error)`

* PaychVoucherList

  `PaychVoucherList(context.Context, address.Address) ([]*paych.SignedVoucher, error)`

* PaychVoucherSubmit

  `PaychVoucherSubmit(context.Context, address.Address, *paych.SignedVoucher) (cid.Cid, error)`

## CLI

```
$ lotus paych
NAME:
   lotus paych - Manage payment channels

USAGE:
   lotus paych command [command options] [arguments...]

COMMANDS:
     get      Create a new payment channel or get existing one
     list     List all locally registered payment channels
     voucher  Interact with payment channel vouchers
     help, h  Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```

```
$ lotus send # Send funds between accounts
# 'send' expects two arguments, target and amount
```