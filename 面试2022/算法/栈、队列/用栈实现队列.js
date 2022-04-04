var MyQueue = function() {
    this.q1 = []
    this.q2 = []
    };
    
    /**
    * @param {number} x
    * @return {void}
    */
    MyQueue.prototype.push = function(x) {
    this.q1.push(x)
    };
    
    /**
    * @return {number}
    */
    MyQueue.prototype.pop = function() {
    while(this.q1.length>1){
    this.q2.push(this.q1.pop())
    }
    let r = this.q1.pop()
    while(this.q2.length){
    this.q1.push(this.q2.pop())
    }
    return r
    };
    
    /**
    * @return {number}
    */
    MyQueue.prototype.peek = function() {
    return this.q1[0]
    };
    
    /**
    * @return {boolean}
    */
    MyQueue.prototype.empty = function() {
    return this.q1.length === 0 ?true:false
    };
    
    /**
    * Your MyQueue object will be instantiated and called as such:
    * var obj = new MyQueue()
    * obj.push(x)
    * var param_2 = obj.pop()
    * var param_3 = obj.peek()
    * var param_4 = obj.empty()
    */