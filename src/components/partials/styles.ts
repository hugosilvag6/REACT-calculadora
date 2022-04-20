import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  background-color: rgb(19, 21, 24);
  font-family: "Montserrat", sans-serif;
`;
export const HeaderBox = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 2;
`;
export const HeaderContainer = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
  color: white;
  align-items: center;

  h1 {
    font-size: 35px;
    font-weight: 700;
    cursor: pointer;
    transition: 500ms;
    &:first-letter {
      color: red;
    }
    &:hover {
      color: red;
      transform: scale(1.05);
    }
  }
`;
interface Props {
    display: string;
}
export const HeaderDropdown = styled.nav<Props>`
    h2 {
        width: 130px;
        text-transform: uppercase;
        cursor: pointer;
        padding: 15px;
        box-sizing: border-box;
        text-align: center;
        &:hover{
          font-weight: 700;
          text-decoration: underline;
        }
    }
    ul {
    display: ${Props => Props.display};
    position: absolute;
    background-color: rgb(28,31,36);
    right: 12.5%;
    border-radius: 10px;
        li {
            box-sizing: border-box;
            width: 130px;
            padding: 15px;
            display: flex;
            justify-content: end;
            p {
                cursor: pointer;
                width: max-content;
                &:hover {
                  font-weight: 700;
                }
            }
        }
    }
`;
export const Footer = styled.footer`
  width: 100%;
  height: 10vh;
  background-color: rgb(19, 21, 24);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
`;
export const FooterContainer = styled.div`
  color: white;
  text-align: center;
  p {
    margin-bottom: 7px;
  }
`;
