import React, { useState } from "react";
import { bubble_sort } from "./bubble-sort.algorithm";
import Input from "../../../../components/shared/input/Input";
import Button from "../../../../components/shared/button/Button";
import Code from "../../../../components/shared/code/Code";

const BubbleSortComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const code = `export const bubble_sort = (arr: number[]) => {
  const size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    let isSorted = true;
    for (let j = 0; j < size - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        isSorted = false;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
    if (isSorted) {
      return arr;
    }
  }
  return arr;
};
  
  `;
  const handleSearch = () => {
    let result: any[] = [];
    if (array.length > 0) {
      const numArray = array
        .split(",")
        .map((num) => parseInt(num.trim(), 10))
        .sort((a, b) => a - b);

      result = bubble_sort(numArray);
    }

    setResult(
      `Sorted Array: ${result && result.length > 0 ? result.join(", ") : "[]"}`
    );
  };

  return (
    <div>
      <h1>Bubble Sort</h1>
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

export default BubbleSortComponent;
