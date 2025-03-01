import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div>
       <SignedOut>
            <SignInButton />
            <SignUpButton />
       </SignedOut>
       <SignedIn>
            <UserButton />
       </SignedIn>
    </div>
  );
}
