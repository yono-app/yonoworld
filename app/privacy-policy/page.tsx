import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { SITE_NAME, SUPPORT_EMAIL } from "@/config/site";

const LAST_UPDATED = "January 1, 2026";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Glow Blobs */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-6">
        <div className="mb-8 text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-violet-500/10 text-violet-300 border border-violet-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>🔒 PRIVACY &amp; SECURITY</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">Privacy Policy</h1>
          <p className="text-slate-400 text-xs">Last updated: {LAST_UPDATED}</p>
        </div>

        <div className="space-y-6">
          {/* Intro */}
          <div className="bg-[#12131F]/90 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl p-6 sm:p-8 text-slate-300 text-sm leading-relaxed space-y-3">
            <p>
              This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.
            </p>
            <p>
              We use Your Personal data to provide and improve the Service. By using the Service, You agree to the collection and use of information in accordance with this Privacy Policy.
            </p>
          </div>

          {/* Definitions */}
          <Section title="Interpretation and Definitions">
            <h3 className="font-extrabold text-white mb-2">Definitions</h3>
            <ul className="space-y-2.5">
              <DefItem term="Account">means a unique account created for You to access our Service or parts of our Service.</DefItem>
              <DefItem term="Company">refers to <strong>{SITE_NAME}</strong>.</DefItem>
              <DefItem term="Cookies">are small files placed on Your device by a website.</DefItem>
              <DefItem term="Personal Data">is any information that relates to an identified or identifiable individual.</DefItem>
              <DefItem term="Service">refers to the Website.</DefItem>
            </ul>
          </Section>

          {/* Collecting */}
          <Section title="Collecting and Using Your Personal Data">
            <h3 className="font-extrabold text-white mb-2">Usage Data</h3>
            <p className="mb-3">Usage Data is collected automatically when using the Service.</p>
            <p className="text-slate-300">
              Usage Data may include information such as Your Device&apos;s IP address, browser type, browser version, the pages of our Service that You visit, the time and date of Your visit, and diagnostic data.
            </p>
          </Section>

          {/* Tracking */}
          <Section title="Tracking Technologies and Cookies">
            <p className="mb-4">
              We use Cookies and similar tracking technologies to track activity on Our Service and store certain information to improve user experience.
            </p>
          </Section>

          {/* Contact Box */}
          <div className="bg-gradient-to-r from-violet-900/60 to-indigo-900/60 border border-violet-500/30 rounded-3xl p-6 sm:p-8 text-white backdrop-blur-xl space-y-3">
            <h2 className="font-extrabold text-xl">Have Questions About Privacy?</h2>
            <p className="text-slate-300 text-sm">
              If you have any questions regarding this Privacy Policy or data usage, feel free to reach out via Telegram or Email.
            </p>
            <a
              href={`mailto:${SUPPORT_EMAIL}`}
              className="inline-flex items-center gap-2 bg-white text-slate-950 font-black text-xs uppercase tracking-wider px-5 py-3 rounded-xl hover:bg-slate-200 transition-colors shadow-lg"
            >
              <span>📧 {SUPPORT_EMAIL}</span>
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#12131F]/90 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-6 sm:p-8">
      <h2 className="text-white font-extrabold text-lg mb-3 pb-3 border-b border-white/10">{title}</h2>
      <div className="text-slate-300 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function DefItem({ term, children }: { term: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
      <span><strong className="text-white font-bold">{term}</strong> — {children}</span>
    </li>
  );
}

