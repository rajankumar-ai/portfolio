import Card from "../../components/ui/Card";
import type { Experience } from "../../types";

type Props = {
  item: Experience;
};

function TimelineItem({ item }: Props) {
  return (
    <div className="relative pl-10">
      <div className="absolute left-0 top-2 h-4 w-4 rounded-full bg-blue-500"></div>

      <Card>
        <p className="text-sm text-blue-400">
          {item.duration}
        </p>

        <h3 className="mt-2 text-xl font-bold text-white">
          {item.role}
        </h3>

        <h4 className="mt-1 text-slate-300">
          {item.company}
        </h4>

        <p className="mt-4 text-slate-400">
          {item.description}
        </p>
      </Card>
    </div>
  );
}

export default TimelineItem;