import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Serviços',
      href: getPermalink('/#servicos'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    {
      text: 'Fale Conosco',
      href: 'https://wa.me/554591190099',
      target: '_blank',
    },
  ],
};

export const footerData = {
  links: [],
  secondaryLinks: [
    { text: 'Serviços', href: getPermalink('/#servicos') },
    { text: 'Blog', href: getBlogPermalink() },
  ],
  socialLinks: [{ ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'whatsapp://send?phone=554591190099' }],
  footNote: `
    © 2025 Vô Tech · Todos os direitos reservados.
  `,
};
