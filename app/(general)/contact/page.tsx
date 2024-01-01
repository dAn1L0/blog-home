import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'SEO Contact',
  description: 'SEO Contact',
  keywords: ['seo', 'next-js', 'contact', 'Danilo Chávez', 'información'],
};

export default function ContactPage() {
  return (
    <>
      <span className='text-5xl'>Contact Page</span>
    </>
  )
}