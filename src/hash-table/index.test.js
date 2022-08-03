import { HashTable } from ".";

describe("hash table", () => {
  let ht;
  beforeEach(() => {
    ht = new HashTable();
  });
  test("hash class", () => {
    expect(ht.keyMap.length).toBe(53);

    const hashValue = ht._hash("some");
    expect(ht._hash("some")).toBe(hashValue);
  });

  test("get and set on hash table", () => {
    ht.set("red", "#FF0000");
    expect(ht.get("red")).toBe("#FF0000");

    expect(ht.get("random")).toBeUndefined();
  });

  test("keys method on hash table", () => {
    const keys = ["one", "two", "three", "four"];
    keys.forEach((key, index) => ht.set(key, index));

    const returnedKeys = ht.keys();
    keys.forEach((k) => expect(returnedKeys.indexOf(k)).toBeGreaterThan(-1));
  });

  test("setting on same key overrides previous value", () => {
    ht.set("key", 1);
    expect(ht.get("key")).toBe(1);
    ht.set("key", 2);
    expect(ht.get("key")).toBe(2);
  });

  test("values method on hash table", () => {
    const keys = ["one", "two", "three", "four"];
    keys.forEach((key, index) => ht.set(key, index));

    const values = ht.values();
    keys.forEach((_, index) =>
      expect(values.indexOf(index)).toBeGreaterThan(-1)
    );
  });

  test("values method on hash table with override flag", () => {
    const keys = ["one", "two", "three", "four"];
    keys.forEach((key) => ht.set(key, "one"));

    const valuesOverride = ht.values();
    expect(valuesOverride).toEqual(["one"]);

    const values = ht.values(false);
    expect(values).toEqual(["one", "one", "one", "one"]);
  });

  test("setting on same key overrides previous value", () => {
    ht.set("key", 1);
    expect(ht.get("key")).toBe(1);
    ht.set("key", 2);
    expect(ht.get("key")).toBe(2);

    expect(ht.values()).toEqual([2]);
  });
});
