export function solver(n) {
    return [...n.toString(2).matchAll("1")].length;
}
