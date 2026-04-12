import type { Props } from "astro";
import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconLinkedin from "@/assets/icons/IconLinkedin.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import { SITE } from "@/config";

interface Social {
  name: string;
  href: string;
  linkTitle: string;
  icon: (_props: Props) => Element;
}

export const SOCIALS: Social[] = [
  {
    name: "GitHub",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} 的 GitHub`,
    icon: IconGitHub,
  },
  {
    name: "X",
    href: "",
    linkTitle: `${SITE.title} 的 X`,
    icon: IconBrandX,
  },
  {
    name: "LinkedIn",
    href: "",
    linkTitle: `${SITE.title} 的 LinkedIn`,
    icon: IconLinkedin,
  },
  {
    name: "Mail",
    href: "",
    linkTitle: `发送邮件给 ${SITE.title}`,
    icon: IconMail,
  },
].filter(({ href }) => Boolean(href)) as Social[];

export const SHARE_LINKS: Social[] = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `通过 WhatsApp 分享这篇文章`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `在 Facebook 分享这篇文章`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `在 X 分享这篇文章`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `通过 Telegram 分享这篇文章`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `在 Pinterest 分享这篇文章`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=看看这篇文章&body=",
    linkTitle: `通过邮件分享这篇文章`,
    icon: IconMail,
  },
] as const;
