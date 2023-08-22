import React from "react";

const LocaleType = {
  ID: "id",
  EN: "en",
};
const LocaleContext = React.createContext(LocaleType.ID);

export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;

export { LocaleType, LocaleContext };
