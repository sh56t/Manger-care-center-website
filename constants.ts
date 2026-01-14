import { NavItem, Program, Value, Stat } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Donors', path: '/donors' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Donate', path: '/get-involved' },
  { 
    label: 'More', 
    subItems: [
      { label: 'Our Stats', path: '/impact' },
      { label: 'Annual Report', path: '/annual-report' },
      { label: 'Referral Guidelines', path: '/referral-guidelines' },
      { label: 'Contact', path: '/contact' }
    ]
  },
];

export const CORE_VALUES: Value[] = [
  {
    title: 'Compassion',
    description: 'We act with empathy and care, creating a space where dignity and healing take root.',
    iconName: 'Heart'
  },
  {
    title: 'Inclusivity',
    description: 'We welcome all people equally—with respect, without prejudice.',
    iconName: 'Users'
  },
  {
    title: 'Accountability',
    description: 'We steward every resource with integrity, transparency, and measurable impact.',
    iconName: 'Scale'
  },
  {
    title: 'Innovation',
    description: 'We challenge limits and adapt creatively to empower real, lasting change.',
    iconName: 'Zap'
  },
  {
    title: 'Integrity',
    description: 'We lead with honesty, ethics, and trust in all relationships.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Empowerment',
    description: 'We ignite potential, enabling people to rise, rebuild, and thrive.',
    iconName: 'GraduationCap'
  }
];

