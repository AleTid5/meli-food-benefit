import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface iContext {
  province: string;
  setProvince: Dispatch<SetStateAction<string>>;
}

export const ProvinceFilterContext = createContext<iContext>({
  province: "",
  setProvince: () => {},
} as iContext);

const { Provider } = ProvinceFilterContext;

export const ProvinceFilterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [province, setProvince] = useState<string>("Buenos Aires");

  return <Provider value={{ province, setProvince }}>{children}</Provider>;
};
