import model from "./ml5Training";

test("should label a student with good grades with 'ok'", async () => {
  let studentStatus;
  await model([95, 89, 94, 80, 92], (result) => {
    studentStatus = result;
  });
  expect(studentStatus.label).toEqual("ok");
});
test("should label a student with dropping grades with 'depressed'", async () => {
  let studentStatus;
  await model([95, 89, 94, 72, 64], (result) => {
    studentStatus = result;
  });
  expect(studentStatus.label).toEqual("depressed");
});
// test("test", () => {
//   expect(1).toEqual(1);
// });
