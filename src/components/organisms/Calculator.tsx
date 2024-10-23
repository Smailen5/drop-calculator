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
  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <h2>Drop Calculator</h2>
          <CardDescription>
            <p>Calcola la probabilita di drop</p>
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <InputDrop />
          <InputDrop />
        </CardContent>
        <CardFooter>
          <ButtonCalculator />
        </CardFooter>
      </Card>
    </>
  );
};
