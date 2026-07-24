import Card from "../../components/ui/Card";
import { FaGraduationCap } from "react-icons/fa";

type Props = {
  degree: string;
  institution: string;
  description: string;
};

function EducationCard({
  degree,
  institution,
  description,
}: Props) {
  return (
    <Card className="group h-full transition-all duration-300 hover:-translate-y-2">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-500 transition group-hover:bg-blue-500 group-hover:text-white">
        <FaGraduationCap size={28} />
      </div>

      <h3 className="text-2xl font-semibold text-white">
        {degree}
      </h3>

      <p className="mt-2 text-lg font-medium text-blue-400">
        {institution}
      </p>

      <p className="mt-5 leading-7 text-slate-400">
        {description}
      </p>
    </Card>
  );
}

export default EducationCard;