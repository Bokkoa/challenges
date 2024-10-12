class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {

    let isTheLastBetweenLists = false;
    
    const arrL1: number[] = []
    const arrL2: number[] = []

    
    while(!isTheLastBetweenLists){
        
      
        if(l1?.next == null && l2?.next == null) {
            isTheLastBetweenLists = true
        }

        if(l1?.val){
            arrL1[arrL1.length] = l1?.val
            l1 = l1?.next!
        }

        if(l2?.val){
            arrL2[arrL2.length] = l2?.val
            l2 = l2?.next!
        }
        
       
    }

    let quantityStringL1 = '';
    for(let i = arrL1.length - 1; i >= 0; i--){
        quantityStringL1 = `${quantityStringL1}${arrL1[i]}`
    }

    let quantityStringL2 = '';
    for(let i = arrL2.length - 1; i >= 0; i--){
        quantityStringL2 = `${quantityStringL2}${arrL2[i]}`
    }

    let resultString = (+quantityStringL1 + +quantityStringL2).toString();

    let output: ListNode | null = null;

    for(let i =  0; i <= resultString.length -1; i++){

        if(resultString[i]){

            let newNode = new ListNode(+resultString[i])
            newNode.next = output
            output = newNode
        }
       

    }

    return output

};

const node1L1 = new ListNode();
node1L1.val = 2
const node2L1 = new ListNode();
node2L1.val = 4
const node3L1 = new ListNode();
node3L1.val = 3

node1L1.next = node2L1;
node2L1.next = node3L1


const node1L2 = new ListNode();
node1L2.val = 5
const node2L2 = new ListNode();
node2L2.val = 6
const node3L2 = new ListNode();
node3L2.val = 4


node1L2.next = node2L2;
node2L2.next = node3L2

let flag = true
const res = addTwoNumbers(node1L1, node1L2)
let currNode = res
while(flag){
    console.log(currNode?.val);
    if(currNode?.next){
        currNode = currNode.next
    } else {
        flag = false
    }
}