export const delay = async (type: "resolve" | "reject", amount = 2000) => {
  await new Promise((resolve, reject) =>
    setTimeout(type === "resolve" ? resolve : reject, amount)
  );
};
