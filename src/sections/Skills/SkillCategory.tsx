import type { IconType } from "react-icons";
import Card from "../../components/ui/Card";

type SkillCategoryProps = {
  title: string;
  skills: string[];
  Icon: IconType;
};

function SkillCategory({
  title,
  skills,
  Icon,
}: SkillCategoryProps) {
  return (
    <Card className="h-full">
      <div className="flex items-center gap-4">
        <Icon className="text-4xl text-blue-500" />

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>
      </div>

      <ul className="mt-6 space-y-3">
        {skills.map((skill) => (
          <li
            key={skill}
            className="flex items-center gap-2 text-slate-300"
          >
            <span className="text-blue-500">✓</span>

            {skill}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default SkillCategory;