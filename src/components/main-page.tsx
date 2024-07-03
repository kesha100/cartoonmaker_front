'use client'
import { useRouter } from 'next/navigation';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function MainPage() {
  const router = useRouter();

  const handleCardClick = (prompt: string) => {
    router.push(`/generate-cartoon?prompt=${encodeURIComponent(prompt)}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <header className="w-full max-w-4xl">
        <div className="text-center">
          {/* Larger logo centered */}
          <img src="/balakai_logo.png" alt="Logo" className="h-32 w-auto mx-auto mb-4" />
          {/* <h1 className="text-3xl font-bold">BALAKAI</h1> Increased font size
          <p className="text-sm text-muted-foreground">GENERATE YOUR CARTOON</p> */}
        </div>
      </header>
      <main className="flex flex-col items-center justify-center flex-1 w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center">
          Create your own <span className="text-blue-500">cartoon</span> in one prompt
        </h2>
        <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
          <Card className="p-4 text-center cursor-pointer" onClick={() => handleCardClick('Create a cartoon about a ginger cat in Ghibli style')}>
            <p>Create a cartoon about a ginger cat in Ghibli style</p>
          </Card>
          <Card className="p-4 text-center cursor-pointer" onClick={() => handleCardClick('Generate a cartoon about a girl with red hat in Ghibli style')}>
            <p>Generate a cartoon about a girl with red hat in Ghibli style</p>
          </Card>
          <Card className="p-4 text-center cursor-pointer" onClick={() => handleCardClick('Give me a cartoon about a gold fish in Ghibli style')}>
            <p>Give me a cartoon about a gold fish in Ghibli style</p>
          </Card>
        </div>
        <Button className="mt-8 bg-gradient-to-r from-blue-400 to-blue-600 text-white" onClick={() => router.push('/chat')}>Write my own prompt</Button>
      </main>
    </div>
  );
}

function MenuIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export default { MainPage, MenuIcon };
