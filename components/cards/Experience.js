import Card from "../ui/Card";
import Timeline, { TimelineItem } from "../ui/Timeline";

export default function ExperienceCard() {
  return (
    <Card title="My Experience">
      <Timeline>
        <TimelineItem
          date="2023 - Now"
          title="Learn NextJs"
          subTitle="Github"
          link="/https://github.com/0AmirKhan0"
          tag="Remote"
        />
        <TimelineItem
          date="2022 - 2023"
          title="Learn React"
          subTitle="Github"
          link="/https://github.com/0AmirKhan0"
          tag="Remote"
        />
      </Timeline>
    </Card>
  );
}
