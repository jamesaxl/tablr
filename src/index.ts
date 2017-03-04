export class Tablr {

    public element: Element;
    private schema: ISchema;


    constructor(element: Element|string, schema: ISchema) {
        this.element = resolveElement(element);
        this.schema = schema;
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


interface ISchema {
    columns: IColumn[];
}


interface IColumn {
    name: string;
    type: string;
}
