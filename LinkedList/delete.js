let head


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



function deleteFirst() {
    if (head == null) {
        throw new Error('under flow')
    }
    head = head.next
    return head
}



function deleteLast() {
    if (!head) {
        throw new Error('under flow')
    }
    let lastNode = head
    let prevOfLastNode = null
    while (lastNode.next !== null) {
        prevOfLastNode = lastNode
        lastNode = lastNode.next
    }
    prevOfLastNode.next = null
    //    console.log(lastNode , prevOfLastNode , head)
    return head
}



function deletePos(pos) {
    if (head == null) {
        throw new Error('under flow')
    } else {
        let posNode = head
        if (pos === 0) {
            head = head.next
            return head
        }
        for (let i = 0; (posNode !== null && i < pos - 1); i++) {
            posNode = posNode.next
        }
        if (posNode === null || posNode.next === null) {
            throw new Error('over flow')
        }
        let t = posNode.next.next
        posNode.next = t
    }

}



createLinkedList(456)
createLinkedList(9000)
createLinkedList('ssss')
//createLinkedList(343343)
//console.log(head)
//deleteFirst()
deleteLast()

//deletePos(3)
console.log(head)

