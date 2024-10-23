import { Input } from "../ui/input";
import { Label } from "../ui/label";

interface InputDropProps {
  value: number | null;
  setValue: (val: number| null) => void;
}

export const InputDrop = ({ value, setValue }: InputDropProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value === "" ? null : Number(e.target.value)
    setValue(newValue);
  };

  return (
    <>
      <div className="even:mt-4">
        <Label htmlFor="drop-rate">Drop rate</Label>
        <Input
          id="drop-rate"
          type="number"
          value={value !== null ? value : ""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};
