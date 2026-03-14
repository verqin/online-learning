"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SecretAdminModalProps {
  isOpen: boolean;
  code1: string;
  code2: string;
  codeError: string;
  isVerifying: boolean;
  onCode1Change: (value: string) => void;
  onCode2Change: (value: string) => void;
  onSubmit: () => void;
  onClose: () => void;
}

export function SecretAdminModal({
  isOpen,
  code1,
  code2,
  codeError,
  isVerifying,
  onCode1Change,
  onCode2Change,
  onSubmit,
  onClose,
}: SecretAdminModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full mx-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Admin Access Verification
        </h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code 1
            </label>
            <Input
              type="password"
              placeholder="Enter first verification code"
              value={code1}
              onChange={(e) => onCode1Change(e.target.value)}
              disabled={isVerifying}
              className="w-full"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Code 2
            </label>
            <Input
              type="password"
              placeholder="Enter second verification code"
              value={code2}
              onChange={(e) => onCode2Change(e.target.value)}
              disabled={isVerifying}
              className="w-full"
            />
          </div>

          {codeError && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {codeError}
            </div>
          )}

          <div className="flex gap-3 pt-4">
            <Button
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={isVerifying}
            >
              Cancel
            </Button>
            <Button
              onClick={onSubmit}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isVerifying}
            >
              {isVerifying ? "Verifying..." : "Verify"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
