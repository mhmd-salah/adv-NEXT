'use client';

import { useState } from "react";

export default function CategoryHeader() {
  const [count, setCount] = useState(0);
  // const posts = fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json());

  // const selectedSegment = useSelectedLayoutSegment();
  // const selectedSegments = useSelectedLayoutSegments();
  // console.log('selectedSegment: ', selectedSegment);
  // console.log('selectedSegments: ', selectedSegments);

  return (
    <header className="">Category Header

      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </header>
  )
}