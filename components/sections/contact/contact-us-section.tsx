"use client";

import { Mail, Phone, CalendarDays, MapPin } from "lucide-react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaDribbble } from "react-icons/fa";
import { DelightText, SuisseIntlText } from "@/components/fonts";
import { ChevronDown } from "lucide-react";

export function ContactUsSection() {
    return (
        <section className="bg-white py-16 lg:py-24 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row overflow-hidden bg-white">

                    {/* Left Column - Contact Info */}
                    <div className="lg:w-[45%] bg-[#0A0A0B] text-white p-10 md:p-14 lg:p-16 flex flex-col justify-between">
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-12">
                                <DelightText weight="bold">Get in touch</DelightText>
                            </h2>

                            <div className="space-y-10">
                                {/* Email */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#18181B] flex items-center justify-center border border-white/5">
                                        <Mail className="w-5 h-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#A1A1AA] text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                                            EMAIL US
                                        </h3>
                                        <p className="text-white text-[15px] sm:text-base">
                                            <SuisseIntlText weight="regular">info@spectrumservice.co.uk</SuisseIntlText>
                                        </p>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#18181B] flex items-center justify-center border border-white/5">
                                        <Phone className="w-5 h-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#A1A1AA] text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                                            PHONE NUMBER
                                        </h3>
                                        <p className="text-white text-[15px] sm:text-base">
                                            <SuisseIntlText weight="regular">+449 000 111 222</SuisseIntlText>
                                        </p>
                                    </div>
                                </div>

                                {/* Work Hours */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#18181B] flex items-center justify-center border border-white/5">
                                        <CalendarDays className="w-5 h-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#A1A1AA] text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                                            WORK HOURS
                                        </h3>
                                        <p className="text-white text-[15px] sm:text-base">
                                            <SuisseIntlText weight="regular">Mon - Fri, 9AM - 6PM</SuisseIntlText>
                                        </p>
                                    </div>
                                </div>

                                {/* Address */}
                                <div className="flex items-start gap-6">
                                    <div className="w-12 h-12 shrink-0 rounded-full bg-[#18181B] flex items-center justify-center border border-white/5">
                                        <MapPin className="w-5 h-5 text-white/90" />
                                    </div>
                                    <div>
                                        <h3 className="text-[#A1A1AA] text-xs font-semibold tracking-wider uppercase mb-1.5 font-mono">
                                            {/* (Hidden visually in design, but keeps structure consistent) */}
                                            <span className="opacity-0">ADDRESS</span>
                                        </h3>
                                        <div className="text-white text-[15px] sm:text-base leading-relaxed -mt-6">
                                            <SuisseIntlText weight="regular">
                                                Buckingham Palace, by<br />
                                                Prince Charles, Castle
                                            </SuisseIntlText>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-16 lg:mt-24 pt-8 border-t border-white/10 relative">
                            <span className="absolute -top-[10px] left-0 bg-[#0A0A0B] pr-4 text-sm font-medium text-white flex items-center gap-4">
                                <div className="w-6 h-[1px] bg-white"></div>
                                <SuisseIntlText weight="medium">Connect with us:</SuisseIntlText>
                            </span>

                            <div className="flex gap-3 pt-4">
                                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#18181B] text-white hover:bg-white/10 transition-colors">
                                    <FaFacebookF className="w-[18px] h-[18px]" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#CAE366] text-black hover:bg-[#b8d14d] transition-colors">
                                    <FaTwitter className="w-[18px] h-[18px]" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#18181B] text-white hover:bg-white/10 transition-colors">
                                    <FaLinkedinIn className="w-[18px] h-[18px]" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#18181B] text-white hover:bg-white/10 transition-colors">
                                    <FaInstagram className="w-[18px] h-[18px]" />
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#18181B] text-white hover:bg-white/10 transition-colors">
                                    <FaDribbble className="w-[18px] h-[18px]" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Form */}
                    <div className="lg:w-[55%] p-8 md:p-14 lg:p-16">
                        <form className="space-y-6">

                            {/* Name & Email Row */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Full name"
                                        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] placeholder:text-gray-400"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Email address"
                                        className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] placeholder:text-gray-400"
                                    />
                                </div>
                            </div>

                            {/* Subjects */}
                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                    Subjects
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    placeholder="Subject"
                                    className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] placeholder:text-gray-400"
                                />
                            </div>

                            {/* Enquiry Type Dropdown */}
                            <div className="space-y-2 relative">
                                <label className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                    Is the enquiry regarding a new instruction or an existing one?
                                </label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] text-gray-500 appearance-none bg-white">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="new">New Instruction</option>
                                        <option value="existing">Existing Instruction</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Services Dropdown */}
                            <div className="space-y-2 relative">
                                <label className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                    Which services is required?
                                </label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] text-gray-500 appearance-none bg-white">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="building_survey">Building Survey</option>
                                        <option value="valuation">Valuation</option>
                                        <option value="project_management">Project Management</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Source Dropdown */}
                            <div className="space-y-2 relative">
                                <label className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                    How did you know about Project & Co?
                                </label>
                                <div className="relative">
                                    <select className="w-full px-4 py-3.5 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] text-gray-500 appearance-none bg-white">
                                        <option value="" disabled selected>Select an option</option>
                                        <option value="search">Search Engine</option>
                                        <option value="social">Social Media</option>
                                        <option value="referral">Referral</option>
                                    </select>
                                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" strokeWidth={1.5} />
                                </div>
                            </div>

                            {/* Message Area */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-xs font-semibold text-[#1E293B] font-mono tracking-wide uppercase">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-4 rounded-lg border border-gray-200 focus:outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all text-[15px] placeholder:text-gray-400 resize-none"
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <div className="pt-2">
                                <button type="submit" className="w-full bg-[#0A0A0B] hover:bg-black text-white font-medium py-4 rounded-xl transition-colors text-[15px]">
                                    <SuisseIntlText weight="medium">Send Message</SuisseIntlText>
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
