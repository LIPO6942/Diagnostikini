import type { Metadata } from 'next';
import './globals.css';
import { MainLayout } from '@/components/layout/main-layout';
import { Toaster } from '@/components/ui/toaster';
import { ProfileProvider } from '@/contexts/profile-context';

export const metadata: Metadata = {
  title: 'Diagnostikini',
  description: 'Votre assistant de santé personnel IA.',
  manifest: '/manifest.webmanifest'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#115e59" />
      </head>
      <body className="font-body antialiased">
        <ProfileProvider>
          <MainLayout>{children}</MainLayout>
        </ProfileProvider>
        <Toaster />
      </body>
    </html>
  );
}
