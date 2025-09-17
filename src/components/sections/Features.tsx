import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

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

export default function Features() {
  return (
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
  );
}