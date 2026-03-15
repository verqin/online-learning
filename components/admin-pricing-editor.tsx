'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign, Save, RotateCcw } from 'lucide-react'

interface PricingEditorProps {
  isOpen: boolean
  onClose: () => void
}

export function AdminPricingEditor({ isOpen, onClose }: PricingEditorProps) {
  const [certificatePrice, setCertificatePrice] = useState('12')
  const [diplomaPrice, setDiplomaPrice] = useState('18')
  const [isSaving, setIsSaving] = useState(false)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSave = async () => {
    setIsSaving(true)
    setSaveStatus('idle')

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      console.log('[Admin Pricing Updated]', {
        certificate: parseFloat(certificatePrice),
        diploma: parseFloat(diplomaPrice),
      })

      setSaveStatus('success')
      setTimeout(() => setSaveStatus('idle'), 2000)
    } catch (error) {
      console.error('[Pricing Update Error]', error)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus('idle'), 2000)
    } finally {
      setIsSaving(false)
    }
  }

  const handleReset = () => {
    setCertificatePrice('12')
    setDiplomaPrice('18')
    setSaveStatus('idle')
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="w-5 h-5 text-purple-600" />
            <CardTitle className="text-2xl">Pricing Editor</CardTitle>
          </div>
          <CardDescription>Admin Only - Update course certification prices</CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Certificate Price */}
          <div className="space-y-2">
            <Label htmlFor="cert-price" className="text-base font-semibold">
              Certificate Price (USD)
            </Label>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-600" />
              <Input
                id="cert-price"
                type="number"
                min="0"
                step="0.01"
                value={certificatePrice}
                onChange={(e) => setCertificatePrice(e.target.value)}
                className="flex-1"
                disabled={isSaving}
              />
            </div>
            <p className="text-xs text-gray-500">Default: $12 - Foundation level certification</p>
          </div>

          {/* Diploma Price */}
          <div className="space-y-2">
            <Label htmlFor="dip-price" className="text-base font-semibold">
              Diploma Price (USD)
            </Label>
            <div className="flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-600" />
              <Input
                id="dip-price"
                type="number"
                min="0"
                step="0.01"
                value={diplomaPrice}
                onChange={(e) => setDiplomaPrice(e.target.value)}
                className="flex-1"
                disabled={isSaving}
              />
            </div>
            <p className="text-xs text-gray-500">Default: $18 - Professional level credential</p>
          </div>

          {/* Current Pricing Summary */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <p className="text-sm font-medium text-gray-600">Current Configuration</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Certificate:</span>
              <span className="font-semibold">${parseFloat(certificatePrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700">Diploma:</span>
              <span className="font-semibold">${parseFloat(diplomaPrice).toFixed(2)}</span>
            </div>
            <div className="flex justify-between items-center border-t pt-2 mt-2">
              <span className="text-gray-700 font-medium">Bundle Savings:</span>
              <span className="font-semibold text-green-600">
                ${(parseFloat(diplomaPrice) - parseFloat(certificatePrice)).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Status Messages */}
          {saveStatus === 'success' && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              Pricing updated successfully!
            </div>
          )}

          {saveStatus === 'error' && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              Failed to update pricing. Please try again.
            </div>
          )}

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button onClick={handleReset} variant="outline" className="flex-1" disabled={isSaving}>
              <RotateCcw className="w-4 h-4 mr-2" />
              Reset
            </Button>
            <Button
              onClick={handleSave}
              className="flex-1 bg-purple-600 hover:bg-purple-700"
              disabled={isSaving}
            >
              {isSaving ? 'Saving...' : 'Save Changes'}
              <Save className="w-4 h-4 ml-2" />
            </Button>
          </div>

          <Button onClick={onClose} variant="ghost" className="w-full" disabled={isSaving}>
            Close
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
