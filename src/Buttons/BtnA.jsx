import Button from "./Button";

function BtnA(props) {
  const { setState } = props;

  return (
    <Button
      text="button A"
      onclickFunc={() => setState((prevState) => prevState + 1)}
    />
  );
}

export default BtnA;
