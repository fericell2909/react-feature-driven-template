export const formatDate = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  }).format(date);
};

export const isExpired = (dateString: string): boolean => {
  const targetDate = new Date(dateString);
  const today = new Date();
  return targetDate < today;
};