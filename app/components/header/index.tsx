import {
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
// import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header>
      <span>ロゴ</span>
      <SignedIn>
        <UserButton />
      </SignedIn>
      <SignedOut>
        <SignInButton>
          {/* <Button variant="outline">ログイン</Button> */}
          <button className="w-16 h-8 border-2 rounded-sm">Login</button>
        </SignInButton>
        <SignUpButton>
          {/* <Button>新規登録</Button> */}
          <button className="w-16 h-8 border-2 rounded-sm">Sign Up</button>
        </SignUpButton>
      </SignedOut>
    </header>
  );
}
