/**
 * CENTRAL CREATOR CONFIGURATION
 * ---------------------------------------------------------------------------
 * Update your real social media profile URLs, email address, and YouTube
 * video IDs in this single file. Every link, button, footer icon, and video
 * embed across the website reads directly from here.
 */

export type SocialPlatformId = 'youtube' | 'instagram' | 'tiktok' | 'facebook';

export interface SocialProfile {
  id: SocialPlatformId;
  name: string;
  handle: string;
  /** Replace with your exact official profile URL */
  url: string;
  buttonLabel: string;
  tagline: string;
  contentFocus: string;
}

export interface VideoItem {
  id: string;
  title: string;
  category: 'Filmmaking' | 'Lifestyle' | 'Gear & Setup';
  duration: string;
  publishedLabel: string;
  description: string;
  thumbnail: string;
  /**
   * Replace with the 11-character YouTube video ID from your upload URL
   * (e.g. for https://www.youtube.com/watch?v=dQw4w9WgXcQ -> "dQw4w9WgXcQ").
   * Leave empty or null to open your YouTube channel directly when clicked.
   */
  youtubeVideoId?: string;
}

export const CREATOR_CONFIG = {
  brandName: 'Shaikho Bhai',
  officialBrandLabel: 'Shaikho Bhai Official',
  heroSubtitle: 'Welcome to My Official Website.',
  heroDescription:
    'Follow me across all my social media platforms and stay connected with my latest content.',
  portraitImage: '/src/assets/images/shaikho_bhai_portrait_1795160201013.jpg',
  studioImage: '/src/assets/images/creator_studio_about_1795160201558.jpg',

  /** Replace with your official business / fan inquiry email */
  email: 'contact@shaikhobhai.com',
  locationLabel: 'Official Creator Hub',

  about: {
    heading: 'About Shaikho Bhai',
    lead: 'Building an authentic space where visual storytelling, everyday perspective, and community come together.',
    paragraphs: [
      'I am Shaikho Bhai — a digital content creator focused on crafting memorable videos, relatable stories, and high-craft visual experiences across major social platforms.',
      'This website serves as my verified central home on the web. Whether you discovered my work through a short-form reel, a long-form YouTube episode, or a community livestream, every official channel and latest release lives right here.',
    ],
    pillars: [
      {
        index: '01.',
        title: 'Authentic Storytelling',
        detail: 'Real conversations, sharp commentary, and honest perspectives shared without filters.',
      },
      {
        index: '02.',
        title: 'Cinematic Craft',
        detail: 'Intentional lighting, clean audio, and thoughtful pacing across every upload.',
      },
      {
        index: '03.',
        title: 'One Connected Community',
        detail: 'Direct interaction with followers across YouTube, Instagram, TikTok, and Facebook.',
      },
    ],
  },

  /**
   * SOCIAL MEDIA LINKS
   * Update the `url` and `handle` fields below with your exact profile URLs.
   */
  socials: [
    {
      id: 'youtube',
      name: 'YouTube',
      handle: '@shaikhobhai',
      url: 'https://www.youtube.com/@shaikhobhai',
      buttonLabel: 'Follow on YouTube',
      tagline: 'Full episodes, creator vlogs & studio breakdowns',
      contentFocus: 'Long-Form Video',
    },
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@shaikhobhai',
      url: 'https://www.instagram.com/shaikhobhai/',
      buttonLabel: 'Follow on Instagram',
      tagline: 'Daily reels, photography & behind-the-scenes stories',
      contentFocus: 'Reels & Stories',
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@shaikhobhai',
      url: 'https://www.tiktok.com/@shaikhobhai',
      buttonLabel: 'Follow on TikTok',
      tagline: 'Fast-paced shorts, trends & creative moments',
      contentFocus: 'Short-Form Clips',
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'fb.com/shaikhobhai',
      url: 'https://www.facebook.com/shaikhobhai',
      buttonLabel: 'Follow on Facebook',
      tagline: 'Community updates, video premieres & live sessions',
      contentFocus: 'Community & Live',
    },
  ] satisfies SocialProfile[],

  /**
   * LATEST CONTENT / YOUTUBE GALLERY
   * Add your real YouTube video IDs to `youtubeVideoId` to embed them directly
   * inside the interactive video player modal.
   */
  videos: [
    {
      id: 'vid-storytelling',
      title: 'Behind the Frame: Crafting Stories That Stay With You',
      category: 'Filmmaking',
      duration: '14:20',
      publishedLabel: 'Featured Episode',
      description:
        'A closer look at how an idea moves from late-night notes to final color grade, sound design, and release across every channel.',
      thumbnail: '/src/assets/images/video_thumb_storytelling_1795160201122.jpg',
      youtubeVideoId: '',
    },
    {
      id: 'vid-lifestyle',
      title: 'Late Nights & City Lights: A Day in the Creator Life',
      category: 'Lifestyle',
      duration: '10:45',
      publishedLabel: 'Latest Vlog',
      description:
        'Stepping out after dark to capture the energy of the city, spontaneous street moments, and candid reflections on staying consistent.',
      thumbnail: '/src/assets/images/video_thumb_lifestyle_1795160201537.jpg',
      youtubeVideoId: '',
    },
    {
      id: 'vid-setup',
      title: 'Inside My Minimalist Black & Gold Studio Setup',
      category: 'Gear & Setup',
      duration: '11:50',
      publishedLabel: 'Studio Tour',
      description:
        'Every camera body, prime lens, key light, and audio chain I rely on to keep production fast, clean, and reliable.',
      thumbnail: '/src/assets/images/video_thumb_setup_1795160201364.jpg',
      youtubeVideoId: '',
    },
  ] satisfies VideoItem[],
};
