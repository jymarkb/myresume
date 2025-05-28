import { AnimateType, OptionType } from "@/lib/utils";

const ObserveWrapper = ({
  target,
  options,
  animate,
}: {
  target: NodeListOf<Element>;
  options: OptionType;
  animate: (args: AnimateType) => void;
}) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target;
      animate({ target, entry });
    });
  }, options);

  target.forEach((el) => {
    observer.observe(el);
  });
};

export default ObserveWrapper;
