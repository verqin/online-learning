/**
 * Sound Effects Utility
 * Creates Web Audio API sounds for quiz feedback
 */

export class SoundEffects {
  private audioContext: AudioContext | null = null

  constructor() {
    // Initialize audio context on first use
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    }
  }

  /**
   * Play a correct answer sound effect (cheerful beep)
   */
  playCorrectSound() {
    if (!this.audioContext) return

    const ctx = this.audioContext
    const now = ctx.currentTime

    // Create oscillator for correct answer (higher pitch - ascending notes)
    const osc1 = ctx.createOscillator()
    const osc2 = ctx.createOscillator()
    const gain = ctx.createGain()

    osc1.connect(gain)
    osc2.connect(gain)
    gain.connect(ctx.destination)

    // First note (high)
    osc1.frequency.setValueAtTime(800, now)
    osc1.frequency.setValueAtTime(1000, now + 0.1)

    // Second note (higher)
    osc2.frequency.setValueAtTime(1200, now + 0.15)
    osc2.frequency.setValueAtTime(1400, now + 0.25)

    // Control volume
    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3)

    osc1.start(now)
    osc1.stop(now + 0.15)
    osc2.start(now + 0.15)
    osc2.stop(now + 0.3)
  }

  /**
   * Play an incorrect answer sound effect (low buzzer)
   */
  playWrongSound() {
    if (!this.audioContext) return

    const ctx = this.audioContext
    const now = ctx.currentTime

    // Create oscillator for wrong answer (lower pitch - descending notes)
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    // Descending notes
    osc.frequency.setValueAtTime(400, now)
    osc.frequency.setValueAtTime(300, now + 0.15)
    osc.frequency.setValueAtTime(150, now + 0.3)

    // Control volume
    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4)

    osc.start(now)
    osc.stop(now + 0.4)
  }

  /**
   * Play a notification sound (neutral beep)
   */
  playNotificationSound() {
    if (!this.audioContext) return

    const ctx = this.audioContext
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    osc.frequency.setValueAtTime(600, now)
    gain.gain.setValueAtTime(0.2, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2)

    osc.start(now)
    osc.stop(now + 0.2)
  }

  /**
   * Play a completion/success sound (ding)
   */
  playSuccessSound() {
    if (!this.audioContext) return

    const ctx = this.audioContext
    const now = ctx.currentTime

    const osc = ctx.createOscillator()
    const gain = ctx.createGain()

    osc.connect(gain)
    gain.connect(ctx.destination)

    // High ding sound
    osc.frequency.setValueAtTime(1500, now)
    osc.frequency.exponentialRampToValueAtTime(1000, now + 0.5)

    gain.gain.setValueAtTime(0.3, now)
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.5)

    osc.start(now)
    osc.stop(now + 0.5)
  }
}

// Create singleton instance
let soundEffectsInstance: SoundEffects | null = null

export function getSoundEffects(): SoundEffects {
  if (!soundEffectsInstance && typeof window !== 'undefined') {
    soundEffectsInstance = new SoundEffects()
  }
  return soundEffectsInstance || new SoundEffects()
}
