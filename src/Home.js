import React, { useEffect, useState } from "react";

const numbers = [0, 0, 0, 0];
const sorted = [-4, -1, -1, 0, 1, 2];
const output = [
  [-1, -1, 2],
  [-1, 0, 1],
];

export default function Home() {
  function main(numbers) {
    const sorted = numbers.sort((a, b) => a - b);
    const answer = [];
    for (let i = 0; i < sorted.length; i++) {
      const curNum = sorted[i];
      let left = i + 1;
      let right = sorted.length - 1;
      while (left < right) {
        if (sorted[left] + sorted[right] + curNum === 0) {
          answer.push([sorted[left], sorted[right], curNum]);
          break;
        } else if (sorted[left] + sorted[right] + curNum < 0) {
          left += 1;
        } else if (sorted[left] + sorted[right] + curNum > 0) {
          right -= 1;
        }
      }
    }
    return answer;
  }

  return (
    <div>
      <h1>Answer:</h1>
      <div>{`Answer: ${main(numbers)}`}</div>
    </div>
  );
}
