const formatCurrency = (val: number): string =>
  new Intl.NumberFormat('zh-tw', {
    style: 'currency',
    currency: 'TWD',
    maximumFractionDigits: 0,
  }).format(val);

export default formatCurrency;
