import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Pricing Title',
  description: 'SEO Pricing Description',
  keywords: ['seo', 'next-js', 'pricing', 'Danilo Chávez', 'información'],
}

export default function PricingPage() {
  return (
    <>
      <span className='text-5xl'>Pricing Page</span>
    </>
  )
}