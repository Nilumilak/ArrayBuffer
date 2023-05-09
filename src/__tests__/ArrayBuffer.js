import { ArrayBufferConverter, getBuffer } from "../ArrayBuffer";

test('Array Buffer', () => {
    const converter = new ArrayBufferConverter();
    converter.load(getBuffer());
    expect(converter.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});
