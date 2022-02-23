import { useEffect, useState } from "react";

export const formatMoney = (amount: number) => {
  const isInteger = amount % 1 === 0;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: isInteger ? 0 : 2,
  }).format(amount);
};

export const formatNumber = (number: number, compact: boolean = false) => {
  return new Intl.NumberFormat("en-US", {
    notation: compact ? "compact" : undefined,
  }).format(number);
};

export function useKeyPress(targetKey: string): boolean {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }: any): void {
    if (key === targetKey) {
      setKeyPressed(true);
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: any): void => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}
