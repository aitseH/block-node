#!/usr/bin/env node

const main = () => {

  const arrayLike = {length: 4, 0:'人被杀就会死', 1:'蝉在叫人坏掉', 2:'你胸小别说话', 3: "小目标一个亿"}
  const arr = Array.from(arrayLike)
  console.log(arr)

  for (const [index, element] of arr.entries()){
    console.log(index, element)
  }

  const 重要的事情说几遍 = new Array(3)
  重要的事情说几遍.fill('三遍')
  console.log(重要的事情说几遍)
  console.log(0 in 重要的事情说几遍)
  console.log(3 in 重要的事情说几遍)

  console.log(...[,,'二次元','幻想乡',null,'垃圾', undefined, ...[]])
}

main()
