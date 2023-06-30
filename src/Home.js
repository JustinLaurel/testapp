import React, { useEffect, useState } from "react";

let input = 12921;
export default function Home() {
  function main() {

  }
  
  return (
    <div>
      <h1>Answer:</h1>
      <div>{`Answer: ${main(input)}`}</div>
    </div>
  );
}
