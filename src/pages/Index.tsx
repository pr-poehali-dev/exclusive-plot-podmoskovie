import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

export default function Index() {
  const features = [
    {
      icon: "Crown",
      title: "165 соток",
      description: "Уникальная площадь для ближнего Подмосковья"
    },
    {
      icon: "MapPin",
      title: "25 км от МКАД",
      description: "Отличная транспортная доступность"
    },
    {
      icon: "Waves",
      title: "Берег реки Рожайка",
      description: "Собственный выход к воде"
    },
    {
      icon: "Shield",
      title: "Элитное окружение",
      description: "Резиденция Президента в 500м"
    },
    {
      icon: "FileCheck",
      title: "Юридическая чистота",
      description: "Земли населенных пунктов, ИЖС"
    },
    {
      icon: "Zap",
      title: "Коммуникации",
      description: "Электричество, газ по границе"
    }
  ];

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

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/img/19e3a874-81a8-49aa-be13-51ea812c74c3.jpg')`
          }}
        />
        <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Эксклюзивный участок 1.65 га
          </h1>
          <h2 className="font-display text-2xl md:text-3xl mb-4 animate-slide-up">
            в ближнем Подмосковье
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed animate-slide-up">
            Последний такой крупный участок в 20 км от МКАД на берегу реки Рожайка
          </p>
          <Button 
            size="lg" 
            className="bg-gold hover:bg-gold/90 text-white font-semibold px-8 py-6 text-lg animate-fade-in"
          >
            Узнать цену и контакты
          </Button>
        </div>
      </section>

      {/* Unique Value Proposition */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-8">
            Участок, которого больше нет
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Уникальное предложение с полной юридической чистотой и прозрачностью в элитном районе
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="text-center space-y-4">
                  <div className="mx-auto w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-luxury-dark">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reason for Sale */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark mb-8">
            Цель продажи
          </h2>
          <div className="bg-luxury-light p-8 rounded-2xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              Продажа в связи с изменением планов семьи
            </p>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Мы с сожалением расстаемся с этим уникальным участком из-за смены жизненных приоритетов. 
              Надеемся, что новые владельцы смогут в полной мере оценить все преимущества этого особенного места.
            </p>
          </div>
        </div>
      </section>

      {/* Legal Information & House Kits */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark text-center mb-12">
            Юридическая информация и бонусы
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Legal Information */}
            <div className="bg-luxury-light p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Icon name="FileCheck" size={32} className="text-gold mr-3" />
                <h3 className="font-display text-2xl font-semibold text-luxury-dark">
                  Статус земли
                </h3>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg text-luxury-dark mb-2">
                    Категория земель:
                  </h4>
                  <p className="text-gray-700">Земли населенных пунктов</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-lg text-luxury-dark mb-2">
                    Разрешенное использование:
                  </h4>
                  <p className="text-gray-700">Для ведения садоводства с правом постройки жилых зданий</p>
                </div>
                
                <div className="bg-white p-4 rounded-xl border-l-4 border-gold">
                  <h4 className="font-semibold text-lg text-luxury-dark mb-2">
                    Что это значит:
                  </h4>
                  <p className="text-gray-700 leading-relaxed">
                    Вы не покупаете «поле» или участок в садоводстве. Вы приобретаете землю 
                    в исторически сложившейся деревне с полным правом строительства капитального 
                    дома для постоянного проживания с пропиской, подведением всех центральных 
                    коммуникаций (газ, свет) и развитой инфраструктурой.
                  </p>
                </div>
              </div>
            </div>
            
            {/* House Kits Information */}
            <div className="bg-luxury-light p-8 rounded-2xl">
              <div className="flex items-center mb-6">
                <Icon name="Home" size={32} className="text-gold mr-3" />
                <h3 className="font-display text-2xl font-semibold text-luxury-dark">
                  Домокомплекты в подарок
                </h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-xl">
                  <h4 className="font-semibold text-lg text-luxury-dark mb-3">
                    2 готовых домокомплекта
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Каждый для дома площадью 144 м²</li>
                    <li>• Железобетонные плиты заводского производства</li>
                    <li>• Полный набор для возведения жилого дома</li>
                  </ul>
                </div>
                
                <div className="bg-gold/10 p-4 rounded-xl">
                  <h4 className="font-semibold text-lg text-gold mb-2">
                    Экономия времени и денег
                  </h4>
                  <p className="text-gray-700">
                    Домокомплекты значительно ускоряют процесс строительства 
                    и экономят ваши средства на закупке материалов
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-2xl font-bold text-luxury-dark">
                    288 м² жилой площади
                  </p>
                  <p className="text-gray-600">готовых к строительству</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Price-Quality Value */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-luxury-dark text-center mb-12">
            Уникальное соотношение цены и качества
          </h2>
          
          <div className="bg-gradient-to-r from-gold/10 to-luxury-light p-8 rounded-3xl mb-12">
            <div className="text-center mb-8">
              <p className="text-2xl font-bold text-luxury-dark mb-2">
                Самая низкая стоимость за сотку в ближнем Подмосковье
              </p>
              <p className="text-lg text-gray-700">
                при таких характеристиках участка
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">165</div>
                <p className="text-gray-700">соток площади</p>
                <p className="text-sm text-gray-500 mt-2">Редкость для близкого расстояния от Москвы</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-gold mb-2">25</div>
                <p className="text-gray-700">км от МКАД</p>
                <p className="text-sm text-gray-500 mt-2">Отличная транспортная доступность</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl text-center">
                <Icon name="Zap" size={32} className="text-gold mx-auto mb-2" />
                <p className="text-gray-700 font-semibold">Коммуникации</p>
                <p className="text-sm text-gray-500 mt-2">Газ и электричество по границе</p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl text-center">
                <Icon name="Crown" size={32} className="text-gold mx-auto mb-2" />
                <p className="text-gray-700 font-semibold">Элитная локация</p>
                <p className="text-sm text-gray-500 mt-2">Рядом с резиденцией Президента</p>
              </div>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-luxury-light p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-semibold mb-6 text-luxury-dark flex items-center">
                <Icon name="TrendingDown" size={28} className="text-gold mr-3" />
                Почему цена самая низкая?
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Прямая продажа от собственника без посредников</li>
                <li>• Срочная продажа по семейным обстоятельствам</li>
                <li>• Не требуется дополнительных вложений в оформление</li>
                <li>• Участок полностью готов к строительству</li>
              </ul>
            </div>
            
            <div className="bg-luxury-light p-8 rounded-2xl">
              <h3 className="font-display text-2xl font-semibold mb-6 text-luxury-dark flex items-center">
                <Icon name="Target" size={28} className="text-gold mr-3" />
                Что вы получаете
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Уникальную площадь 165 соток в элитном районе</li>
                <li>• Берег реки Рожайка с собственным выходом к воде</li>
                <li>• 2 домокомплекта на 288 м² жилой площади</li>
                <li>• Готовые коммуникации и развитую инфраструктуру</li>
                <li>• Максимальную приватность и безопасность</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="bg-gold/20 p-8 rounded-2xl inline-block">
              <p className="text-xl font-semibold text-luxury-dark mb-2">
                Аналогичные предложения в 2-3 раза дороже
              </p>
              <p className="text-gray-700">
                при меньшей площади и худшем расположении
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
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



      {/* Call to Action */}
      <section className="py-20 px-4 bg-luxury-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            Это последний участок такой площади в ближнем Подмосковье
          </h2>
          <p className="text-xl mb-12 opacity-90">
            Цена обсуждается только при серьезной заинтересованности. 
            Для получения подробной презентации и просмотра свяжитесь с нами.
          </p>
          
          <Card className="p-8 max-w-2xl mx-auto">
            <CardContent className="space-y-6">
              <h3 className="font-display text-2xl font-semibold text-luxury-dark">
                Получить консультацию
              </h3>
              <div className="space-y-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="h-12"
                />
                <Input 
                  placeholder="Номер телефона" 
                  className="h-12"
                />
                <Input 
                  placeholder="Email"
                  className="h-12"
                />
                <Textarea 
                  placeholder="Сообщение (необязательно)"
                  rows={3}
                />
                <Button className="w-full bg-gold hover:bg-gold/90 text-white h-12 text-lg">
                  Отправить заявку
                </Button>
              </div>
              <p className="text-sm text-gray-500">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12">
            <p className="text-2xl font-semibold mb-2">Контактный телефон:</p>
            <a href="tel:+79032001590" className="text-3xl font-bold text-gold hover:text-gold/80">
              +7 (903) 200-15-90
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-lg mb-4">
            © 2024 Эксклюзивная недвижимость
          </p>
          <p className="text-gray-400">
            Все права защищены. Политика конфиденциальности.
          </p>
        </div>
      </footer>
    </div>
  );
}