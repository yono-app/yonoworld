import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B0F] text-slate-100 relative overflow-hidden font-sans antialiased">
      {/* Background Glow Blobs */}
      <div className="absolute top-[-10%] left-[-15%] w-[60%] h-[40%] rounded-full bg-violet-600/10 blur-[140px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-15%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[140px] pointer-events-none" />

      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto w-full px-4 sm:px-6 py-12 relative z-10 space-y-6">
        <div className="mb-8 text-center sm:text-left space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-amber-500/10 text-amber-300 border border-amber-500/20 text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full">
            <span>⚖️ LEGAL COMPLIANCE</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Disclaimer Notice
          </h1>
          <p className="text-slate-400 text-sm">
            All Yono Games Store Legal Terms &amp; Compliance Details
          </p>
        </div>

        <div className="space-y-6">
          {/* Welcome */}
          <Section title="Welcome to All Yono Games Store">
            <p>
              This extensive disclaimer applies to all users of the All Yono Games Store website and the wide array of applications (&quot;Apps&quot;) listed on it. Our platform includes diverse apps such as Poker, Rummy, Ludo, fantasy sports, investment apps, and trading apps. By accessing All Yono Games Store, you acknowledge and agree to the terms outlined in this disclaimer.
            </p>
          </Section>

          {/* Scope */}
          <Section title="Understanding the Scope of Our Platform">
            <p>
              All Yono Games Store serves as a digital distribution platform and directory for various third-party applications. Our role is limited to providing access to these apps. We do not develop, modify, or have any control over the content and functionality of these apps.
            </p>
          </Section>

          {/* Financial Risk */}
          <Section title="User Responsibility and Financial Risk">
            <ul className="space-y-3">
              <Li title="Risk of Financial Activities">
                The Apps, particularly those involving financial transactions like betting games or investment platforms, may carry inherent risks including the potential for significant financial loss. You are solely responsible for any financial outcomes resulting from your use of these Apps.
              </Li>
              <Li title="Informed Decision-Making">
                We strongly encourage you to thoroughly research and understand each App, especially those involving financial risks, before participation.
              </Li>
              <Li title="No Endorsement of Financial Strategies">
                Our platform does not endorse any specific financial strategies, nor do we guarantee their success. Decisions made based on any App&apos;s content are solely your responsibility.
              </Li>
            </ul>
          </Section>

          {/* Age Compliance */}
          <Section title="Legal Age and State Compliance">
            <ul className="space-y-3">
              <Li title="Age Restrictions">
                Real-money apps are restricted strictly to users 18 years of age or older.
              </Li>
              <Li title="Compliance with Local Laws">
                It is your responsibility to ensure that the use of any App complies with local state laws and regulations in India.
              </Li>
            </ul>
          </Section>

          {/* No Liability */}
          <Section title="No Liability for Losses">
            <p>
              All Yono Games Store shall not be liable for any direct, indirect, incidental, consequential, or punitive damages, including financial losses, resulting from the use or inability to use any App listed on our website. Your engagement with these Apps is entirely at your own risk and discretion.
            </p>
          </Section>

          {/* Category Disclaimers */}
          <CategoryDisclaimer title="Disclaimer for Rummy &amp; Slots Apps">
            <strong>General Notice:</strong> Rummy games are intended for users aged 18+ and involve elements of skill and chance. Play at your own risk and ensure compliance with local gambling laws. Adding money to these games is done at the user&apos;s own risk.
          </CategoryDisclaimer>

          <CategoryDisclaimer title="General Third-Party Non-Affiliation Notice">
            <strong>Notice of Non-Affiliation:</strong> All Yono Games Store does not operate, control, or manage any of the applications listed. These Apps are developed and owned by independent third-party entities.
          </CategoryDisclaimer>
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

function CategoryDisclaimer({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-amber-500/10 border border-amber-500/30 rounded-3xl p-6 backdrop-blur-xl">
      <h2 className="text-amber-300 font-extrabold text-base mb-2">{title}</h2>
      <p className="text-slate-300 text-sm leading-relaxed">{children}</p>
    </div>
  );
}

function Li({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
      <span>
        <strong className="text-white font-bold">{title}:</strong>{" "}
        {children}
      </span>
    </li>
  );
}

