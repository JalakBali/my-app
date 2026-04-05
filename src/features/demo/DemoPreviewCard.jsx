export default function DemoPreviewCard() {
  return (
    <div className="w-72 rounded-2xl border border-orange-500/30 bg-zinc-900 p-6 shadow-lg shadow-orange-500/5 flex flex-col gap-4">

      {/* Header */}
      <div>
        <p className="text-xs text-orange-400 uppercase tracking-widest font-medium">Piutang</p>
        <p className="text-white font-semibold text-base mt-1">PT ABC</p>
      </div>

      <div className="border-t border-zinc-800" />

      {/* Rows */}
      <div className="flex flex-col gap-3 text-sm">
        <div className="flex justify-between">
          <span className="text-zinc-500">Invoice</span>
          <span className="text-zinc-100 font-medium">1.200.000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Paid</span>
          <span className="text-green-400 font-medium">800.000</span>
        </div>
        <div className="flex justify-between">
          <span className="text-zinc-500">Remaining</span>
          <span className="text-orange-400 font-medium">400.000</span>
        </div>
      </div>

      <div className="border-t border-zinc-800" />

      {/* Button */}
      <button className="w-full py-2 rounded-lg border border-orange-500/40 text-orange-400 text-sm hover:bg-orange-500/10 transition-all">
        Add Payment
      </button>

    </div>
  );
}