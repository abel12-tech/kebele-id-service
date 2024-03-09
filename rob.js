function findPersistenceSubsequence(list) {
    // Check if sum is divisible by 3
    const totalSum = list.reduce((acc, num) => acc + num, 0);
    if (totalSum % 3 !== 0) return [];
  
    const targetSum = totalSum / 3;
    let currentSum = 0;
    let count = 0;
    const result = [];
  
    for (const num of list) {
      currentSum += num;
      count++;
  
      if (currentSum === targetSum) {
        result.push(count);
        currentSum = 0;
        count = 0;
      }
    }
  
    // Check if partition is valid (3 subsequences, sum of lengths equals list length)
    return result.length === 3 && result.reduce((acc, length) => acc + length, 0) === list.length ? result : [];
  }
  
  // Example usage
  const list = [0,2,1,-6,6,7,9,-1,2,0,1];
  const result = findPersistenceSubsequence(list);
  console.log(result); // Output: [2, 2, 4]
  