import { HeaderText } from "../atoms/HeaderText";
import { Calculator } from "../organisms/Calculator";
import { RealTimeDrop } from "../organisms/RealTimeDrop";

export const CalculatorTemplate = () => {
  return (
    <>
      <HeaderText />
      <Calculator />
      <RealTimeDrop />
    </>
  );
};
