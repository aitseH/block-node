#!/usr/bin/env node

const main = () => {
  console.log(`node ${process.version}`)

  console.log(`1+1 = ${1+1}`)
  console.log(`7.0/3.0 = ${7.0/3.0}`)

  console.log(true && false)
  console.log(true || false)
  console.log(!true)
}

main()
