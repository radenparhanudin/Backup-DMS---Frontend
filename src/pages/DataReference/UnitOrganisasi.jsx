import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import Section from "./UnitOrganisasi/Section";
import PageTitle from "./UnitOrganisasi/PageTitle";

export default function UnitOrganisasi() {
  return (
    <PageContextProvider basePath="/data-reference/unit-organisasis">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
