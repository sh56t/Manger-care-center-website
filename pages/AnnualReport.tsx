import React, { useState } from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';

// Minimal PDF Base64 for demonstration
const DUMMY_PDF = "data:application/pdf;base64,JVBERi0xLjcKCjEgMCBvYmogICUgZW50cnkgcG9pbnQKPDwKICAvVHlwZSAvQ2F0YWxvZwogIC9QYWdlcyAyIDAgUgo+PgplbmRvYmoKCjIgMCBvYmoKPDwKICAvVHlwZSAvUGFnZXMKICAvTWVkaWFCb3ggWyAwIDAgNTk1LjI4IDg0MS44OSBdCiAgL0NvdW50IDEKICAvS2lkcyBbIDMgMCBSIF0KPj4KZW5kb2JqCgozIDAgb2JqCjw8CiAgL1R5cGUgL1BhZ2UKICAvUGFyZW50IDIgMCBSC4gIC9SZXNvdXJjZXMgPDwKICAgIC9Gb250IDw8CiAgICAgIC9FMSA0IDAgUgogICAgPj4KICA+PgogIC9Db250ZW50cyA1IDAgUgo+PgplbmRvYmoKCjQgMCBvYmoKPDwKICAvVHlwZSAvRm9udAogIC9TdWJ0eXBlIC9UeXBlMQogIC9CYXNlRm9udCAvSGVsdmV0aWNhCj4+CmVuZG9iagoKNSAwIG9iago8PAogIC9MZW5ndGggMjIzCj4+CnN0cmVhbQpCVAovRTEgMjQgVGYKNTAgNzUwIFRECihNYW5nZXIgQ2FyZSBDZW50cmUgLSBBbm51YWwgUmVwb3J0KSBUagovRTEgMTIgVGYKMCAtMzAgVEQKKFRoaXMgaXMgYSBwbGFjZWhvbGRlciBQREYgZm9yIGRlbW9uc3RyYXRpb24gcHVycG9zZXMuKSBUagowIC0yMCBVEQooUGxlYXNlIHJlcGxhY2UgdGhpcyB3aXRoIHRoZSBhY3R1YWwgcmVwb3J0IFBERiBmaWxlLikgVGoKRVQKZW5kc3RyZWFtCmVuZG9iagoKeHJlZgowIDYKMDAwMDAwMDAwMCA2NTUzNSBmIAowMDAwMDAwMDEwIDAwMDAwIG4gCjAwMDAwMDAwNjAgMDAwMDAgbiAKMDAwMDAwMDE1NyAwMDAwMCBuIAowMDAwMDAwMjc2IDAwMDAwIG4gCjAwMDAwMDAzNjMgMDAwMDAgbiAKdHJhaWxlcgo8PAogIC9TaXplIDYKICAvUm9vdCAxIDAgUgo+PgpzdGFydHhyZWYKNjM3CiUlRU9GCg==";

// Interface for Report Data
interface ReportData {
  year: number;
  theme: string;
  pdfUrl: string;
  chairperson: {
    name: string;
    content: React.ReactNode;
  };
  ceo: {
    name: string;
    content: React.ReactNode;
  };
  finance: {
    name: string;
    income: string;
    expenditure: string;
    content: React.ReactNode;
  };
  leadership: {
    board: { name: string; role: string }[];
    ordinary: string[];
  };
}

