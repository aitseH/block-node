#!/usr/bin/env node

const rec = () => {
  console.log("+1s")
    if (true) {
      rec()
    }
}

const main = () => {
  rec()
}

main()
