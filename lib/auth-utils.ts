import { createClient } from "@/lib/supabase/client";

const ADMIN_EMAILS = ["africanedusanna@gmail.com"];
const ADMIN_PASSWORD = "admin#1";
// Secret codes for admin access (hidden in environment for production)
const SECRET_CODE_1 = process.env.NEXT_PUBLIC_ADMIN_CODE_1 || "Activate";
const SECRET_CODE_2 = process.env.NEXT_PUBLIC_ADMIN_CODE_2 || "Bankai";

export async function authenticateAdmin(email: string, password: string) {
  if (email === "africanedusanna@gmail.com" && password === "admin#1") {
    return { success: true, role: "admin" };
  }
  return { success: false, role: null };
}

export async function verifySecretAdminCodes(code1: string, code2: string) {
  const isCode1Valid = code1 === SECRET_CODE_1;
  const isCode2Valid = code2 === SECRET_CODE_2;
  return isCode1Valid && isCode2Valid;
}

export async function getAdminStatus() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { isAdmin: false, user: null };

  const isAdmin =
    user.email === "africanedusanna@gmail.com" ||
    user.user_metadata?.is_admin === true;

  return { isAdmin, user };
}

export async function signOutAdmin() {
  const supabase = createClient();
  await supabase.auth.signOut();
  return true;
}
