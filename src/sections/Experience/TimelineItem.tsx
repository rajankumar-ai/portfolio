import Card from "../../components/ui/Card";
import type { Experience } from "../../types";

type Props = {
  item: Experience;
};

function TimelineItem({ item }: Props) {
  return (
    <div className="relative pl-12">
      <div className="absolute left-0 top-6 flex h-5 w-5 items-center justify-center rounded-full border-4 border-slate-950 bg-blue-500"></div>

      <Card className="hover:-translate-y-1 transition-all duration-300">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
          {item.duration}
        </p>

        <h3 className="mt-3 text-2xl font-bold text-white">
          {item.role}
        </h3>

        <h4 className="mt-2 text-lg font-medium text-slate-300">
          {item.company}
        </h4>

        <p className="mt-5 leading-7 text-slate-400">
          {item.description}
        </p>
      </Card>
    </div>
  );
}

export default TimelineItem;