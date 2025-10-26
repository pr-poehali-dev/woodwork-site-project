import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import ServiceHero from '@/components/service/ServiceHero';
import ServiceStats from '@/components/service/ServiceStats';
import ServiceAbout from '@/components/service/ServiceAbout';
import ServiceBenefits from '@/components/service/ServiceBenefits';
import ServiceProcess from '@/components/service/ServiceProcess';
import ServiceGallery from '@/components/service/ServiceGallery';
import ServiceMaterials from '@/components/service/ServiceMaterials';
import ServiceFAQ from '@/components/service/ServiceFAQ';
import ServiceCTA from '@/components/service/ServiceCTA';
import { servicesData } from '@/components/service/serviceData';

export default function ServicePage() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? servicesData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Услуга не найдена</h1>
            <Button asChild>
              <a href="/">Вернуться на главную</a>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <ServiceHero 
          title={service.title}
          description={service.description}
          image={service.image}
        />

        <ServiceStats 
          price={service.price}
          duration={service.duration}
          warranty={service.warranty}
        />

        <ServiceAbout 
          fullContent={service.fullContent}
          features={service.features}
        />

        <ServiceBenefits benefits={service.benefits} />

        <ServiceProcess process={service.process} />

        <ServiceGallery gallery={service.gallery} />

        <ServiceMaterials materials={service.materials} />

        <ServiceFAQ faq={service.faq} />

        <ServiceCTA />

        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
