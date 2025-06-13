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
  FaTwitch,
  FaDiscord,
} from "react-icons/fa6";
import { CiMail } from "react-icons/ci";

export default function Component() {
  const ThroneIcon = () => (
    <img src="/Throne.png" alt="Throne" className="w-5 h-5 " />
  );

  const socialLinks = [
    {
      name: "Website",
      url: "https://valzzu.xyz",
      icon: FaGlobe,
      color: "bg-slate-600 hover:bg-slate-700",
      size: "14px",
    },
    {
      name: "3d printing",
      url: "https://valzzu3d.fi",
      icon: FaGlobe,
      color: "bg-slate-600 hover:bg-slate-700",
      size: "14px",
    },
    {
      name: "GitHub",
      url: "https://github.com/valzzu",
      icon: FaGithub,
      color: "bg-gray-800 hover:bg-gray-900",
      size: "14px",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ValzzuG",
      icon: FaTwitter,
      color: "bg-blue-500 hover:bg-blue-600",
      size: "14px",
    },
    {
      name: "Bluesky",
      url: "https://bsky.app/profile/valzzu.xyz",
      icon: FaBluesky,
      color: "bg-blue-700 hover:bg-blue-800",
      size: "h-14",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@valzzu",
      icon: FaYoutube,
      color: "bg-red-600 hover:bg-red-700",
      size: "14px",
    },
    {
      name: "Twitch",
      url: "https://twitch.tv/iris_the_elf",
      icon: FaTwitch,
      color: "bg-purple-600 hover:bg-purple-700",
      size: "14px",
    },
    {
      name: "Discord",
      url: "https://discord.gg/6wTg2nEmSz",
      icon: FaDiscord,
      color: "bg-[#5865F2] hover:bg-[#5352f0]",
      size: "14px",
    },
    {
      name: "VRChat",
      url: "https://vrchat.com/home/user/usr_5f4b5d18-d018-4cbe-8797-37912f821931",
      icon: FaGlobe,
      color: "bg-[#33b8e8] hover:bg-[#0cb1ed]",
      size: "25px",
    },
    {
      name: "Wishlist",
      url: "https://throne.com/iris_",
      icon: ThroneIcon,
      color: "bg-[#f547a9] hover:bg-[#f5259b]",
      size: "14px",
    },
    {
      name: "Email",
      url: "mailto:contact@valzzu.xyz",
      icon: CiMail,
      color: "bg-green-600 hover:bg-green-700",
      size: "14px",
    },
  ];

  return (
    <div className="min-h-screen  bg-gradient-to-bl from-[#5BCEFA] to-[#F5A9B8]">
      <div className="max-w-md mx-auto pt-8 ">
        {/* Profile Section */}
        <Card className="mb-8 border-0 shadow-lg bg-pink-200">
          <CardContent className="pt-8 pb-6 text-center ">
            <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-white shadow-lg">
              <AvatarImage
                src="/embed-iris.png?height=96&width=96"
                alt="Profile"
              />
              <AvatarFallback className="text-2xl font-semibold bg-gradient-to-r from-purple-500 to-blue-500 text-white">
                Iris
              </AvatarFallback>
            </Avatar>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              Iris (valzzu)
            </h1>
            <p className="text-gray-500 mb-4">
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
                  <IconComponent size={link.size} />
                  {link.name}
                  <FaExternalLinkAlt className="w-4 h-4 ml-auto opacity-70" />
                </a>
              </Button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-8">
          <p className="text-sm text-gray-700">
            © 2025 Iris (valzzu). All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
