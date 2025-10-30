export default function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-8 text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{subtitle}</p>
      )}
    </div>
  )
}

