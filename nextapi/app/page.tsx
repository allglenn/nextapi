import React from "react";
import Image from "next/image";

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <header className="py-8">
        <Image
          src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExYmF4dWt4aGxsZXh4eHdwdmNqbHU0aTQxdjExaW5maXc2ZjZlN2l5ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/d0NnEG1WnnXqg/giphy.gif"
          alt="Logo"
          width={180}
          height={38}
        />
      </header>

      <main className="flex flex-col items-center gap-8"></main>
      <h1 className="text-3xl font-bold">Welcome to our Express API!</h1>
      <p className="text-lg text-center">
        Thank you for using our API. Get started by exploring the documentation
        and examples below.
      </p>

      <div className="flex gap-4">
        <a
          className="px-6 py-3 text-white bg-blue-500 rounded hover:bg-blue-600"
          href="/docs"
        >
          Documentation
        </a>
        <a
          className="px-6 py-3 text-white bg-green-500 rounded hover:bg-green-600"
          href="/examples"
        >
          Examples
        </a>
      </div>
    </div>
  );
}