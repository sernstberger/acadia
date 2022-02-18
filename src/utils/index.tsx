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
