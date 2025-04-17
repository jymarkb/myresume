const TestForm = ({ title, sentence }: { title: string; sentence: string }) => {
  return (
    <div className="flex gap-4 m-4">
      <h1>{title}</h1>
      <p className="max-w-lg">{sentence}</p>
    </div>
  );
};

export default TestForm;
