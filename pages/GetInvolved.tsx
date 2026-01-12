import React from 'react';
import { Section } from '../components/Section';
import { Icon } from '../components/Icon';
import { BANK_DETAILS } from '../constants';

export const GetInvolved: React.FC = () => {
  return (
    <>
      <div className="bg-brand-green py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-serif font-bold mb-4">Get Involved</h1>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            You can make a difference. Partner with us to change lives.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           {/* Donation Column */}
           <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-brand-darkGreen p-6 text-white text-center">
                 <h2 className="text-2xl font-serif font-bold">Donate Financially</h2>
                 <p className="opacity-80">Support our ongoing operations</p>
              </div>
              <div className="p-8">
                 <p className="text-gray-600 mb-6 text-center">
                   Your financial contribution goes directly towards food, educational materials, and critical support services. Section 18A tax certificates are available for all qualifying donations.
                 </p>
                 
                 <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 mb-6">
                    <h3 className="font-bold text-gray-800 mb-4 text-center">Banking Details</h3>
                    <div className="space-y-2 text-sm text-gray-700">
                        <div className="flex justify-between border-b pb-2">
                            <span>Bank:</span>
                            <span className="font-semibold">{BANK_DETAILS.bank}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Account Name:</span>
                            <span className="font-semibold">{BANK_DETAILS.accountName}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Account Number:</span>
                            <span className="font-semibold">{BANK_DETAILS.accountNumber}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span>Branch Code:</span>
                            <span className="font-semibold">{BANK_DETAILS.branchCode}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Reference:</span>
                            <span className="font-semibold">Your Name/Company</span>
                        </div>
                    </div>
                 </div>

                 <div className="text-center">
                    <p className="text-xs text-gray-500 mb-2">We are a Level 1 B-BBEE Contributor.</p>
                    <a href={`mailto:admin@mangercare.co.za?subject=Donation%20Proof`} className="inline-block w-full bg-brand-green hover:bg-brand-darkGreen text-white font-bold py-4 rounded-lg transition shadow-md">
                        Send Proof of Payment
                    </a>
                 </div>
              </div>
           </div>

           {/* Volunteer Column */}
           <div className="flex flex-col gap-6">
              <div className="bg-brand-sand p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-blue text-white p-3 rounded-full"><Icon name="Users" size={24}/></div>
                  <h3 className="text-xl font-bold text-gray-900">Volunteer Your Time</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  We need tutors, mentors, cooks, and general assistants. If you have time to give, we have a place for you.
                </p>
                <a href="/contact" className="text-brand-blue font-bold hover:underline">Apply to Volunteer &rarr;</a>
              </div>

              <div className="bg-brand-sand p-8 rounded-2xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-earth text-white p-3 rounded-full"><Icon name="HandHeart" size={24}/></div>
                  <h3 className="text-xl font-bold text-gray-900">Partner With Us</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Corporate partnerships and CSR initiatives help us scale our impact. We offer high-impact branding and sponsorship platforms aligned with real-world solutions.
                </p>
                <a href="/contact" className="text-brand-earth font-bold hover:underline">Contact for Partnerships &rarr;</a>
              </div>
           </div>
        </div>
      </Section>
    </>
  );
};