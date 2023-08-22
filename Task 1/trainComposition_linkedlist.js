class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class TrainComposition {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * Attaches a wagon to the left side of the train composition.
   * Time complexity: O(1)
   * @param {number} wagonId - The ID of the wagon to attach.
   */
  attachWagonFromLeft(wagonId) {
    const newNode = new Node(wagonId);
    if (this.head) {
      this.head.prev = newNode;
      newNode.next = this.head;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  /**
   * Attaches a wagon to the right side of the train composition.
   * Time complexity: O(1)
   * @param {number} wagonId - The ID of the wagon to attach.
   */
  attachWagonFromRight(wagonId) {
    const newNode = new Node(wagonId);
    if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }

  /**
   * Detaches a wagon from the left side of the train composition.
   * Time complexity: O(1)
   * @returns {number|null} - The ID of the detached wagon, or null if there are no wagons.
   */
  detachWagonFromLeft() {
    if (!this.head) return null;
    const detached = this.head.val;
    this.head = this.head.next;

    if (this.head) {
      this.head.prev = null;
    } else {
      this.tail = null;
    }
    return detached;
  }

  /**
   * Detaches a wagon from the right side of the train composition.
   * Time complexity: O(1)
   * @returns {number|null} - The ID of the detached wagon, or null if there are no wagons.
   */
  detachWagonFromRight() {
    if (!this.tail) return null;
    const detached = this.tail.val;
    this.tail = this.tail.prev;
    if (this.tail) {
      this.tail.next = null;
    } else {
      this.head = null;
    }
    return detached;
  }
}

const train = new TrainComposition();
train.attachWagonFromLeft(7);
train.attachWagonFromLeft(13);
console.log(train.detachWagonFromRight());
console.log(train.detachWagonFromLeft());

module.exports = TrainComposition
