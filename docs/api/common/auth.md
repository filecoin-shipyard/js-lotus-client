# Auth

* AuthVerify

   `AuthVerify(ctx context.Context, token string) ([]Permission, error)`

Perms: read

Inputs:
```json
[
  "string value"
]
```

Response: `null`


* AuthNew

   `AuthNew(ctx context.Context, perms []Permission) ([]byte, error)`

Perms: admin

Inputs:
```json
[
  null
]
```

Response: `"Ynl0ZSBhcnJheQ=="`


## CLI

```
$ lotus auth
NAME:
   lotus auth - Manage RPC permissions

USAGE:
   lotus auth command [command options] [arguments...]

COMMANDS:
     create-token  Create token
     help, h       Shows a list of commands or help for one command

OPTIONS:
   --help, -h     show help (default: false)
   --version, -v  print the version (default: false)
```