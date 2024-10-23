import { Header } from "../atoms/Header";
import { Layout } from "../atoms/Layout";
import { CalculatorTemplate } from "../template/CalculatorTemplate";

export const CalculatorPage = () => {
  return (
    <>
      <Header />
      <Layout>
        <CalculatorTemplate />
      </Layout>
    </>
  );
};
