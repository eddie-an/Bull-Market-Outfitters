export default function LoadingSpinner({ label = "Loading products…" }) {
  return (
    <div className="flex min-h-[200px] flex-col items-center justify-center gap-4 rounded-2xl bg-parchment/50 p-8">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-brand-200 border-t-brand-700" />
      <span className="text-sm font-medium text-stone-600">{label}</span>
    </div>
  );
}
