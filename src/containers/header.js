import React from "react";
import { Header } from "../components";

export function HeaderContainer() {
  return (
    <Header>
      <Header.Nav>
        <Header.Column>
          <Header.Link href="#">About</Header.Link>
          <Header.Link href="#">Projects</Header.Link>
          <Header.Link href="#">Contact</Header.Link>
        </Header.Column>
      </Header.Nav>
    </Header>
  );
}
