import Link from "next/link";
export default function TutorialPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black-100 text-white">
      <h1 className="text-3xl font-bold mb-8">Watch a tutorial</h1>
      <div className="flex space-x-8">
          <Link href="https://www.youtube.com" target="_blank">
          <div className="relative w-80">
            <img
              src="/templates/template1.png"
              className="w-full rounded-lg"
            />
          </div>
          </Link>
        </div>
      </div>
    );
  }