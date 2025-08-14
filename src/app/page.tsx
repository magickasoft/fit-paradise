// import { redirect } from 'next/navigation'
import { Suspense } from 'react'
import LocaleRedirect from '@/components/LocaleRedirect'

export default function RootPage() {
  // redirect('/ru')
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LocaleRedirect />
    </Suspense>
  )
}
