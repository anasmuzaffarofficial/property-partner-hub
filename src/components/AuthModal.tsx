import { useState, useEffect, type FormEvent } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/AuthContext";

export function AuthModal() {
  const { authModalOpen, authModalMode, closeAuthModal, login, signup, loginError, signupError, isSubmitting } = useAuth();
  const [mode, setMode] = useState(authModalMode);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [signupPassword, setSignupPassword] = useState("");

  useEffect(() => { if (authModalOpen) setMode(authModalMode); }, [authModalOpen, authModalMode]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    try { await login(loginEmail, loginPassword); setLoginEmail(""); setLoginPassword(""); } catch {}
  };
  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    try {
      await signup(signupName, signupEmail, signupPhone, signupPassword);
      setSignupName(""); setSignupEmail(""); setSignupPhone(""); setSignupPassword("");
    } catch {}
  };

  return (
    <Dialog open={authModalOpen} onOpenChange={(o) => !o && closeAuthModal()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-heading text-2xl text-primary">
            {mode === "login" ? "Log In" : "Create Account"}
          </DialogTitle>
          <DialogDescription>
            {mode === "login" ? "Log in to manage your listings." : "Sign up to list properties with Aitemad Marketing."}
          </DialogDescription>
        </DialogHeader>

        {mode === "login" ? (
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2"><Label htmlFor="login-email">Email</Label><Input id="login-email" type="email" required value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="login-password">Password</Label><Input id="login-password" type="password" required value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} /></div>
            {loginError && <p className="text-sm text-destructive">{loginError}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>{isSubmitting ? "Logging in..." : "Log In"}</Button>
            <p className="text-center text-sm text-muted-foreground">Don't have an account? <button type="button" className="font-medium text-primary hover:underline" onClick={() => setMode("signup")}>Sign up</button></p>
          </form>
        ) : (
          <form onSubmit={handleSignup} className="space-y-4">
            <div className="space-y-2"><Label htmlFor="signup-name">Full Name</Label><Input id="signup-name" required value={signupName} onChange={(e) => setSignupName(e.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="signup-email">Email</Label><Input id="signup-email" type="email" required value={signupEmail} onChange={(e) => setSignupEmail(e.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="signup-phone">Phone</Label><Input id="signup-phone" required value={signupPhone} onChange={(e) => setSignupPhone(e.target.value)} /></div>
            <div className="space-y-2"><Label htmlFor="signup-password">Password</Label><Input id="signup-password" type="password" required minLength={6} value={signupPassword} onChange={(e) => setSignupPassword(e.target.value)} /></div>
            {signupError && <p className="text-sm text-destructive">{signupError}</p>}
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90" disabled={isSubmitting}>{isSubmitting ? "Creating..." : "Sign Up"}</Button>
            <p className="text-center text-sm text-muted-foreground">Already have an account? <button type="button" className="font-medium text-primary hover:underline" onClick={() => setMode("login")}>Log in</button></p>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
