import type { IconType } from "react-icons";
import { motion } from "framer-motion";
import Card from "../../components/ui/Card";

type Props = {
  title: string;
  description: string;
  Icon: IconType;
};

function ServiceCard({
  title,
  description,
  Icon,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
    >
      <Card className="h-full">
        <Icon className="mb-5 text-5xl text-blue-500" />

        <h3 className="text-2xl font-semibold text-white">
          {title}
        </h3>

        <p className="mt-4 leading-7 text-slate-400">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;