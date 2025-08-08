const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Calmory. Všechna práva vyhrazena.</p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="text-muted-foreground hover:text-foreground">Zásady ochrany osobních údajů</a>
          <a href="#" className="text-muted-foreground hover:text-foreground">Podmínky</a>
          <a href="mailto:hello@calmoryapp.com" className="text-muted-foreground hover:text-foreground">Kontakt</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
