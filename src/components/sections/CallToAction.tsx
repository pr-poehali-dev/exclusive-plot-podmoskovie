import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = () => {
    const phoneNumber = '+79032001590';
    const message = `Заявка с сайта:
Имя: ${formData.name}
Телефон: ${formData.phone}
Email: ${formData.email}
Сообщение: ${formData.message || 'Интересует участок 1.65 га в Подмосковье'}`;
    
    const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
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
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
                <Input 
                  placeholder="Номер телефона" 
                  className="h-12"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
                <Input 
                  placeholder="Email"
                  className="h-12"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
                <Textarea 
                  placeholder="Сообщение (необязательно)"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                />
                <Button 
                  className="w-full bg-gold hover:bg-gold/90 text-white h-12 text-lg"
                  onClick={handleSubmit}
                >
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
    </>
  );
}