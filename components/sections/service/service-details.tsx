"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Building2,
  AlertTriangle,
  DraftingCompass,
  FileWarning,
  Users,
  Hammer,
  ShieldCheck,
  Shield,
  ChevronDown,
} from "lucide-react";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { AnimatePresence, motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const categories = [
  {
    name: "Building Surveys & Inspections",
    icon: Building2,
    image: "/sections/services/building.png",
    content: [
      {
        type: "paragraph",
        text: "Making property decisions without the right knowledge can be costly — not just financially, but also in terms of time, stress, and long-term liability. Buildings often hide issues that are invisible at first glance: structural weaknesses, outdated systems, or maintenance backlogs that can escalate into major expenses.",
      },
      {
        type: "paragraph",
        text: "Our role is to uncover those risks and give you certainty, clarity, and confidence before you commit. We go beyond ticking boxes — every survey we deliver provides a full picture of the property's condition, future liabilities, and opportunities.",
      },
    ],
  },
  {
    name: "Defects Analysis & Maintenance",
    icon: AlertTriangle,
    image: "/sections/services/service1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Building defects, if left unchecked, can quickly escalate into costly problems — from persistent damp and cracking walls to subsidence, roof leaks, or failing services. These issues not only impact the safety and comfort of a property but also its long-term value.",
      },
      {
        type: "paragraph",
        text: "Our role is to investigate the root causes of defects, not just the symptoms. We provide clear, practical recommendations for repairs, along with planned preventive maintenance strategies that help extend the life of your building, reduce future risks, and manage costs more effectively.",
      },
    ],
  },
  {
    name: "Design & Project Management",
    icon: DraftingCompass,
    image: "/sections/services/service2.jpg",
    content: [
      {
        type: "paragraph",
        text: "We provide an efficient and high quality contract administration & project management from initial briefing and feasibility right through to contract completion. It is our belief that one of the key factors of our success is our ability and endeavour to really understand our clients' needs and priorities.",
      },
      {
        type: "paragraph",
        text: "This belief, along with our ethos of adding value at every opportunity, sets us apart from other consultancies and helps us to exceed expectations time and time again. Our services include:",
      },
      {
        type: "list",
        items: [
          "Feasibility studies including preliminary cost and programme advice",
          "Early implementation of risk management strategies",
          "Advice regarding procurement routes and contract types",
          "Preparation of detailed specifications, drawings and tender documentation",
          "Preparation of contract documents",
          "Implementation of value management and cost control measures",
          "Contract administration and contractual advice",
          "Regular cost reporting and forecasting throughout the contract period",
          "Overseeing delivery to ensure a high standard of works",
          "Manage defects through the rectification period to completion",
        ],
      },
    ],
  },
  {
    name: "Dilapidations & Lease Advice",
    icon: FileWarning,
    image: "/sections/services/building.png",
    content: [
      {
        type: "paragraph",
        text: "When a tenancy/lease is coming to an end, the dilapidations negotiation between the landlord and tenant will commence. It is a process where the costs for making good the premises and removing any tenant alterations in accordance with the terms of the lease are discussed.",
      },
      {
        type: "paragraph",
        text: "There are a number of ways Archway can assist with the process whether acting on behalf of the landlord or tenant.",
      },
      { type: "heading", text: "Landlord" },
      {
        type: "paragraph",
        text: "Dilapidations Liability – Archway can provide early advice on the dilapidations liability of a tenant by reviewing lease documentation and the condition of the premises, and ensure the landlord is making the best decisions for their business.",
      },
      {
        type: "paragraph",
        text: "Interim/ Terminal Schedule – Archway can produce an interim or terminal schedule of dilapidations on behalf of the landlord. We use our expertise to ensure the property is vacated in the desired state, or the costs of bringing it into repair are recovered from the tenant.",
      },
      {
        type: "paragraph",
        text: "Contract Administration – Following tenant vacation, Archway can Project Manage refurbishment works to bring the premises up to market standard.",
      },
      { type: "heading", text: "Tenant" },
      {
        type: "paragraph",
        text: "Exit Strategy – Archway can provide early advice on the dilapidations liability by reviewing lease documentation and the condition of the premises, and ensure the tenant is making the best decisions for their business.",
      },
      {
        type: "paragraph",
        text: "Contract Administration – We can arrange to Project Manage refurbishment works that they would be liable for, thus reducing the potential liability under a claim from the landlord.",
      },
      {
        type: "paragraph",
        text: "Negotiation – If a claim has been served by the landlord, Archway can use expertise to negotiate the claim on behalf of the tenant.",
      },
      {
        type: "paragraph",
        text: "Schedule of Condition – Should the property be in disrepair at lease commencement, Archway can produce schedules of condition to be appended to the lease to ensure the tenant is protected.",
      },
    ],
  },
  {
    name: "Party Wall & Neighbouring Matters",
    icon: Users,
    image: "/sections/services/service1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Building work that affects shared walls, boundaries, or neighbouring properties can easily create disputes if not handled correctly. The Party Wall etc. Act 1996 sets clear procedures to protect the rights of both property owners — but navigating it can be complex without expert guidance.",
      },
      {
        type: "paragraph",
        text: "We act as impartial Party Wall Surveyors, preparing awards, resolving disputes, and advising on boundary and neighbourly matters. Our goal is to maintain good relationships between parties while ensuring full legal compliance, so projects can move forward without unnecessary conflict or delay.",
      },
    ],
  },
  {
    name: "Refurbishment & Conservation",
    icon: Hammer,
    image: "/sections/services/service2.jpg",
    content: [
      {
        type: "paragraph",
        text: "Breathing new life into existing buildings or carefully conserving historic structures requires a delicate balance of modern techniques and traditional craftsmanship. We offer specialized surveying services for listed buildings and heritage assets.",
      },
      {
        type: "paragraph",
        text: "Our team ensures that any refurbishment or conservation work respects the building's historical significance while upgrading its performance, safety, and functionality for modern use.",
      },
    ],
  },
  {
    name: "Health & Safety / Compliance",
    icon: ShieldCheck,
    image: "/sections/services/building.png",
    content: [
      {
        type: "paragraph",
        text: "Operating a safe and compliant building is paramount. The regulatory landscape is constantly evolving, making health, safety, and statutory compliance a key challenge for property owners and managers.",
      },
      {
        type: "paragraph",
        text: "We conduct comprehensive audits and risk assessments, including fire safety and accessibility, to ensure your property meets all current legal standards, protecting your occupants and your reputation.",
      },
    ],
  },
  {
    name: "Insurance",
    icon: Shield,
    image: "/sections/services/service1.jpg",
    content: [
      {
        type: "paragraph",
        text: "Accurate Reinstatement Cost Assessments are essential to ensure your property is adequately insured. Being underinsured can lead to significant financial shortfalls in the event of a claim, while over-insuring means paying unnecessary premiums.",
      },
      {
        type: "paragraph",
        text: "We provide precise valuations for insurance purposes, and in the unfortunate event of damage, we offer expert support in managing the reinstatement project and coordinating with loss adjusters.",
      },
    ],
  },
  {
    name: "Stock Condition Surveys",
    icon: Building2,
    image: "/sections/services/service9.png",
    content: [
      {
        type: "paragraph",
        text: "Our Stock Condition Survey service provides property owners, housing providers, investors, and managing agents with clear, data-driven insight into the condition, compliance status, and lifecycle performance of their portfolios.",
      },
      {
        type: "paragraph",
        text: "We combine technical building surveying expertise with structured analytics to deliver actionable asset intelligence that supports long-term planning, budgeting, and risk reduction.",
      },
    ],
  },
];

