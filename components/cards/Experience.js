import Card from "../ui/Card";
import Timeline, { TimelineItem } from "../ui/Timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        {experienceData.map((experience, i) => (
          <TimelineItem
            key={i}
            date={experience.date}
            title={experience.title}
            subTitle={experience.subTitle}
            link={experience.link}
            tag={experience.tag}
          />
        ))}
      </Timeline>
    </Card>
  );
}

const experienceData = [
  {
    date: "2023 - Now",
    title: "Learn NextJs",
  },
  {
    date: "2022 - 2023",
    title: "Learn React",
    subTitle: "Github",
    link: "https://github.com/0AmirKhan0",
    tag: "Remote",
  },
  {
    date: "2022 - 2022",
    title: "Join to the Js academy",
  },
  {
    date: "2022 - 2022",
    title: "Crash Html and Css",
  },
];
