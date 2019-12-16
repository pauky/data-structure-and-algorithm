/**
 * 单链表
 */

class SingleLinkedlist {
  constructor () {
    this.list = null
    this.node = {
      val: '',
      next: null
    }
    this.head = null
  }

  print () {
    let node = this.head
    const arr = []
    while (node) {
      arr.push(node.val)
      node = node.next
    }
    console.log(arr.join(' > '))
  }

  insert (val) {
    const last = Object.assign({}, this.node, { val })
    if (!this.head) {
      this.head = last
      return true
    }
    let node = this.head
    while (node.next) {
      node = node.next
    }
    node.next = last
  }

  find (val) {
    let node = this.head
    let index = 0
    let key = -1
    while (node.next) {
      if (node.val === val) {
        key = index
        break
      }
      index += 1
      node = node.next
    }
    return key
  }

  deleteByVal (val) {
    let node = this.head
    let pre = this.head
    while (node.next) {
      if (node.val === val) {
        pre.next = node.next
        node = null
        break
      }
      pre = node
      node = node.next
    }
  }

  deleteByIndex (index) {
    if (index === 0) {
      const node = this.head.next
      this.head = node
      return
    }
    let listIndex = 0
    let node = this.head
    let pre = this.head
    while (node.next) {
      if (listIndex === index) {
        pre.next = node.next
        break
      }
      listIndex += 1
      pre = node
      node = node.next
    }
  }

  clear () {
    this.head = null
  }

  // 反转
  reverse () {
    let node = this.head
    let prev = null
    let next = null
    while (node) {
      next = node.next
      node.next = prev
      prev = node
      node = next
    }
    this.head = prev
  }

  // 检测是否有环
  checkHasRing () {
    let node = this.head
    let hasRing = false
    while (node) {
      if (node.check) {
        hasRing = true
        break
      }
      node.check = true
      node = node.next
    }

    // 恢复数据
    node = this.head
    while (node) {
      if (!node.check) {
        break
      }
      delete node.check
      node = node.next
    }

    return hasRing
  }

  buildRingLink () {
    const d = {
      val: 'd',
      next: null
    }
    const c = {
      val: 'c',
      next: d
    }
    const b = {
      val: 'b',
      next: c
    }
    const a = {
      val: 'a',
      next: b
    }
    this.head = a
    d.next = b
  }
}

const list = new SingleLinkedlist()
list.insert('a')
list.insert('b')
list.insert('c')
list.insert('3')
const keyC = list.find('c')
console.log('keyC', keyC) // 2
const keyD = list.find('d')
console.log('keyD', keyD) // -1
list.print() // a > b > c > 3
list.deleteByVal('c')
list.print() // a > b > 3
list.deleteByIndex(1)
list.print() // a > 3
list.deleteByIndex(0)
list.print() // 3
list.clear()

console.log('\n----------------------\n')

list.insert('0')
list.insert('1')
list.insert('2')
list.insert('3')
list.print() // 0 > 1 > 2 > 3
list.reverse()
list.print() // 3 > 2 > 1 > 0

console.log('\n----------------------\n')
const isRing = list.checkHasRing()
console.log('isRing', isRing) // false
list.clear()
list.buildRingLink()
const isRing2 = list.checkHasRing()
console.log('isRing2', isRing2) // true
list.print()
