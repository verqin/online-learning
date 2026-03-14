export interface MotivationalMessage {
  title: string
  message: string
}

export const motivationalMessages: MotivationalMessage[] = [
  {
    title: "You are Unstoppable",
    message: "Every course you complete brings you closer to your dreams. Keep pushing forward!",
  },
  {
    title: "Progress Over Perfection",
    message: "You don't need to be perfect, you just need to keep learning. Edusanna celebrates your progress.",
  },
  {
    title: "Your Potential is Unlimited",
    message: "With Edusanna, your learning journey has no limits. Enroll in another course today!",
  },
  {
    title: "Skills are Your Power",
    message: "Every skill you acquire is a superpower. Keep building your arsenal of knowledge.",
  },
  {
    title: "Success is Your Destiny",
    message: "You're not just learning, you're building a better future. Your dedication is inspiring!",
  },
  {
    title: "One Step at a Time",
    message: "Great achievements are built one step at a time. You're on the right path!",
  },
  {
    title: "Your Impact Matters",
    message: "The knowledge you gain will impact not just your life, but those around you too.",
  },
  {
    title: "Rise and Shine",
    message: "Each new day is a chance to learn something new. What will you discover today?",
  },
  {
    title: "You've Got This",
    message: "Believe in yourself the way Edusanna believes in you. You can achieve anything!",
  },
  {
    title: "Transform Your Tomorrow",
    message: "The course you're taking today is building the professional you want to be tomorrow.",
  },
  {
    title: "Excellence Awaits",
    message: "Pursue excellence not perfection. Every effort on Edusanna is a step towards excellence.",
  },
  {
    title: "Your Vision is Clear",
    message: "You enrolled in this course for a reason. Stay focused on your vision!",
  },
  {
    title: "Elevate Your Mind",
    message: "That's exactly what Edusanna is here to help you do. Keep elevating!",
  },
  {
    title: "Unlock Your Potential",
    message: "The key to your potential has always been inside you. Edusanna is just helping you unlock it!",
  },
  {
    title: "Be the Best Version",
    message: "Invest in yourself. The course you're taking is an investment in the best version of you.",
  },
  {
    title: "You're Doing Amazing",
    message: "Your commitment to learning is extraordinary. Keep up this amazing journey!",
  },
];

export function getRandomMotivationalMessage(): MotivationalMessage {
  return motivationalMessages[
    Math.floor(Math.random() * motivationalMessages.length)
  ];
}
