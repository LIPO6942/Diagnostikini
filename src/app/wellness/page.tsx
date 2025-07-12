import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Apple, Bed, Dumbbell, Wind } from "lucide-react";
import Image from 'next/image';

const wellnessTips = [
  {
    category: "Nutrition",
    icon: Apple,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "healthy food"
    },
    tips: [
      "Eat a variety of fruits and vegetables daily.",
      "Choose whole grains over refined grains.",
      "Limit processed foods, sugar, and unhealthy fats.",
      "Stay hydrated by drinking plenty of water.",
    ],
  },
  {
    category: "Activity",
    icon: Dumbbell,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "running park"
    },
    tips: [
      "Aim for 30 minutes of moderate exercise most days.",
      "Find an activity you enjoy to stay motivated.",
      "Incorporate strength training 2-3 times a week.",
      "Remember to stretch before and after workouts.",
    ],
  },
  {
    category: "Sleep",
    icon: Bed,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "sleeping peaceful"
    },
    tips: [
      "Get 7-9 hours of quality sleep per night.",
      "Stick to a regular sleep schedule.",
      "Create a relaxing bedtime routine.",
      "Avoid screens an hour before bed.",
    ],
  },
  {
    category: "Stress Management",
    icon: Wind,
    image: {
      src: "https://placehold.co/600x400.png",
      hint: "yoga meditation"
    },
    tips: [
      "Practice mindfulness or meditation.",
      "Engage in hobbies to relax and unwind.",
      "Connect with friends and family for support.",
      "Take regular breaks throughout the day.",
    ],
  },
];

export default function WellnessPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold font-headline">Wellness Module</h1>
        <p className="text-muted-foreground">Personalized tips for a healthier lifestyle.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {wellnessTips.map((item) => (
          <Card key={item.category} className="overflow-hidden">
            <div className="relative h-48 w-full">
               <Image src={item.image.src} alt={item.category} layout="fill" objectFit="cover" data-ai-hint={item.image.hint} />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <item.icon className="h-6 w-6 text-primary" />
                {item.category}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                {item.tips.map((tip, index) => (
                  <li key={index}>{tip}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
