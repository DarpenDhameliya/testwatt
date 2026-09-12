"use client";

import { useMemo } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { LoadPoint } from "@/lib/content";

const REFERENCE_LABEL = {
  value: "100% Nameplate",
  position: "insideTopLeft" as const,
  style: {
    fontFamily: "var(--font-body)",
    fontSize: 10,
    fill: "#E0201F",
  },
};

const ACTIVE_DOT = { r: 4, fill: "#E0201F", stroke: "none" };

const AXIS_TICK = {
  fontFamily: "var(--font-body)",
  fontSize: 11,
  fill: "rgba(255,255,255,0.4)",
};

const AXIS_LINE = { stroke: "rgba(255,255,255,0.15)" };

export default function TechnicalChart({
  data,
  label,
  height = 240,
}: {
  data: LoadPoint[];
  label: string;
  height?: number;
}) {
  const tooltipStyle = useMemo(
    () => ({
      backgroundColor: "#0a1e38",
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: 0,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "#fff",
    }),
    [],
  );

  return (
    <div className="tech-chart" role="img" aria-label={label}>
      <div className="tech-chart__label" aria-hidden="true">
        {label}
      </div>
      <div className="tech-chart__canvas">
        <ResponsiveContainer width="100%" height={height}>
          <LineChart data={data} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="2 4" stroke="rgba(255,255,255,0.08)" />
            <XAxis
              dataKey="time"
              tick={AXIS_TICK}
              axisLine={AXIS_LINE}
              tickLine={false}
            />
            <YAxis
              domain={[0, 110]}
              tickFormatter={(value: number) => `${value}%`}
              tick={AXIS_TICK}
              axisLine={AXIS_LINE}
              tickLine={false}
            />
            <Tooltip
              contentStyle={tooltipStyle}
              formatter={(value) => [`${value}%`, "Load"]}
            />
            <ReferenceLine
              y={100}
              stroke="#E0201F"
              strokeDasharray="4 4"
              strokeWidth={1.5}
              label={REFERENCE_LABEL}
            />
            <Line
              type="stepAfter"
              dataKey="load"
              stroke="#fff"
              strokeWidth={2}
              dot={false}
              activeDot={ACTIVE_DOT}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
