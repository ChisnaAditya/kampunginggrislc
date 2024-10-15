"use client";
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import Confetti from "react-confetti";
import Link from "next/link";
export default function ButtonConfetti() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setClient] = useState(false);
  useEffect(() => {
    const { innerWidth: width, innerHeight: height } = window;
    setDimensions({
      width,
      height,
    });
    // setClient(true);
  }, []);

  return (
    <>
      <Link href="#paket">
        <Button
          className="bg-primaryLC text-xl text-white font-bold"
          onClick={() => setClient(true)}
        >
          Daftar Sekarang!
        </Button>
      </Link>
      {isClient && (
        // <Confetti width={dimensions.width} height={dimensions.height}/>
        <Confetti
          numberOfPieces={500}
          height={3000}
          gravity={0.1}
          recycle={false}
          confettiSource={{
            w: 2,
            h: 500,
            x: dimensions.width,
            y: dimensions.height,
          }}
          initialVelocityX={10}
          initialVelocityY={10}
          onConfettiComplete={() => setClient(false)}
        />
      )}
    </>
  );
}
