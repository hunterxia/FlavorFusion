const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-blue-500"> Cooking up some deliciousness... </p>
    </div>
  );
};

export default LoadingSpinner;
