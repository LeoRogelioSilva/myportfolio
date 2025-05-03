import React, { useState } from "react";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import { exponential_search } from "./exponential-search.algorithm";
import Code from "../../../components/shared/code/Code";

const ExponentialSearchComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [target, setTarget] = useState<number | "">("");
  const [result, setResult] = useState<string>("");
  const code = `export const exponential_search = (arr: number[], target: number) => {
    if (arr[0] === target) return 0;
    let n = arr.length;
    let i = 1;
    while (i < n && arr[i] < target) {
      i *= 2;
    }
    if (arr[i] === target) return i;
    console.log(i);
    console.log(
      binary_search(arr.slice(Math.floor(i / 2), Math.min(i, n - 1)), target)
    );
  
    return binary_search(arr, target, Math.floor(i / 2), Math.min(i, n - 1))!;
  };
  
  `;
  const handleSearch = () => {
    const numArray = array
      .split(",")
      .map((num) => parseInt(num.trim(), 10))
      .sort((a, b) => a - b);
    const targetNum =
      typeof target === "string" ? parseInt(target, 10) : target;

    const index = exponential_search(numArray, targetNum);
    setResult(index !== -1 ? `Found at index ${index}` : "Not found :(");
  };

  return (
    <div>
      <h1>Exponential Search</h1>
      <p>
        <b>Complexidade: </b>O(log(n))
      </p>
      <p>
        <b>Descrição: </b>É uma busca em uma lista de elementos ordenados em que
        a distribuição dos elementos é maior.
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

export default ExponentialSearchComponent;
