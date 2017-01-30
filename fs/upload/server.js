const express = require('express')
const fs = require('fs')
const busboy = require('connect-busboy')

const app = express()

app.use(busboy())
app.set('view engine', 'pug')

app.route('*/upload')
  .post((req,res,next) => {
    req.pipe(req.busboy)

    let fstream
    req.busboy.on('file', (filename, file) => {
      console.log(`uploading ${filename}`)

      fstream = fs.createWriteStream(`${__dirname}/upload/${filename}`)
      file.pipe(fstream)
      fstream.on('close', () => {
        console.log(`upload finished of ${filename}`)
        res.redirect('/success')
      })
    })
  })

  app.get('/success', (req,res) => {
    res.render('success', {title: 'Success', message: 'Success', content: 'Your file is been uploaded successfully!'})
  })

  app.get('*', (req,res) => {
    res.render('index')
  })


  app.listen(3000, () => {
    console.log('server running on port 3000')
  })