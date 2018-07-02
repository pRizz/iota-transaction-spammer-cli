# iota-transaction-spammer-cli
Automatically spams the IOTA network from the command line

## Usage

Install globally with `npm`

    npm intall -g iota-transaction-spammer-cli

And run with

    iota-transaction-spammer-cli
    
Only works on Mac at the moment.

If you get errors during install, you probably need to use Node v8, since there is a bug in the `ffi` package. This can be easily done with `nvm`:

    nvm install 8
    nvm use 8