// Data store for reports
const REPORTS: Record<number, ReportData> = {
  2025: {
    year: 2025,
    theme: "Transparency, Accountability, and Shared Progress.",
    pdfUrl: DUMMY_PDF,
    chairperson: {
      name: "Charlene Kearabetswe Louw",
      content: (
        <>
          <p className="italic text-lg text-gray-600 mb-6 border-l-4 border-brand-blue pl-4">
            "The past year has been one of resilience, innovation, and sustained growth for Manger Care Centre. While the broader socio-economic environment continued to present significant challenges, our Governing Board, management, and staff have remained steadfast in our mission to empower individuals, restore dignity, and build sustainable futures."
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Strategic Progress and Community Impact</h3>
          <p>
            We have strengthened our position as a leader in skills development and social impact by expanding training opportunities and enhancing programme quality. The completion of our expanded training facilities, coupled with the planned rollout of artisan training, reflects our continued investment in equipping beneficiaries with relevant, market-ready skills.
          </p>
          <p className="mt-4">
            Our agricultural initiatives continue to bear fruit. The greenhouse tunnels in rural Marikana have delivered tangible benefits, empowering reskilled graduates to establish income-generating agricultural projects. Our footprint in Bapsfontein, Etwatwa, Katlehong, Jeppestown, Soweto and Milpark demonstrates our ability to scale impact across diverse communities.
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Living the Social Compact</h3>
          <p>
            The reach of Manger extends well beyond our direct programmes. Through initiatives such as Manna, Robmen House, Manger Marine, Eden and Bapsfontein, as well as weekly outreach activities, we provide food, clothing, and essential items to those most in need. Our partnerships with other NPOs in Ekurhuleni, Johannesburg, and Tshwane embody the principle of shared responsibility.
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Challenges and Strategic Responses</h3>
          <p>
            We have faced external pressures, including billing disputes with Ekurhuleni Municipality and soaring energy costs. In response, we are moving forward with plans to install solar power to reduce operational costs and advance sustainability. Despite funding instability, prudent financial management has allowed us to maintain a strong financial position with healthy liquidity.
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Conclusion</h3>
          <p>
            As we look to the year ahead, we remain committed to deepening our impact, strengthening our financial resilience, and driving innovative solutions to complex social challenges. Manger Care Centre stands as a beacon of hope, a catalyst for change, and a testament to what is possible when people come together with a shared vision.
          </p>
        </>
      )
    },
    ceo: {
      name: "Zen Teitge",
      content: (
        <>
          <p className="italic text-lg text-gray-600 mb-6 border-l-4 border-brand-green pl-4">
            "It is with immense pride and gratitude that I present this report for the year ending 31 March 2025. This year has been a testament to the resilience of our beneficiaries, the unwavering dedication of our team, the generosity of our donors, and the steadfast support of our partners."
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Performance Highlights</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Financial Health:</strong> Despite economic pressures, we maintained a strong financial position with a surplus, reflecting prudent fiscal management.</li>
            <li><strong>Service Delivery:</strong> Over 5,200 beneficiaries received direct support, including shelter, food, healthcare, and training.</li>
            <li><strong>Skills Development:</strong> 112 individuals completed accredited training in Plant & Animal Production, including 18 female farmers who graduated at NQF Level 4.</li>
            <li><strong>Community Impact:</strong> Our social work team exceeded GDSD’s outreach targets, extending vital services to informal settlements and partner NPOs.</li>
          </ul>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Strategic Vision for 2025–2026</h3>
          <p>Our strategic vision focuses on four key areas:</p>
          <ul className="list-disc pl-5 space-y-2 mt-2">
            <li>Expand our DSD-funded homeless programme with additional container housing.</li>
            <li>Increase investment in skills development and employment-linked training.</li>
            <li>Strengthen food security initiatives in alignment with UN SDGs.</li>
            <li>Leverage technology to improve programme efficiency and monitoring.</li>
          </ul>

          <div className="mt-8 bg-green-50 p-6 rounded-xl border border-green-100">
            <h4 className="text-brand-darkGreen font-bold mb-2">A Note of Gratitude</h4>
            <p className="text-sm">
              I wish to express my heartfelt thanks to our Governing Board for their strategic oversight, our management team for their dedication, and our donors for their trust. Your collective commitment enables Manger Care Centre to stand as a beacon of hope where lives are rebuilt.
            </p>
          </div>
        </>
      )
    },
    finance: {
      name: "Jefter Mxotshwa (Treasurer)",
      income: "R18,257,743",
      expenditure: "R18,000,325",
      content: (
        <>
          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Income Overview</h3>
          <p>
            Our total income for the year was robust, with continued strong support from our Tele Assistant Contribution programme (R5.9M), the DSD Government Grant (R2.4M), and beneficiary contributions. Income from our bakery, agricultural, and other job creation initiatives remained a vital component of our revenue.
          </p>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Key Financial Metrics</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Liquidity:</strong> Our liquidity ratio remains healthy (Current ratio improved to 41.7).</li>
            <li><strong>Cash Flow:</strong> Cash and cash equivalents increased substantially to R1,080,013 due to effective management.</li>
            <li><strong>Debt-to-Equity:</strong> Remained low at 0.05, indicating minimal reliance on debt.</li>
            <li><strong>Total Assets:</strong> Increased to R8,266,322, reflecting ongoing investment in facilities.</li>
          </ul>

          <h3 className="font-bold text-gray-900 text-lg mt-6 mb-2">Conclusion</h3>
          <p>
            The 2025 financial year reflects Manger Care Centre’s resilience, adaptability, and commitment to prudent stewardship. We remain committed to growing self-sustaining income streams and strengthening donor relationships to safeguard the Centre’s mission.
          </p>
        </>
      )
    },
    leadership: {
      board: [
        { name: "Charlene Kearabetswe Louw", role: "Chairperson" },
        { name: "Penelope Shozi", role: "Vice Chairperson" },
        { name: "Jefter Mxotshwa", role: "Treasurer" },
        { name: "Andrew Wessels", role: "Secretary Ex-Officio" },
        { name: "Zen Teitge", role: "Chief Executive Officer" },
        { name: "Prudence (Gugu) Motlanthe", role: "Patron Board Member" },
      ],
      ordinary: ['Ezekiel Mpopchela', 'Kay Bowie', 'Patricia Seema', 'Kholeka Madaza', 'Costa Sibanda', 'Nico Makgobo']
    }
  }
};

