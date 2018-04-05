declare namespace jasmine {
    interface Matchers<T> {
        toContainHeaders(expected: any): boolean;
    }
}
