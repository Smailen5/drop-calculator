import { dropCalculator } from "@/lib/dropCalculator";
import { Result } from "../atoms/Result";
import { Button } from "../ui/button";
import { useState } from "react";
import { useGlobalContext } from "@/lib/context";

export const ButtonCalculator = () => {
  const { dropRate } = useGlobalContext();
  const [result, setResult] = useState<string | null>(null);

  const handleClick = () => {
    if (dropRate !== undefined) {
      const calculationResult = dropCalculator(dropRate);
      setResult(calculationResult);
    }
  };

  return (
    <>
      <div className="space-y-4 w-full">
        <Button onClick={() => handleClick()} className="w-full">
          Calcola
        </Button>
        {result && <Result result={result} />}
      </div>
    </>
  );
};
