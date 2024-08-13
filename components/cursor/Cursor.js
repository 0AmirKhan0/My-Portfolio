import AnimatedCursor from "react-animated-cursor";

export default function Cursor({ color }) {
  return (
    <AnimatedCursor
      innerSize={8}
      outerSize={35}
      innerScale={1}
      outerScale={2}
      outerAlpha={0}
      hasBlendMode={true}
      innerStyle={{
        backgroundColor: color,
      }}
      outerStyle={{
        border: `3px solid ${color}`,
      }}
      clickables={["a", "button", "input", "select", ".link"]}
    />
  );
}
