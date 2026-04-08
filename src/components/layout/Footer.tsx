import { CONTACT } from '../../config/contact';

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 max-w-7xl mx-auto border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-[10px] text-zinc-600 font-bold tracking-[0.2em] uppercase">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12 text-center md:text-left">
        <p>© 2026 MIGUEL MARTINS — TODOS OS DIREITOS RESERVADOS.</p>
        <p className="text-zinc-700">{CONTACT.location}</p>
      </div>
      <div className="flex gap-8 md:gap-12">
        <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
        <a href="#" className="hover:text-white transition-colors">TERMOS</a>
      </div>
    </footer>
  );
}
