const arr = [1, 2, 3, 4, 6, 7, 8, 9, 10];
const result = arr.map((n, i) => ({
  value: n ** 2,
  title: "Task" + n,
  order: i
}));

//const result = arr.filter((n, i) => n > 5);

const result2 = [...result].sort();

const result3 = result2.reduce((sum, cur) => {

  const {value, title, order} = cur;

  return {
    value: sum.value + value,
    title: sum.title + title,
    order: sum.order + order
  }
});


console.log(result3, result2, result);