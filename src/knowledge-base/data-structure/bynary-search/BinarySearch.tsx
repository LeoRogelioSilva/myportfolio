import React, { useState } from "react";
import { binary_search } from "./binary-search.algorithm";
import "./BinarySearch.css";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";

const BinarySearchComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [target, setTarget] = useState<number | "">("");
  const [result, setResult] = useState<string>("");

  const handleSearch = () => {
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
    </div>
  );
};

export default BinarySearchComponent;
