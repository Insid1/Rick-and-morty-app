import dayjs from 'dayjs';

const formatDate = (date: string, formatString?: string): string => dayjs(date).format(formatString || 'D MMMM YYYY');

export { formatDate };
