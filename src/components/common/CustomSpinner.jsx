import { Spinner } from "react-bootstrap";

export default function CustomSpinner() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spinner animation="border" />
    </div>
  );
}

// mutate 까지 추가해보자
