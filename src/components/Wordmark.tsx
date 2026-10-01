export default function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-display text-[0.95rem] tracking-[0.3em] text-ink uppercase sm:text-[1.05rem] sm:tracking-[0.34em]">
        Mechas
      </span>
      <span className="mt-1 flex items-center gap-2">
        <span aria-hidden="true" className="h-px w-3.5 bg-gold/70" />
        <span className="eyebrow text-[0.55rem] text-gold sm:text-[0.6rem]">
          Rápidas
        </span>
      </span>
    </span>
  );
}