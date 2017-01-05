#!/usr/bin/env node

const main = () => {
  const m = new Map().set('萌节','10/10')
  m.set('光棍节','11/11') // Map { '萌节' => '10/10', '光棍节' => '11/11' }
  m.get('萌节') //10/10
  m.has('萌节') //true
  m.delete('光棍节') // true
  for (const x of m) {
    console.log(x)
  }

  m.clear() // undefined

  const wm = new WeakMap()
  const moe = {萌节: '10/10'}
  wm.set(moe, '萌即是正义') // WeakMap {}
  wm.get(moe) // 萌即是正义
  wm.has(moe) // true
  wm.delete(moe) // true

  const s = new Set()
  s.add(['萌节', '萝莉节']) // Set { [ '萌节', '萝莉节' ] }
  s.add('光棍节') // Set { [ '萌节', '萝莉节' ], '光棍节' }
  s.size // 2
  s.has('光棍节') // true

  for (const x of s) {
    console.log(x)
  }
  s.clear() //undefined

  const arr = [5,1,5,7,7,5]
  const unique = [...new Set(arr)] //[5,1,7]
}

main()
