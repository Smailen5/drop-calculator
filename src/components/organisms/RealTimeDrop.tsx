import { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";
import { useGlobalContext } from "@/lib/context";
import { calculateCurrentProbability } from "@/lib/dropCalculator";

export const RealTimeDrop = () => {
  const { dropRate } = useGlobalContext();

  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prev) => prev + 1);
  };

  const decrement = () => {
    setValue((prev) => prev - 1);
  };

  if (value < 0) {
    setValue(0);
  }

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
      <CardFooter>
        <Button onClick={increment}>incrementa</Button>
        <Button onClick={decrement}>decrementa</Button>
      </CardFooter>
    </Card>
  );
};
