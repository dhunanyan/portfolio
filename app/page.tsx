import {
  Welcome,
  About,
  Experience,
  Work,
  Contact,
  Overlay,
} from '@components';
import {
  getAboutSection,
  getCommonSections,
  getExperienceSection,
} from '@utils/contentful';

export default async function Page() {
  const commonSections = (await getCommonSections()) ?? [];
  const [contact, welcome] = commonSections;
  const about = await getAboutSection();
  const experience = await getExperienceSection();

  return (
    <>
      <main>
        <Welcome data={welcome} />
        <About data={about} />
        <Experience data={experience} />
        <Work />
        <Contact data={contact} />
        <Overlay />
      </main>
    </>
  );
}
