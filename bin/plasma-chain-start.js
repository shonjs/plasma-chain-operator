#!/usr/bin/env node
const path = require('path')
const { appRootPath } = require('../src/utils.js')
const program = require('commander')
const colors = require('colors') // eslint-disable-line no-unused-vars
const appRoot = require('app-root-path')
const getAccount = require('./utils.js').getAccount
const server = require(appRoot + '/src/server.js')
const readConfigFile = require(appRoot + '/src/utils.js').readConfigFile

program
  .command('*')
  .description('starts the operator using the first account')
  .action(async (none, cmd) => {
    const account = await getAccount()
    if (account === null) {
      return
    }
    // Start the server!
    const appRoot = await appRootPath()
    const configFile = (process.env.CONFIG) ? process.env.CONFIG : path.join(appRoot.toString(), 'config.json')
    const config = readConfigFile(configFile)
    config.privateKey = account.privateKey
    await server.startup(config)
  })

program.parse(process.argv)
