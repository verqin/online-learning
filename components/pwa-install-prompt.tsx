'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { X, Download, Smartphone, Zap } from 'lucide-react'

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [showPrompt, setShowPrompt] = useState(false)
  const [isIOS, setIsIOS] = useState(false)

  useEffect(() => {
    // Check if user dismissed recently (7 day cooldown)
    const dismissed = localStorage.getItem('pwa-dismissed-time')
    if (dismissed) {
      const dismissTime = parseInt(dismissed, 10)
      if (Date.now() - dismissTime < 7 * 24 * 60 * 60 * 1000) {
        return
      }
    }

    // Detect iOS
    const isAppleDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    setIsIOS(isAppleDevice)

    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
      // Show prompt after 2 seconds of user being on site
      setTimeout(() => setShowPrompt(true), 2000)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)

    // For iOS, show custom instructions after delay
    if (isAppleDevice) {
      setTimeout(() => setShowPrompt(true), 2500)
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    }
  }, [])

  const handleInstall = async () => {
    if (!deferredPrompt) return

    try {
      await deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice

      if (outcome === 'accepted') {
        localStorage.setItem('pwa-installed', 'true')
      }
      
      setShowPrompt(false)
      setDeferredPrompt(null)
      localStorage.setItem('pwa-dismissed-time', Date.now().toString())
    } catch (error) {
      console.error('Installation failed:', error)
    }
  }

  const handleDismiss = () => {
    setShowPrompt(false)
    localStorage.setItem('pwa-dismissed-time', Date.now().toString())
  }

  if (!showPrompt) return null

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-4 sm:w-96 z-40 animate-in slide-in-from-bottom-5 duration-300">
      <div className="glass-card-light rounded-xl shadow-2xl border border-blue-200 p-5">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
              {isIOS ? (
                <Smartphone className="w-5 h-5 text-blue-600" />
              ) : (
                <Download className="w-5 h-5 text-blue-600" />
              )}
            </div>
            <div>
              <h3 className="font-bold text-blue-900 text-base">Install EDUSANNA App</h3>
              <p className="text-sm text-blue-700 mt-0.5">Learn offline, anytime, anywhere</p>
            </div>
          </div>
          <button
            onClick={handleDismiss}
            className="p-1 hover:bg-blue-100 rounded-lg transition flex-shrink-0"
            aria-label="Close"
          >
            <X className="w-4 h-4 text-blue-600" />
          </button>
        </div>

        {isIOS && (
          <div className="bg-blue-50 rounded-lg p-3 mb-4 text-xs text-blue-800 border border-blue-100">
            <p className="font-semibold mb-1">📱 How to Install on iPhone/iPad:</p>
            <p>1. Tap the Share button (square with arrow)</p>
            <p>2. Scroll and tap "Add to Home Screen"</p>
            <p>3. Tap "Add" to confirm</p>
          </div>
        )}

        <div className="flex gap-2">
          {!isIOS && (
            <Button
              onClick={handleInstall}
              className="premium-button flex-1 h-10 text-sm font-semibold"
            >
              <Download className="w-4 h-4 mr-2" />
              Install Now
            </Button>
          )}
          <Button
            onClick={handleDismiss}
            variant="outline"
            className="flex-1 h-10 text-sm border-blue-200 text-blue-600 hover:bg-blue-50"
          >
            Later
          </Button>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-blue-600">
          <Zap className="w-3 h-3" />
          <span>Works offline • Fast loading • Home screen icon</span>
        </div>
      </div>
    </div>
  )
}
