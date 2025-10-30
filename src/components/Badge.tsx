import { ReactNode } from 'react'

export default function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-black/5 dark:bg-white/10 px-2 py-1 text-xs font-medium">
      {children}
    </span>
  )
}

