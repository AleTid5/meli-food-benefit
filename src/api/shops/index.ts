import { IFilter } from "../../interfaces/IFilter";

export const getShop = ({ province = "Buenos Aires" }: IFilter) => {
  const data = require(`../provinces/${province.toUpperCase()}.json`);

  return data;
};