export default function ServiceDetailSection() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  // Parse the initial active index from URL or default to 0
  const initialActive = tabParam ? parseInt(tabParam, 10) : 0;
  const [active, setActive] = useState(
    !isNaN(initialActive) &&
      initialActive >= 0 &&
      initialActive < categories.length
      ? initialActive
      : 0,
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const ActiveIcon = categories[active].icon;

  return (
    <section className="bg-white py-16 lg:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block lg:w-1/4">
            <h3 className="text-lg font-semibold font-instrumetal text-gray-800 mb-6">
              Categories
            </h3>
            <div className="space-y-3">
              {categories.map((item, index) => {
                const Icon = item.icon;
                const isActive = active === index;

                return (
                  <button
                    key={index}
                    onClick={() => setActive(index)}
                    className={`w-full flex items-center gap-4 rounded-xl transition-all duration-300 text-left ${
                      isActive
                        ? "text-primary-variant"
                        : "hover:bg-[#FCFFEE] cursor-pointer text-muted-foreground"
                    }`}
                  >
                    <div className={`p-3 rounded-full bg-[#FCFFEE]`}>
                      <Icon size={18} color="#99BC0F" />
                    </div>
                    <SuisseIntlText
                      weight="medium"
                      className="text-sm font-medium"
                    >
                      {item.name}
                    </SuisseIntlText>
                  </button>
                );
              })}
            </div>
          </aside>

          {/* Mobile Dropdown */}
          <div className="lg:hidden w-full mb-2">
            <h3 className="text-lg font-semibold font-instrumetal text-gray-800 mb-6">
              Categories
            </h3>

            <div className="relative">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="w-full flex items-center justify-between py-3 bg-white"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-[#FCFFEE]">
                    <ActiveIcon size={18} color="#99BC0F" />
                  </div>
                  <SuisseIntlText
                    weight="medium"
                    className="text-sm font-medium text-primary-variant"
                  >
                    {categories[active].name}
                  </SuisseIntlText>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-500 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden mt-2"
                  >
                    <div className="space-y-2 py-2">
                      {categories.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = active === index;
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              setActive(index);
                              setIsMobileMenuOpen(false);
                            }}
                            className={`w-full flex items-center gap-4 p-2 text-left transition-colors duration-200 rounded-lg ${isActive ? "bg-gray-50" : "hover:bg-gray-50"}`}
                          >
                            <div className={`p-3 rounded-full bg-[#FCFFEE]`}>
                              <Icon
                                size={18}
                                color={isActive ? "#99BC0F" : "#99BC0F"}
                              />
                            </div>
                            <SuisseIntlText
                              weight="medium"
                              className={`text-sm font-medium ${isActive ? "text-primary-variant" : "text-gray-500"}`}
                            >
                              {item.name}
                            </SuisseIntlText>
                          </button>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              {!isMobileMenuOpen && (
                <div className="h-px bg-gray-100 w-full mt-2" />
              )}
            </div>
          </div>

          {/* Divider (desktop only) */}
          <div className="hidden lg:block w-px bg-gray-200" />

          {/* Main Content */}
          <div className="lg:w-3/4">
            <p className="text-sm font-semibold font-mono text-primary-variant uppercase tracking-wide mb-3">
              Services
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <DelightText
                  weight="medium"
                  className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8"
                >
                  {categories[active].name}
                </DelightText>

                {/* Image */}
                <div className="relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden mb-8">
                  <Image
                    src={categories[active].image}
                    alt={categories[active].name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-6 text-[#646A7A] leading-relaxed text-base">
                  {categories[active].content.map((item, idx) => {
                    if (item.type === "paragraph") {
                      return (
                        <p key={idx} className="text-[15px]">
                          <SuisseIntlText weight="regular">
                            {item.text}
                          </SuisseIntlText>
                        </p>
                      );
                    }
                    if (item.type === "heading") {
                      return (
                        <div
                          key={idx}
                          className="flex items-center gap-2 mt-8 mb-4"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-variant" />
                          <SuisseIntlText
                            weight="semibold"
                            className="text-lg text-gray-900"
                          >
                            {item.text}
                          </SuisseIntlText>
                        </div>
                      );
                    }
                    if (item.type === "list" && item.items) {
                      return (
                        <ul key={idx} className="space-y-3 pl-4">
                          {item.items.map(
                            (listItem: string, listIdx: number) => (
                              <li
                                key={listIdx}
                                className="flex items-start gap-3"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-2 shrink-0" />
                                <span className="text-[15px] leading-relaxed">
                                  <SuisseIntlText weight="regular">
                                    {listItem}
                                  </SuisseIntlText>
                                </span>
                              </li>
                            ),
                          )}
                        </ul>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* CTA */}
                <div className="mt-10">
                  <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 bg-[#CAE366] hover:bg-[#B5CC5B] text-black px-6 py-3 rounded-xl transition-all duration-300"
                  >
                    <SuisseIntlText weight="semibold" className="text-sm">
                      Get in touch
                    </SuisseIntlText>
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 10 10"
                      fill="none"
                      className="ml-1"
                    >
                      <path
                        d="M1 5H9M9 5L5 1M9 5L5 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
