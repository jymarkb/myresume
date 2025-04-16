const TestForm = ({ title, sentence }: { title: string; sentence: string }) => {
  return (
    <div className="flex gap-4 p-4 m-8">
      <h1>{title}</h1>
      <p className="max-w-sm">{sentence}</p>
    </div>
  );
};

export default TestForm;
