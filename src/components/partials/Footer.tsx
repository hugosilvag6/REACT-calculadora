import Divisor from "./divisor";
import * as C from "./styles";

const Footer = () => {
    return (
        <>
        <Divisor />
        <C.Footer>
            <C.FooterContainer>
                <p>Desenvolvido por Hugo Silva Garcia</p>
                <p>&#169; Copyright 2022. Todos os Direitos Reservados.</p>
            </C.FooterContainer>
        </C.Footer>
        </>
    );
};

export default Footer;
