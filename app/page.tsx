import { Welcome, About, Experience, Work, Commitment, Contact } from '@components';

export default async function Page() {
  return (
    <>
      <main>
        <Welcome />
        <About />
        <Experience />
        <Work />
        <Commitment />
        <Contact />
      </main>
    </>
  );
}
