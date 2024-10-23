import { useGlobalContext } from "@/lib/context";
import { calculateCurrentProbability } from "@/lib/dropCalculator";
import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

export const RealTimeDrop = () => {
  const [value, setValue] = useState(0);

  const { dropRate } = useGlobalContext();

  const increment = () => setValue((prev) => prev + 1);

  const decrement = () => setValue((prev) => prev - 1);

  const reset = () => setValue(0);

  if (value < 0) setValue(0);

  return (
    <Card className="w-full">
      <CardHeader>
        Real time drop
        <CardDescription>calcola il drop attuale</CardDescription>
      </CardHeader>
      <CardContent>
        <p>tentativo attuale: {value}</p>
        <p>
          probabilita di drop attuale:{" "}
          {calculateCurrentProbability({ dropRate, attempts: value })}%
        </p>
      </CardContent>
      <CardFooter className="flex-col">
        <div className="flex gap-6 w-full mb-6">
          <Button
            onClick={decrement}
            variant={"destructive"}
            className="flex-1"
          >
            decrementa
          </Button>
          <Button onClick={increment} className="flex-1">
            incrementa
          </Button>
        </div>
        <Button onClick={reset} className="w-full">
          reset
        </Button>
      </CardFooter>
    </Card>
  );
};
