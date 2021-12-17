function Button(props) {
  const { text, onclickFunc } = props;

  return (
    <button
      style={{
        width: "20rem",
        margin: "0 0 1rem 0",
        padding: "1rem",
        textTransform: "uppercase",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        border: "2px solid #fff",
        borderRadius: "2rem",
        textAlign: "center",
        fontSize: "large",
        fontWeight: 600,
        cursor: "pointer",
      }}
      onClick={onclickFunc}
    >
      {text}
    </button>
  );
}

export default Button;
