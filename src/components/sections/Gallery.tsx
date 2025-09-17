const galleryImages = [
  {
    src: "/img/19e3a874-81a8-49aa-be13-51ea812c74c3.jpg",
    alt: "Панорамный вид на участок"
  },
  {
    src: "https://cdn.poehali.dev/files/bc137528-5fe0-4d74-b720-64f01a9a07a5.jpeg",
    alt: "Зеленые луга участка с естественной растительностью"
  },
  {
    src: "https://cdn.poehali.dev/files/560e5b01-ee05-480b-a3f9-1913235d14af.jpeg",
    alt: "Река Рожайка в окружении вековых деревьев"
  },
  {
    src: "https://cdn.poehali.dev/files/eec61941-d343-4ab0-b2c7-092ba354af0e.jpeg",
    alt: "Природные просторы участка с лесным массивом"
  },
  {
    src: "https://cdn.poehali.dev/files/7d8a18fa-3595-4177-9b4e-f3b0e86d3c76.jpeg",
    alt: "Открытые поля участка с деревенским окружением"
  }
];

export default function Gallery() {
  return (
    <section className="py-20 px-4 bg-luxury-light">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark text-center mb-12">
          Галерея участка
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div key={index} className="aspect-square overflow-hidden rounded-lg">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}