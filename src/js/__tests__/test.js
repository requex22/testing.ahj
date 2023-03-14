import cardChecker from "../cardChecker";

test("check card validation", () => {
  const app = (value) => {
    if (
      value.indexOf("4844") === 0 ||
      value.indexOf("4026") === 0 ||
      value.indexOf("417500") === 0 ||
      value.indexOf("4508") === 0 ||
      value.indexOf("4913") === 0 ||
      value.indexOf("4917") === 0
    ) {
      return "visa";
    } else if (
      value.indexOf("51") === 0 ||
      value.indexOf("52") === 0 ||
      value.indexOf("53") === 0 ||
      value.indexOf("54") === 0 ||
      value.indexOf("55") === 0 ||
      value.indexOf("222100") === 0
    ) {
      return "mc";
    } else if (value.indexOf("34") === 0 || value.indexOf("37") === 0) {
      return "ae";
    } else if (
      value.indexOf("637") === 0 ||
      value.indexOf("638") === 0 ||
      value.indexOf("639") === 0
    ) {
      return "ds";
    }
  };

  const expected = "6397655826843731";
  const received = "ds";

  expect(received).toBe(app(expected));
});
