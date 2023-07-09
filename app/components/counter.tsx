'use client'

import { useState } from 'react'

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div className="border border-orange-500 p-1 text-center">
      <p>Count - {count}</p>
      <button
        className="rounded bg-indigo-500 px-3 py-1 text-white font-medium hover:bg-indigo-600"
        onClick={() => setCount((c) => c + 1)}
      >
        increment
      </button>
    </div>
  )
}
