#!/usr/bin/env node

const main = () => {
  for (let str of "👌👏👀"){
    console.log(str)
  }

  const map = new Map([
    ['绅士', 'hentai' ]
  ])
  for (const [key, value] of map){
    console.log(`${key} means ${value}`)
  }

  const arr = ['a', 'b', 'c']
  for (const [key, value] of arr.entries()){
    console.log(`key = ${key}, value = ${value}`)
  }

  let i = 0
  do {
    i += 1
    console.log(i)
  } while (i < 3)
}

main()
