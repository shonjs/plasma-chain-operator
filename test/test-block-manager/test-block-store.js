/* eslint-env mocha */

const fs = require('fs')
const chai = require('chai')
const log = require('debug')('test:info:test-block-store')
const levelup = require('levelup')
const leveldown = require('leveldown')
const BlockStore = require('../../src/block-manager/block-store.js')
// const constants = require('../../src/constants.js')

const expect = chai.expect

describe('BlockStore', function () {
  let db
  let blockStore
  beforeEach(async () => {
    const rootDBDir = './db-test/'
    if (!fs.existsSync(rootDBDir)) {
      log('Creating a new db directory because it does not exist')
      fs.mkdirSync(rootDBDir)
    }
    const dbDir = rootDBDir + 'block-db-' + +new Date()
    db = levelup(leveldown(dbDir))
    // Create a new tx-log dir for this test
    const txLogDirectory = './test/test-block-manager/tx-log/'
    // fs.mkdirSync(txLogDirectory)
    // Create state object
    blockStore = new BlockStore(db, txLogDirectory)
  })

  it('runs init script without fail', async () => {
    await blockStore.ingestBlock('000000000000')
    // await blockStore.ingestBlock('00000000000000000000000000000002')
    expect(blockStore).to.not.equal(undefined)
  })
})
