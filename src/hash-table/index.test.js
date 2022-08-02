import { HashTable } from ".";

test("hash class", () => {
  const ht = new HashTable();
  expect(ht.keyMap.length).toBe(53);

  const hashValue = ht._hash("some");
  expect(ht._hash("some")).toBe(hashValue);
});

test("get and set on hash table", () => {
  const ht = new HashTable();
  ht.set("red", "#FF0000");
  expect(ht.get("red")).toBe("#FF0000");

  expect(ht.get("random")).toBeUndefined();
});
