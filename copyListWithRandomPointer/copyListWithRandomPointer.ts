// Definition for _Node.
class _Node {
  val: number
  next: _Node | null
  random: _Node | null

  constructor(val?: number, next?: _Node, random?: _Node) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
    this.random = (random === undefined ? null : random)
  }
}


function copyRandomList(head: _Node | null): _Node | null {

  let currNode = head;

  let cloneNodeDict = new Map<_Node, _Node>();

  while (currNode != null) {
    let clonedNode = currNode ? new _Node(currNode.val) : null;
    if (clonedNode) cloneNodeDict.set(currNode, clonedNode);

    currNode = currNode.next;
  }

  currNode = head;

  while (currNode != null) {
    const copy = cloneNodeDict.get(currNode);

    if (copy) {

      if (currNode.next) {
        const nextClonedNode = cloneNodeDict.get(currNode.next)
        copy.next = nextClonedNode ?? null;
      }

      if (currNode.random) {
        const randomClonedNode = cloneNodeDict.get(currNode.random)
        copy.random = randomClonedNode ?? null;
      }
    }

    currNode = currNode.next;
  }

  const clone = cloneNodeDict.get(head!);
  return clone ?? null;

};


let fifthNode = new _Node(1)
let fourthNode = new _Node(10, fifthNode)
let thirdNode = new _Node(11, fourthNode)
let secondNode = new _Node(13, thirdNode)
let head = new _Node(7, secondNode);

fifthNode.random = head;
fourthNode.random = secondNode;
thirdNode.random = fourthNode;
secondNode.random = head;
head.random = null;

const res = copyRandomList(head)

console.log('@@@@@@@@@@')
console.log(res)