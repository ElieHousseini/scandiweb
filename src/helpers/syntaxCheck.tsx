type isValidSKUType = string

const isValidSKU = (sku: isValidSKUType) : boolean => {
    const pattern = /^[a-zA-Z0-9_-]+$/;
    return pattern.test(sku);
}

function numberToDecimal(number: string, nbAfterComma: number): string {
    const num = parseFloat(number);
    if (!isNaN(num)) {
      return num.toFixed(nbAfterComma);
    } else {
        return number
    }
}

export {isValidSKU, numberToDecimal}