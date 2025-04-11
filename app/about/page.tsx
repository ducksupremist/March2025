"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import { useState } from "react";

import { title } from "@/components/primitives";

export default function AboutPage() {
  let facts: string[] = [
    "A silverback gorilla can lift over 1,763 pounds",
    "The deepest part of the ocean is approximately 35,876 feet down",
    "The surface of the sun is around 10,000 degrees Fahrenheit",
    "Flamingos aren’t born pink",
    "Rhode Island is the smallest state in the United States",
    "There’s a planet made almost entirely of diamonds",
    "The national animal of Scotland is a unicorn",
    "President Theodore Roosevelt had a pet hyena",
    "Peanuts aren’t a type of nut",
    "Almonds and peaches are related",
  ];
  const [fact, setFact] = useState("");

  return (
    <div>
      <Button
        className="bg-green-800 text-white"
        onPress={() => {
          setFact(facts[Math.floor(Math.random() * facts.length)]);
        }}
      >
        Press for fact
        {/* button */}
      </Button>
      <p>{fact}</p>
      <h1 className={title()}>About me</h1>
      <p>
        My interests include machine learning+AI, art, working out, writing,
        both fiction and non-fiction!
      </p>
      {/* caption */}
      <div>
        <p>
          This is my pen sketch of Howl&apos;s moving castle. I drew this in my
          freshman year.
          {/* captions */}
        </p>
        <Image
          alt="howls moving castle"
          height={500}
          src="/howls moving castle.jpeg"
          width={500}
        />
      </div>

      <div>
        <p>
          {" "}
          {/* I made the font green - Noelle */}
          2024 halloween. I dressed up as a witch with my best friend.
        </p>
        <Image alt="halloween" height={500} src="/halloween.jpeg" width={500} />
      </div>
      <div>
        <p>
          first MOVE (a non profit that I&apos;m a cofounder of) workshop at
          Eastlake
        </p>
        {/* I also added more green fonts to your page-Mia */}
        <Image
          alt="MOVE workshop"
          height={500}
          src="/MOVE workshop.jpeg"
          width={500}
        />
      </div>
      <div>
        <p>First painting lesson</p>
        <Image alt="painting" height={500} src="/painting.jpeg" width={500} />
      </div>
      <div>
        <p>Selfies of myself</p>
        <Image alt="selfie" height={500} src="/selfie.jpeg" width={500} />
      </div>
      {/* images */}

      <br />
      <Link className="bg-green-too-text-white" href="https://www.canva.com/">
        canva
      </Link>
      <br />
      <Link className="bg-green-too-text-white" href="https://gretlusky.com/">
        {" "}
        art of my favorite artist
      </Link>
    </div>
    // Links
  );
}
