import React from "react";
//generative ai was used here in order to help me generate more shapes
const shapes = [
  {
    type: "circle",
    cx: 80,
    cy: 80,
    r: 60,
    fill: "#A259F7",
    opacity: 0.13,
  },
  {
    type: "polygon",
    points: "900,70 960,110 900,150 840,110",
    fill: "#FF8C42",
    opacity: 0.10,
  },
  {
    type: "ellipse",
    cx: 120,
    cy: 600,
    rx: 70,
    ry: 40,
    fill: "#43E6A0",
    opacity: 0.11,
  },
  {
    type: "circle",
    cx: 900,
    cy: 650,
    r: 50,
    fill: "#3AB0FF",
    opacity: 0.10,
  },
  {
    type: "polygon",
    points: "520,340 560,420 480,420",
    fill: "#FF5E5B",
    opacity: 0.09,
  },
  {
    type: "polygon",
    points: "700,320 740,350 700,380 660,350",
    fill: "#FFC542",
    opacity: 0.08,
  },
  {
    type: "circle",
    cx: 500,
    cy: 50,
    r: 30,
    fill: "#FF9EC3",
    opacity: 0.12,
  },
  {
    type: "polygon",
    points: "50,300 100,300 100,400 50,400",
    fill: "#6B5B95",
    opacity: 0.09,
  },
  {
    type: "ellipse",
    cx: 950,
    cy: 400,
    rx: 40,
    ry: 80,
    fill: "#88B04B",
    opacity: 0.11,
  },
  {
    type: "polygon",
    points: "500,700 540,640 460,640",
    fill: "#FFCC00",
    opacity: 0.10,
  },
  {
    type: "circle",
    cx: 200,
    cy: 400,
    r: 25,
    fill: "#00BCD4",
    opacity: 0.08,
  },
  {
    type: "polygon",
    points: "800,500 830,540 800,580 740,580 710,540 740,500",
    fill: "#E040FB",
    opacity: 0.09,
  },
  {
    type: "ellipse",
    cx: 300,
    cy: 150,
    rx: 50,
    ry: 30,
    fill: "#FF704D",
    opacity: 0.11,
  },
  {
    type: "polygon",
    points: "750,600 780,630 750,660 720,630",
    fill: "#4CAF50",
    opacity: 0.08,
  },

  {
    type: "polygon",
    points: "620,380 650,410 620,440 590,410",
    fill: "#A259F7",
    opacity: 0.09,
  },
  {
    type: "polygon",
    points: "300,200 340,230 300,260 260,230",
    fill: "#43E6A0",
    opacity: 0.12,
  },
  {
    type: "polygon",
    points: "850,500 880,530 850,560 820,530",
    fill: "#FF5E5B",
    opacity: 0.08,
  },
  {
    type: "polygon",
    points: "450,600 480,630 450,660 420,630",
    fill: "#3AB0FF",
    opacity: 0.11,
  },
  {
    type: "polygon",
    points: "200,500 230,530 200,560 170,530",
    fill: "#FFC542",
    opacity: 0.10,
  },

];

const BackgroundShapes = () => (
  <svg
    className="background-shapes"
    width="100vw"
    height="100vh"
    viewBox="0 0 1024 768"
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 0,
      width: "100vw",
      height: "100vh",
      pointerEvents: "none",
    }}
    aria-hidden="true"
    focusable="false"
  >
    {shapes.map((shape, idx) => {
      if (shape.type === "circle")
        return (
          <circle
            key={idx}
            cx={shape.cx}
            cy={shape.cy}
            r={shape.r}
            fill={shape.fill}
            opacity={shape.opacity}
          />
        );
      if (shape.type === "ellipse")
        return (
          <ellipse
            key={idx}
            cx={shape.cx}
            cy={shape.cy}
            rx={shape.rx}
            ry={shape.ry}
            fill={shape.fill}
            opacity={shape.opacity}
          />
        );
      if (shape.type === "polygon")
        return (
          <polygon
            key={idx}
            points={shape.points}
            fill={shape.fill}
            opacity={shape.opacity}
          />
        );
      return null;
    })}
  </svg>
);

export default BackgroundShapes;
