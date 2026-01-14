import React from 'react';
import { Section } from '../components/Section';
import { CORE_VALUES } from '../constants';
import { Icon } from '../components/Icon';
import { Reveal } from '../components/Reveal';

export const About: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-brand-darkGreen py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal className="mx-auto">
            <h1 className="text-4xl font-serif font-bold text-white mb-4">Who We Are</h1>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Planting Ideas, Growing Minds.
            </p>
          </Reveal>
        </div>
      </div>

      {/* History & Mission */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <Reveal direction="left">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Our History & Mission</h2>
              <div className="prose text-gray-600 leading-relaxed space-y-4">
                <p>
                  Established in 1986, Manger Care Centre (MCC) has evolved into a nationally recognized leader in sustainable development, accredited vocational training, and social reintegration. For over 37 years, we have operated at the intersection of care and enterprise, turning vulnerability into capability.
                </p>
                <p>
                  <strong>The "No Exclusion" Policy:</strong> Unlike many institutions, we intake without discrimination. MCC works with high-risk and vulnerable individuals that others may turn away—including the destitute, recovering addicts, ex-parolees, and those with no other place to turn. We offer second chances and dignified care to all.
                </p>
                <p>
                  <span className="font-bold text-brand-darkGreen">Mission:</span> Our mission is to manage projects that provide food, clothing, skills development, employment opportunities, rehabilitation services, and housing for our beneficiaries. We also give access to psychosocial, health, and spiritual guidance counselling, training on life skills, encouraging on-the-job development, and training to empower the vulnerable to feel valuable as society members.
                </p>
                <p>
                  <span className="font-bold text-brand-darkGreen">Vision:</span> Our vision is to create a caring and loving environment that enables positive upliftment and empowerment for people.
                </p>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex flex-col sm:flex-row gap-6 items-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-white shadow-lg bg-gray-100">
                      <img 
                        src="https://drive.google.com/thumbnail?id=1Jzj0vNA-qcl2dwThyWyRqpYpz7kl1UiO&sz=w400" 
                        alt="Zen Teitge - CEO" 
                        className="w-full h-full object-cover" 
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2 mb-2">
                        <Icon name="Users" size={20} className="text-brand-green" />
                        Leadership
                      </h3>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-brand-darkGreen text-base">Zen Teitge (CEO)</span> leads Manger Care Centre with a vision grounded in practical innovation and human dignity. As a subject matter expert in plant and animal production, hydroponics, and agronomics, he drives our integrated model of rural and urban transformation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal direction="right" delay={0.2}>
            <div className="max-w-md mx-auto rounded-2xl overflow-hidden shadow-lg transform rotate-2 hover:rotate-0 transition duration-500">
              <img 
                src="https://lh3.googleusercontent.com/d/1EPDbiNzYjRpaTO1KMS9oC6hoPLsv93ZP" 
                alt="About manger care center" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* What Makes Us Unique */}
      <Section bg="light">
        <Reveal width="100%">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">What Makes MCC Unique</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              This is not just a shelter project. It is a transformation engine. We seamlessly combine humanitarian support with accredited training and pathways to economic inclusion.
            </p>
          </div>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {[
             { title: "Integrated Model of Care", icon: "Users", color: "brand-green", text: "We don't simply offer a bed. We combine psychosocial rehabilitation with income-generating agricultural projects and accredited training under one roof." },
             { title: "Development-Oriented Centres", icon: "Home", color: "brand-blue", text: "Our facilities go beyond shelter—they are hubs of transformation where learning, healing, and productivity take place simultaneously." },
             { title: "From Trauma to Transformation", icon: "Heart", color: "brand-earth", text: "Our programmes are designed to move individuals from trauma into dignity, and from crisis into cooperative participation and self-sufficiency." },
             { title: "Market-Linked Reskilling", icon: "GraduationCap", color: "yellow-600", text: "We align youth and adult upskilling with real economic opportunities in sectors such as artisan baking, regenerative agriculture, and green manufacturing." },
             { title: "No Exclusion Policy", icon: "Shield", color: "red-500", text: "We intake without discrimination. We welcome those with profound life disruptions, offering a stabilizing environment rooted in accountability and compassionate care." }
           ].map((item, idx) => (
             <Reveal key={idx} delay={idx * 0.1} direction="up" className="h-full">
               <div 
                 className={`bg-white p-6 rounded-xl shadow-sm border-l-4 h-full border-${item.color}`}
                 style={{ borderColor: item.color.includes('-') ? undefined : item.color }}
               >
                  <div className="flex items-center gap-3 mb-3">
                     <Icon name={item.icon} className={`text-${item.color}`} />
                     <h3 className="font-bold text-lg text-gray-900">{item.title}</h3>
                  </div>
                  <p className="text-sm text-gray-600">
                     {item.text}
                  </p>
               </div>
             </Reveal>
           ))}
        </div>
      </Section>

      {/* Strategic Objectives */}
      <Section>
        <div className="max-w-6xl mx-auto">
           <Reveal>
             <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">Strategic Focus Areas & Core Impact Pillars</h2>
           </Reveal>
           
           <div className="mb-12">
             <Reveal>
               <h3 className="text-xl font-bold text-brand-green mb-6 uppercase tracking-wider">Core Impact Pillars</h3>
             </Reveal>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Dignified Shelter & Safe Care", desc: "Safe beds, structured house rules, and case-managed stays." },
                  { title: "Food Security & Basic Needs", desc: "Daily meals, hygiene packs, and routine-building through consistency." },
                  { title: "Health & Psychosocial Support", desc: "Social work, health referrals, and documentation support." },
                  { title: "Skills Development & Training", desc: "Accredited training, workplace discipline, and practical competencies." },
                  { title: "Economic Inclusion", desc: "Internal work roles, stipends, and external placements." },
                  { title: "Reintegration & Independence", desc: "Planning for independent living and family reunification." }
                ].map((obj, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-4 items-start bg-gray-50 p-4 rounded-lg">
                       <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold flex-shrink-0">{i + 1}</div>
                       <div>
                         <h4 className="font-bold text-gray-900 text-sm">{obj.title}</h4>
                         <p className="text-gray-600 text-sm">{obj.desc}</p>
                       </div>
                    </div>
                  </Reveal>
                ))}
             </div>
           </div>

           <div>
             <Reveal>
               <h3 className="text-xl font-bold text-brand-blue mb-6 uppercase tracking-wider">Mission Enablers</h3>
             </Reveal>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  "Social Enterprise & Sustainable Livelihoods",
                  "Partnerships & Stakeholder Coordination",
                  "Governance, Compliance & Risk Management",
                  "Resource Mobilisation & Brand Trust",
                  "Infrastructure & Operational Excellence"
                ].map((item, i) => (
                  <Reveal key={i} delay={i * 0.1}>
                    <div className="flex gap-3 items-center bg-brand-sand p-4 rounded-lg">
                       <Icon name="Zap" size={18} className="text-brand-blue flex-shrink-0" />
                       <p className="text-gray-800 font-medium text-sm">{item}</p>
                    </div>
                  </Reveal>
                ))}
             </div>
           </div>
        </div>
      </Section>

      {/* Reintegration Process & Services */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
           <Reveal direction="left">
             <div>
                <h2 className="text-2xl font-serif font-bold text-brand-darkGreen mb-6">The Reintegration Journey</h2>
                <p className="text-gray-600 mb-4">
                  Reintegration is not linear. It is the intentional process of moving from disconnection to becoming a functional member of society. At MCC, every beneficiary undergoes a careful intake process:
                </p>
                <ul className="space-y-4">
                   <li className="flex gap-3">
                      <div className="mt-1 bg-white p-2 rounded shadow-sm"><Icon name="Users" size={20} className="text-brand-blue"/></div>
                      <div>
                         <strong className="block text-gray-900">Assessment & Intake</strong>
                         <span className="text-sm text-gray-600">Assessed by social workers and a professional nurse to determine psychosocial needs and health status.</span>
                      </div>
                   </li>
                   <li className="flex gap-3">
                      <div className="mt-1 bg-white p-2 rounded shadow-sm"><Icon name="Target" size={20} className="text-brand-green"/></div>
                      <div>
                         <strong className="block text-gray-900">Personal Development Plan (IDP)</strong>
                         <span className="text-sm text-gray-600">We co-create a plan focused on meaningful change, personal accountability, and an exit strategy.</span>
                      </div>
                   </li>
                   <li className="flex gap-3">
                      <div className="mt-1 bg-white p-2 rounded shadow-sm"><Icon name="GraduationCap" size={20} className="text-brand-earth"/></div>
                      <div>
                         <strong className="block text-gray-900">Skills & Employment</strong>
                         <span className="text-sm text-gray-600">Participation in training interventions (Agriculture, Bakery, Fabrication) for future employability.</span>
                      </div>
                   </li>
                </ul>
             </div>
           </Reveal>

           <Reveal direction="right" delay={0.3}>
             <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Comprehensive Support Services</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-700">
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Daily meals & nutritional support</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Safe & stable accommodation</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Psychosocial support & counseling</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Medical referrals & health screenings</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> ID & SASSA grant assistance</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Substance abuse recovery support</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Family reunification services</div>
                   <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-green rounded-full"></div> Pastoral care & spiritual guidance</div>
                </div>
             </div>
           </Reveal>
        </div>
      </Section>

      {/* Core Values */}
      <Section>
        <div className="text-center mb-12">
          <Reveal>
            <h2 className="text-3xl font-serif font-bold text-gray-900">Our Core Values</h2>
            <div className="w-20 h-1 bg-brand-green mx-auto mt-4 rounded-full"></div>
          </Reveal>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {CORE_VALUES.map((value, idx) => (
            <Reveal key={idx} delay={idx * 0.1} direction="up">
              <div className="bg-brand-sand p-6 rounded-lg shadow-sm text-center hover:shadow-md transition border border-transparent hover:border-brand-green/20">
                <div className="w-12 h-12 bg-white text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                  <Icon name={value.iconName} size={24} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Governance & Leadership */}
      <Section bg="light">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           <Reveal>
             <div>
                <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">Governance & Leadership</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  MCC operates with full legal compliance and accountability, guided by the highest standards of transparency. Our executive team and board of directors bring decades of operational and strategic expertise.
                </p>
                <ul className="space-y-4 text-sm text-gray-700">
                  <li className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm text-brand-green">
                          <Icon name="ShieldCheck" size={18} />
                      </div>
                      <span><strong>Registered NPO:</strong> 004-110</span>
                  </li>
                  <li className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm text-brand-green">
                          <Icon name="ShieldCheck" size={18} />
                      </div>
                      <span><strong>Public Benefit Organisation (PBO):</strong> 930001038</span>
                  </li>
                  <li className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm text-brand-green">
                          <Icon name="ShieldCheck" size={18} />
                      </div>
                      <span><strong>B-BBEE Status:</strong> Level 1 Contributor</span>
                  </li>
                  <li className="flex items-center gap-3">
                      <div className="bg-white p-2 rounded-full shadow-sm text-brand-green">
                          <Icon name="ShieldCheck" size={18} />
                      </div>
                      <span><strong>Audits:</strong> Annual independent audits conducted</span>
                  </li>
                </ul>
             </div>
           </Reveal>
           
           <Reveal delay={0.2} direction="left">
             <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                <h3 className="font-bold text-xl text-gray-900 mb-4">Strategic Partnerships</h3>
                <p className="text-gray-600 mb-6">
                  We believe in the power of collaboration. Our strategic partnership with the <strong className="text-brand-darkGreen">Kgalema Motlanthe Foundation (KMF)</strong> allows us to align with national development priorities and expand our reach in rural transformation.
                </p>
                <div className="flex flex-col gap-4">
                   <div className="p-4 bg-brand-sand rounded-lg border-l-4 border-brand-blue flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-blue shadow-sm">
                          <Icon name="Users" size={20} />
                      </div>
                      <div>
                          <span className="font-bold text-gray-900 block">Zen Teitge</span>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Chief Executive Officer</span>
                      </div>
                   </div>
                   <div className="p-4 bg-brand-sand rounded-lg border-l-4 border-brand-earth flex items-center gap-4">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-earth shadow-sm">
                          <Icon name="Users" size={20} />
                      </div>
                      <div>
                          <span className="font-bold text-gray-900 block">Charlene Keabetswe Louw</span>
                          <span className="text-xs text-gray-500 uppercase tracking-wider">Chairperson</span>
                      </div>
                   </div>
                </div>
             </div>
           </Reveal>
        </div>
      </Section>
    </>
  );
};