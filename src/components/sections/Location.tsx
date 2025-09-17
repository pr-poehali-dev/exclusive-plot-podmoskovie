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

      {/* Exclusivity & Neighborhood */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-8">
            Окружение, которое говорит само за себя
          </h2>
          <div className="bg-luxury-light p-8 rounded-2xl max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Участок расположен в уникальном месте с высочайшим уровнем безопасности и приватности
            </p>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">
                  Престижное соседство
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Резиденция главы государства в 500м</li>
                  <li>• Представители крупного бизнеса</li>
                  <li>• Собственник аэропорта Домодедово</li>
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl font-semibold mb-4 text-gold">
                  Безопасность и престиж
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• Охраняемая территория</li>
                  <li>• Максимальная приватность</li>
                  <li>• Эксклюзивная локация</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}