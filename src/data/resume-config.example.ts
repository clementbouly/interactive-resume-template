import type { ResumeConfig } from './types'

export const resumeConfig: ResumeConfig = {
  personal: {
    name: 'Hugo Lapie',
    photoBackEmoji: '💻',
    title: {
      fr: 'Technicien Support IT N1/N2',
    },
    subtitle: {
      fr: 'Technicien IT polyvalent spécialisé en support utilisateurs et infrastructure réseau',
    },
    location: 'Caen, France',
  },
  seo: {
    title: 'Hugo Lapie — Technicien Support IT',
    description: 'CV interactif de Hugo Lapie, Technicien Support IT spécialisé en infrastructure, réseau et support utilisateurs.',
  },
  languages: {
    default: 'fr',
    available: ['fr'],
    labels: {
      fr: 'FR',
    },
  },
  contact: [
    { type: 'linkedin', label: 'hugo lapie', href: 'https://linkedin.com/in/hugo-lapie' },
    { type: 'email', label: 'lapiehugo0@gmail.com' },
    { type: 'phone', label: '06.76.83.34.82' },
    { type: 'location', label: 'Caen / Granville' },
  ],
  skills: [
    {
      title: { fr: 'Infrastructure & Réseau' },
      type: 'badges',
      items: [
        { name: 'Active Directory' },
        { name: 'GPO' },
        { name: 'DHCP / DNS' },
        { name: 'VPN' },
        { name: 'pfSense' },
        { name: 'TCP/IP' },
        { name: 'Switchs & Routeurs' },
      ],
    },
    {
      title: { fr: 'Support & Systèmes' },
      type: 'badges',
      items: [
        { name: 'Windows Server' },
        { name: 'Linux' },
        { name: 'VMware' },
        { name: 'VirtualBox' },
        { name: 'Helpdesk N1/N2' },
        { name: 'PowerShell' },
      ],
    },
    {
      title: { fr: 'Web & CMS' },
      type: 'badges',
      items: [
        { name: 'WordPress' },
        { name: 'PrestaShop' },
        { name: 'SEO' },
        { name: 'Plesk' },
        { name: 'OVH' },
      ],
    },
    {
      title: { fr: 'Qualités' },
      type: 'text',
      items: [
        { name: { fr: 'Curieux, Sérieux, Rigoureux' } },
      ],
    },
  ],
  experiences: [
    {
      id: 'tessi',
      company: { fr: 'Tessi' },
      role: { fr: 'Opérateur de saisie' },
      period: { fr: '2025' },
      description: { fr: 'Saisie et traitement de données avec rigueur et précision.' },
      details: {
        tasks: { fr: [
          'Traitement de données volumineuses',
          'Respect de délais stricts et des procédures internes',
        ] },
      },
    },
    {
      id: 'ref-pro',
      company: { fr: 'Le référencement professionnel' },
      role: { fr: 'Webmaster / SEO Manager' },
      type: { fr: 'Alternance' },
      period: { fr: '2022 - 2024' },
      description: { fr: 'Gestion complète de l\'écosystème web et visibilité client.' },
      techs: ['WordPress', 'SEO', 'OVH'],
      details: {
        tasks: { fr: [
          'Support client et maintenance technique',
          'Maquettage et création de logos',
          'Gestion des réseaux sociaux',
          'Gestion des noms de domaines (OVH)',
        ] },
      },
    },
    {
      id: 'aclp',
      company: { fr: 'ACLP' },
      role: { fr: 'Technicien Réseau / Informatique' },
      type: { fr: 'Alternance' },
      period: { fr: '2021' },
      description: { fr: 'Maintenance de boutiques e-commerce et support réseau.' },
      techs: ['PrestaShop', 'SEO'],
      details: {
        tasks: { fr: [
          'Gestion du CMS PrestaShop multi-boutiques',
          'Développement et correction de bugs e-commerce',
          'Gestion du référencement naturel (SEO)',
          'Support client technique',
        ] },
      },
    },
    {
      id: 'axelerance',
      company: { fr: 'Axelerance' },
      role: { fr: 'Développeur web' },
      type: { fr: 'Alternance' },
      period: { fr: '2020' },
      description: { fr: 'Développement de solutions web basées sur WordPress.' },
      techs: ['WordPress', 'Plesk'],
      details: {
        tasks: { fr: [
          'Développement de sites WordPress sur mesure',
          'Gestion de serveurs via Plesk',
        ] },
      },
    },
  ],
  education: [
    {
      school: { fr: 'MyDigital School' },
      degree: { fr: 'Bachelor Développeur web' },
      period: '2020 - 2021',
      location: 'Caen',
    },
    {
      school: { fr: 'Julliot de la Morandière' },
      degree: { fr: 'BTS Systèmes numériques' },
      period: '2018 - 2020',
      location: 'Granville',
      description: { fr: 'C++, Environnement Linux, VmWare, VirtualBox' },
    },
  ],
  projects: [
    {
      id: 'lab-it',
      title: { fr: 'Lab Windows Server / Réseau' },
      description: { fr: 'Simulation de réseau d\'entreprise avec serveurs et automatisation.' },
      techs: ['Windows Server', 'Active Directory', 'pfSense', 'PowerShell'],
      details: {
        tasks: { fr: [
          'Installation et configuration d\'Active Directory (utilisateurs, groupes et GPO)',
          'Configuration DHCP, DNS et pare-feu virtuel (pfSense)',
          'Scripts PowerShell pour l\'automatisation des comptes et permissions',
        ] },
      },
    },
  ],
  hobbies: [
    {
      title: { fr: 'High-tech' },
      details: [{ fr: 'Innovation, nouvelles technologies, objets connectés, photo' }],
    },
    {
      title: { fr: 'Musique' },
      details: [{ fr: 'Rock, Electro, Trap' }],
    },
    {
      title: { fr: 'Automobile' },
      details: [{ fr: 'Électronique embarquée, conduite autonome, concept cars' }],
    },
  ],
  theme: {
    preset: 'slate',
  },
  labels: {
    sections: {
      contact: { fr: 'CONTACT' },
      skills: { fr: 'COMPÉTENCES' },
      experience: { fr: 'PARCOURS PROFESSIONNEL' },
      education: { fr: 'FORMATION' },
      projects: { fr: 'PROJETS PERSONNELS' },
      hobbies: { fr: 'CENTRES D\'INTÉRÊT' },
    },
    experience: {
      mainTasks: { fr: 'Missions principales :' },
      moreTasks: { fr: 'autres missions...' },
      training: { fr: 'Formations :' },
      techEnv: { fr: 'Env. technique :' },
      technologies: { fr: 'Technologies' },
    },
    actions: {
      clickHint: { fr: 'Cliquez sur les expériences pour voir les détails' },
      switchTheme: { fr: 'Changer le thème' },
      downloadPdf: { fr: 'Télécharger le PDF' },
    },
  },
}
