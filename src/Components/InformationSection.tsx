"use client";
import { useState } from "react";
import Link from "next/link";
import {
  Shield,
  Users,
  MessageCircle,
  CreditCard,
  X,
  AlertTriangle,
  CheckCircle,
  Lightbulb,
} from "lucide-react";

interface ThreatCategory {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  accentColor: string;
  detailContent: {
    overview: string;
    keyThreat: string[];
    bestPractices: string[];
    tips: string[];
    warnings: string[];
  };
}

const featuredThreats: ThreatCategory[] = [
  {
    id: 1,
    title: "Personal Safety",
    description:
      "Learn how to protect your personal information and identity online",
    icon: Shield,
    color: "bg-blue-500",
    accentColor: "border-blue-500",
    detailContent: {
      overview:
        "Personal safety in the digital age involves protecting your personal information, maintaining privacy, and securing your digital identity across all online platforms.",
      keyThreat: [
        "Identity theft and personal data breaches",
        "Social engineering attacks targeting personal information",
        "Unauthorized access to personal accounts",
        "Privacy invasion through data mining",
        "Fake identity creation using stolen personal data",
      ],
      bestPractices: [
        "Use strong, unique passwords for all accounts",
        "Enable two-factor authentication wherever possible",
        "Regularly review privacy settings on all platforms",
        "Avoid sharing sensitive personal information online",
        "Keep software and security systems updated",
      ],
      tips: [
        "Never share your full birth date, address, or phone number publicly",
        "Use pseudonyms or nicknames instead of real names when possible",
        "Regularly Google yourself to see what information is publicly available",
        "Be cautious about location sharing on social media",
      ],
      warnings: [
        "Avoid using public Wi-Fi for sensitive activities",
        "Be wary of phishing emails asking for personal information",
        "Don't click on suspicious links or download unknown attachments",
        "Never give personal information over unsolicited phone calls",
      ],
    },
  },
  {
    id: 2,
    title: "Social Media",
    description: "Stay safe while connecting with friends and sharing content",
    icon: Users,
    color: "bg-purple-500",
    accentColor: "border-purple-500",
    detailContent: {
      overview:
        "Social media safety involves protecting your privacy, avoiding scams, and maintaining a positive digital presence while enjoying social connections online.",
      keyThreat: [
        "Privacy breaches and data harvesting",
        "Fake profiles and catfishing",
        "Social engineering through friend requests",
        "Malicious links and infected attachments",
        "Cyberbullying and harassment",
      ],
      bestPractices: [
        "Review and adjust privacy settings regularly",
        "Think before you post - consider long-term implications",
        "Verify friend requests from unknown people",
        "Use privacy-focused sharing options",
        "Report suspicious accounts and content",
      ],
      tips: [
        "Don't accept friend requests from people you don't know personally",
        "Avoid posting real-time location updates",
        "Be selective about what photos and information you share",
        "Regularly audit your friend lists and followers",
      ],
      warnings: [
        "Never share passwords or account access with others",
        "Don't click on suspicious links, even from friends",
        "Avoid sharing personal financial information",
        "Be cautious of 'too good to be true' offers and contests",
      ],
    },
  },
  {
    id: 3,
    title: "WhatsApp Forwards",
    description: "Identify and handle misinformation in messaging apps",
    icon: MessageCircle,
    color: "bg-green-500",
    accentColor: "border-green-500",
    detailContent: {
      overview:
        "WhatsApp forwards can spread misinformation rapidly. Learning to identify, verify, and handle forwarded messages is crucial for digital literacy.",
      keyThreat: [
        "Spread of fake news and misinformation",
        "Malicious links in forwarded messages",
        "Scam messages requesting money or personal information",
        "Virus-infected media files",
        "Panic-inducing false health or safety alerts",
      ],
      bestPractices: [
        "Verify information before forwarding messages",
        "Check multiple reliable sources for news and updates",
        "Use fact-checking websites and official sources",
        "Be skeptical of sensational or emotional content",
        "Educate family and friends about misinformation",
      ],
      tips: [
        "Look for the 'Forwarded' label on messages",
        "Cross-check news with official government or news websites",
        "Be extra cautious with health and medical advice",
        "Don't forward chain messages or 'forward to 10 people' requests",
      ],
      warnings: [
        "Never forward messages asking for money or donations",
        "Don't share messages with unverified medical advice",
        "Avoid forwarding messages that promote hatred or discrimination",
        "Be careful with messages claiming 'government alerts' without verification",
      ],
    },
  },
  {
    id: 4,
    title: "Online Banking",
    description: "Secure your financial transactions and banking activities",
    icon: CreditCard,
    color: "bg-red-500",
    accentColor: "border-red-500",
    detailContent: {
      overview:
        "Online banking security is crucial for protecting your financial assets. Proper security measures can prevent unauthorized access and financial fraud.",
      keyThreat: [
        "Phishing attacks targeting banking credentials",
        "Man-in-the-middle attacks on banking sessions",
        "Malware designed to steal banking information",
        "Fake banking apps and websites",
        "SIM swapping for SMS-based authentication bypass",
      ],
      bestPractices: [
        "Always use official banking apps and websites",
        "Enable multi-factor authentication",
        "Use dedicated devices or browsers for banking",
        "Regularly monitor account statements",
        "Set up account alerts for transactions",
      ],
      tips: [
        "Always type your bank's URL directly or use bookmarks",
        "Look for 'https://' and security certificates",
        "Never do banking on public Wi-Fi",
        "Keep your banking app and device updated",
      ],
      warnings: [
        "Banks will never ask for passwords or PINs via email or SMS",
        "Don't save banking passwords in browsers on shared computers",
        "Never share your banking credentials with anyone",
        "Be suspicious of urgent banking-related emails or calls",
      ],
    },
  },
];

