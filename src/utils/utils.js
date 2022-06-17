export const statusText = (status) => {
  switch (status) {
    case "done":
      return {
        name: "Выполнен",
        style: { color: "#00cccc" },
      };
    case "pending":
      return {
        name: "Готовится",
        style: { color: "#F2F2F3" },
      };
    case "created":
      return {
        name: "Создан",
        style: { color: "#F2F2F3" },
      };
    case "cancel":
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
