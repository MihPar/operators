const arr = [{ name: "Pete", salary: 500 }, { name: "Steve" }];
// console.log(arr[0].salary, arr[1].salary || 0);
// if (arr[0].salary > (arr[1].salary || 0)) {
//   console.log("Pete makes more money than Steve");
// } else {
//   console.log("Steve makes more money than Pete");
// }

if (arr[0].salary > (arr[1].salary ? arr[1].salary : 0)) {
  console.log("Pete makes more money than Steve");
} else {
  console.log("Steve makes more money than Pete");
}
