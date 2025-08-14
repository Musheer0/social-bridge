/* eslint-disable react/no-unescaped-entities */
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <Image src="/logo.svg" alt="SocialBridge Logo" width={40} height={40} className="h-10 w-10" />
            <h1 className="text-2xl font-bold text-foreground">SocialBridge</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="space-y-8">
          <div className="text-center space-y-4">
            <h1 className="text-4xl font-bold text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground text-lg">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                By accessing and using SocialBridge ("we," "our," or "us"), you accept and agree to be bound by the
                terms and provision of this agreement. If you do not agree to abide by the above, please do not use this
                service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Description of Service</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                SocialBridge provides Instagram automation tools and services designed to help users grow their
                Instagram presence through:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Automated posting and scheduling</li>
                <li>Follower growth and engagement tools</li>
                <li>Analytics and performance tracking</li>
                <li>Content management and optimization</li>
                <li>Direct message automation (where permitted)</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Accounts and Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">To use our services, you must:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Be at least 18 years old or have parental consent</li>
                <li>Provide accurate and complete registration information</li>
                <li>Maintain the security of your account credentials</li>
                <li>Have a valid Instagram account in good standing</li>
                <li>Accept responsibility for all activities under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instagram Compliance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">You acknowledge and agree that:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>You must comply with Instagram's Terms of Service and Community Guidelines</li>
                <li>SocialBridge operates within Instagram's API Terms of Use</li>
                <li>Instagram may change their policies, which could affect our services</li>
                <li>We are not responsible for Instagram's actions regarding your account</li>
                <li>You use our automation tools at your own risk</li>
                <li>We recommend following Instagram's best practices for authentic engagement</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">You agree NOT to use our service to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violate any applicable laws or regulations</li>
                <li>Infringe on intellectual property rights</li>
                <li>Post spam, harassment, or inappropriate content</li>
                <li>Engage in fraudulent or deceptive practices</li>
                <li>Attempt to hack, reverse engineer, or compromise our systems</li>
                <li>Use our service for illegal or unauthorized purposes</li>
                <li>Create fake accounts or impersonate others</li>
                <li>Distribute malware or harmful content</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Subscription and Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Billing</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Subscription fees are billed in advance on a recurring basis</li>
                  <li>All fees are non-refundable unless otherwise stated</li>
                  <li>We reserve the right to change pricing with 30 days notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Cancellation</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>You may cancel your subscription at any time</li>
                  <li>Cancellation takes effect at the end of the current billing period</li>
                  <li>No refunds for partial months or unused features</li>
                  <li>Account data may be deleted after cancellation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Our Rights</h3>
                <p className="text-muted-foreground">
                  SocialBridge and its original content, features, and functionality are owned by us and are protected
                  by international copyright, trademark, patent, trade secret, and other intellectual property laws.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Your Content</h3>
                <p className="text-muted-foreground">
                  You retain ownership of content you create and post through our service. By using our service, you
                  grant us a limited license to use, store, and process your content solely to provide our services.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Privacy and Data Protection</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your
                information when you use our service. By using SocialBridge, you agree to the collection and use of
                information in accordance with our Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Availability and Modifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We reserve the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Modify, suspend, or discontinue any part of our service</li>
                <li>Update our software and features without notice</li>
                <li>Perform maintenance that may temporarily affect service availability</li>
                <li>Set usage limits and restrictions</li>
                <li>Refuse service to anyone for any reason</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimers and Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-3">Service Disclaimer</h3>
                <p className="text-muted-foreground">
                  Our service is provided "as is" without warranties of any kind. We do not guarantee uninterrupted
                  service, specific results, or compatibility with Instagram's future changes.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Limitation of Liability</h3>
                <p className="text-muted-foreground">
                  In no event shall SocialBridge be liable for any indirect, incidental, special, consequential, or
                  punitive damages, including loss of profits, data, or other intangible losses resulting from your use
                  of our service.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">We may terminate or suspend your account if you:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Violate these Terms of Service</li>
                <li>Engage in prohibited activities</li>
                <li>Fail to pay subscription fees</li>
                <li>Provide false or misleading information</li>
                <li>Use our service in a way that harms our platform or other users</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Upon termination, your right to use the service will cease immediately, and we may delete your account
                data.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Indemnification</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                You agree to defend, indemnify, and hold harmless SocialBridge and its affiliates from and against any
                claims, damages, obligations, losses, liabilities, costs, or debt arising from your use of our service
                or violation of these terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Governing Law and Dispute Resolution</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction],
                without regard to its conflict of law provisions.
              </p>
              <p className="text-muted-foreground">
                Any disputes arising from these terms or your use of our service shall be resolved through binding
                arbitration in accordance with the rules of [Arbitration Organization].
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of material
                changes via email or through our service. Your continued use of SocialBridge after such modifications
                constitutes acceptance of the updated terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                   <p>
                  <strong>Email:</strong> musheeran165@gmail.com
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-card mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src="/logo.svg" alt="SocialBridge Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-sm text-muted-foreground">© 2025 SocialBridge. All rights reserved.</span>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </Link>
              <Link href="/policy" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </Link>
      
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
