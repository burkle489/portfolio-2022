import { ChangeMe } from "./components/Navbar/models";

export const handleScrollToComponent = (componentRef: ChangeMe) => () => {
  componentRef.current.scrollIntoView();
};
