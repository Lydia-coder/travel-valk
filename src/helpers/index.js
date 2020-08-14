export const formatPrice = (priceCents) => {
  return `€ ${(priceCents / 100.0).toFixed(2)}`;
};
