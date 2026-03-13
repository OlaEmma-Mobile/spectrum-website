"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { SuisseIntlText } from "@/components/fonts";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function EpcQuoteSection() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const fields = Object.fromEntries(
      Array.from(formData.entries()).map(([key, value]) => [
        key,
        String(value),
      ]),
    );
    const searchParams = new URLSearchParams(window.location.search);
    const trackingKeys = [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_term",
      "utm_content",
      "gclid",
    ];
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
          formType: "epc-quote",
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
    <section
      className="w-full bg-white py-16 md:py-24 pt-0 px-4 sm:px-6 lg:px-8"
      id="quote"
    >
      <div className="container max-w-5xl mx-auto">
        {/* Top Image Banner */}
        <motion.div
          className="w-full aspect-2.5/1 md:aspect-3/1 rounded-2xl md:rounded-3xl overflow-hidden relative mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/images/epc-stats.png"
            alt="Workers"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-r from-[#9DC32A]/80 to-transparent mix-blend-multiply" />
          <div className="absolute inset-0 bg-linear-to-r from-[#99BC0F]/90 via-[#99BC0F]/50 to-transparent pointer-events-none" />
        </motion.div>

        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-[28px] font-bold text-[#0A0A0B] mb-2">
            <SuisseIntlText weight="semibold">EPC quote</SuisseIntlText>
          </h2>
          <p className="text-[#646A7A] text-[15px] leading-relaxed mb-8">
            <SuisseIntlText weight="regular">
              Please complete this form for a no obligation EPC quote.
              <br />
              You will be contacted shortly by one of our friendly advisors to
              kick start the process.
            </SuisseIntlText>
          </p>

          <form className="w-full space-y-8" onSubmit={handleSubmit}>
            {/* Your Details */}
            <div className="border border-[#E5E5E5] group">
              <div className="bg-black text-white px-5 py-3.5">
                <SuisseIntlText
                  weight="semibold"
                  className="text-sm tracking-wide"
                >
                  Your Details
                </SuisseIntlText>
              </div>
              <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {/* Left Col */}
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">
                      Contact Name *
                    </SuisseIntlText>
                  </label>
                  <input
                    name="contactName"
                    type="text"
                    className="w-full h-11 border border-[#E5E5E5] px-3 outline-none focus:border-[#99BC0F] text-sm text-[#0A0A0B] transition-colors"
                  />
                </div>
                {/* Right Col */}
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">Email *</SuisseIntlText>
                  </label>
                  <input
                    name="email"
                    type="email"
                    className="w-full h-11 border border-[#E5E5E5] px-3 outline-none focus:border-[#99BC0F] text-sm text-[#0A0A0B] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">
                      Phone Number *
                    </SuisseIntlText>
                  </label>
                  <input
                    name="phoneNumber"
                    type="tel"
                    className="w-full h-11 border border-[#E5E5E5] px-3 outline-none focus:border-[#99BC0F] text-sm text-[#0A0A0B] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">
                      Reason for the EPC *
                    </SuisseIntlText>
                  </label>
                  <select
                    name="epcReason"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Property Details */}
            <div className="border border-[#E5E5E5]">
              <div className="bg-black text-white px-5 py-3.5">
                <SuisseIntlText
                  weight="semibold"
                  className="text-sm tracking-wide"
                >
                  Property Details
                </SuisseIntlText>
              </div>
              <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">Address1 *</SuisseIntlText>
                  </label>
                  <select
                    name="addressLine1"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">Address</SuisseIntlText>
                  </label>
                  <input
                    name="address"
                    type="text"
                    className="w-full h-11 border border-[#E5E5E5] px-3 outline-none focus:border-[#99BC0F] text-sm text-[#0A0A0B] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">Town *</SuisseIntlText>
                  </label>
                  <select
                    name="town"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">Postcode *</SuisseIntlText>
                  </label>
                  <input
                    name="postcode"
                    type="text"
                    className="w-full h-11 border border-[#E5E5E5] px-3 outline-none focus:border-[#99BC0F] text-sm text-[#0A0A0B] transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">
                      Property Type *
                    </SuisseIntlText>
                  </label>
                  <select
                    name="propertyType"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center">
                    <SuisseIntlText weight="regular">
                      No Bed Rooms *
                    </SuisseIntlText>
                  </label>
                  <select
                    name="bedrooms"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center pr-2">
                    <SuisseIntlText weight="regular">
                      Required Inspection
                      <br className="hidden sm:block" /> Date
                    </SuisseIntlText>
                  </label>
                  <select
                    name="requiredInspectionDate"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[120px_1fr] lg:grid-cols-[140px_1fr] sm:items-center gap-2 sm:gap-4">
                  <label className="text-[13px] text-[#0A0A0B] leading-tight flex items-center pr-2">
                    <SuisseIntlText weight="regular">
                      Prefered Inspection
                      <br className="hidden sm:block" /> Time Scale
                    </SuisseIntlText>
                  </label>
                  <select
                    name="preferredInspectionTimescale"
                    className="w-full h-11 border border-[#E5E5E5] px-3 bg-white outline-none focus:border-[#99BC0F] text-sm appearance-none flex items-center bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2216%22 height=%2216%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22currentColor%22 stroke-width=%221.5%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22><path d=%22M6 9l6 6 6-6%22/></svg>')] bg-size-[16px] bg-position-[right_12px_center] bg-no-repeat pr-10 text-[#646A7A] transition-colors"
                  >
                    <option value="">Select</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="w-full h-12 md:h-14 bg-[#9DC32A] hover:bg-[#8bb023] text-white font-medium rounded-lg text-lg shadow-none disabled:opacity-70"
                disabled={status === "submitting"}
              >
                <SuisseIntlText weight="medium">
                  {status === "submitting" ? "Submitting..." : "Submit"}
                </SuisseIntlText>
              </Button>
            </div>
            {status === "success" && (
              <p className="text-sm text-green-700">
                Your enquiry has been received. We will contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-600">
                We could not submit your enquiry. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
