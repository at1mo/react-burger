import { TStatusText } from "./types";

enum EStatus {
  DONE = "done",
  PENDING = "pending",
  CREATED = "created",
  CANCEL = "cancel",
}

export const statusText = (status: EStatus): TStatusText => {
  switch (status) {
    case EStatus.DONE:
      return {
        name: "Выполнен",
        style: { color: "#00cccc" },
      };
    case EStatus.PENDING:
      return {
        name: "Готовится",
        style: { color: "#F2F2F3" },
      };
    case EStatus.CREATED:
      return {
        name: "Создан",
        style: { color: "#F2F2F3" },
      };
    case EStatus.CANCEL:
      return {
        name: "Отменен",
        style: { color: "red" },
      };
    default:
      return {
        name: "Неизвестный статус",
        style: { color: "#F2F2F3" },
      };
  }
};
