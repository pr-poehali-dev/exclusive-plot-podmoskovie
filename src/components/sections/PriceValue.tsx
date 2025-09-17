import Icon from "@/components/ui/icon";

export default function PriceValue() {
  return (
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
  );
}