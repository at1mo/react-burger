import {
  format,
  formatDistanceToNowStrict,
  isToday,
  isYesterday,
} from "date-fns";
import { ru } from "date-fns/locale";

export const getDateOrder = (date) => {
  const dateCreatedAt = new Date(date);
  const day = isToday(dateCreatedAt)
    ? "Сегодня"
    : isYesterday(dateCreatedAt)
    ? "Вчера"
    : formatDistanceToNowStrict(dateCreatedAt, {
        unit: "day",
        addSuffix: true,
        locale: ru,
      });
  const hour = format(dateCreatedAt, "p 'i-'O", { locale: ru });
  return `${day}, ${hour}`;
};
