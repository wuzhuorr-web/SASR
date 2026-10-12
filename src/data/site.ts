export const site = {
  name: 'Stewart & Armstrong Smash Repairs',
  street: '273 High Street',
  locality: 'Chatswood NSW 2067',
  address: '273 High Street, Chatswood NSW 2067',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Stewart%20and%20Armstrong%20Smash%20Repairs%20273%20High%20Street%20Chatswood',
} as const;

export const navigation = [
  { href: '/', label: 'Home' },
  { href: '/about.html', label: 'About' },
  { href: '/services.html', label: 'Services' },
  { href: '/contact.html', label: 'Contact' },
] as const;
