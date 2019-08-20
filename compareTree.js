// let TreeOne = {
//     val: 1,
//     // right: null,
//     // left: { val: 2, right: null, left: null }
// }

// let TreeTwo = {
//     val: 1,
//     // right: { val: 2, right: null, left: null },
//     // left: null
// }


let TreeOne = {
    val: 10,
    right: { val: 15, right: null, left: null },
    left: { val: 5, right: null, left: null }
}
let TreeTwo = {
    val: 1,
    right: { val: 2, right: null, left: null },
    left: { val: null, right: null, left: null }
}

let data = []

function DFSInorder(treeOne, treeTwo) {
    let data = []
    let newData = []


    function traiverse(node, type) {
        if (type == 'one' && node) {
            data.push(node.val)
            if (node.left) traiverse(node.left, 'one')

            if (node.right) traiverse(node.right, 'one')
        } else if (node) {
            newData.push(node.val)
            if (node.left) traiverse(node.left, 'two')
            if (node.right) traiverse(node.right, 'two')
        }
    };
    traiverse(treeOne, 'one')
    traiverse(treeTwo, 'two')
    console.log(data, newData)
    if (data[0] == undefined && newData[0] == undefined) {
        return true
    };

    if (data.length != newData.length) {
        return false
    }
    if (TreeOne.right != null && TreeTwo.left != null) {
        for (let i = 0; i < data.length; i++) {
            if (data[i] != newData[i]) {
                return false
            }
        }
    } else {
        if (data.length == newData.length) {
            for (let i = 0; i < data.length; i++) {
                if (data[i] != newData[i]) {
                    return false
                }
            }
        } else {
            return false
        }
    }

    return true
}





console.log(DFSInorder(TreeOne, TreeTwo))