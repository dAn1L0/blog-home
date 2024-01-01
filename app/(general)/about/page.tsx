import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'SEO About Title',
  description: 'SEO About Description',
  keywords: ['seo', 'next-js', 'about', 'Danilo Chávez', 'información'],
};

export default function AboutPage() {
  return (
    // <main className='flex flex-col items-center p-24'>
    //   <span className='text-lg'>Hola mundo</span>
    //   <span className='text-5xl'>About Page</span>
    // </main>
    <>
      <span className='text-5xl'>About Page</span>
    </>
  )
}