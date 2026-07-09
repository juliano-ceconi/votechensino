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
      href: 'https://wa.me/557799213803',
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
  socialLinks: [{ ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'whatsapp://send?phone=557799213803' }],
  footNote: `
    © 2025 Vô Tech · Todos os direitos reservados.
  `,
};
