// Collection Functions (Arrays or Objects)

// 1. myEach
function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      collection.forEach((value, index) => callback(value, index, collection));
    } else {
      Object.keys(collection).forEach(key => callback(collection[key], key, collection));
    }
    return collection;
  }
  
  // 2. myMap
  function myMap(collection, callback) {
    const result = [];
    if (Array.isArray(collection)) {
      collection.forEach((value, index) => result.push(callback(value, index, collection)));
    } else {
      Object.keys(collection).forEach(key => result.push(callback(collection[key], key, collection)));
    }
    return result;
  }
  
  // 3. myReduce
  function myReduce(collection, callback, acc) {
    let accumulator = acc;
    let startIndex = 0;
    
    if (accumulator === undefined) {
      accumulator = Array.isArray(collection) ? collection[0] : collection[Object.keys(collection)[0]];
      startIndex = 1;
    }
    
    if (Array.isArray(collection)) {
      for (let i = startIndex; i < collection.length; i++) {
        accumulator = callback(accumulator, collection[i], collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = startIndex; i < keys.length; i++) {
        const key = keys[i];
        accumulator = callback(accumulator, collection[key], collection);
      }
    }
    
    return accumulator;
  }
  
  // 4. myFind
  function myFind(collection, predicate) {
    let found;
    if (Array.isArray(collection)) {
      found = collection.find((value, index) => predicate(value, index, collection));
    } else {
      found = Object.values(collection).find((value, index) => predicate(value, Object.keys(collection)[index], collection));
    }
    return found;
  }
  
  // 5. myFilter
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      collection.forEach((value, index) => {
        if (predicate(value, index, collection)) {
          result.push(value);
        }
      });
    } else {
      Object.keys(collection).forEach(key => {
        if (predicate(collection[key], key, collection)) {
          result.push(collection[key]);
        }
      });
    }
    return result;
  }
  
  // 6. mySize
  function mySize(collection) {
    if (Array.isArray(collection)) {
      return collection.length;
    } else {
      return Object.keys(collection).length;
    }
  }
  
  // Array Functions
  
  // 7. myFirst
  function myFirst(array, n = 1) {
    if (n === 1) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  // 8. myLast
  function myLast(array, n = 1) {
    if (n === 1) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return [...array].sort((a, b) => {
      const valA = callback(a);
      const valB = callback(b);
      if (valA < valB) return -1;
      if (valA > valB) return 1;
      return 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow = false, newArr = []) {
    array.forEach(item => {
      if (Array.isArray(item)) {
        if (shallow) {
          newArr.push(...item);
        } else {
          myFlatten(item, shallow, newArr);
        }
      } else {
        newArr.push(item);
      }
    });
    return newArr;
  }
  
  // Object Functions
  
  // 9. myKeys
  function myKeys(object) {
    return Object.keys(object);
  }
  
  // 10. myValues
  function myValues(object) {
    return Object.values(object);
  }
  