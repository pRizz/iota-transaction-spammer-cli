#!/usr/bin/env node

const curlImpl = require('curl-transaction-ccurl-impl')
const spammer = require('iota-transaction-spammer-core')({ curlImpl })

spammer.options({
    message: 'This spam was generated in headless mode by the transaction spammer: https://github.com/pRizz/iota-transaction-spammer-cli'
})

spammer.eventEmitter.on('state', (state) => {
    console.log(`${new Date().toISOString()}: new state: ${state}`)
})

spammer.eventEmitter.on('transactionCompleted', (success) => {
    success.forEach(element => {
        console.log(`${new Date().toISOString()}: new transaction created with hash: ${element.hash}`)
    })
})

spammer.startSpamming()