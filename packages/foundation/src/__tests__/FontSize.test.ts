import FontSize from "../FontSize"

test("snapshot of font sizes", () => {
  expect(FontSize).toMatchSnapshot()
});