import React, { useState } from "react";
import { binary_search } from "./binary-search.algorithm";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import Code from "../../../components/shared/code/Code";

const BinarySearchComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [target, setTarget] = useState<number | "">("");
  const [result, setResult] = useState<string>("");
  const code = `export const binary_search = (
    nums: number[],
    n: number,
    low = 0,
    high: number | null = null
  ) => {
    if (high === null) {
      high = nums.length - 1;
    }
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (nums[mid] === n) {
        return mid;
      }
      if (nums[mid] < n) {
        low = mid + 1;
      }
      if (nums[mid] > n) {
        high = mid;
      }
    }
    return -1;
  };
  `;
  const handleSearch = () => {
    if (array.trim() === "" || target === "") return;
    const numArray = array
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .sort((a, b) => a - b);
    const targetNum =
      typeof target === "string" ? parseInt(target, 10) : target;

    const index = binary_search(numArray, targetNum);
    setResult(index !== -1 ? `Found at index ${index}` : "Not found :(");
  };

  return (
    <div>
      <h1>Binary Search</h1>
      <p>
        <b>Complexidade: </b>O(log(n))
      </p>
      <p>
        <b>Descrição: </b>É uma busca em uma lista de elementos ordenados.
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
      <div>
        <label>
          Target Number:
          <Input
            type="number"
            value={target}
            onChange={(value: string | number) =>
              setTarget(value === "" ? "" : parseInt(value as string, 10))
            }
            placeholder="e.g., 3"
          ></Input>
        </label>
      </div>
      <Button label="Search" onClick={handleSearch}></Button>
      <div>
        <strong>Result:</strong> {result}
      </div>
      <Code code={code}></Code>
    </div>
  );
};

export default BinarySearchComponent;
