import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function Location() {
  return (
    <>
      {/* Location & Map */}
      <section className="py-20 px-4 bg-luxury-light">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark text-center mb-12">
            Расположение участка
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-display text-2xl font-semibold mb-6 text-gold">
                Координаты: 55.357583, 37.741460
              </h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-display text-xl font-semibold mb-3 text-luxury-dark">
                    Транспортная доступность
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• 20 км от МКАД по Каширскому шоссе</li>
                    <li>• Удобный подъезд в любое время года</li>
                    <li>• Асфальтированная дорога до участка</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-display text-xl font-semibold mb-3 text-luxury-dark">
                    Инфраструктура
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Электричество по границе участка</li>
                    <li>• Газификация (технические условия)</li>
                    <li>• Водоснабжение от скважины</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-lg">
              <div className="aspect-video bg-gray-100 rounded-xl flex items-center justify-center mb-4">
                <div className="text-center">
                  <Icon name="MapPin" size={48} className="text-gold mx-auto mb-2" />
                  <p className="text-lg font-semibold text-luxury-dark">
                    Интерактивная карта
                  </p>
                  <p className="text-gold font-medium">
                    55.357583, 37.741460
                  </p>
                </div>
              </div>
              <div className="text-center">
                <Button 
                  className="bg-gold hover:bg-gold/90 text-white"
                  onClick={() => window.open(`https://maps.yandex.ru/?pt=37.741460,55.357583&z=15&l=map`, '_blank')}
                >
                  <Icon name="ExternalLink" size={16} className="mr-2" />
                  Открыть в Яндекс.Картах
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}