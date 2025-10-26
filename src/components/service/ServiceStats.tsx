interface ServiceStatsProps {
  price: string;
  duration: string;
  warranty: string;
}

export default function ServiceStats({ price, duration, warranty }: ServiceStatsProps) {
  return (
    <section className="py-12 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{price}</div>
            <div className="text-sm opacity-90">Стоимость</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{duration}</div>
            <div className="text-sm opacity-90">Сроки работ</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">{warranty}</div>
            <div className="text-sm opacity-90">Гарантия</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Поддержка</div>
          </div>
        </div>
      </div>
    </section>
  );
}
