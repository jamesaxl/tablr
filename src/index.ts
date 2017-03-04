export class Tablr {

    public element: Element;


    constructor(element: Element|string) {
        this.element = resolveElement(element);
    }
}


function resolveElement(element: Element|string): Element {
    const resolvedElement = typeof element === "string" ? document.querySelector(element) : element;
    if (resolvedElement === null) {
        throw new Error("Could not find element");
    }
    if (resolvedElement.tagName !== "TABLE") {
        throw new Error("Element must be a table");
    }
    return resolvedElement;
}
