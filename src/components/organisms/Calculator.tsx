
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
  //   console.log(dropRate);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          Drop Calculator
          <CardDescription>Calcola la probabilita di drop</CardDescription>
        </CardHeader>
        <CardContent className="">
          <InputDrop />
        </CardContent>
        <CardFooter>
          <ButtonCalculator />
        </CardFooter>
      </Card>
    </>
  );
};
