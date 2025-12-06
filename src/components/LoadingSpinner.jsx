export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-8">
      <div className="relative">
        <div className="w-12 h-12 rounded-full border-4 border-neutral-800 border-t-primary-500 animate-spin" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
};
