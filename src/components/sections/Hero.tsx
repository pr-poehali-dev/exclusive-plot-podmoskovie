import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
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
          onClick={() => {
            const phoneNumber = '+79261234567';
            const message = 'Здравствуйте! Интересует участок 1.65 га в Подмосковье. Можете сообщить цену и контакты?';
            const whatsappUrl = `https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
          }}
        >
          Узнать цену и контакты
        </Button>
      </div>
    </section>
  );
}