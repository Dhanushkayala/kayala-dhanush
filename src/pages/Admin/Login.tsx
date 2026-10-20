import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Loader2, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { signInWithEmail, checkAdminAccess } from '../../lib/supabase';
import { cn } from '../../lib/utils';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card, CardContent } from '../../components/ui/Card';

type LoginStatus = 'idle' | 'sent' | 'verifying' | 'error' | 'success';

export function AdminLogin() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/admin/dashboard';

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<LoginStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [sentEmail, setSentEmail] = useState('');
  const [isVerifying, setIsVerifying] = useState(true);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setStatus('error');
      return;
    }

    setErrorMessage('');
    setStatus('verifying');

    try {
      const { authorized, user } = await checkAdminAccess();
      const userEmail = user?.email ?? '';

      if (userEmail.toLowerCase() !== email.toLowerCase()) {
        await signInWithEmail(email);
        setSentEmail(email);
        setStatus('sent');
      } else if (authorized) {
        navigate(from, { replace: true });
      } else {
        setErrorMessage('This email is not authorized for admin access');
        setStatus('error');
      }
    } catch (err) {
      console.error('Login error:', err);
      setErrorMessage('Failed to send magic link. Please try again.');
      setStatus('error');
    }
  };

  const handleResend = async () => {
    if (!validateEmail(sentEmail)) return;
    setStatus('verifying');
    try {
      await signInWithEmail(sentEmail);
      setStatus('sent');
    } catch {
      setErrorMessage('Failed to resend magic link');
      setStatus('error');
    }
  };

  // Check for existing session on mount
  useEffect(() => {
    const checkSession = async () => {
      const { authorized, user } = await checkAdminAccess();
      if (authorized && user?.email) {
        navigate(from, { replace: true });
      }
      setIsVerifying(false);
    };
    checkSession();
  }, [navigate, from]);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md"
        >
          <Card className="bg-[var(--bg-secondary)] border-[var(--border-subtle)]">
            <CardContent className="p-8">
              <div className="text-center">
                <Loader2 className="h-10 w-10 animate-spin text-[var(--accent-lime)] mx-auto mb-4" />
                <p className="text-[var(--text-secondary)]">Verifying session...</p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-primary)] px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="w-full max-w-md"
      >
        <Card className="bg-[var(--bg-secondary)] border-[var(--border-subtle)]">
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h1 className="font-heading text-3xl font-bold text-[var(--text-primary)] mb-2">
                Admin Access
              </h1>
              <p className="text-[var(--text-secondary)]">
                Sign in with your authorized email address
              </p>
            </div>

            {status === 'idle' && (
              <form onSubmit={handleSubmit} className="space-y-5">
                <Input
                  label="Email Address"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@example.com"
                  required
                  autoComplete="email"
                  autoFocus
                  error={errorMessage || undefined}
                />

                <Button type="submit" className="w-full" loading={false}>
                  <Mail className="h-4 w-4 mr-2" />
                  Send Magic Link
                </Button>

                <p className="text-xs text-center text-[var(--text-muted)]">
                  A sign-in link will be sent to your email. Only authorized addresses can access the dashboard.
                </p>
              </form>
            )}

            {status === 'sent' && (
              <div className="space-y-5 text-center">
                <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-green-500/10 border border-green-500/30">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-medium text-green-400">Magic link sent!</p>
                    <p className="text-sm text-[var(--text-secondary)]">Check your inbox at <strong>{sentEmail}</strong></p>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-muted)]">
                  Click the link in your email to complete sign-in. The link expires in 24 hours.
                </p>

                <Button variant="ghost" onClick={handleResend} className="w-full">
                  Resend Magic Link
                </Button>

                <Button variant="secondary" onClick={() => setStatus('idle')} className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Use Different Email
                </Button>
              </div>
            )}

            {status === 'error' && (
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/30">
                  <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <p className="text-red-400">{errorMessage}</p>
                </div>
                <Button variant="secondary" onClick={() => setStatus('idle')} className="w-full">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Try Again
                </Button>
              </div>
            )}

            {status === 'success' && (
              <div className="text-center">
                <CheckCircle className="h-12 w-12 text-green-400 mx-auto mb-4" />
                <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-2">
                  Welcome back!
                </h3>
                <p className="text-[var(--text-secondary)] mb-6">Redirecting to dashboard...</p>
                <Loader2 className="h-8 w-8 animate-spin text-[var(--accent-lime)] mx-auto" />
              </div>
            )}
          </CardContent>
        </Card>

        <p className="mt-6 text-center text-xs text-[var(--text-muted)]">
          <a href="/" className="hover:text-[var(--accent-lime)] transition-colors">
            ← Back to Portfolio
          </a>
        </p>
      </motion.div>
    </div>
  );
}