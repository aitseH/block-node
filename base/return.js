#!/usr/bin/env node

const baka = () => 9

const biggest32 = () => ({max: 2147483647, min: -2147483647})

const main = () => {
  const cirno = baka()
  console.log(cirno)

  const {max, min} = biggest32()
  console.log(max, min)

  const all = biggest32()
  console.log(all)
}

main()
