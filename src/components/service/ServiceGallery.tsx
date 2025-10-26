interface ServiceGalleryProps {
  gallery: string[];
}

export default function ServiceGallery({ gallery }: ServiceGalleryProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Галерея работ</h2>
          <p className="text-xl text-muted-foreground">Примеры наших проектов</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {gallery.map((image, index) => (
            <div key={index} className="relative overflow-hidden rounded-2xl shadow-xl group">
              <div className="aspect-[4/3]">
                <img 
                  src={image}
                  alt={`Проект ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-lg font-semibold">Проект #{index + 1}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
