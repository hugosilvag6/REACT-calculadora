import * as C from "../src/components/Calculadora";
import { BsBatteryFull, BsWifi } from "react-icons/bs";
import Footer from "./components/partials/Footer";
import Header from "./components/partials/Header"
import { useState } from "react";

type ResultProps = {
  first?: string;
  second?: string;
  operator?: string;
};

const App = () => {
    const [screenValue, setScreenValue] = useState<string>("0");
    const [screenFontSize, setScreenFontSize] = useState<string>("30px");
    const [reset, setReset] = useState<boolean>(false);
    const [selectedOperator, setSelectedOperator] = useState<string>("");
    const [result, setResult] = useState<ResultProps>({
        first: undefined,
        second: undefined,
        operator: undefined,
    });

    const handleScreenValue = (prop: string) => {
        if (screenValue == "0") {
            if (prop == ".") {
                if (screenValue.includes(".") == false) {
                    setScreenValue(screenValue + prop);
                }
            } else {
                setScreenValue(prop);
            }
        } else {
            if (reset == true) {
                if (prop == ".") {
                    if (screenValue.includes(".") == false) {
                        setScreenValue(screenValue + prop);
                    }
                } else {
                    setScreenValue(prop);
                }
                setReset(false);
            } else {
                if (screenValue.length < 30) {
                    setScreenFontSize("30px");
                    if (prop == ".") {
                        if (screenValue.includes(".") == false) {
                            setScreenValue(screenValue + prop);
                        }
                    } else {
                        setScreenValue(screenValue + prop)
                    }
                    if (screenValue.length > 8) {
                        if (screenValue.length < 23) {
                            setScreenFontSize(`${25 - (screenValue.length - 10)}px`);
                        } else {
                            setScreenFontSize("12px");
                        }
                    }
                } else {
                    setScreenValue(screenValue);
                    alert("Você atingiu o limite de caracteres.");
                }
            }
        }
    };

    const handleOperation = (prop?: string) => {
        setResult({ ...result, first: screenValue, operator: prop });
        if (prop && screenValue != "0") {
            setSelectedOperator(prop);
        }
        setReset(true);
    };

    const handleResultado = () => {
        let resultCopy = { ...result };
        if (result.second == undefined && result.first != undefined && result.operator != undefined) {
            resultCopy = { ...result, second: screenValue };
        }
        if (resultCopy.first != undefined && resultCopy.second != undefined && resultCopy.operator != undefined) {
            if (resultCopy.operator == "div") {
                setScreenValue((parseFloat(resultCopy.first) / parseFloat(resultCopy.second)).toString());
                setResult({ first: undefined, second: undefined, operator: undefined });
            }
            if (resultCopy.operator == "mult") {
                setScreenValue((parseFloat(resultCopy.first) * parseFloat(resultCopy.second)).toString());
                setResult({ first: undefined, second: undefined, operator: undefined });
            }
            if (resultCopy.operator == "minus") {
                setScreenValue((parseFloat(resultCopy.first) - parseFloat(resultCopy.second)).toString());
                setResult({ first: undefined, second: undefined, operator: undefined });
            }
            if (resultCopy.operator == "plus") {
                setScreenValue((parseFloat(resultCopy.first) + parseFloat(resultCopy.second)).toString());
                setResult({ first: undefined, second: undefined, operator: undefined });
            }
            setReset(true);
            setSelectedOperator("");
        }
    };

    const handleAc = () => {
        setScreenValue("0");
        setScreenFontSize("30px");
        setSelectedOperator("");
        setResult({ first: undefined, second: undefined, operator: undefined });
    };

    const handleChop = () => {
        if (screenValue.length > 1) {
            setScreenValue(screenValue.slice(0, screenValue.length - 1));
        } else {
            setScreenValue("0");
        }
    };

    const handlePercentage = () => {
        setScreenValue((parseFloat(screenValue) / 100).toString());
        setReset(true);
    };

    return (
        <>
        <Header />
            <C.CalculadoraContainer>
                <C.Calculadora>
                    <C.CalculadoraTopSection>
                        <C.CalculadoraHead>
                            <C.MacMenu>
                                <div style={{ backgroundColor: "#FF605C" }}>
                                    <span>&#120;</span>
                                </div>
                                <div style={{ backgroundColor: "#FFBD44" }}>
                                    <span>&#65293;</span>
                                </div>
                                <div style={{ backgroundColor: "#00CA4E" }}>
                                    <span>&lt;&gt;</span>
                                </div>
                            </C.MacMenu>
                            <div>
                                <BsWifi color="white" />
                                <BsBatteryFull color="white" />
                            </div>
                        </C.CalculadoraHead>

                        <C.CalculadoraScreen fonte={screenFontSize}>
                            <span>{screenValue}</span>
                        </C.CalculadoraScreen>
                    </C.CalculadoraTopSection>

                    <C.CalculadoraBottomSection>
                        <C.ButtonsRow>
                            <C.Button cor="#505050" onClick={handleAc}>
                                AC
                            </C.Button>
                            <C.Button cor="#505050" onClick={handleChop}>
                                &#9003;
                            </C.Button>
                            <C.Button cor="#505050" onClick={handlePercentage}>
                                %
                            </C.Button>
                            <C.Button
                                cor="#FF9500"
                                hover={true}
                                fonte="35px"
                                onClick={() => handleOperation("div")}
                                selected={selectedOperator == "div" ? "3px solid black" : "0.5px solid black"}
                            >
                                &#247;
                            </C.Button>
                            <C.Button onClick={() => handleScreenValue("7")}>7</C.Button>
                            <C.Button onClick={() => handleScreenValue("8")}>8</C.Button>
                            <C.Button onClick={() => handleScreenValue("9")}>9</C.Button>
                            <C.Button
                                cor="#FF9500"
                                hover={true}
                                onClick={() => handleOperation("mult")}
                                selected={selectedOperator == "mult" ? "3px solid black" : "0.5px solid black"}
                            >
                                &#120;
                            </C.Button>
                            <C.Button onClick={() => handleScreenValue("4")}>4</C.Button>
                            <C.Button onClick={() => handleScreenValue("5")}>5</C.Button>
                            <C.Button onClick={() => handleScreenValue("6")}>6</C.Button>
                            <C.Button
                                cor="#FF9500"
                                hover={true}
                                onClick={() => handleOperation("minus")}
                                selected={selectedOperator == "minus" ? "3px solid black" : "0.5px solid black"}
                            >
                                &#65293;
                            </C.Button>
                            <C.Button onClick={() => handleScreenValue("1")}>1</C.Button>
                            <C.Button onClick={() => handleScreenValue("2")}>2</C.Button>
                            <C.Button onClick={() => handleScreenValue("3")}>3</C.Button>
                            <C.Button
                                cor="#FF9500"
                                hover={true}
                                fonte="30px"
                                onClick={() => handleOperation("plus")}
                                selected={selectedOperator == "plus" ? "3px solid black" : "0.5px solid black"}
                            >
                                +
                            </C.Button>
                        </C.ButtonsRow>
                        <C.ButtonsRowLast>
                            <C.Button lBorda="10px" onClick={() => handleScreenValue("0")}>
                                0
                            </C.Button>
                            <C.Button onClick={() => handleScreenValue(".")}>.</C.Button>
                            <C.Button cor="#FF9500" rBorda="10px" hover={true} onClick={handleResultado}>
                                =
                            </C.Button>
                        </C.ButtonsRowLast>
                    </C.CalculadoraBottomSection>
                </C.Calculadora>
            </C.CalculadoraContainer>
            <Footer />
        </>
  )
}

export default App;