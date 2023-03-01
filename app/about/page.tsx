'use client';

import Link from 'next/link';
import { event } from 'nextjs-google-analytics';

export default function Home() {
  return (
    <main>
      <h1>About page</h1>
      <Link href="/">Voltar</Link>

      <button
        onClick={() => {
          console.info('sending custom event');
          event('submit_form', { category: 'Contact', label: 'Simbora GA!' });
          console.info('custom event SENT');
        }}
      >
        Custom Event
      </button>
    </main>
  );
}
