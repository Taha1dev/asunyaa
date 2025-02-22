import { redirect } from 'next/navigation';

export default function LangPage({ params }: { params: { lang: string } }) {
  console.log('params is', params)
  redirect(`/${params.lang}/home`);
}