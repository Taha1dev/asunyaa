import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const supportedLanguages = ['de', 'ar']; // Supported languages

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the URL already contains a supported language
  const pathnameHasLanguage = supportedLanguages.some((lang) =>
    pathname.startsWith(`/${lang}`),
  );

  // If the URL already has a valid language, continue
  if (pathnameHasLanguage) {
    return NextResponse.next();
  }

  // Detect language from the browser or default to 'de'
  const language =
    request.headers
      .get('accept-language')
      ?.split(',')[0]
      .substring(0, 2) || 'de';

  // Ensure the detected language is supported
  const validLanguage = supportedLanguages.includes(language) ? language : 'de';

  // Redirect to the detected or default language with /home
  return NextResponse.redirect(
    new URL(`/${validLanguage}/home`, request.url),
  );
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};