#!/usr/bin/env node

const plusLife = () => {
  let i = 0
  return () => ++i
}

const main = () => {

  let ha = plusLife()

  console.log(`续命成功，目前为+${ha()}s`)
  console.log(`续命成功，目前为+${ha()}s`)
  console.log(`续命成功，目前为+${ha()}s`)
}

main()
