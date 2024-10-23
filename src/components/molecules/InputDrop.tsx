import { useGlobalContext } from "@/lib/context";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useEffect } from "react";

export const InputDrop = () => {
  const { dropRate, setDropRate } = useGlobalContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setDropRate(value === "" ? undefined : Number(value));
  };

  useEffect(() => {
    console.log(dropRate);
  }, [dropRate]);

  return (
    <div className="even:mt-4">
      <Label htmlFor="drop-rate">Drop rate</Label>
      <Input
        id="drop-rate"
        type="number"
        value={dropRate !== undefined ? dropRate : ""}
        onChange={handleChange}
      />
    </div>
  );
};
