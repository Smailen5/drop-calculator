import { useState } from "react";
import { ButtonCalculator } from "../molecules/ButtonCalculator";
import { InputDrop } from "../molecules/InputDrop";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "../ui/card";

export const Calculator = () => {
  const [dropRate, setDropRate] = useState<number | null>(null);
  //   console.log(dropRate);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          Drop Calculator
          <CardDescription>Calcola la probabilita di drop</CardDescription>
        </CardHeader>
        <CardContent className="">
          <InputDrop value={dropRate} setValue={setDropRate} />
        </CardContent>
        <CardFooter>
          <ButtonCalculator dropRate={dropRate} />
        </CardFooter>
      </Card>
    </>
  );
};
