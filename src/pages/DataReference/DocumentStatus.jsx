import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import Section from "./DocumentStatus/Section";
import PageTitle from "./DocumentStatus/PageTitle";

export default function DocumentStatus() {
  return (
    <PageContextProvider basePath="/data-reference/document-statuses">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
