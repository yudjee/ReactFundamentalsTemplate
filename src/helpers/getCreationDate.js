import { addZeroAtTheBeginning } from "./addZeroAtTheBeginning";

export const getCreationDate = () => {
  const date = new Date();

  return `${addZeroAtTheBeginning(date.getDate())}/${addZeroAtTheBeginning(
    date.getMonth()
  )}/${addZeroAtTheBeginning(date.getFullYear())}`;
};
