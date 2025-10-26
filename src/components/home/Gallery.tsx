interface GalleryProps {
  gallery: string[];
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши работы</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Примеры выполненных проектов по защите и отделке деревянных домов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl h-80">
              <img 
                src={image} 
                alt={`Проект ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
