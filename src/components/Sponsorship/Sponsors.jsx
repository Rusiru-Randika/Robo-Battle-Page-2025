const sponsors = [
    { id: 1, name: "Sponsor A", logo: "/logos/sponsor-a.png" },
    { id: 2, name: "Sponsor B", logo: "/logos/sponsor-b.png" },
    { id: 3, name: "Sponsor C", logo: "/logos/sponsor-c.png" },
    { id: 4, name: "Sponsor D", logo: "/logos/sponsor-d.png" },
];
const SponsorsSection = () => {
    return (
        <section className="py-12 ">
            <div className="text-white container mx-auto text-center">
                <h2 className=" text-3xl font-bold mb-8">Our Sponsors</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {sponsors.map((sponsor) => (
                        <div
                            key={sponsor.id}
                            className="p-4shadow rounded-lg flex items-center justify-center transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-16 w-auto"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SponsorsSection;