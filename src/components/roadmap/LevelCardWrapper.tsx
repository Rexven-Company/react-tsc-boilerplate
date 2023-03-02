import LevelCard from './LevelCard';

const steps = [
  { id: '1', name: 'Eğitimlere Başladım', href: '#', status: 'complete' },
  {
    id: '2',
    name: 'Amazon/Etsy Hesabımı Açtım',
    href: '#',
    status: 'current',
  },
  { id: '3', name: 'İlk Satışımı Yaptım', href: '#', status: 'upcoming' },
  { id: '4', name: '1000$ Satışa Ulaştım', href: '#', status: 'upcoming' },
  { id: '5', name: '10.000$ Satışa Ulaştım', href: '#', status: 'upcoming' },
];

export default function LevelCardWrapper() {
  return (
    <nav className="w-100 mb-10 shadow-lg lg:rounded-xl" aria-label="Progress">
      <ol
        role="list"
        className="overflow-hidden rounded-md  lg:flex  lg:justify-between lg:items-center lg:bg-lightGray "
      >
        {steps.map((step, stepIdx) => (
          <LevelCard
            key={step.id}
            step={step}
            stepIdx={stepIdx}
            steps={steps}
          />
        ))}
      </ol>
    </nav>
  );
}
