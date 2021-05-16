import React from "react";
import { fetchCharacters } from "../../serviceFunctions/fetchCharacters";

// I haven't actually done this pattern before, but it makes sense to me.
// The idea is that we provide all of our service functions via context.
// That way mocking the service functions is much easier

type ServiceFunctions = {
  fetchCharacters: typeof fetchCharacters;
};

const ServiceFunctionContext = React.createContext<ServiceFunctions>({
  fetchCharacters,
});

export const ServiceFunctionContextProvider = (
  props: React.PropsWithChildren<ServiceFunctions>
) => {
  const { children, ...rest } = props;

  return (
    <ServiceFunctionContext.Provider value={rest}>
      {children}
    </ServiceFunctionContext.Provider>
  );
};

export const useFetchCharacters = (): typeof fetchCharacters => {
  return React.useContext(ServiceFunctionContext).fetchCharacters;
};
