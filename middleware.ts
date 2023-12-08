export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/', '/direct', '/explore', '/notification', '/p', '/p/:path*', '/reel', '/search'],
};
