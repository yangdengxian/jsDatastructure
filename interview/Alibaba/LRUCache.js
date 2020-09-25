/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.obj = {};
    this.capacity = capacity;
    //FIFO（先进先出）
    this.usedKeysArray = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    var value = -1;
    //如果存在
    if (this.obj[key]) {
        this.usedKeysArray.splice(this.usedKeysArray.indexOf(key), 1);
        this.usedKeysArray.push(key);
        value = this.obj[key];
    }
    return value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    //FIFO（先进先出）
    var keyPostion = this.usedKeysArray.indexOf(key);
    if (keyPostion > -1) {
        this.usedKeysArray.splice(keyPostion, 1);
    } else {
        //当缓存容量达到上限时
        if (Object.keys(this.obj).length >= this.capacity) {
            //删除最久未使用的数据值，从而为新的数据值留出空间
            delete this.obj[this.usedKeysArray[0]];
            this.usedKeysArray.shift();
        }
    }
    this.obj[key] = value;
    this.usedKeysArray.push(key);
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

var cache = new LRUCache(2 /* 缓存容量 */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
cache.put(4, 4);
cache.get(1);
cache.get(3);
cache.get(4);