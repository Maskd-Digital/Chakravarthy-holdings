import { ServiceMap } from "@/components/ServiceMap";
import { site } from "@/lib/site";

const headline = [
  "Empowering businesses with",
  "expert consultancy and holistic",
  "digital solutions",
];

export default function Home() {
  return (
    <main className="frame">
      <section className="panel hero" aria-labelledby="hero-title">
        <h1 id="hero-title" className="hero-title">
          {headline.map((line, i) => (
            <span className="line" key={line}>
              <span style={{ "--i": i } as React.CSSProperties}>{line}</span>
            </span>
          ))}
        </h1>
      </section>

      <section className="panel brand" aria-label={site.name}>
        <div className="seal">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="seal-script" src="/logo.svg" alt={site.name} width={1599} height={946} />
        </div>
      </section>

      <div className="services">
        <ServiceMap
          id="maskd"
          title="Mask’d Digital"
          titleAt={[650, 263]}
          branches={[
            { label: ["Web development"], dot: [327, 168], elbowX: 507, stemY: 248 },
            { label: ["Mobile app", "development"], dot: [792, 116], elbowX: 618, stemY: 258 },
            {
              label: ["Branding", "strategy"],
              dot: [870, 363],
              elbowX: 695,
              stemY: 278,
              labelOffsetY: -17,
            },
            { label: ["Brand identity"], dot: [403, 460], elbowX: 578, stemY: 278 },
          ]}
          cta={{ label: "Learn more", href: site.maskdUrl, external: true }}
        />

        <ServiceMap
          id="consulting"
          title="Chakravarthy Consulting"
          titleAt={[650, 322]}
          branches={[
            { label: ["CRM implementation"], dot: [445, 175], elbowX: 625, stemY: 303 },
            { label: ["Factory digitization"], dot: [946, 175], elbowX: 767, stemY: 313 },
            { label: ["Development", "resources"], dot: [845, 429], elbowX: 666, stemY: 343 },
            { label: ["Advanced analytics"], dot: [383, 472], elbowX: 563, stemY: 343 },
          ]}
          cta={{ label: "Book a call", href: site.bookCallUrl }}
        />
      </div>
    </main>
  );
}