export const AnnualReport: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chairperson' | 'ceo' | 'finance' | 'leadership'>('chairperson');
  const [selectedYear, setSelectedYear] = useState<number>(2025);

  const report = REPORTS[selectedYear];

  // If data is missing for a year (fallback)
  if (!report) return <div>Data not found</div>;

  return (
    <>
      <div className="bg-brand-darkGreen py-16 md:py-24 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="text-center md:text-left z-10">
                <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-emerald-50 text-sm font-bold mb-4 border border-white/30 backdrop-blur-sm">
                   Annual General Meeting
                </span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{report.year} Report</h1>
                <p className="text-xl text-emerald-100 max-w-2xl">
                  {report.theme}
                </p>
              </div>

              {/* Controls */}
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20 flex flex-col gap-4 w-full md:w-auto z-10">
                 <div>
                    <label className="block text-xs font-bold text-emerald-200 uppercase mb-1">Select Year</label>
                    <div className="relative">
                      <select 
                        value={selectedYear}
                        onChange={(e) => setSelectedYear(Number(e.target.value))}
                        className="w-full md:w-64 appearance-none bg-brand-green text-white font-bold py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer border border-transparent"
                      >
                        <option value={2025} className="text-gray-900 bg-white">2025</option>
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-white">
                        <Icon name="ChevronDown" size={16} />
                      </div>
                    </div>
                 </div>
                 
                 <a 
                   href={report.pdfUrl}
                   download={`Manger_Care_Centre_Annual_Report_${report.year}.pdf`}
                   className="flex items-center justify-center gap-2 bg-brand-green hover:bg-emerald-400 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg cursor-pointer"
                 >
                    <Icon name="Download" size={20} />
                    Download PDF
                 </a>
              </div>
           </div>
        </div>
        
        {/* Background Pattern decoration */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-emerald-900/30 rounded-full blur-3xl"></div>
      </div>

      <Section>
        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 border-b border-gray-200 pb-6">
          <button
            onClick={() => setActiveTab('chairperson')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === 'chairperson' ? 'bg-brand-blue text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Chairperson
          </button>
          <button
            onClick={() => setActiveTab('ceo')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === 'ceo' ? 'bg-brand-green text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            CEO
          </button>
          <button
            onClick={() => setActiveTab('finance')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === 'finance' ? 'bg-brand-earth text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Financials
          </button>
          <button
            onClick={() => setActiveTab('leadership')}
            className={`px-5 py-2.5 rounded-full font-bold text-sm md:text-base transition-all ${
              activeTab === 'leadership' ? 'bg-gray-800 text-white shadow-md transform scale-105' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Leadership
          </button>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto animate-fadeIn bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 min-h-[500px]">
          
          {/* Chairperson's Report */}
          {activeTab === 'chairperson' && (
            <div className="prose max-w-none text-gray-700">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-blue-50 text-brand-blue rounded-full flex items-center justify-center flex-shrink-0">
                   <Icon name="Users" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Chairperson's Report</h2>
                  <p className="text-gray-500 font-medium">{report.chairperson.name}</p>
                </div>
              </div>
              {report.chairperson.content}
            </div>
          )}

          {/* CEO's Report */}
          {activeTab === 'ceo' && (
            <div className="prose max-w-none text-gray-700">
               <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-50 text-brand-green rounded-full flex items-center justify-center flex-shrink-0">
                   <Icon name="Target" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">CEO's Report</h2>
                  <p className="text-gray-500 font-medium">{report.ceo.name}</p>
                </div>
              </div>
              {report.ceo.content}
            </div>
          )}

          {/* Financials */}
          {activeTab === 'finance' && (
            <div className="prose max-w-none text-gray-700">
               <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange-50 text-brand-earth rounded-full flex items-center justify-center flex-shrink-0">
                   <Icon name="Scale" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-serif font-bold text-gray-900 m-0">Financial Overview</h2>
                  <p className="text-gray-500 font-medium">{report.finance.name}</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                 <div className="bg-white p-6 rounded-xl border-t-4 border-brand-earth shadow-sm">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Total Income</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{report.finance.income}</p>
                 </div>
                 <div className="bg-white p-6 rounded-xl border-t-4 border-red-500 shadow-sm">
                    <h3 className="text-gray-500 text-sm font-bold uppercase">Total Expenditure</h3>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{report.finance.expenditure}</p>
                 </div>
              </div>
              
              {report.finance.content}
            </div>
          )}

          {/* Leadership */}
          {activeTab === 'leadership' && (
             <div className="text-center">
                <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">Governing Board</h2>
                
                {report.leadership.board.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-12">
                     {report.leadership.board.map((member, idx) => (
                       <div key={idx} className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                          <h3 className="font-bold text-brand-darkGreen">{member.name}</h3>
                          <p className="text-sm text-gray-600">{member.role}</p>
                       </div>
                     ))}
                  </div>
                ) : <p className="text-gray-500 mb-8">No board information available for this year.</p>}

                {report.leadership.ordinary.length > 0 && (
                  <>
                    <h3 className="text-lg font-bold text-gray-900 mb-6">Ordinary Board Members</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                       {report.leadership.ordinary.map((name) => (
                          <span key={name} className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm text-gray-700 shadow-sm">
                             {name}
                          </span>
                       ))}
                    </div>
                  </>
                )}
             </div>
          )}

        </div>
      </Section>
    </>
  );
};