'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [passcode, setPasscode] = useState('');
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passcode === '000235') {
      router.push('/home');
    } else {
      setError(true);
      setPasscode('');
    }
  };

  return (
    <div className="min-h-screen relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/garrett-hall-sunset.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
          filter: 'grayscale(100%)'
        }}
      ></div>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-background/80 -z-10"></div>

      <div className="min-h-screen flex flex-col">
        {/* Hero Section - Same as homepage */}
        <div className="flex-1 flex items-center justify-center px-8 py-12">
          <div className="text-center max-w-4xl">
            {/* Login Card */}
            <div className="max-w-md mx-auto">
              <div className="bg-background/95 backdrop-blur border-2 border-primary shadow-[0_8px_24px_rgba(35,45,75,0.6)] rounded-2xl p-12">
                <h1 className="text-5xl font-bold mb-4 text-primary animate-fade-in-up">Batten Digital Commons</h1>
                <div className="w-24 h-1 bg-accent mx-auto mb-6 animate-fade-in-up animation-delay-200"></div>
                <p className="text-base text-muted-foreground mx-auto animate-fade-in-up animation-delay-400 mb-8">
                  Your central hub for resources, tools, and information at the Frank Batten School of
                  Leadership and Public Policy
                </p>

                <form onSubmit={handleLogin}>
                  <input
                    type="password"
                    placeholder="Enter passcode"
                    value={passcode}
                    onChange={(e) => {
                      setPasscode(e.target.value);
                      setError(false);
                    }}
                    className={`w-full mb-4 px-6 py-4 rounded-lg border-2 ${
                      error ? 'border-red-500' : 'border-primary'
                    } shadow-[0_4px_12px_rgba(35,45,75,0.4)] focus:outline-none focus:border-accent focus:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all bg-background text-center`}
                  />

                  {error && (
                    <p className="text-red-500 text-sm mb-4">Invalid passcode. Please try again.</p>
                  )}

                  <button
                    type="submit"
                    className="block w-full py-4 px-6 rounded-lg text-base font-semibold bg-primary text-white border-2 border-accent/30 hover:border-accent hover:bg-primary/90 shadow-[0_4px_12px_rgba(35,45,75,0.4)] hover:shadow-[0_6px_20px_rgba(35,45,75,0.6)] transition-all text-center"
                  >
                    NetBadge Login
                  </button>
                </form>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Use your UVA NetBadge credentials to access the Digital Commons
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
