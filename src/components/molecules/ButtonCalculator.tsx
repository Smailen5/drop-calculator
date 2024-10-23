import { Result } from "../atoms/Result";
import { Button } from "../ui/button";

export const ButtonCalculator = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Button>Calcola</Button>
        <Result />
      </div>
    </>
  );
};
