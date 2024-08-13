"use client";
import WaterWave from "react-water-wave";
export default function WaterWaveWrapper({
  imageUrl,
  dropRadius,
  perturbance,
  resolution,
  children,
}) {
  return (
    <WaterWave
      imageUrl={imageUrl}
      dropRadius={dropRadius}
      perturbance={perturbance}
      resolution={resolution}
    >
      {children}
    </WaterWave>
  );
}
