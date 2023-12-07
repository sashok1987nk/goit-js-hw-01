"use strict"

function getElementWidth(content, padding, border) {
    const contentN = Number.parseFloat(content);
    const paddingN = Number.parseFloat(padding);
    const borderN = Number.parseFloat(border);
    return contentN + paddingN * 2 + borderN * 2;
}

console.log(getElementWidth("50px", "8px", "4px"));
console.log(getElementWidth("60px", "12px", "8.5px"));
console.log(getElementWidth("200px", "0px", "0px"));
