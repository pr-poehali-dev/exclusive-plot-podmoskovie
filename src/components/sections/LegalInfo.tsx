import Icon from "@/components/ui/icon";

export default function LegalInfo() {
  return (
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
  );
}