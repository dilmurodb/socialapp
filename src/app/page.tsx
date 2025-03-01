import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Button } from '@/components/ui/button'

export default function Home() {
  return (
    <div>
       <SignedOut>
            <SignInButton mode='modal'>
              <Button>
                Sign in
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button>
                Sign up
              </Button>
            </SignUpButton>
       </SignedOut>
       <SignedIn>
            <UserButton />
       </SignedIn>
    </div>
  );
}
