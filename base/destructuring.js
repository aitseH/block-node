#!/usr/bin/env node

const yuyuko_feed = (...foods) => {
  for (const food of foods) {
    console.log(`yuyuko are eating ${food}`)
  }
}

const main = () => {

  yuyuko_feed("dumpling", "lamian", "sushi")

  yuyuko_feed(["tempura", "takoyaki", "curry", "stateliness"])
}

main()
