import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import Section from "./Document/Section";
import PageTitle from "./Document/PageTitle";
export default function Document() {
  return (
    <PageContextProvider basePath="/documents">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
