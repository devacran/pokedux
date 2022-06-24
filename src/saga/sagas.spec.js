import { call, put } from "redux-saga/effects";
import { delay, incrementAsync } from ".";

describe("incrementAsync saga test", () => {
  it("should call delay(1000) on 1st next call", () => {
    const gen = incrementAsync();
    expect(gen.next().value).toEqual(call(delay, 1000));
  });
  it("should dispatch an INCREMENT action on 2nd next call", () => {
    const gen = incrementAsync();
    gen.next();

    expect(gen.next().value).toEqual(put({ type: "INCREASE_COUNTER" }));
  });

  it("should be done on 3rd next call", () => {
    const gen = incrementAsync();
    gen.next();
    gen.next();

    expect(gen.next().done).toBe(true);
  });
});
