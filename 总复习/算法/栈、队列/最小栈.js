var MinStack = function() {
    this.q1=[]
    this.min = [Infinity]
    };
    
    /**
    * @param {number} val
    * @return {void}
    */
    MinStack.prototype.push = function(val) {
    this.q1.push(val)
    this.min.push(Math.min(this.min[this.min.length-1],val))
    };
    
    /**
    * @return {void}
    */
    MinStack.prototype.pop = function() {
    this.q1.pop()
    this.min.pop()
    };
    
    /**
    * @return {number}
    */
    MinStack.prototype.top = function() {
    return this.q1[this.q1.length-1]
    };
    
    /**
    * @return {number}
    */
    MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
    };
    
    /**
    * Your MinStack object will be instantiated and called as such:
    * var obj = new MinStack()
    * obj.push(val)
    * obj.pop()
    * var param_3 = obj.top()
    * var param_4 = obj.getMin()
    */