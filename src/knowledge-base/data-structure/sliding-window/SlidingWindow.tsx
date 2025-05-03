import React, { useState } from "react";
import Input from "../../../components/shared/input/Input";
import Button from "../../../components/shared/button/Button";
import { sliding_window } from "./sliding-window.algorithm";
import Code from "../../../components/shared/code/Code";

const SlidingWindowComponent: React.FC = () => {
  const [array, setArray] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const code = `export const sliding_window = (s: string): number => {
  let l = 0;
  let r = 0;
  let max = 0;
  let map = new Map<string, number>();
  map.set(s[0], 1);

  while (r < s.length - 1) {
    r++;
    if (map.get(s[r])) {
      map.set(s[r], map.get(s[r])! + 1);
    } else {
      map.set(s[r], 1);
    }
    while (map.get(s[r]) && map.get(s[r]) === 3) {
      map.set(s[l], map.get(s[l])! - 1);
      l++;
    }
    max = Math.max(max, r - l + 1);
  }

  return max;
};
`;

  const handle = () => {
    const index = sliding_window(array);
    setResult(index.toString());
  };

  return (
    <div>
      <h1>Sliding Window</h1>
      <p>
        <b>Complexidade: </b>O(log(n))
      </p>
      <p>
        <b>Descrição: </b>É uma busca de substrings dada uma regra, nesse caso a
        regra é ter no máximo 2 repetição de um mesmo caractere.
      </p>
      <div>
        <label>
          String:
          <Input
            type="text"
            value={array}
            onChange={(value: string | number) => setArray(value as string)}
            placeholder="e.g., 'aabbccddeeff'"
          />
        </label>
      </div>
      <Button
        label="Find Maximum Lenght Substring With Two Occurrences "
        onClick={handle}
      ></Button>
      <div>
        <strong>Result:</strong> {result}
      </div>
      <Code code={code}></Code>
    </div>
  );
};

export default SlidingWindowComponent;
