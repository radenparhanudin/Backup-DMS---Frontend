import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import Section from "./SyncDocument/Section";
import PageTitle from "./SyncDocument/PageTitle";
export default function SyncDocument() {
  return (
    <PageContextProvider basePath="/documents/sync">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
