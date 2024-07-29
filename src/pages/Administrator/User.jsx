import React from "react";
import { PageContextProvider } from "../../contexts/PageContextProvider";
import PageTitle from "./User/PageTitle";
import Section from "./User/Section";

export default function User() {
  return (
    <PageContextProvider basePath="/administrator/users">
      <PageTitle />
      <Section />
    </PageContextProvider>
  );
}
