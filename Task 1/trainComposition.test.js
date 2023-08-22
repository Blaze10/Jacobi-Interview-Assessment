const TrainComposition = require("./trainComposition_linkedlist");

describe("TrainComposition", () => {
  let train;

  beforeEach(() => {
    train = new TrainComposition();
  });

  test("attachWagonFromLeft", () => {
    train.attachWagonFromLeft(7);
    train.attachWagonFromLeft(13);
    expect(train.detachWagonFromLeft()).toBe(13);
  });

  test("attachWagonFromRight", () => {
    train.attachWagonFromRight(7);
    train.attachWagonFromRight(13);
    expect(train.detachWagonFromRight()).toBe(13);
  });

  test("detachWagonFromLeft when train is empty", () => {
    expect(train.detachWagonFromLeft()).toBeNull();
  });

  test("detachWagonFromRight when train is empty", () => {
    expect(train.detachWagonFromRight()).toBeNull();
  });

  test("detachWagonFromRight with a single wagon", () => {
    train.attachWagonFromRight(7);
    expect(train.detachWagonFromRight()).toBe(7);
    expect(train.detachWagonFromRight()).toBeNull();
  });

  test("detachWagonFromLeft with a single wagon", () => {
    train.attachWagonFromLeft(7);
    expect(train.detachWagonFromLeft()).toBe(7);
    expect(train.detachWagonFromLeft()).toBeNull();
  });

  test('mixed attachments', () => {
    train.attachWagonFromLeft(1);
    train.attachWagonFromRight(2);
    train.attachWagonFromLeft(3);
    train.attachWagonFromRight(4);
    expect(train.detachWagonFromLeft()).toBe(3);
    expect(train.detachWagonFromRight()).toBe(4);
    expect(train.detachWagonFromRight()).toBe(2);
    expect(train.detachWagonFromLeft()).toBe(1);
    expect(train.detachWagonFromLeft()).toBeNull();
    expect(train.detachWagonFromRight()).toBeNull();
  });
});
