function recursivelyFindPropertyInObject(dataObject, requiredProp) {
  let check;
  for (let property in dataObject) {
    if (dataObject.hasOwnProperty(property)) {
      if (dataObject.hasOwnProperty(requiredProp)) {
        return { [requiredProp]: dataObject[requiredProp] };
      } else if (typeof dataObject[property] === 'object') {
        check = findPropertyInObject(dataObject[property], requiredProp);
        if (check && check.hasOwnProperty(requiredProp)) {
          return check;
        }
      }
    }
  }
}