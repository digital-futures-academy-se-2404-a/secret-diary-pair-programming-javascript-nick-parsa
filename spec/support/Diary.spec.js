import Diary from "../../src/Diary.js";

describe("Diary Entry Functionality:", () => {
  let diary, testEntry;

  beforeEach(() => {
    diary = new Diary();
    testEntry = jasmine.createSpyObj("TestEntry", {
      getEntryContents: "test entry 1",
    });
  })

  afterEach(() => {
    diary = undefined;
    testEntry = undefined;
  })

  it("Empty diary should return empty List when getEntries() called", () => {
    // Arrange
    const expected = [];
    // Act
    let entries = diary.getEntries();
    // Assert
    expect(entries).toEqual(expected);
  });

  it("should check that the length of entries is not zero when getEntries() is called", () => {
    // Arrange
    const expected = diary.getEntries().length + 1;
    // Act
    let entries = ["entry"];
    // Assert
    expect(entries.length).toEqual(expected);
  });

  it("Entry added to diary, entry array should increase by 1", () => {

    // Arrange
    const expected = diary.getEntries().length + 1;
    // Act
    diary.addEntry(testEntry);
    // Assert
    expect(diary.getEntries().length).toBe(expected);
  });

  it("Entry added to diary should be stored in the diary", () => {
    // Arrange
    const expected = "test entry 1";
    // Act
    diary.addEntry(testEntry);
    let actual = diary.getEntries()[0].getEntryContents();
    console.log(actual);
    // Assert
    expect(actual).toEqual(expected);
  });

  it("Should not allow addEntry if isLocked is true", () => {
    // Arrange
   
    const expected = diary.getEntries().length;
    // Act
    diary.addEntry(testEntry)
    let actual = diary.getEntries().length;
    // Assert
    expect(actual).toBe(expected)
  })
});

describe("Test suite for pinCode functionality:", () => {
  
  let diary;

  beforeEach(() => {
    diary = new Diary();
  })

  afterEach(() => {
    diary = undefined;
  })

  it("Enter correct pinCode should open access to diary", () => {
    // Arrange
    const expected = false;
    const testPin = 1234;
    // Act
    diary.openDiary(testPin);
    let actual = diary.getIsLocked();
    // Assert
    expect(actual).toBe(expected);
  })

  it("Entering the incorrect pinCode should keep the diary locked", () => {
    // Arrange
    const expected = true;
    const testPin = 6473;
    // Act
    diary.openDiary(testPin)
    let actual = diary.getIsLocked();
    // Assert
    expect(actual).toBe(expected);
  })
});