const InformationSection = () => {
  const [selected, setSelected] = useState<ThreatCategory | null>(null);

  const handleLearnMore = (threat: ThreatCategory) => {
    setSelected(threat);
  };

  const handleClose = () => {
    setSelected(null);
  };

  return (
    <section id="information" className="py-20 px-4 bg-[#0d1526]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-cyan-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Knowledge Center
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Cyber Threat Information
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore comprehensive guides on various cyber threats and learn how
            to protect yourself in the digital world
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredThreats.map((threat) => {
            const IconComponent = threat.icon;
            return (
              <div
                key={threat.id}
                className={`bg-[#111b2e] border border-gray-800 hover:border-gray-600 rounded-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group`}
                onClick={() => handleLearnMore(threat)}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${threat.title}`}
              >
                <div className={`h-1 ${threat.color} rounded-t-xl`}></div>
                <div className="p-6">
                  <div
                    className={`${threat.color}/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
                  >
                    <IconComponent className="w-6 h-6 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {threat.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {threat.description}
                  </p>
                </div>
                <div className="px-6 pb-6">
                  <button className="w-full bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/30 text-gray-300 hover:text-cyan-300 font-medium py-2 px-4 rounded-lg transition-all duration-200 text-sm">
                    Learn More →
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link href="/information">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transform hover:scale-105">
              View All Categories
            </button>
          </Link>
        </div>

        {/* Full Detail Modal */}
        {selected !== null && (
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={handleClose}
          >
            <div
              className="bg-[#111b2e] border border-gray-700 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="sticky top-0 bg-[#111b2e] border-b border-gray-700 p-6 rounded-t-2xl z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div
                      className={`${selected.color} w-12 h-12 rounded-lg flex items-center justify-center`}
                    >
                      <selected.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        {selected.title}
                      </h2>
                      <p className="text-gray-400">{selected.description}</p>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-8">
                {/* Overview */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Shield className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Overview
                    </h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {selected.detailContent.overview}
                  </p>
                </section>

                {/* Key Threats */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-red-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Key Threats
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selected.detailContent.keyThreat.map((threat, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{threat}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Best Practices */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Best Practices
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selected.detailContent.bestPractices.map(
                      (practice, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-300">{practice}</span>
                        </li>
                      )
                    )}
                  </ul>
                </section>

                {/* Tips */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="w-5 h-5 text-yellow-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Helpful Tips
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selected.detailContent.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Lightbulb className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Warnings */}
                <section>
                  <div className="flex items-center gap-2 mb-4">
                    <AlertTriangle className="w-5 h-5 text-orange-400" />
                    <h3 className="text-xl font-semibold text-white">
                      Important Warnings
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {selected.detailContent.warnings.map((warning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <AlertTriangle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{warning}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>

              {/* Footer */}
              <div className="border-t border-gray-700 p-6 bg-[#0d1526] rounded-b-2xl">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-gray-500">
                    Stay informed and stay safe in the digital world
                  </p>
                  <div className="flex gap-3">
                    <button
                      onClick={handleClose}
                      className="px-4 py-2 text-gray-400 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                    <Link href="/information">
                      <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-6 py-2 rounded-lg transition-all">
                        View All Categories
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default InformationSection;