class SortedList {
  constructor() {
    // constructor is an object
    this.items = []; // array
    // creating an empty array
    this.length = this.items.length;
    // created length property that is equal to items.length, items.length is the number of elements in the empty array
  }

  add(item) {
    this.items.push(item); // added new item to existing empty array - this.items
    this.items.sort(function(a, b) {
      // sorted an array this.items in ascending order
      return a - b;
    });
    this.length = this.items.length; // updated the length to equal the number of items in the array
  }

  get(pos) {
    // if (!this.items[pos]) {
    //   throw new Error("OutOfBounds");
    // } else {
    //   return this.items[pos];
    // }
    if (pos > this.length - 1) {
      //you're doing this because length will not start at 0...it will start at 1
      return OutOfBounds;
    } else if (pos <= this.length - 1) {
      return this.items[pos];
    }
  }

  max() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.max(...this.items); // The Math.max() function returns the largest of zero or more numbers
    }
  }

  min() {
    if (this.items.length == 0) {
      throw new Error("EmptySortedList");
    } else {
      return Math.min(...this.items); // The Math.min() function returns the smallest of zero or more numbers.
    }
  }

  sum() {}

  avg() {}
}

module.exports = SortedList;
