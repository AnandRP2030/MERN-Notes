import { useMousePosition } from "./hooks";

export const MousePositionComponent = () => {
  const { x, y } = useMousePosition();

  return (
    <div>
      <div
        className="follower"
        style={{
          top: y,
          left: x,
          transform: "translate(-50%, -50%)", // Center the square on the cursor
        }}
      />
      <p>Mouse X: {x}</p>
      <p>Mouse Y: {y}</p>
    </div>
  );
};
