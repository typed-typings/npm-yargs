/// <reference path="typings/index.d.ts" />
/// <reference path="bundle.d.ts" />

import yargs = require('yargs')
import assert = require('assert')

const args = yargs
  .demand('data', 'Give me datas')
  .parse<{ data: string }>(process.argv.slice(2))

assert.equal(args.data, 'test')

let x: yargs.Builder = {
  hello: {
    global: true
  }
}
