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

type hasTooMuchSpacesType = string

const hasTooMuchSpaces = (text: hasTooMuchSpacesType) : boolean => {
  const regex = /^ +|\s{2,}| +$/g;
  return regex.test(text);
}

type isNumericType = string

const isNumeric = (text: isNumericType): boolean => {
  const regex = /^-?\d+(\.\d+)?$/;
  return regex.test(text);
}

type isEmptyType = string

const isEmpty = (value: isEmptyType) : boolean => {
    return value === undefined || value === null || value === "" || /^\s*$/.test(value);
} 

export {isValidSKU, numberToDecimal, isEmpty, hasTooMuchSpaces, isNumeric}