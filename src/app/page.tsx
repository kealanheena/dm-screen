import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ModeToggle';
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

export default function Home() {
  return (
    <div className='m-4'>
      <SignedOut>
        <SignInButton>
          <Button className="bg-red-500">Sign In</Button>
        </SignInButton>

        <SignUpButton>
          <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
            Sign Up
          </button>
        </SignUpButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
      
      <Button variant="secondary">Clickme</Button>

      <ModeToggle />
    </div>
  );
}
