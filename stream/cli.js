const program = require('commander')
const through = require('through2')
const split = require('split2')

program
  .version('0.0.1')
  .option('-i, --info', 'Add more info')

program
  .command('streams')
  .description('starting a streaming data pipe')
  .action((options) => {
    const tr = through(function(buf, _, next){
      this.push(buf.toString().toUpperCase())
      next()
    })
    process.stdin.pipe(tr).pipe(process.stdout)
  })

program
  .command('objstream')
  .description('start explain about object streams')
  .action((options) => {
    const stream = through({objectMode: true}, function(chunk, enc, next){
      const string = chunk.toString()
      const result = string.replace(/\n/,'').toUpperCase().split(/[ \t]/)

      this.push(result)
      next()
    })

    stream.on('data', data => {
      const toString = Object.prototype.toString.call(data)
      console.log(`type of data: ${toString}`)
      console.log(`data ${data} \n`)
    })
    process.stdin.pipe(split()).pipe(stream)
  })

program.parse(process.argv)