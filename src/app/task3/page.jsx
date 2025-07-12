"use client";
import React, { useEffect, useState } from "react";

const ROWS = 9;
const COLS = 25;
const BLUE_BOX_COUNT = 9;
const FADE_DURATION = 500;

export default function FullScreenGrid() {
  const [blueBoxes, setBlueBoxes] = useState([]);
  const [isFading, setIsFading] = useState(false);

  const generateUniqueRowColBoxes = () => {
    const availablePositions = [];

    // Create all grid positions
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        availablePositions.push({ row: r, col: c });
      }
    }

    // Shuffle positions randomly
    const shuffled = availablePositions.sort(() => Math.random() - 0.5);

    const selected = [];
    const usedRows = new Set();
    const usedCols = new Set();

    for (const { row, col } of shuffled) {
      if (!usedRows.has(row) && !usedCols.has(col)) {
        selected.push(`${row}-${col}`);
        usedRows.add(row);
        usedCols.add(col);
        if (selected.length === BLUE_BOX_COUNT) break;
      }
    }

    return selected;
  };

  const updateBlueBoxes = () => {
    setIsFading(true);
    setTimeout(() => {
      setBlueBoxes(generateUniqueRowColBoxes());
      setIsFading(false);
    }, FADE_DURATION);
  };

  useEffect(() => {
    updateBlueBoxes();
    const interval = setInterval(updateBlueBoxes, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="grid w-screen h-screen"
      style={{
        gridTemplateColumns: `repeat(${COLS}, 1fr)`,
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gap: "3px",
      }}
    >
      {Array.from({ length: ROWS * COLS }, (_, i) => {
        const row = Math.floor(i / COLS);
        const col = i % COLS;
        const key = `${row}-${col}`;
        const isBlue = blueBoxes.includes(key);

        return (
          <div
            key={key}
            className={`border border-gray-300 transition-opacity duration-500 ${
              isBlue
                ? isFading
                  ? "bg-blue-500 opacity-0"
                  : "bg-blue-500 opacity-100"
                : "bg-white"
            }`}
          />
        );
      })}
    </div>
  );
}
