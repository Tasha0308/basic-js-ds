const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
 constructor() {
   this.rootTree = null;
 }

  root() {
    return this.rootTree;
  }

  add(data) {
    this.rootTree = addNode(this.rootTree, data);

    function addNode(node, data) {
      if(!node) {
        return new Node(data);
      }

      if(node.data === data) {
        return node;
      }

      if(data < node.data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }

      return node;
    }
  }

  has(data) {
      function searchNode(node, data) {
      if(!node) {
        return false;
      }

      if(node.data ===data) {
        return true;
      }

      if(data < node.data) {
        return searchNode(node.left, data);
      } else {
        return searchNode(node.right, data);
      }
  }
   return searchNode(this.rootTree, data);
}

  find(data) {
    return findNode(this.rootTree, data)

    function findNode(node, data) {
      if(!node) {
        return null;
      }

      if(node.data ===data) {
        return node;
      }

      if(data<node.data) {
        return findNode(node.left, data);
      } else {
        return findNode(node.right, data);
      }
  }
  }

  remove(data) {
    this.root = removeNode(this.rootTree, data)
    function removeNode(node, data) {
      if(!node) {
        return null;
      }

      if(data<node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if(node.data<data){
        node.right =removeNode(node.right, data);
        return node;
      } else {
        // equal - should remove this item
      if(!node.left && !node.right) {
        // put null instead of item
        return null;
      }
      if(!node.left) {
        //set right child instead of item
        node=node.right;
        return node;
      }

      if(!node.right) {
        //set left child instead of item
        node=node.left;
        return node;
      }
      // both children exists for this item
      let minFromRight = node.right;
      while (minFromRight.left) {
        minFromRight=minFromRight.left;
      }
      node.data = minFromRight.data;
      node.right = removeNode(node.right, minFromRight.data);
      return node;
    }
  }
}

  min() {
    if(!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while(node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if(!this.rootTree) {
      return null;
    }
    let node = this.rootTree;
    while(node.right) {
      node = node.right;
    }
    return node.data;
  }
}


module.exports = {
  BinarySearchTree
};