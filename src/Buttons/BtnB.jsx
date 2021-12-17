import Button from "./Button";

function BtnB(props) {
  const { setState } = props;

  return (
    <Button
      text="button B"
      onclickFunc={() => setState((prevState) => prevState + 10)}
    />
  );
}

export default BtnB;
