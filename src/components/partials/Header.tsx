import { useEffect, useState } from "react";
import Divisor from "./divisor";
import * as C from "./styles";

type Props = {
  page: (page: string) => void;
}

const Header = () => {
  return (
    <C.HeaderBox>
      <C.Header>
        <C.HeaderContainer>
          <h1>HUGOSILVAG6</h1>
          
        </C.HeaderContainer>
      </C.Header>
      <Divisor />
    </C.HeaderBox>
  );
};

export default Header;
