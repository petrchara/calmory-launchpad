import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <section id="faq" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Časté otázky</h2>
        </div>
          <div className="max-w-2xl mx-auto space-y-10">
            {/* Sekce 1 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Vše o Calmory</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="o-1">
                  <AccordionTrigger>Co je Calmory a pro koho je určena?</AccordionTrigger>
                  <AccordionContent>
                    Calmory je terapeutická aplikace pro zklidnění mysli, zvládání stresu a lepší spánek. Je vhodná pro každého, kdo chce
                    jednoduché a krátké postupy do běžného dne.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="o-2">
                  <AccordionTrigger>Nahrazuje Calmory odbornou terapii?</AccordionTrigger>
                  <AccordionContent>
                    Nenahrazuje, ale doplňuje ji. Nabízí nástroje inspirované ověřenými postupy, které můžete používat kdykoli během dne.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="o-3">
                  <AccordionTrigger>Jak často mám cvičit?</AccordionTrigger>
                  <AccordionContent>
                    Ideální jsou krátká cvičení do 5 minut denně. Důležitá je pravidelnost – i pár minut denně přináší změnu.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Sekce 2 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Jaký obsah v aplikaci najdu</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="c-1">
                  <AccordionTrigger>Jaké formáty obsahu Calmory nabízí?</AccordionTrigger>
                  <AccordionContent>
                    Najdete zde krátká audio cvičení dýchání, meditace, afirmace, hudbu pro zklidnění a příběhy na usínání.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="c-2">
                  <AccordionTrigger>Je obsah rozdělen podle denních situací?</AccordionTrigger>
                  <AccordionContent>
                    Ano. Obsah je řazen do fází dne – Ranní rutina, Cesta do práce/školy, Polední přestávka, Večerní klid a Večerní rutina s dětmi.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="c-3">
                  <AccordionTrigger>Vzniká obsah ve spolupráci s odborníky?</AccordionTrigger>
                  <AccordionContent>
                    Ano, spolupracujeme s terapeuty, kouči a hudebníky, aby byl obsah bezpečný, smysluplný a účinný.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Sekce 3 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Stažení a ceny</h3>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="s-1">
                  <AccordionTrigger>Kdy a kde bude aplikace dostupná?</AccordionTrigger>
                  <AccordionContent>
                    Spuštění chystáme brzy pro iOS i Android. Sledujte novinky nebo se přidejte na čekací listinu.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="s-2">
                  <AccordionTrigger>Kolik Calmory stojí?</AccordionTrigger>
                  <AccordionContent>
                    Plánujeme bezplatnou verzi s vybraným obsahem a placené členství Calmory Premium s rozšířenými funkcemi a knihovnou.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="s-3">
                  <AccordionTrigger>Jak se dostanu mezi první uživatele?</AccordionTrigger>
                  <AccordionContent>
                    Přidejte se na čekací listinu – dáme vám vědět jako prvním a získáte i bonusové tipy do e‑mailu.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
      </div>
    </section>
  );
};

export default FAQ;
