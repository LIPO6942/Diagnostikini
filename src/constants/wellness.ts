/**
 * @fileoverview This file contains wellness tips data.
 */
import { Apple, Bed, Dumbbell, Wind } from "lucide-react";

export const wellnessTips = [
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
