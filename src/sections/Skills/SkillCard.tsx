import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import Card from "../../components/ui/Card";

type SkillCardProps = {
  title: string;
  level: string;
  Icon: IconType;
};

function SkillCard({
  title,
  level,
  Icon,
}: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Card>
        <Icon className="mb-4 text-5xl text-blue-500" />

        <h3 className="text-xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-2 text-slate-400">
          {level}
        </p>
      </Card>
    </motion.div>
  );
}

export default SkillCard;