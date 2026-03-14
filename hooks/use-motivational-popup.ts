import { useState, useEffect } from "react"

const motivationalMessages = [
  "Every expert was once a beginner. Keep going!",
  "Your education is the most valuable investment you'll ever make.",
  "Progress, not perfection. You're doing great!",
  "Learning today, leading tomorrow. Keep pushing!",
  "Success is not final, failure is not fatal. Continue learning!",
  "Each module completed is one step closer to your goal.",
  "Your future self will thank you for the effort you're putting in now.",
  "Challenge yourself. Growth happens outside comfort zones.",
  "You're building skills that will change your life.",
  "Believe in yourself. You can do this!",
  "Every achievement starts with the decision to try.",
  "Education is the key to unlocking your potential.",
  "You're not just learning, you're transforming your future.",
  "Stay focused. Your dreams are within reach.",
  "The best time to invest in yourself is now.",
  "You've got this! Keep moving forward.",
  "Celebrate your progress. Every lesson learned is a victory.",
  "Education is the most powerful tool you can use to change the world.",
  "Your dedication today determines your success tomorrow.",
  "Keep learning, keep growing, keep improving.",
  "You're capable of amazing things.",
  "Invest in knowledge - it always pays the best interest.",
  "Your journey matters. Your education matters.",
  "Take it one module at a time. You'll get there.",
  "Success starts with a single step. You've already begun!",
]

export function useMotivationalPopup() {
  const [showPopup, setShowPopup] = useState(false)
  const [message, setMessage] = useState("")

  useEffect(() => {
    // Show popup randomly during learning (30% chance every 5-15 minutes)
    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)]
        setMessage(randomMessage)
        setShowPopup(true)

        // Auto-close after 5 seconds
        setTimeout(() => {
          setShowPopup(false)
        }, 5000)
      }
    }, Math.random() * 10000 + 5000) // 5-15 seconds

    return () => clearInterval(interval)
  }, [])

  const closePopup = () => setShowPopup(false)

  return { showPopup, message, closePopup }
}
