import { Welcome, About, Experience, Work, Contact } from '@components';

export default async function Page() {
  return (
    <>
      <main>
        <Welcome />
        <About />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}
