"use client";
import { useState } from "react";
import Navbar from "@/Components/Navbar";
import CategoryCard from "@/Components/CategoryCard";
import CategoryDetailModal from "@/Components/CategoryDetailModal";
import { Shield, Users, MessageCircle, CreditCard, UserX, Wallet, ShoppingCart, Building, Baby, Clock, Heart, LucideIcon } from "lucide-react";

export interface Category {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  detailContent: {
    overview: string;
    keyThreat: string[];
    bestPractices: string[];
    tips: string[];
    warnings: string[];
  };
}

const InformationPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories: Category[] = [
    {
      id: 1,
      title: "Personal Safety",
      description: "Protect your personal information and digital identity from cyber threats",
      icon: Shield,
      color: "bg-blue-500",
      detailContent: {
        overview: "Personal safety in the digital age involves protecting your personal information, maintaining privacy, and securing your digital identity across all online platforms.",
        keyThreat: [
          "Identity theft and personal data breaches",
          "Social engineering attacks targeting personal information",
          "Unauthorized access to personal accounts",
          "Privacy invasion through data mining",
          "Fake identity creation using stolen personal data"
        ],
        bestPractices: [
          "Use strong, unique passwords for all accounts",
          "Enable two-factor authentication wherever possible",
          "Regularly review privacy settings on all platforms",
          "Avoid sharing sensitive personal information online",
          "Keep software and security systems updated",
          "Use privacy-focused browsers and search engines"
        ],
        tips: [
          "Never share your full birth date, address, or phone number publicly",
          "Use pseudonyms or nicknames instead of real names when possible",
          "Regularly Google yourself to see what information is publicly available",
          "Be cautious about location sharing on social media",
          "Review and delete old accounts you no longer use"
        ],
        warnings: [
          "Avoid using public Wi-Fi for sensitive activities",
          "Be wary of phishing emails asking for personal information",
          "Don't click on suspicious links or download unknown attachments",
          "Never give personal information over unsolicited phone calls"
        ]
      }
    },
    {
      id: 2,
      title: "Social Media",
      description: "Stay safe while connecting with friends and sharing content on social platforms",
      icon: Users,
      color: "bg-purple-500",
      detailContent: {
        overview: "Social media safety involves protecting your privacy, avoiding scams, and maintaining a positive digital presence while enjoying social connections online.",
        keyThreat: [
          "Privacy breaches and data harvesting",
          "Fake profiles and catfishing",
          "Social engineering through friend requests",
          "Malicious links and infected attachments",
          "Cyberbullying and harassment",
          "Account hijacking and impersonation"
        ],
        bestPractices: [
          "Review and adjust privacy settings regularly",
          "Think before you post - consider long-term implications",
          "Verify friend requests from unknown people",
          "Use privacy-focused sharing options",
          "Report suspicious accounts and content",
          "Keep your contact information private"
        ],
        tips: [
          "Don't accept friend requests from people you don't know personally",
          "Avoid posting real-time location updates",
          "Be selective about what photos and information you share",
          "Use platform-specific privacy tools and blocking features",
          "Regularly audit your friend lists and followers"
        ],
        warnings: [
          "Never share passwords or account access with others",
          "Don't click on suspicious links, even from friends",
          "Avoid sharing personal financial information",
          "Be cautious of 'too good to be true' offers and contests"
        ]
      }
    },
    {
      id: 3,
      title: "WhatsApp Forwards",
      description: "Identify and handle misinformation in messaging apps responsibly",
      icon: MessageCircle,
      color: "bg-green-500",
      detailContent: {
        overview: "WhatsApp forwards can spread misinformation rapidly. Learning to identify, verify, and handle forwarded messages is crucial for digital literacy.",
        keyThreat: [
          "Spread of fake news and misinformation",
          "Malicious links in forwarded messages",
          "Scam messages requesting money or personal information",
          "Virus-infected media files",
          "Panic-inducing false health or safety alerts"
        ],
        bestPractices: [
          "Verify information before forwarding messages",
          "Check multiple reliable sources for news and updates",
          "Use fact-checking websites and official sources",
          "Be skeptical of sensational or emotional content",
          "Don't forward messages that seem suspicious",
          "Educate family and friends about misinformation"
        ],
        tips: [
          "Look for the 'Forwarded' label on messages",
          "Cross-check news with official government or news websites",
          "Be extra cautious with health and medical advice",
          "Don't forward chain messages or 'forward to 10 people' requests",
          "Use WhatsApp's 'Search Web' feature for suspicious content"
        ],
        warnings: [
          "Never forward messages asking for money or donations",
          "Don't share messages with unverified medical advice",
          "Avoid forwarding messages that promote hatred or discrimination",
          "Be careful with messages claiming 'government alerts' without verification"
        ]
      }
    },
    {
      id: 4,
      title: "Online Banking",
      description: "Secure your financial transactions and protect your banking information",
      icon: CreditCard,
      color: "bg-red-500",
      detailContent: {
        overview: "Online banking security is crucial for protecting your financial assets. Proper security measures can prevent unauthorized access and financial fraud.",
        keyThreat: [
          "Phishing attacks targeting banking credentials",
          "Man-in-the-middle attacks on banking sessions",
          "Malware designed to steal banking information",
          "Fake banking apps and websites",
          "SIM swapping for SMS-based authentication bypass"
        ],
        bestPractices: [
          "Always use official banking apps and websites",
          "Enable multi-factor authentication",
          "Use dedicated devices or browsers for banking",
          "Regularly monitor account statements",
          "Set up account alerts for transactions",
          "Log out completely after banking sessions"
        ],
        tips: [
          "Always type your bank's URL directly or use bookmarks",
          "Look for 'https://' and security certificates",
          "Never do banking on public Wi-Fi",
          "Use strong, unique passwords for banking accounts",
          "Keep your banking app and device updated"
        ],
        warnings: [
          "Banks will never ask for passwords or PINs via email or SMS",
          "Don't save banking passwords in browsers on shared computers",
          "Never share your banking credentials with anyone",
          "Be suspicious of urgent banking-related emails or calls"
        ]
      }
    },
    {
      id: 5,
      title: "Cyber Bullying",
      description: "Recognize, prevent, and respond to online harassment and bullying",
      icon: UserX,
      color: "bg-orange-500",
      detailContent: {
        overview: "Cyberbullying involves using digital platforms to harass, threaten, or embarrass others. Understanding how to recognize and respond to it is essential for online safety.",
        keyThreat: [
          "Persistent harassment through messages or comments",
          "Public humiliation and embarrassment",
          "Threats and intimidation online",
          "Spreading rumors or false information",
          "Exclusion from online groups and activities",
          "Sharing private information or images without consent"
        ],
        bestPractices: [
          "Document evidence of cyberbullying incidents",
          "Use blocking and reporting features on platforms",
          "Don't respond directly to bullies",
          "Seek support from trusted adults or authorities",
          "Report serious threats to law enforcement",
          "Build a support network of friends and family"
        ],
        tips: [
          "Take screenshots of bullying messages as evidence",
          "Don't retaliate or engage in arguments with bullies",
          "Use privacy settings to limit who can contact you",
          "Consider taking breaks from social media if needed",
          "Talk to someone you trust about your experiences"
        ],
        warnings: [
          "Never share personal information with people who bully you",
          "Don't meet online bullies in person",
          "Take threats of violence seriously and report them",
          "Don't let cyberbullying make you completely withdraw from online activities"
        ]
      }
    },
    {
      id: 6,
      title: "Digital Payment Wallets",
      description: "Keep your digital payments and wallet applications secure from fraud",
      icon: Wallet,
      color: "bg-indigo-500",
      detailContent: {
        overview: "Digital wallets offer convenience but require proper security measures to protect against fraud and unauthorized transactions.",
        keyThreat: [
          "Unauthorized access to wallet accounts",
          "Fake payment requests and QR codes",
          "SIM swap attacks to bypass SMS verification",
          "Malicious apps mimicking legitimate wallets",
          "Social engineering for wallet credentials"
        ],
        bestPractices: [
          "Use strong authentication methods (biometric, PIN)",
          "Enable transaction notifications and limits",
          "Regularly review transaction history",
          "Only download wallet apps from official stores",
          "Link wallets to secure bank accounts",
          "Keep wallet apps updated"
        ],
        tips: [
          "Verify merchant details before making payments",
          "Use secure networks for wallet transactions",
          "Set up transaction limits and alerts",
          "Don't save wallet PINs or passwords anywhere",
          "Use different PINs for different financial apps"
        ],
        warnings: [
          "Never share wallet PINs, passwords, or OTPs",
          "Don't scan QR codes from unknown sources",
          "Be cautious of 'cashback' or 'reward' offers requiring wallet access",
          "Don't use wallet apps on rooted or jailbroken devices"
        ]
      }
    },
    {
      id: 7,
      title: "Online Shopping",
      description: "Shop safely on the internet and avoid e-commerce scams",
      icon: ShoppingCart,
      color: "bg-pink-500",
      detailContent: {
        overview: "Online shopping safety involves identifying legitimate websites, protecting payment information, and avoiding common e-commerce scams.",
        keyThreat: [
          "Fake e-commerce websites and scams",
          "Credit card fraud and payment theft",
          "Non-delivery of purchased items",
          "Counterfeit or substandard products",
          "Identity theft through fake shopping sites"
        ],
        bestPractices: [
          "Shop only on reputable, well-known websites",
          "Check website security certificates (https://)",
          "Read reviews and ratings before purchasing",
          "Use secure payment methods",
          "Keep records of all transactions",
          "Verify seller credentials on marketplace platforms"
        ],
        tips: [
          "Look for contact information and customer service details",
          "Compare prices across multiple websites",
          "Check return and refund policies before buying",
          "Use credit cards instead of debit cards for online purchases",
          "Be wary of deals that seem too good to be true"
        ],
        warnings: [
          "Don't shop on public Wi-Fi networks",
          "Avoid websites with poor design or numerous spelling errors",
          "Never provide unnecessary personal information",
          "Be cautious of pressure tactics and limited-time offers"
        ]
      }
    },
    {
      id: 8,
      title: "Workplace Security",
      description: "Maintain cybersecurity standards in professional environments",
      icon: Building,
      color: "bg-teal-500",
      detailContent: {
        overview: "Workplace cybersecurity protects both personal and company data. Following security protocols helps maintain a safe digital work environment.",
        keyThreat: [
          "Corporate data breaches and leaks",
          "Phishing attacks targeting work emails",
          "Malware infections through work systems",
          "Insider threats and unauthorized access",
          "Social engineering attacks on employees"
        ],
        bestPractices: [
          "Follow company IT security policies",
          "Use strong passwords for work accounts",
          "Keep work software and systems updated",
          "Be cautious with email attachments and links",
          "Secure physical workspaces and devices",
          "Report security incidents promptly"
        ],
        tips: [
          "Use company-approved software and apps only",
          "Lock your computer when stepping away",
          "Don't mix personal and professional accounts",
          "Be careful about what you share on professional networks",
          "Attend cybersecurity training sessions"
        ],
        warnings: [
          "Never share work credentials with colleagues",
          "Don't use personal devices for sensitive work tasks",
          "Avoid discussing confidential work matters in public",
          "Don't click on suspicious work-related emails"
        ]
      }
    },
    {
      id: 9,
      title: "Kids Online Safety",
      description: "Protect children from online threats and inappropriate content",
      icon: Baby,
      color: "bg-yellow-500",
      detailContent: {
        overview: "Children face unique online risks. Parents and guardians must actively protect kids while teaching them safe digital habits.",
        keyThreat: [
          "Exposure to inappropriate content",
          "Online predators and stranger danger",
          "Cyberbullying and peer harassment",
          "Privacy violations and data collection",
          "Addiction to games and social media",
          "Accidental purchases and financial risks"
        ],
        bestPractices: [
          "Use parental control software and settings",
          "Monitor children's online activities regularly",
          "Teach kids about online safety rules",
          "Create safe online spaces for children",
          "Establish screen time limits and rules",
          "Encourage open communication about online experiences"
        ],
        tips: [
          "Keep computers and devices in common areas",
          "Teach children never to share personal information",
          "Review and approve friend requests and contacts",
          "Use kid-friendly search engines and platforms",
          "Regularly check browsing history and app usage"
        ],
        warnings: [
          "Children should never meet online friends in person without supervision",
          "Don't allow children to share photos or personal details online",
          "Be alert to sudden changes in behavior related to device use",
          "Monitor for signs of cyberbullying or inappropriate contact"
        ]
      }
    },
    {
      id: 10,
      title: "Daily Updates and Habits",
      description: "Develop secure daily digital habits and stay updated with security practices",
      icon: Clock,
      color: "bg-gray-500",
      detailContent: {
        overview: "Building good daily digital habits and staying updated on security threats is essential for maintaining long-term cybersecurity.",
        keyThreat: [
          "Outdated software vulnerabilities",
          "Weak password practices",
          "Lack of awareness about new threats",
          "Poor backup and recovery practices",
          "Inconsistent security updates"
        ],
        bestPractices: [
          "Enable automatic security updates",
          "Regularly backup important data",
          "Stay informed about current cyber threats",
          "Review and update passwords periodically",
          "Conduct regular security audits of accounts",
          "Follow cybersecurity news and advisories"
        ],
        tips: [
          "Set weekly reminders to check for software updates",
          "Use password managers for strong, unique passwords",
          "Subscribe to security newsletters and alerts",
          "Perform monthly reviews of account activity",
          "Keep emergency contact information updated"
        ],
        warnings: [
          "Don't ignore security update notifications",
          "Avoid postponing important security patches",
          "Don't rely solely on default security settings",
          "Stay vigilant even with familiar websites and services"
        ]
      }
    },
    {
      id: 11,
      title: "Health & Fitness Apps",
      description: "Use health and fitness applications securely while protecting sensitive health data",
      icon: Heart,
      color: "bg-rose-500",
      detailContent: {
        overview: "Health and fitness apps collect sensitive personal data. Understanding privacy settings and data sharing is crucial for protecting health information.",
        keyThreat: [
          "Unauthorized sharing of health data",
          "Privacy breaches exposing medical information",
          "Data mining for insurance or employment discrimination",
          "Fake health apps collecting personal data",
          "Location tracking through fitness activities"
        ],
        bestPractices: [
          "Read privacy policies before using health apps",
          "Control data sharing settings carefully",
          "Use reputable, well-reviewed health applications",
          "Regularly review app permissions",
          "Keep health apps updated with latest security patches",
          "Limit location sharing for fitness activities"
        ],
        tips: [
          "Check what data the app collects and shares",
          "Use privacy-focused fitness tracking when possible",
          "Be selective about connecting with social features",
          "Review who can see your health and fitness data",
          "Consider using apps that store data locally"
        ],
        warnings: [
          "Don't share detailed health information unnecessarily",
          "Be cautious about apps that require excessive permissions",
          "Avoid health apps that seem to collect too much unrelated data",
          "Don't use health apps for serious medical decisions without consulting professionals"
        ]
      }
    }
  ];

  const handleCategoryClick = (category: Category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Cybersecurity Information Center
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive guides and best practices for staying safe in the digital world
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose a Category to Learn More
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Click on any category below to explore detailed information, best practices, and security tips
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Category Detail Modal */}
      {selectedCategory && (
        <CategoryDetailModal
          category={selectedCategory}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default InformationPage;