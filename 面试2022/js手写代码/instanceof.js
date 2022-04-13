function _instanceof( obj , func ) {
    while(true) {
       obj = obj.__proto__; // [[prototype]] (hidden) property
       if( obj == null) return false;
       if( obj ==  func.prototype ) return true;
    }
}