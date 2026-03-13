"use client";

import { ReactNode, useState } from "react";
import { Minus, Plus } from "lucide-react";
import { DelightText } from "@/components/fonts";
import {
  FadeIn,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/fade-in";
import Link from "next/link";

const faqs: { question: string; answer: ReactNode }[] = [
  {
    question: "What does a Building Surveyor do?",
    answer: (
      <>
        A Building Surveyor provides independent professional advice on the
        condition, performance, repair, and management of buildings. This
        includes inspections, defect diagnosis, refurbishment advice, contract
        administration, dilapidations, compliance guidance, and strategic asset
        consultancy. Our role is to protect your property investment and help
        you make informed decisions.
      </>
    ),
  },
  {
    question: "What types of clients do you work with?",
    answer: (
      <ul className="list-disc pl-5 space-y-2">
        <li>Private property owners</li>
        <li>Commercial landlords and tenants</li>
        <li>Housing associations and co-operatives</li>
        <li>Property investors</li>
        <li>Managing agents</li>
        <li>Developers</li>
      </ul>
    ),
  },
  {
    question:
      "What is the difference between a Building Survey and a Homebuyer Report?",
    answer: (
      <>
        A Building Survey is a comprehensive inspection that provides detailed
        analysis of a property’s condition, defects, and repair requirements. It
        is suitable for older, altered, or complex buildings. A Homebuyer-style
        report is more concise and suitable for conventional properties in
        reasonable condition. We can advise which option is appropriate based on
        the property and your objectives.
      </>
    ),
  },
  {
    question: "Can you diagnose damp and structural issues?",
    answer: (
      <>
        Yes. We investigate and diagnose the root causes of:
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Damp and condensation</li>
          <li>Structural cracking</li>
          <li>Roof failures</li>
          <li>Timber decay</li>
          <li>Water ingress</li>
          <li>Building fabric deterioration</li>
        </ul>
        <div className="mt-2">
          Our approach focuses on identifying causes rather than simply treating
          symptoms.
        </div>
      </>
    ),
  },
  {
    question: "Do you manage building works and refurbishments?",
    answer: (
      <>
        Yes. We can act as Contract Administrator, overseeing projects from
        specification through to completion. This includes:
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Preparing technical specifications</li>
          <li>Tendering and contractor selection</li>
          <li>Site inspections</li>
          <li>Quality control</li>
          <li>Certification of payments</li>
          <li>Managing defects</li>
        </ul>
        <div className="mt-2">
          This ensures works are delivered to the required standard and within
          agreed budgets.
        </div>
      </>
    ),
  },
  {
    question: "What are Dilapidations?",
    answer: (
      <>
        Dilapidations relate to breaches of lease obligations concerning the
        condition and repair of commercial property. We provide:
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Schedule of Dilapidations (for landlords)</li>
          <li>Dilapidations Defence (for tenants)</li>
          <li>Negotiation support</li>
          <li>Cost assessment and settlement advice</li>
        </ul>
        <div className="mt-2">
          Our aim is to protect your financial position and ensure fair
          outcomes.
        </div>
      </>
    ),
  },
  {
    question: "Do you provide long-term maintenance planning?",
    answer: (
      <>
        Yes. We prepare forward maintenance plans and capital forecasts to help
        property owners manage costs proactively rather than reactively. This
        enables better budgeting and reduces unexpected expenditure.
      </>
    ),
  },
  {
    question: "Are your reports suitable for legal or professional use?",
    answer: (
      <>
        Yes. Our reports are structured to be clear, evidence-based, and
        suitable for professional, legal, or board-level review where required.
      </>
    ),
  },
  {
    question: "Do you work independently from contractors?",
    answer: (
      <>
        Yes. We provide independent professional advice and do not carry out
        construction works ourselves. This ensures our recommendations are
        impartial and focused solely on protecting your interests.
      </>
    ),
  },
  {
    question: "Why should I appoint a Chartered Building Surveyor?",
    answer: (
      <>
        A Chartered Building Surveyor has undergone rigorous professional
        training and adheres to strict standards of competence and ethics. This
        provides clients with:
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Professional accountability</li>
          <li>Technical expertise</li>
          <li>Risk mitigation</li>
          <li>Confidence in decision-making</li>
        </ul>
      </>
    ),
  },
  {
    question: "How do I instruct you?",
    answer: (
      <>
        Simply contact us with:
        <ul className="list-disc pl-5 space-y-2 mt-2">
          <li>Property address</li>
          <li>Type of service required</li>
          <li>Your objectives and timeframe</li>
        </ul>
        <div className="mt-2">
          We will confirm scope, fees, and next steps promptly.
        </div>
      </>
    ),
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-white relative py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto relative z-1">
        <FadeIn delay={0.1}>
          <DelightText
            weight="bold"
            className="text-3xl md:text-4xl font-bold text-black text-center leading-tight mb-2"
          >
            Frequently Asked Questions
          </DelightText>
        </FadeIn>
        {/* Subtitle */}
        <FadeIn delay={0.2}>
          <p className="text-center font-instrumetal text-muted mb-10 text-sm sm:text-base">
            Professional surveying services that delivers in-dept survey,
            critical analysis, clear insights and reliable reports for confident
            property decisions.
          </p>
        </FadeIn>

        {/* FAQ List */}
        <StaggerContainer delay={0.3} className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = activeIndex === index;

            return (
              <StaggerItem
                key={index}
                className="bg-[#FAFAFA] rounded-2xl p-6 sm:p-8 transition-all duration-300"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex justify-between items-start text-left"
                >
                  <h3 className="text-base sm:text-xl font-semibold text-black pr-4">
                    {faq.question}
                  </h3>

                  <div className="flex-shrink-0 bg-gray-200 rounded-xl p-2">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-black" />
                    ) : (
                      <Plus className="w-5 h-5 text-black" />
                    )}
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-4"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        <div className="border rounded-xl mt-16 borer-black p-4 flex gap-4">
          <div className="flex-1 text-black">
            <DelightText weight="bold" className="font-medium">
              Still have a question in mind?
            </DelightText>
            <p className="text-sm text-[#5E5E5E]">
              Contact us if you have any other questions.
            </p>
          </div>
          <Link
            href={"/contact-us"}
            className="text-white bg-black rounded-full text-xs px-8 py-2 pt-3 h-[40px] font-instrumetal"
          >
            <span>Contact us</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 bg-[url('/images/faq-bg.png')] h-[250px] w-full bg-cover bg-center bg-no-repeat" />
    </section>
  );
}
