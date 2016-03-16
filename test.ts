/// <reference path="bundle/main.d.ts" />
/// <reference path="typings/main.d.ts" />

import yargs = require('yargs')
import assert = require('assert')

const args = yargs
  .demand('data', 'Give me datas')
  .parse<{ data: string }>(process.argv.slice(2))

assert.equal(args.data, 'test')