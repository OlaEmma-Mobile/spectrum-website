import { Globe, HardHat, ShieldCheck, Users } from "lucide-react"
import { StaggerContainer, StaggerItem } from "@/components/animations/fade-in"
import { AnimatedNumber } from "@/components/animations/animated-number"

const stats = [
    {
        icon: Globe,
        value: 2874,
        label: "Client Satisfaction",
    },
    {
        icon: HardHat,
        value: 2000,
        label: "Project Complete",
    },
    {
        icon: ShieldCheck,
        value: 10,
        label: "Years Of Experiance",
    },
    {
        icon: Users,
        value: 100,
        label: "Team Ready",
    },
]

function StatItem({
    icon: Icon,
    value,
    label,
}: {
    icon: React.ComponentType<{ className?: string }>
    value: number
    label: string
}) {
    return (
        <div className="flex flex-col w-full justify-center items-center gap-3">
            <Icon className="h-10 w-10 text-white stroke-[1.2]" />
            <p className="text-xl font-semibold tracking-tight text-primary font-sans md:text-4xl flex items-center">
                <AnimatedNumber value={value} />
                <span className="text-primary ml-1">+</span>
            </p>
            <p className="text-sm text-center text-white/70 font-sans tracking-wide">
                {label}
            </p>
        </div>
    )
}

function StatDivider({ className }: { className?: string }) {
    return <div className={`w-[0.5px] self-stretch bg-[#F3F3F3] ${className}`} />
}

export function StatsSection() {
    return (
        <section className="bg-black py-20 md:py-28">
            <div className="mx-auto container px-4">
                <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 items-center gap-12 md:flex-row md:justify-between md:gap-0">
                    <StaggerItem className="flex items-center justify-between gap-4">
                        <StatItem {...stats[0]} />
                        <StatDivider />
                    </StaggerItem>
                    <StaggerItem className="flex items-center justify-between gap-4">
                        <StatItem {...stats[1]} />
                        <StatDivider className="hidden md:block" />
                    </StaggerItem>
                    <StaggerItem className="flex items-center justify-between gap-4">
                        <StatItem {...stats[2]} />
                        <StatDivider />
                    </StaggerItem>
                    <StaggerItem className="flex items-center justify-between gap-4">
                        <StatItem {...stats[3]} />
                    </StaggerItem>
                </StaggerContainer>
            </div>
        </section>
    )
}
