// toBe的使用

console.log("what the fuck ");
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});

// toEqual的使用
test("object assignment", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

// not.toBe
// test('adding positive numbers is not zero', () => {
//     for (let a = 1; a < 10; a++) {
//         for (let b = 1; b < 10; b++) {
//             console.log('run', a, b);
//             expect(a + b).not.toBe(0);
//         }
//     }
// });

// 函数callback的时候如何测试
// test('the data is peanut butter', done => {
//     function callback(data) {
//         expect(data).toBe('peanut butter');
//         done();
//     }

//     fetchData(callback);
// });
