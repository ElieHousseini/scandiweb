type isValidSKUType = string

const isValidSKU = (sku: isValidSKUType) : boolean => {
  return /^[A-Za-z0-9]+(-[A-Za-z0-9]+)*$/i.test(sku);
}

const numberToDecimal = (number: string, nbAfterComma: number): string => {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      return num.toFixed(nbAfterComma);
    } else {
        return number
    }
}

function hasTooMuchSpaces(text: string) {
  const regex = /^ +|\s{2,}| +$/g;
  return regex.test(text);
}


const isEmpty = (value: string) : boolean => {
    return value === undefined || value === null || value === "" || /^\s*$/.test(value);
} 

export {isValidSKU, numberToDecimal, isEmpty, hasTooMuchSpaces}