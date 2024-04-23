import Diary from "../../src/Diary.js";

it("Empty diary should Return empty List when getEntries() called", () => {
  // Arrange
  const diary = new Diary();
  const expected = [];
  // Act
  let entries = diary.getEntries();
  // Assert
  //   expect(entries).toBeTruthy();
  expect(entries).toEqual(expected);
});

it("should check that the length of entries is not zero when getEntries() is called", () => {
  // Arrange
  const diary = new Diary();
  const expected = diary.getEntries().length + 1;
  // Act
  let entries = ["entry"];
  // Assert
  expect(entries.length).toEqual(expected);
});

it("Entry added to diary, entry array should increase by 1", () => {
  // Arrange
  const diary = new Diary();
  const expected = diary.getEntries().length + 1;
  const testEntry = jasmine.createSpyObj("TestEntry", {
    getEntryContents: "test entry 1",
  });

  // Act
  diary.addEntry(testEntry);

  // Assert
  expect(diary.getEntries().length).toBe(expected);
});

it("Entry added to diary should be stored in the diary", () => {
  // Arrange
  const diary = new Diary();
  const testEntry = jasmine.createSpyObj("TestEntry", {
    getEntryContents: "test entry 1",
  });
  const expected = "test entry 1";

  // Act
  diary.addEntry(testEntry);
  let actual = diary.getEntries()[0].getEntryContents();
  console.log(actual);

  // Assert
  expect(actual).toEqual(expected);
});
