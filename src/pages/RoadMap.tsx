import { useContext } from 'react';
import LanguageSelect from '../components/languageSelect/LanguageSelect';
import LevelCardWrapper from '../components/roadmap/LevelCardWrapper';
import { LanguageContext } from '../context/LanguageContext';

const RoadMap = () => {

  const { t } = useContext(LanguageContext)
  return (
    <div className="flex w-full  flex-shrink-0 flex-col">
      {/* hangi aşamadasın */}
      <section className="flex flex-col mt-5">
        <h2 className="text-sm md:text-lg font-bold">
          {t?.("roadMap.title")}
        </h2>
        <p className="mb-10">
          <>{t?.("roadMap.description")}</>
        </p>
        <LanguageSelect />
        <LevelCardWrapper />
      </section>
    </div>
  );
};

export default RoadMap;
