import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import Section from "./DocumentType/Section";
import PageTitle from "./DocumentType/PageTitle";

export default function DocumentType() {
  return (
    <PageContextProvider basePath="/data-reference/document-types">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
