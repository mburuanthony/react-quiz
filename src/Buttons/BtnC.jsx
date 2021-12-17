import Button from "./Button";

function BtnC(props) {
  const { setState } = props;

  return (
    <Button
      text="button C"
      onclickFunc={() => setState((prevState) => prevState + 100)}
    />
  );
}

export default BtnC;
