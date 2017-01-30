const program = require('commander')
const path =  require('path')
const fs = require('fs')

program
  .version('0.0.1')
  .option('-i, --info', 'Add more info')

program
  .command('search [searchcapth]')
  .description('this is the command to search for the file that ...')
  .option('-b, --big', "do a search for the biggest file")
  .action( (searchpath, options) => {
    if(options.big) {
      let fileName = "", size = 0
      fs.readdir( searchpath, (err, file) => {
        if (err) {
          console.error("Could not list the directory")
          process.exit(1)
        }
        file.forEach(( file, index) => {
          const fromPath = path.join( searchpath, file)
          const fileSize = getFilesInBytes(fromPath)

          if (fileSize > size) {
            size = fileSize
            fileName = file
          } 
        })
        
        console.log(`Biggest file is ${fileName} ${size}`)
      })
    }
  })

function getFilesInBytes(filename) {
  const stats = fs.statSync(filename)
  const fileSizeInBytes = stats["size"]
  return fileSizeInBytes
}

program
  .command('read [readpath]')
  .description('this is the command to read fro a file that ...')
  .action((readpath, options) => {
    fs.readFile( readpath, 'utf8', (err,data) => {
      if (err) {
        return console.log(err)
      }
      console.log(data.toUpperCase())
    })
  })

program
  .command('watch [readpath]')
  .description('this is the command to watch from a file that ....')
  .action((readpath, options) => {
    fs.watch( readpath, (eventType, filename) => {
      console.log(`eventType is  : ${eventType}`)

      if (filename) {
        fs.readFile( readpath, 'utf8', (err, data) => {
          if (err) {
            process.exit( 1 )
          }
          if (data.indexOf('beep') > -1) {
            console.log("\0007")
          }
          console.log("new content is been read")
        }) 
      }
    })
  })

program
  .command('write [writepath] [sentence]')
  .description('this is the command to write to a file ...')
  .action((writepath, sentence, options) => {
    fs.stat( writepath, (err, stats) => {
      if ( err && !stats.isFile() ) {
        process.exit(1)
      }
      fs.writeFile( writepath, sentence, (err) => {
        if( err ) {
          process.exit(1)
        }

        console.log("Data written successfully")
        console.log("Let's read newly written data")
        fs.readFile(writepath, (err, data) => {
          if (err) {
            return console.error(err)
          }
          console.log(`Asynchronous read: ${data.toString()}`)
        })
      })
    })
  })

program
  .command('move [fromDir] [toDir]')
  .description('this is the command to move file fro one directory to another')
  .action((fromDir, toDir, sentence, options) => {
    fs.readdir(fromDir, (err, files) => {
      if (err) {
        console.error(`Could not list the directory: ${err}`)
        process.exit(1)
      }
      files.forEach((file, index) => {
        const fromPath = path.join(fromDir, file)
        const toPath = path.join(toDir, file)

        fs.stat( fromPath, (err, stat) => {
          if (err) {
            console.error(`Could not stat the file: ${err}`)
            process.exit(1)
          }
          if (stat.isFile()) {
            console.log(`${fromPath} is a file.`)
          } else if (stat.isDirectory()){
            console.log(`${fromPath} is a directory`)
          }

          fs.rename( fromPath, toPath, (error) => {
            if(error) {
              console.error(`file moving error ${error}`)
            } else {
              console.log(`Move file ${fromPath} to ${toPath}`)
            }
          })
        })
      })
    })
  })

program.parse(process.argv)
