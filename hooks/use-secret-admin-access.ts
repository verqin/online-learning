"use client";

import { useState, useCallback } from "react";
import { verifySecretAdminCodes } from "@/lib/auth-utils";

export function useSecretAdminAccess() {
  const [logoTapCount, setLogoTapCount] = useState(0);
  const [showSecretPrompt, setShowSecretPrompt] = useState(false);
  const [code1, setCode1] = useState("");
  const [code2, setCode2] = useState("");
  const [codeError, setCodeError] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);

  const handleLogoTap = useCallback(() => {
    setLogoTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount === 17) {
        setShowSecretPrompt(true);
        setLogoTapCount(0);
        return 0;
      }
      return newCount;
    });
  }, []);

  const handleCodeSubmit = async () => {
    if (!code1.trim() || !code2.trim()) {
      setCodeError("Both codes are required");
      return;
    }

    setIsVerifying(true);
    setCodeError("");

    const isValid = await verifySecretAdminCodes(code1.trim(), code2.trim());

    if (isValid) {
      setShowSecretPrompt(false);
      setCode1("");
      setCode2("");
      localStorage.setItem("edusanna_secret_admin", "true");
      window.location.href = "/admin";
    } else {
      setCodeError("Invalid codes. Please try again.");
    }

    setIsVerifying(false);
  };

  const closePrompt = () => {
    setShowSecretPrompt(false);
    setCode1("");
    setCode2("");
    setCodeError("");
    setLogoTapCount(0);
  };

  return {
    logoTapCount,
    showSecretPrompt,
    code1,
    setCode1,
    code2,
    setCode2,
    codeError,
    isVerifying,
    handleLogoTap,
    handleCodeSubmit,
    closePrompt,
  };
}
