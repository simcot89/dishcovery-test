function isArrayOf(typeLike, arr) {
    return (!!arr &&
        arr instanceof Array &&
        (arr.length === 0 || arr.every(v => typeof v === typeof typeLike)));
}
export function isArrayOfStrings(arr) {
    return isArrayOf("string", arr);
}
//# sourceMappingURL=ArrayUtils.js.map