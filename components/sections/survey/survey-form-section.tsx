"use client";

import { FormEvent, useState } from "react";
import { ChevronDown } from "lucide-react";
import { SuisseIntlText } from "@/components/fonts";

export function SurveyFormSection() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus("submitting");
        const form = event.currentTarget;
        const formData = new FormData(form);
        const fields = Object.fromEntries(
            Array.from(formData.entries()).map(([key, value]) => [key, String(value)])
        );
        const searchParams = new URLSearchParams(window.location.search);
        const trackingKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "gclid"];
        const tracking = trackingKeys.reduce<Record<string, string>>((acc, key) => {
            const value = searchParams.get(key);
            if (value) acc[key] = value;
            return acc;
        }, {});

        try {
            const response = await fetch("/api/enquiries", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    formType: "home-buyer-survey",
                    page: window.location.pathname,
                    fields,
                    tracking,
                }),
            });
            if (!response.ok) throw new Error("Unable to submit");
            form.reset();
            setStatus("success");
        } catch {
            setStatus("error");
        }
    };

    return (
        <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <form className="space-y-10" onSubmit={handleSubmit}>

                    {/* Top Section - Service & Price */}
                    <div className="space-y-6">
                        {/* Service Dropdown */}
                        <div className="space-y-2 relative">
                            <label className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                CHOOSE A SERVICE
                            </label>
                            <div className="relative">
                                <select name="service" defaultValue="" className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] text-gray-500 appearance-none bg-white">
                                    <option value="" disabled>Select an Option</option>
                                    <option value="level2">Level 2 (Homebuyer Survey)</option>
                                    <option value="level3">Level 3 (Building Survey)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                            </div>
                        </div>

                        {/* Purchase Price */}
                        <div className="space-y-2">
                            <label htmlFor="purchasePrice" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                PURCHASE PRICE
                            </label>
                                <input
                                    type="text"
                                    id="purchasePrice"
                                    name="purchasePrice"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            <div className="flex justify-end pt-1">
                                <span className="text-[#CAE366] text-sm font-semibold tracking-wide">
                                    £349.00 inc VAT.
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Section: CURRENT ADDRESS */}
                    <div className="space-y-6 pt-2">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-5 bg-[#CAE366]"></div>
                            <h3 className="text-[13px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                CURRENT ADDRESS
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="address" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    ADDRESS
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="town" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    TOWN
                                </label>
                                <input
                                    type="text"
                                    id="town"
                                    name="town"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="county" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    COUNTY
                                </label>
                                <input
                                    type="text"
                                    id="county"
                                    name="county"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="postcode" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    POST CODE
                                </label>
                                <input
                                    type="text"
                                    id="postcode"
                                    name="postcode"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gray-100"></div>

                    {/* Section: YOUR DETAILS */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-5 bg-[#CAE366]"></div>
                            <h3 className="text-[13px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                YOUR DETAILS
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="firstName" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    FIRST NAME
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="lastName" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    LAST NAME
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    EMAIL ADDRESS
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="mobile" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    MOBILE NUMBER
                                </label>
                                <input
                                    type="tel"
                                    id="mobile"
                                    name="mobile"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="h-px w-full bg-gray-100"></div>

                    {/* Section: HOW CAN WE ACCESS THE PROPERTY? */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3">
                            <div className="w-1 h-5 bg-[#CAE366]"></div>
                            <h3 className="text-[13px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                HOW CAN WE ACCESS THE PROPERTY?
                            </h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="contactName" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    CONTACT NAME *
                                </label>
                                <input
                                    type="text"
                                    id="contactName"
                                    name="accessContactName"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="contactPhone" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                    CONTACT TELEPHONE NUMBER *
                                </label>
                                <input
                                    type="tel"
                                    id="contactPhone"
                                    name="accessContactPhone"
                                    className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="agreedPrice" className="text-[11px] font-bold text-[#1a2536] font-mono tracking-wide uppercase">
                                AGREED PURCHASE PRICE
                            </label>
                            <input
                                type="text"
                                id="agreedPrice"
                                name="agreedPurchasePrice"
                                className="w-full px-4 py-3.5 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px]"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-[14px] font-medium text-[#1a2536]">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                placeholder="Tell us about your project..."
                                className="w-full px-4 py-4 rounded-md border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] placeholder:text-gray-400 resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                        <button type="submit" className="w-full bg-[#0A0A0B] hover:bg-black text-white font-bold tracking-widest py-5 rounded-lg transition-colors text-sm uppercase disabled:opacity-70" disabled={status === "submitting"}>
                            <SuisseIntlText weight="medium">{status === "submitting" ? "SUBMITTING..." : "SUBMIT"}</SuisseIntlText>
                        </button>
                        {status === "success" && (
                            <p className="mt-3 text-sm text-green-700">Your enquiry has been received. We will contact you shortly.</p>
                        )}
                        {status === "error" && (
                            <p className="mt-3 text-sm text-red-600">We could not submit your enquiry. Please try again.</p>
                        )}
                    </div>

                </form>
            </div>
        </section>
    );
}
