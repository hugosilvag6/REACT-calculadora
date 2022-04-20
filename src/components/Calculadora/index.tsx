import styled from "styled-components";
import LineMarker from "../../assets/line-maker.svg";
import BgPatterns from "../../assets/bg-paterns.png";

export const CalculadoraContainer = styled.div`
    height: 80vh;
    margin-top: 10vh;
    background: url(${LineMarker}), url(${BgPatterns});
    background-color: rgba(19, 21, 24, 1);
    display: flex;
    align-items: center;
    justify-content: center;
    animation-name: opacityShow;
    animation-duration: 1s;
    color: white;
    font-family: "Montserrat", sans-serif;
    @keyframes opacityShow {
        from {opacity: 0;}
        to {opacity: 1;}
    }
`;
export const Calculadora = styled.div`
    width: 20%;
    height: 60vh;
    border: 1px solid #a1a1aa;
    border-radius: 10px;
    background-color: #1C1C1C;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
export const CalculadoraTopSection = styled.div`
    width: 100%;
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const CalculadoraHead = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
    height: 5vh;
    box-sizing: border-box;
    div {
        display: flex;
        gap: 5px;
    }
`; 
export const MacMenu = styled.div`
    div {
        width: 13px;
        height: 13px;
        border: none;
        border-radius: 50%;
        color: rgba(0,0,0,0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 12px;
        font-weight: 700;
        span {
            display: none;
            cursor: pointer;
        }
        &:hover{
            span {
                display: block;
            }
        }
    }
`;
type PropsCalculadoraScreen = {
    fonte: string;
}
export const CalculadoraScreen = styled.div`
    box-sizing: border-box;
    width: 100%;
    height: 15vh;
    font-size: ${(p: PropsCalculadoraScreen) => p.fonte};
    display: flex;
    justify-content: end;
    align-items: end;
    padding: 0 10px 10px 0;
`;
export const CalculadoraBottomSection = styled.div`
    height: 40vh;
    width: 100%;
    box-sizing: border-box;
    font-size: 20px;
`;
export const ButtonsRow = styled.div`
    display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
`;
export const ButtonsRowLast = styled.div`
    display: flex;
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
`;
type PropsButton = {
    cor?: string;
    lBorda?: string;
    rBorda?: string;
    hover?: boolean;
    fonte?: string;
    selected?: string;
}
export const Button = styled.i`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(p: PropsButton) => p.cor ?? '#71717a'};
    height: 8vh;
    border: ${(p: PropsButton) => p.selected ?? '0.5px solid black'};
    font-size: ${(p: PropsButton) => p.fonte ?? '25px'};
    border-bottom-left-radius: ${(p: PropsButton) => p.lBorda ?? '0'};
    border-bottom-right-radius: ${(p: PropsButton) => p.rBorda ?? '0'};
    &:hover {
        background-color: #a1a1aa;
    }
    &:hover {
        ${(p: PropsButton) => p.hover && `
            &:hover {
                border: 2px solid black;
                background-color: ${p.cor};
            }
        `}
    }
`;