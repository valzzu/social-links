import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { FaExternalLinkAlt } from "react-icons/fa";

import {
  FaBluesky,
  FaGlobe,
  FaYoutube,
  FaGithub,
  FaTwitter,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Component() {
  const socialLinks = [
    {
      name: "Website",
      url: "https://valzzu.xyz",
      icon: FaGlobe,
      color: "bg-slate-600 hover:bg-slate-700",
    },
    {
      name: "3d printing",
      url: "https://valzzu3d.fi",
      icon: FaGlobe,
      color: "bg-slate-600 hover:bg-slate-700",
    },
    {
      name: "GitHub",
      url: "https://github.com/valzzu",
      icon: FaGithub,
      color: "bg-gray-800 hover:bg-gray-900",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ValzzuG",
      icon: FaTwitter,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/valzzu.xyz",
      icon: FaBluesky,
      color: "bg-blue-500 hover:bg-blue-600",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@valzzu",
      icon: FaYoutube,
      color: "bg-red-600 hover:bg-red-700",
    },
    {
      name: "Email",
      url: "mailto:contact@valzzu.xyz",
      icon: CiMail,
      color: "bg-green-600 hover:bg-green-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-4">
      <div className="max-w-md mx-auto pt-8">
        {/* Profile Section */}
        <Card className="mb-8 border-0 shadow-lg">
          <CardContent className="pt-8 pb-6 text-center">
            <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
              <AvatarImage
                src="/placeholder.svg?height=96&width=96"
                alt="Profile"
              />
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Iris
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Iris (valzzu)
            </h1>
            <p className="text-gray-600 mb-4">
              The wannabe sysamin who loves to play with electronics.
            </p>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <FaGlobe className="w-4 h-4 mr-1" />
              Finland
            </div>
          </CardContent>
        </Card>

        {/* Social Links */}
        <div className="space-y-4">
          {socialLinks.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <Button
                key={index}
                asChild
                className={`w-full h-14 text-white font-medium text-lg transition-all duration-200 transform hover:scale-105 shadow-lg ${link.color}`}
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <IconComponent className="w-5 h-5" />
                  {link.name}
                  <FaExternalLinkAlt className="w-4 h-4 ml-auto opacity-70" />
                </a>
              </Button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-sm text-gray-500">
            © 2025 Iris (valzzu). All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
