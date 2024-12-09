"use client";

import { getLongAction, getShortAction } from "@business/service";
import { useState } from "react";

export default function Home() {
  const [output, setOutput] = useState("");

  const handleShortClick = async () => {
    const resp = await getShortAction();
    setOutput(JSON.stringify(resp));
  };

  const handleLongClick = async () => {
    const resp = await getLongAction();
    setOutput(JSON.stringify(resp));
  };

  return (
    <div>
      <div>
        <label>{output}</label>
      </div>
      <div>
        <button onClick={handleShortClick}>GO short</button>
      </div>
      <div>
        <button onClick={handleLongClick}>GO long</button>
      </div>
    </div>
  );
}
