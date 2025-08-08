import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Časté otázky</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Pro koho je Calmory určená?</AccordionTrigger>
              <AccordionContent>
                Pro všechny, kdo chtějí lépe zvládat stres, úzkost či zlepšit spánek. Nenahrazuje odbornou terapii.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Jak často bych měl/a cvičit?</AccordionTrigger>
              <AccordionContent>
                Krátká denní cvičení do 5 minut jsou ideální. Důležitá je pravidelnost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Je použití bezpečné pro moje data?</AccordionTrigger>
              <AccordionContent>
                Ano. Ochrana soukromí je pro nás priorita. Osobní údaje nesdílíme a dodržujeme GDPR.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
