import { stackData } from "@/data/Stack";
import Card from "../ui/Card";
import Tooltip from "../ui/Tooltip";

export default function StackCard() {
  return (
    <Card title="My Tach stack">
      <div className="flex flex-col gap-6 mt-2">
        {stackData.map((stack, i) => (
          <div
            key={i}
            className="grid items-center gap-[90px]"
            style={{ gridTemplateColumns: "50px 1fr" }}
          >
            {/* stack group name */}
            <div className="h-auto flex-none break-words whitespace-pre">
              <p className="text-secondary-foreground">{stack.title}</p>
            </div>
            {/* toltip */}
            <div className="flex gap-4 ">
              {stack.stack.map((t) => (
                <Tooltip
                  title={t.title}
                  image={t.image}
                  bgColor={t.bgColor}
                  key={t.id}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
