"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Confetti from "react-confetti";

export default function ConfettiTrigger() {
  const searchParams = useSearchParams();
  const [showConfetti, setShowConfetti] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const router = useRouter();
 const handleComplete = () => {
    setShowConfetti(false);

    // Remove ?conffeti without a full reload
    const params = new URLSearchParams(searchParams.toString());
    params.delete("conffeti");
    router.replace(`?${params.toString()}`, { scroll: false });
  };
  // Update confetti dimensions on resize
  useEffect(() => {
    function updateSize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Trigger confetti if query param is present
  useEffect(() => {
    if (searchParams.has("conffeti")) {
      setShowConfetti(true);
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    }
  }, [searchParams]);

  if (!showConfetti) return null;

  return (
    <Confetti
      width={dimensions.width}
      height={dimensions.height}
      numberOfPieces={300}
      recycle={false}
           onConfettiComplete={handleComplete}

    />
  );
}
