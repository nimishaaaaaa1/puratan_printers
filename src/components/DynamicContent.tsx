"use client";

import React, { useState, useEffect } from 'react';

export default function DynamicContent() {
  const [randomValue, setRandomValue] = useState(0);
  
  useEffect(() => {
    // Only run on the client
    setRandomValue(Math.random());
  }, []);

  return (
    <div>
      <p>Random value: {randomValue}</p>
    </div>
  );
} 