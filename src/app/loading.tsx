export default function Loading() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-[#EBE1CC]">
            <svg
                className="h-20 w-20 animate-spin text-[#C4621D]"
                viewBox="0 0 100 100"
                fill="currentColor"
            >
                {Array.from({ length: 12 }).map((_, i) => (
                    <rect
                        key={i}
                        x="46"
                        y="10"
                        width="8"
                        height="22"
                        rx="4"
                        transform={`rotate(${i * 30} 50 50)`}
                        style={{ opacity: (i + 1) / 12 }}
                    />
                ))}
            </svg>

            <p className="mt-6 font-serif text-lg font-semibold tracking-wider text-[#3B1F0E]">
                Loading...
            </p>
        </div>
    );
}