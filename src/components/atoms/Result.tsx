interface ResultProps {
  result: string | null;
}

export const Result = ({ result }: ResultProps) => {
  return <p>{result}</p>;
};
