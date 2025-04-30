import { techButtons } from "@/lib/static-data";

const TechButton = ({
  selectedId,
  onSelectBtn,
}: {
  selectedId: number;
  onSelectBtn: (_id: number) => void;
}) => {
  return (
    <>
      {techButtons.map((item, index) => {
        return (
          <button
            key={index}
            className={`border-b-2 pb-2 ${selectedId === index ? "active" : ""} border-dashed text-white`}
            onClick={() => onSelectBtn(index)}
          >
            {item.name}
          </button>
        );
      })}
    </>
  );
};

export default TechButton;
