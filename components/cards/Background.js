import Card from "../ui/Card";

export default function BackgroundCard() {
  return (
    <Card className="md:h-full" title="My background">
      <div>
        <p className="leading-[160%] font-medium text-white/[0.4] text-[18px]">
          Originating from a small city, my journey into the world of technology
          began at a young age, driven by a deep curiosity and fascination with
          how things work. Over the past
          <span className="text-white underline px-0.5">two years</span>,
          I&apos;ve honed my skills as
          <span className="text-white underline px-0.5">
            a Front-End Developer
          </span>
          , with a particular focus on React and Next.js. My hands-on experience
          in web development has allowed me to craft responsive and dynamic
          applications that offer seamless user experiences.
          <br />
          Currently, I am{" "}
          <span className="text-white underline px-0.5">
            a student learning the intricacies of Next.js and React.
          </span>
          This learning experience not only enhances my understanding but also
          fuels my passion for progressing in the ever-evolving world of web
          development. With a commitment to continuous learning and a strong
          interest in technology,{" "}
          <span className="text-white underline px-0.5">
            I strive to create web solutions that improve everyday interactions
            and inspire those around me.
          </span>
        </p>
      </div>
    </Card>
  );
}
