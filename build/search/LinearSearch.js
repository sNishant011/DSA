"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./demo.extensions");
function linear_search(haystack, needle) {
    for (let i = 0; i < haystack.length; i++) {
        if (haystack[i] === needle) {
            return i;
        }
    }
}
exports.default = linear_search;
const arr = [2, 3, 4, 5, 5, 10];
arr.getIndex();
