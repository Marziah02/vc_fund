"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  ArrowRight,
  User,
  Share2,
  Bookmark,
  ThumbsUp,
  MessageCircle,
} from "lucide-react";

export function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPost, setSelectedPost] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    "All",
    "Industry Insights",
    "Portfolio Updates",
    "Market Trends",
    "Startup Tips",
  ];

  const blogPosts = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt:
        "Exploring how artificial intelligence is transforming the enterprise software landscape and what it means for investors.",
      fullContent: `
        <p>Artificial Intelligence is no longer a futuristic concept—it's reshaping the enterprise software landscape today. As venture capitalists, we're witnessing unprecedented opportunities in AI-driven solutions that are fundamentally changing how businesses operate.</p>
        
        <h3>The Current AI Landscape</h3>
        <p>The enterprise AI market is experiencing explosive growth, with companies increasingly adopting AI solutions to streamline operations, enhance decision-making, and drive innovation. From predictive analytics to automated customer service, AI is becoming integral to business success.</p>
        
        <h3>Key Investment Opportunities</h3>
        <p>We're particularly excited about several emerging areas:</p>
        <ul>
          <li><strong>Conversational AI:</strong> Advanced chatbots and virtual assistants that can handle complex customer interactions</li>
          <li><strong>Process Automation:</strong> AI-powered tools that can automate repetitive tasks and workflows</li>
          <li><strong>Predictive Analytics:</strong> Solutions that help businesses forecast trends and make data-driven decisions</li>
          <li><strong>AI-Enhanced Security:</strong> Cybersecurity solutions that use machine learning to detect and prevent threats</li>
        </ul>
        
        <h3>What This Means for Investors</h3>
        <p>The AI revolution presents both opportunities and challenges. Companies that successfully integrate AI into their core offerings are seeing significant competitive advantages, while those that lag behind risk obsolescence.</p>
        
        <p>As investors, we're looking for startups that not only leverage AI technology but also demonstrate clear value propositions, strong data strategies, and scalable business models. The key is finding companies that use AI to solve real problems rather than implementing it for the sake of following trends.</p>
        
        <h3>Looking Ahead</h3>
        <p>The next five years will be critical for AI adoption in enterprise software. We expect to see continued consolidation in the market, with the most innovative and well-funded companies emerging as leaders in their respective niches.</p>
      `,
      category: "Industry Insights",
      author: "Sarah Chen",
      authorBio:
        "Managing Partner at VCFund.vc with 15+ years of experience in venture capital and enterprise software investments.",
      authorImage:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-15",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: true,
      tags: ["AI", "Enterprise Software", "Investment Trends", "Technology"],
      likes: 127,
      comments: 23,
    },
    {
      title: "Portfolio Spotlight: TechFlow's Series A Success",
      excerpt:
        "How TechFlow raised $2.5M Series A and achieved 340% growth in just 18 months.",
      fullContent: `
        <p>We're thrilled to share the incredible success story of TechFlow, one of our portfolio companies that recently closed a $2.5M Series A round and achieved remarkable 340% growth in just 18 months.</p>
        
        <h3>The Journey</h3>
        <p>When we first met the TechFlow team in early 2023, we were impressed by their vision to revolutionize enterprise automation. The founders, Alex Chen and Sarah Kim, brought deep technical expertise from their previous roles at Google and Microsoft, combined with a clear understanding of the market opportunity.</p>
        
        <h3>Key Success Factors</h3>
        <p>Several factors contributed to TechFlow's exceptional growth:</p>
        <ul>
          <li><strong>Product-Market Fit:</strong> TechFlow identified a genuine pain point in enterprise workflow automation and built a solution that customers love</li>
          <li><strong>Strong Team:</strong> The founding team's technical expertise and industry connections were crucial for rapid product development and customer acquisition</li>
          <li><strong>Strategic Partnerships:</strong> Early partnerships with major enterprise clients provided validation and recurring revenue</li>
          <li><strong>Scalable Technology:</strong> The platform was built with scalability in mind, allowing for rapid customer onboarding</li>
        </ul>
        
        <h3>The Numbers</h3>
        <p>TechFlow's growth metrics speak for themselves:</p>
        <ul>
          <li>340% year-over-year revenue growth</li>
          <li>150+ enterprise clients</li>
          <li>98% customer retention rate</li>
          <li>$2.1M in annual recurring revenue</li>
        </ul>
        
        <h3>What's Next</h3>
        <p>With the Series A funding, TechFlow plans to expand their engineering team, enhance their AI capabilities, and accelerate international expansion. We're excited to continue supporting their journey as they build the future of enterprise automation.</p>
      `,
      category: "Portfolio Updates",
      author: "Michael Rodriguez",
      authorBio:
        "Investment Partner specializing in AI and enterprise software investments.",
      authorImage:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-12",
      readTime: "4 min read",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      tags: ["Portfolio", "Series A", "Growth", "TechFlow"],
      likes: 89,
      comments: 15,
    },
    {
      title: "Market Analysis: CleanTech Investment Trends 2025",
      excerpt:
        "Deep dive into the renewable energy sector and emerging opportunities for venture capital.",
      fullContent: `
        <p>The CleanTech sector is experiencing a renaissance, driven by increasing environmental awareness, supportive government policies, and technological breakthroughs. As we look ahead to 2025, we see unprecedented opportunities for venture capital investment in renewable energy and sustainability solutions.</p>
        
        <h3>Market Overview</h3>
        <p>The global CleanTech market is projected to reach $2.5 trillion by 2025, with venture capital playing a crucial role in funding innovation. Key drivers include:</p>
        <ul>
          <li>Government incentives and regulatory support</li>
          <li>Declining costs of renewable energy technologies</li>
          <li>Corporate sustainability commitments</li>
          <li>Consumer demand for eco-friendly solutions</li>
        </ul>
        
        <h3>Investment Opportunities</h3>
        <p>We're particularly excited about several emerging areas in CleanTech:</p>
        
        <h4>Energy Storage</h4>
        <p>Advanced battery technologies and grid-scale storage solutions are critical for renewable energy adoption. Companies developing next-generation batteries, hydrogen storage, and smart grid technologies represent significant opportunities.</p>
        
        <h4>Carbon Capture and Utilization</h4>
        <p>Technologies that can capture, store, and utilize carbon dioxide are becoming increasingly important as companies seek to achieve net-zero emissions.</p>
        
        <h4>Sustainable Transportation</h4>
        <p>Electric vehicles, autonomous driving, and alternative fuels are transforming the transportation sector, creating opportunities for innovative startups.</p>
        
        <h3>Investment Strategy</h3>
        <p>Our approach to CleanTech investments focuses on companies with:</p>
        <ul>
          <li>Proven technology with clear competitive advantages</li>
          <li>Strong management teams with industry expertise</li>
          <li>Scalable business models</li>
          <li>Clear path to profitability</li>
        </ul>
        
        <h3>Looking Forward</h3>
        <p>The CleanTech sector presents both tremendous opportunities and unique challenges. Success requires careful evaluation of technology risks, market dynamics, and regulatory environments. We believe that companies addressing real environmental problems with innovative, scalable solutions will create significant value for investors and society.</p>
      `,
      category: "Market Trends",
      author: "Emily Johnson",
      authorBio:
        "Principal focusing on CleanTech and sustainability investments.",
      authorImage:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-10",
      readTime: "7 min read",
      image:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      tags: [
        "CleanTech",
        "Renewable Energy",
        "Market Analysis",
        "Sustainability",
      ],
      likes: 156,
      comments: 31,
    },
    {
      title: "10 Essential Tips for First-Time Founders",
      excerpt:
        "Key insights and practical advice for entrepreneurs starting their first venture.",
      fullContent: `
        <p>Starting your first company is both exhilarating and challenging. Having worked with hundreds of entrepreneurs over the years, we've identified key patterns that separate successful founders from those who struggle. Here are our top 10 tips for first-time founders.</p>
        
        <h3>1. Validate Your Idea Early and Often</h3>
        <p>Don't fall in love with your solution—fall in love with the problem. Talk to potential customers before writing a single line of code. Understand their pain points deeply and validate that your solution addresses a real need.</p>
        
        <h3>2. Build a Strong Co-Founder Relationship</h3>
        <p>Choose your co-founders carefully. Look for complementary skills, shared values, and the ability to work through difficult decisions together. Establish clear roles and responsibilities from the beginning.</p>
        
        <h3>3. Focus on Product-Market Fit</h3>
        <p>Everything else is secondary until you achieve product-market fit. This means building something people want and are willing to pay for. Be prepared to pivot if necessary.</p>
        
        <h3>4. Manage Your Cash Flow</h3>
        <p>Cash is the lifeblood of your startup. Understand your burn rate, runway, and key financial metrics. Plan for fundraising well before you need the money.</p>
        
        <h3>5. Hire Slowly, Fire Quickly</h3>
        <p>Your early hires will shape your company culture. Take time to find the right people, but don't hesitate to make changes if someone isn't working out.</p>
        
        <h3>6. Build a Strong Network</h3>
        <p>Surround yourself with mentors, advisors, and fellow entrepreneurs. Join startup communities, attend events, and don't be afraid to ask for help.</p>
        
        <h3>7. Focus on Customer Success</h3>
        <p>Happy customers are your best marketing channel. Prioritize customer success and use their feedback to improve your product continuously.</p>
        
        <h3>8. Embrace Failure as Learning</h3>
        <p>Failure is part of the entrepreneurial journey. Learn from your mistakes, adapt quickly, and don't let setbacks discourage you from pursuing your vision.</p>
        
        <h3>9. Maintain Work-Life Balance</h3>
        <p>Building a startup is a marathon, not a sprint. Take care of your physical and mental health. Burnout helps no one.</p>
        
        <h3>10. Stay Customer-Focused</h3>
        <p>Never lose sight of your customers' needs. As you grow, it's easy to get caught up in internal processes and lose touch with the market. Stay close to your customers.</p>
        
        <h3>Final Thoughts</h3>
        <p>Remember, every successful entrepreneur started as a first-time founder. The key is to stay focused, be adaptable, and never stop learning. We're here to support entrepreneurs on their journey and look forward to hearing from founders who are building the future.</p>
      `,
      category: "Startup Tips",
      author: "Sarah Chen",
      authorBio:
        "Managing Partner at VCFund.vc with 15+ years of experience in venture capital and enterprise software investments.",
      authorImage:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-08",
      readTime: "6 min read",
      image:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      tags: ["Startup Tips", "Entrepreneurship", "Founders", "Business Advice"],
      likes: 203,
      comments: 45,
    },
    {
      title: "HealthTech Revolution: Digital Transformation in Healthcare",
      excerpt:
        "How digital health platforms are reshaping patient care and creating new investment opportunities.",
      fullContent: `
        <p>The healthcare industry is undergoing a digital transformation that's creating unprecedented opportunities for innovation and investment. From telemedicine to AI-powered diagnostics, HealthTech companies are revolutionizing how we approach patient care.</p>
        
        <h3>The Digital Health Landscape</h3>
        <p>The COVID-19 pandemic accelerated the adoption of digital health solutions, with telemedicine usage increasing by over 3000% in some markets. This shift has opened doors for innovative companies to address long-standing challenges in healthcare delivery.</p>
        
        <h3>Key Investment Areas</h3>
        
        <h4>Telemedicine and Remote Care</h4>
        <p>Virtual consultations have become mainstream, but the next wave of innovation focuses on specialized remote care, chronic disease management, and integrated care platforms that connect patients, providers, and payers.</p>
        
        <h4>AI-Powered Diagnostics</h4>
        <p>Machine learning algorithms are showing remarkable accuracy in medical imaging, pathology, and early disease detection. Companies developing FDA-approved AI diagnostic tools represent significant opportunities.</p>
        
        <h4>Digital Therapeutics</h4>
        <p>Software-based interventions that can prevent, manage, or treat medical conditions are gaining regulatory approval and payer coverage, creating a new category of healthcare solutions.</p>
        
        <h4>Health Data Analytics</h4>
        <p>Companies that can unlock insights from healthcare data while maintaining privacy and security are helping providers improve outcomes and reduce costs.</p>
        
        <h3>Investment Considerations</h3>
        <p>HealthTech investments require careful consideration of several factors:</p>
        <ul>
          <li><strong>Regulatory Compliance:</strong> Understanding FDA approval processes and healthcare regulations</li>
          <li><strong>Clinical Evidence:</strong> Demonstrating efficacy through rigorous clinical studies</li>
          <li><strong>Reimbursement:</strong> Securing payer coverage for sustainable business models</li>
          <li><strong>Data Security:</strong> Ensuring HIPAA compliance and robust cybersecurity measures</li>
        </ul>
        
        <h3>Our Portfolio Success</h3>
        <p>Our investment in HealthTech Pro exemplifies the potential in this sector. The company has achieved FDA approval for its AI diagnostic tool, serves over 1 million patients, and maintains partnerships with top-tier health systems.</p>
        
        <h3>Future Outlook</h3>
        <p>The HealthTech sector is still in its early stages, with tremendous potential for growth. We expect continued innovation in areas like personalized medicine, mental health solutions, and integrated care platforms. The companies that can navigate regulatory challenges while delivering measurable health outcomes will create significant value.</p>
      `,
      category: "Industry Insights",
      author: "Michael Rodriguez",
      authorBio:
        "Investment Partner specializing in AI and enterprise software investments.",
      authorImage:
        "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-05",
      readTime: "8 min read",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      tags: [
        "HealthTech",
        "Digital Health",
        "AI Diagnostics",
        "Healthcare Innovation",
      ],
      likes: 134,
      comments: 28,
    },
    {
      title: "Navigating the Current FinTech Landscape",
      excerpt:
        "Understanding the evolving financial technology sector and identifying promising investment targets.",
      fullContent: `
        <p>The FinTech sector continues to evolve rapidly, driven by changing consumer expectations, regulatory developments, and technological innovations. As investors, we're seeing both tremendous opportunities and increased competition in this dynamic market.</p>
        
        <h3>Market Dynamics</h3>
        <p>The FinTech landscape has matured significantly over the past decade. While early opportunities focused on disrupting traditional banking, today's innovations are more nuanced, addressing specific pain points in financial services with sophisticated solutions.</p>
        
        <h3>Emerging Opportunities</h3>
        
        <h4>Embedded Finance</h4>
        <p>The integration of financial services into non-financial platforms is creating new opportunities. Companies that can seamlessly embed payments, lending, or insurance into existing workflows are seeing strong adoption.</p>
        
        <h4>B2B FinTech</h4>
        <p>While consumer FinTech has received much attention, B2B solutions addressing corporate banking, treasury management, and financial operations represent significant opportunities with less competition.</p>
        
        <h4>RegTech and Compliance</h4>
        <p>As financial regulations become more complex, companies providing automated compliance solutions, risk management, and regulatory reporting are in high demand.</p>
        
        <h4>Alternative Lending</h4>
        <p>Innovative approaches to credit assessment and lending, particularly for underserved markets, continue to create value for both borrowers and investors.</p>
        
        <h3>Investment Strategy</h3>
        <p>Our approach to FinTech investments emphasizes:</p>
        <ul>
          <li><strong>Regulatory Expertise:</strong> Teams that understand and can navigate complex financial regulations</li>
          <li><strong>Technology Differentiation:</strong> Proprietary technology that creates sustainable competitive advantages</li>
          <li><strong>Market Validation:</strong> Proven demand from financial institutions or end customers</li>
          <li><strong>Scalable Business Models:</strong> Clear paths to profitability and growth</li>
        </ul>
        
        <h3>Portfolio Highlight</h3>
        <p>Our investment in FinanceAI demonstrates the potential in B2B FinTech. The company's AI-powered risk assessment platform processes over 10 billion transactions monthly and has prevented more than $50 million in fraudulent transactions for its clients.</p>
        
        <h3>Challenges and Considerations</h3>
        <p>FinTech investments come with unique challenges:</p>
        <ul>
          <li>Regulatory compliance and licensing requirements</li>
          <li>Long sales cycles with financial institutions</li>
          <li>High customer acquisition costs in competitive markets</li>
          <li>Need for significant capital to scale operations</li>
        </ul>
        
        <h3>Looking Ahead</h3>
        <p>The FinTech sector will continue to evolve, with opportunities shifting toward more specialized solutions and B2B applications. Companies that can demonstrate clear value propositions, regulatory compliance, and sustainable unit economics will thrive in this maturing market.</p>
      `,
      category: "Market Trends",
      author: "Emily Johnson",
      authorBio:
        "Principal focusing on CleanTech and sustainability investments.",
      authorImage:
        "https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=150",
      date: "2025-01-03",
      readTime: "5 min read",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      featured: false,
      tags: ["FinTech", "Financial Services", "B2B", "RegTech"],
      likes: 98,
      comments: 19,
    },
  ];

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  const openModal = (post: any) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, insights, and stories from the
            venture capital world.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-blue-600 hover:bg-blue-700"
                  : ""
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Post */}
        {featuredPost && selectedCategory === "All" && (
          <div className="mb-16">
            <Card
              className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(featuredPost)}
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <Badge className="bg-blue-100 text-blue-800 mr-3">
                      Featured
                    </Badge>
                    <Badge variant="outline">{featuredPost.category}</Badge>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <Button
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        openModal(featuredPost);
                      }}
                    >
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
              onClick={() => openModal(post)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-white/90 text-gray-900"
                  >
                    {post.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-700 p-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(post);
                    }}
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="px-8">
            Load More Articles
          </Button>
        </div>
      </div>

      {/* Blog Post Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          {selectedPost && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-blue-100 text-blue-800">
                    {selectedPost.category}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <DialogTitle className="text-3xl font-bold text-gray-900 leading-tight">
                  {selectedPost.title}
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6">
                {/* Author and Meta Info */}
                <div className="flex items-center justify-between border-b pb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      src={selectedPost.authorImage}
                      alt={selectedPost.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900">
                        {selectedPost.author}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {selectedPost.authorBio}
                      </p>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(selectedPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {/* Hero Image */}
                      <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
                        <img
                          src={selectedPost.image}
                          alt={selectedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {selectedPost.readTime}
                      {/* Article Content */}
                      <div className="prose prose-lg max-w-none">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: selectedPost.fullContent,
                          }}
                        />
                      </div>
                    </div>
                    {/* Tags */}
                    <div className="border-t pt-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">
                        Tags
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedPost.tags.map((tag: string, index: number) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* Engagement Stats */}
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <ThumbsUp className="h-4 w-4 mr-1" />
                            {selectedPost.likes}
                          </Button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="ghost"
                            size="sm"
                            className="text-gray-600 hover:text-blue-600"
                          >
                            <MessageCircle className="h-4 w-4 mr-1" />
                            {selectedPost.comments}
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" size="sm">
                          <Bookmark className="h-4 w-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Author Bio */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <div className="flex items-start space-x-4">
                    <img
                      src={selectedPost.authorImage}
                      alt={selectedPost.author}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        {selectedPost.author}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {selectedPost.authorBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
