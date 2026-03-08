import React, { useState } from "react";
import Input from "../../../../components/shared/input/Input";
import Button from "../../../../components/shared/button/Button";
import Code from "../../../../components/shared/code/Code";
import { quick_sort } from "./quick-sort.algorithm";

const QuickSortComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const code = `export const quick_sort = (arr: number[], left = 0, right = 0) => {
  if (left < right) {
    let pi = partition(arr, left, right);
    quick_sort(arr, left, pi - 1);
    quick_sort(arr, pi + 1, right);
  }
  return arr;
};

const partition = (arr: number[], left: number, right: number) => {
  const pivot = arr[right];

  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  }

  return i + 1;
};

  
  `;
  const handleSearch = () => {
    let result: any[] = [];
    if (array.length > 0) {
      const numArray = array
        .split(",")
        .map((num) => parseInt(num.trim(), 10))
        .sort((a, b) => a - b);

      result = quick_sort(numArray);
    }

    setResult(
      `Sorted Array: ${result && result.length > 0 ? result.join(", ") : "[]"}`
    );
  };

  return (
    <div>
      <h1>Quick Sort</h1>
      <p>
        <b>Complexidade: </b>O(n^2)
      </p>
      <p>
        <b>Descrição: </b>Algoritmo Simples de ordenação.
      </p>
      <div>
        <label>
          Array (comma-separated):
          <Input
            type="text"
            value={array}
            onChange={(value: string | number) => setArray(value as string)}
            placeholder="e.g., 1, 2, 3, 4"
          />
        </label>
      </div>

      <Button label="Sort" onClick={handleSearch}></Button>
      <div>
        <strong>Result:</strong> {result}
      </div>
      <Code code={code}></Code>
    </div>
  );
};

export default QuickSortComponent;
