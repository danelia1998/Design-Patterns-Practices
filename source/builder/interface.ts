export interface RequestConstructor {
    url: string;
    method: string;
    payload: {};
}

export interface RequestBuilderInterface {
    forUrl: (url: string) => object;
    useMethod: (method: string) => object;
    payload: (payload: object) => object;
    build(): RequestConstructor;
}
