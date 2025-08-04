import { Card, CardContent } from "@/components/ui/card";
import { Linkedin, Twitter } from "lucide-react";

export function TeamSection() {
  const team = [
    {
      name: "Marzia Khanam",
      role: "Managing Partner",
      bio: "Former Goldman Sachs VP with 15+ years in venture capital.",
      image: "https://brlbd.com/wp-content/uploads/2022/07/13-256x300.jpg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Jahirul Islam",
      role: "Investment Partner",
      bio: "Ex-Google executive specializing in AI and enterprise software.",
      image:
        "https://brlbd.com/wp-content/uploads/2023/10/jahirul1-240x300.jpeg",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Liakat Hossain",
      role: "Principal",
      bio: "Former McKinsey consultant focused on healthcare and fintech.",
      image:
        "https://brlbd.com/wp-content/uploads/2023/10/WhatsApp-Image-2023-10-12-at-12.29.16.jpeg",
      linkedin: "#",
      twitter: "#",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experienced professionals who guide our investment
            decisions and support our portfolio companies.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card
              key={index}
              className="text-center cursor-pointer hover:-translate-y-2 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
