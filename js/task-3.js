
function getElementWidth(content, padding, border) {
    let con = Number.parseFloat(content);
    let pad = Number.parseFloat(padding);
    let bor = Number.parseFloat(border);
    let n = con + (pad * 2) + (bor * 2);
    return `${n}`
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
