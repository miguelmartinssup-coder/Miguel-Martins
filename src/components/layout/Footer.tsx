import { CONTACT } from '../../config/contact';

export default function Footer() {
  return (
    <footer className="py-12 md:py-20 px-6 md:px-24 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-12 text-[9px] md:text-[10px] text-zinc-600 font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-center md:text-left">
      <div className="flex flex-col md:flex-row gap-4 md:gap-12">
        <p>© 2026 MIGUEL MARTINS — TODOS OS DIREITOS RESERVADOS.</p>
        <p>{CONTACT.location}</p>
      </div>
      <div className="flex gap-8 md:gap-12">
        <span className="text-zinc-600">POLÍTICA DE PRIVACIDADE</span>
        <span className="text-zinc-600">TERMOS DE USO</span>
      </div>
    </footer>
  );
}
