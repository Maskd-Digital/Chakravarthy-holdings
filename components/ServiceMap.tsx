import { ArrowCircle } from "./ArrowCircle";
import { Reveal } from "./Reveal";

export type Branch = {
  /** Label lines, top to bottom */
  label: string[];
  /** Where the line ends (the dot), in diagram units */
  dot: [number, number];
  /** x of the vertical segment that rises out of / drops into the title */
  elbowX: number;
  /** y where the vertical segment meets the title */
  stemY: number;
  /** Nudge the label up/down relative to the dot */
  labelOffsetY?: number;
};

type Props = {
  id: string;
  title: string;
  /** Centre of the title, in diagram units */
  titleAt: [number, number];
  branches: Branch[];
  cta: { label: string; href: string; external?: boolean };
};

// Diagram canvas. Everything inside the SVG is laid out in these units and
// scales with the card, so the composition stays locked at any width.
const W = 1250;
const Y0 = 60;
const H = 480;

export function ServiceMap({ id, title, titleAt, branches, cta }: Props) {
  const [tx, ty] = titleAt;

  return (
    <Reveal as="article" className="panel service" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="service-title-mobile">
        {title}
      </h2>

      <svg
        className="service-map"
        viewBox={`0 ${Y0} ${W} ${H}`}
        aria-hidden="true"
        focusable="false"
      >
        {branches.map((b, i) => {
          const [dx, dy] = b.dot;
          const goesRight = dx > b.elbowX;
          const lineH = 31;
          const firstBaseline = dy + 8 + (b.labelOffsetY ?? 0);
          return (
            <g key={b.label.join(" ")} style={{ "--i": i } as React.CSSProperties}>
              <path
                className="branch-line"
                d={`M${b.elbowX} ${b.stemY} V${dy} H${dx}`}
                pathLength={1}
              />
              <circle className="branch-dot" cx={dx} cy={dy} r={6.5} />
              <text
                className="branch-label"
                x={goesRight ? dx + 24 : dx - 26}
                y={firstBaseline}
                textAnchor={goesRight ? "start" : "end"}
              >
                {b.label.map((line, li) => (
                  <tspan key={line} x={goesRight ? dx + 24 : dx - 26} dy={li === 0 ? 0 : lineH}>
                    {line}
                  </tspan>
                ))}
              </text>
            </g>
          );
        })}
        <text className="service-title" x={tx} y={ty + 19} textAnchor="middle">
          {title}
        </text>
      </svg>

      {/* Same services as a plain list: shown on small screens, read by screen readers everywhere */}
      <ul className="service-list">
        {branches.map((b) => (
          <li key={b.label.join(" ")}>{b.label.join(" ")}</li>
        ))}
      </ul>

      <a
        className="cta"
        href={cta.href}
        {...(cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        <span>{cta.label}</span>
        <ArrowCircle />
      </a>
    </Reveal>
  );
}
