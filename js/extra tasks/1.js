function maxSubarraySum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (const num of arr) {
    currentSum += num;

    if (currentSum < 0) {
      currentSum = 0;
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }

  return maxSum;
}
console.log(maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]));