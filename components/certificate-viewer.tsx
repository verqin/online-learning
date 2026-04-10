'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Download, Eye } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Payment {
  id: string;
  student_name: string;
  course_name: string;
  certificate_type: 'certificate' | 'diploma';
  certificate_id: string;
  amount: number;
  payment_status: string;
  created_at: string;
}

interface CertificateViewerProps {
  payment: Payment;
}

export function CertificateViewer({ payment }: CertificateViewerProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  const handleGeneratePDF = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/certificates/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId: payment.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate certificate');
      }

      const data = await response.json();
      setHtmlContent(data.html);

      // Trigger download using html2pdf
      downloadPDF(data.html, data.filename);
    } catch (err) {
      console.error('Error generating PDF:', err);
      setError(err instanceof Error ? err.message : 'Failed to generate certificate');
    } finally {
      setLoading(false);
    }
  };

  const downloadPDF = (html: string, filename: string) => {
    // Create an invisible iframe to render and print
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const iframeDoc =
      iframe.contentDocument || iframe.contentWindow?.document;
    if (iframeDoc) {
      iframeDoc.open();
      iframeDoc.write(html);
      iframeDoc.close();

      // Wait for content to load then print to PDF
      setTimeout(() => {
        iframe.contentWindow?.print();
        document.body.removeChild(iframe);
      }, 250);
    }
  };

  const handlePreview = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch('/api/certificates/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          paymentId: payment.id,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate certificate');
      }

      const data = await response.json();
      setHtmlContent(data.html);
    } catch (err) {
      console.error('Error generating certificate:', err);
      setError(
        err instanceof Error ? err.message : 'Failed to generate certificate'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="glass-card-light border-blue-100">
      <CardHeader className="border-b border-blue-100">
        <CardTitle className="text-blue-900">
          {payment.certificate_type === 'diploma' ? '🎓 Diploma' : '📜 Certificate'}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div>
            <p className="text-sm text-blue-600 font-medium">Course</p>
            <p className="text-blue-900 font-semibold">{payment.course_name}</p>
          </div>

          <div>
            <p className="text-sm text-blue-600 font-medium">Certificate ID</p>
            <p className="text-blue-900 font-mono">{payment.certificate_id}</p>
          </div>

          <div>
            <p className="text-sm text-blue-600 font-medium">Status</p>
            <p className="text-blue-900">
              {payment.payment_status === 'certificate_sent'
                ? '✅ Ready for Download'
                : '⏳ Processing'}
            </p>
          </div>

          {error && (
            <div className="text-red-600 text-sm bg-red-50 p-3 rounded border border-red-200">
              {error}
            </div>
          )}

          <div className="flex gap-2 pt-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-blue-200 text-blue-600 hover:bg-blue-50 flex-1"
                  disabled={loading}
                  onClick={handlePreview}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  {loading ? 'Generating...' : 'Preview'}
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-screen overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-blue-900">
                    Certificate Preview
                  </DialogTitle>
                </DialogHeader>
                {htmlContent ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: htmlContent }}
                    className="w-full"
                  ></div>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-blue-600">Loading preview...</p>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            <Button
              className="premium-button flex-1"
              disabled={loading}
              onClick={handleGeneratePDF}
            >
              <Download className="w-4 h-4 mr-2" />
              {loading ? 'Generating...' : 'Download PDF'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
