import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Quiénes Somos',
      href: getPermalink('/about'), // AHORA SÍ: Apunta a tu nueva página institucional
    },
    {
      text: 'Eventos',
      href: getBlogPermalink(), // Te lleva al listado de eventos que estuvimos arreglando
    },
    {
      text: 'Contacto',
      href: '/#contacto', // Este sí puede ser un ancla al formulario de abajo
    },
  ],
  actions: [{ text: 'Unirse', href: '/#contacto', variant: 'primary' }],
};

export const footerData = {
  links: [
    {
      title: 'Capítulo',
      links: [
        { text: 'Quiénes Somos', href: getPermalink('/about') },
        { text: 'Eventos', href: getBlogPermalink() },
        { text: 'Membresía', href: '/#contacto' },
      ],
    },
    {
      title: 'Comunidad',
      links: [
        { text: 'Instagram', href: 'https://instagram.com/tu_cuenta' },
        { text: 'Facebook', href: 'https://facebook.com/tu_cuenta' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Fraternidad', href: '#' },
    { text: 'Servicio', href: '#' },
    { text: 'Honor', href: '#' },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://instagram.com/tu_cuenta' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: 'https://facebook.com/tu_cuenta' },
  ],
  footNote: `
    Diseñado por <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/estebanmenendez"> Esteban Menéndez</a> · Widows Sons Rio Uruguay © 2026
  `,
};
