import { AnimateType, OptionType } from "@/lib/utils";

const MonoObserver = ({ target,
    options,
    animate,
}: {
    target: HTMLElement;
    options: OptionType;
    animate: (args: AnimateType) => void;
}) => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // const element = entry.target;
            animate({ target, entry });
        });
    }, options);

    observer.observe(target);
};

export default MonoObserver;