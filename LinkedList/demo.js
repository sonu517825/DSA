let head;  // maintain final linked list


class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


function createLinkedList(nodeValue) {
    let newNode = new Node(nodeValue);
    if (head == null) {
        // console.log(head===undefined , head==null , head===null)  //  =>  T , T , F
        head = newNode;
        return head
    }
    var last = head;
    while (last.next != null) {
        last = last.next;
    }
    last.next = newNode;
    return head
}



function insertAtBegging(nodeValue) {

    var newNode = new Node(nodeValue);
    newNode.next = head;
    head = newNode;
    return head
}


function insertAtPos(prevNode, newNodeValue) {

    if (prevNode == null) {
        return console.log("The given previous node cannot be null");
    }

    var newNode = new Node(newNodeValue);
    newNode.next = prevNode.next;
    prevNode.next = newNode;

}


function insertAtLast(nodeValue) {

    let newNode = new Node(nodeValue);
    if (head == null) {
        head = newNode;
        return head
    }
    var last = head;
    while (last.next != null) {
        last = last.next;
    }
    last.next = newNode;
    return head

}




function insertAtPosByIndx(idx,newNodeValue){
 let newNode = new Node(newNodeValue)   
 let i=0
 let currNode = head
 while(i!==idx-1){
    if(currNode===null){
        throw new Error('over flow')
    }
    else{
  //      console.log(i , currNode)
        i++    
        currNode = currNode.next
    }
 }
 newNode.next = currNode.next
 currNode.next = newNode
return head
}


function printList() {
    if (head == null) {
        console.log('Empty Linked List')
    }
    let currNode = head;
    while (currNode != null) {
        console.log(currNode.data + " ");
        currNode = currNode.next;
    }
}


createLinkedList(23)
createLinkedList(67)
// createLinkedList(345)
// createLinkedList(344)
// createLinkedList(340)


 insertAtBegging(900)
// insertAtBegging(4567)


// insertAtLast(2222)
 insertAtLast('ghjgg')
// insertAtLast(87697)


// insertAtPos(head, 'sonu verma')

 insertAtPosByIndx(22,'functionUp')

 printList()

//console.log('\n\n\n', head)



// Home Work   =>   [2,4,6,2,8,4,2,7,4]
// make linked list add 'FunctionUp' after 2 is present
// 2->FunctionUp->4->6->2->FunctionUp->8->4->2->FunctionUp->7->4



// array VS Linked List
// https://www.studytonight.com/data-structures/linked-list-vs-array#:~:text=Array%20is%20a%20collection%20of,6%5D%20for%207th%20element%20etc.

