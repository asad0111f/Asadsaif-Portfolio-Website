import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Variant = 'primary' | 'ghost'

export default function Button({ variant = 'primary', className, ...props }: ComponentProps<'button'> & { variant?: Variant }) {
  const styles = variant === 'primary' ? 'btn-primary' : 'btn-ghost'
  return <button {...props} className={twMerge(styles, className)} />
}

