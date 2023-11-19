import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  // 公開ルートを指定（利用規約やログイン画面などログイン不要でアクセスできるルート）
  publicRoutes: ["/", '/terms'],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};