export const PROGRAMS: Program[] = [
  // Social Support & Shelter
  {
    id: 'eden',
    title: 'Eden Homeless Programme',
    description: 'A structured pathway to personal restoration. We combine secure, dignified shelter with nutritious meals, social work services, and IDPs to prioritize stability and growth.',
    beneficiaries: 'Destitute, recovering addicts, ex-parolees',
    impact: 'Restoration of dignity and sustainable reintegration.',
    iconName: 'Home',
    category: 'social',
    imageUrl: 'Mcc-Eden2-logo.png'
  },
  {
    id: 'robmen',
    title: 'Robmen House',
    description: 'A home for independent living offering enduring care and belonging to individuals living with physical and intellectual disabilities.',
    beneficiaries: 'People with disabilities',
    impact: 'Dignified living in a family setting.',
    iconName: 'Heart',
    category: 'social',
    imageUrl: 'https://drive.google.com/thumbnail?id=1RDI8x_fAjieL0xc5COBD_18TxDVA-fJN&sz=w1000'
  },
  {
    id: 'manger-marine',
    title: 'Manger Marine',
    description: 'Safe, independent living for the elderly and people with disabilities in Tshwane, offering privacy, support, and autonomy.',
    beneficiaries: 'Elderly and disabled individuals',
    impact: 'A sanctuary honoring the golden years.',
    iconName: 'Shield',
    category: 'social',
    imageUrl: 'https://drive.google.com/thumbnail?id=1NmobaCp91-qQTWpDwTym8ZRDQx6tmpps&sz=w1000'
  },
  {
    id: 'manna',
    title: 'Manna Soup Kitchen',
    description: 'Delivering fresh, high-quality ingredients directly to ECD centres for on-site meal preparation, ensuring nutritional standards are met.',
    beneficiaries: 'Children in ECD centres',
    impact: 'Nutritional support for early development.',
    iconName: 'Baby',
    category: 'social',
    imageUrl: 'https://drive.google.com/thumbnail?id=1hpD8X3gdTsCteNyRcZcDlHCuwOcE2UxP&sz=w1000'
  },
  // Skills Development
  {
    id: 'agri-training',
    title: 'AgriSETA Accredited Training',
    description: 'Occupationally directed agricultural training equipping beneficiaries with technical competence in plant and animal production.',
    beneficiaries: 'Unemployed youth and shelter residents',
    impact: 'AgriSETA qualifications and work-readiness.',
    iconName: 'GraduationCap',
    category: 'skills',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_uh5djz4RnU4gWilpf-0tnMjpOX-z5Px&sz=w1000'
  },
  {
    id: 'bakery',
    title: 'MCC Bakery',
    description: 'A fully operational artisan baking enterprise offering vocational training in food production, safety, and business acumen.',
    beneficiaries: 'Trainee bakers',
    impact: 'Vocational skills and daily bread for the community.',
    iconName: 'Zap',
    category: 'skills',
    imageUrl: 'https://drive.google.com/thumbnail?id=1cTWODvnZR3lXeOKTw1JYkndX35rgnUGh&sz=w1000'
  },
  {
    id: 'bapsfontein-skills',
    title: 'Bapsfontein Skills Hub',
    description: 'Integrating vocational training with hands-on agricultural learning (crops, greenhouse management) within a shelter environment.',
    beneficiaries: 'Shelter residents',
    impact: 'Practical competence and entrepreneurial mindsets.',
    iconName: 'Brain',
    category: 'skills',
    imageUrl: 'https://drive.google.com/thumbnail?id=1LhBN8XBmvgghn-gStxzsWnLKrXugJLtw&sz=w1000'
  },
  // Enterprise Development
  {
    id: 'vaalwater',
    title: 'Vaalwater Agri-Enterprise',
    description: 'A diversified model integrating livestock (cattle, sheep), high-value crops (chillies), and medicinal cannabis to generate sustainable income.',
    beneficiaries: 'Rural community & beneficiaries',
    impact: 'Self-sustaining income and rural economic development.',
    iconName: 'MapPin',
    category: 'enterprise',
    imageUrl: 'https://drive.google.com/thumbnail?id=1p71OMbnkjXHnzbKfWl3t0rE-xBwTNd_A&sz=w1000'
  },
  {
    id: 'manufacturing',
    title: 'Manufacturing & Fabrication',
    description: 'Production of greenhouse tunnels, steel gates, and trailers, serving as a skills engine for welding and engineering.',
    beneficiaries: 'Youth artisans',
    impact: 'Job creation and infrastructure support.',
    iconName: 'ShieldCheck',
    category: 'enterprise',
    imageUrl: 'https://drive.google.com/thumbnail?id=1_yXl6vPdYFPyyc6cnm6YcQo6ylM_2UI5&sz=w1000'
  },
  {
    id: 'seedlings',
    title: 'Commercial Seedling Production',
    description: 'High-output horticulture initiative producing top-quality vegetable and herb seedlings for commercial and emerging farmers.',
    beneficiaries: 'Smallholder farmers',
    impact: 'Food security and supply chain strengthening.',
    iconName: 'Leaf',
    category: 'enterprise',
    imageUrl: 'https://drive.google.com/thumbnail?id=1eKGRGXkdQ2uPJCykUlEwBoOoUsqHpTMY&sz=w1000'
  },
];

export const IMPACT_STATS: Stat[] = [
  { label: 'Annual Beneficiaries', value: '5,200+', description: 'Receiving direct support in 2024/2025' },
  { label: 'Children Supported', value: '3,446', description: 'Daily nutrition & support in ECD centres' },
  { label: 'Adults Empowered', value: '532', description: 'Individuals in shelter, care & skills programmes' },
  { label: 'Skills Graduates', value: '112', description: 'Completed accredited training (NQF Level 4)' },
];

export const CONTACT_INFO = {
  address: '8 Kirschner Road, Brentwood Park, Benoni, 1501',
  postal: 'PO Box 9507, Brentwood Park, Benoni, 1505',
  phone: '+27 (0)10 745 1371',
  email: 'admin@mangercare.co.za',
  registration: '004-110 NPO',
  pbo: '930001038',
  facebook: 'https://facebook.com',
  twitter: 'https://twitter.com',
  instagram: 'https://instagram.com'
};

export const BANK_DETAILS = {
  bank: 'Nedbank',
  accountName: 'Manger Care Centre',
  accountNumber: '101 666 9550',
  branchCode: '128 824',
  branchName: 'Eastern Gauteng',
  type: 'Current / Cheque'
};