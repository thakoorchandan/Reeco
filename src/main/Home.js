import React from "react";
import { Container } from "../assets/styles/globalStyles";
import NavBar from "./components/NavBar";
import HeaderSection from "./components/Header";
import StatusSection from "./components/StatusRow";
import TableSection from "./components/TableManager";

export default function HomeScreen() {
 
  return (
    <>
      <NavBar />
      <HeaderSection />
      <Container>
        <StatusSection />
        <TableSection />
      </Container>
    </>
  );
}
