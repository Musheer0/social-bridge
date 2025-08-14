/* eslint-disable react/no-unescaped-entities */

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function PrivacyPolicyPage() {
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
            <h1 className="text-4xl font-bold text-foreground">Privacy Policy</h1>
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
              <CardTitle>Introduction</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Welcome to SocialBridge ("we," "our," or "us"). This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our Instagram automation tool and related services
                (the "Service"). Please read this privacy policy carefully.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Personal Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Account information (name, email address, username)</li>
                  <li>Instagram account credentials and access tokens</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Communication data when you contact our support team</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Instagram Data</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Profile information and media content</li>
                  <li>Follower and following lists</li>
                  <li>Engagement metrics and analytics data</li>
                  <li>Direct messages and comments (only as necessary for automation features)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-3">Technical Information</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Device information and browser type</li>
                  <li>IP address and location data</li>
                  <li>Usage patterns and feature interactions</li>
                  <li>Log files and error reports</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide and maintain our Instagram automation services</li>
                <li>Process your transactions and manage your account</li>
                <li>Analyze and improve our service performance</li>
                <li>Send you important updates and promotional communications</li>
                <li>Ensure compliance with Instagram's Terms of Service</li>
                <li>Detect and prevent fraudulent or unauthorized activities</li>
                <li>Provide customer support and respond to your inquiries</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Instagram API Compliance</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                SocialBridge operates in full compliance with Instagram's API Terms of Use and Platform Policy. We only
                access Instagram data that you explicitly authorize, and we use this data solely to provide the
                automation services you've requested. We do not store unnecessary Instagram data and regularly audit our
                practices to ensure ongoing compliance.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                We do not sell, trade, or rent your personal information to third parties. We may share your information
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Service Providers:</strong> Trusted third-party services that help us operate our platform
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets
                </li>
                <li>
                  <strong>With Your Consent:</strong> When you explicitly authorize us to share specific information
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We implement industry-standard security measures to protect your information, including encryption,
                secure servers, and regular security audits. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security. We encourage you to use strong passwords and
                enable two-factor authentication where available.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Access:</strong> Request a copy of the personal information we hold about you
                </li>
                <li>
                  <strong>Correction:</strong> Update or correct inaccurate personal information
                </li>
                <li>
                  <strong>Deletion:</strong> Request deletion of your personal information (subject to legal
                  requirements)
                </li>
                <li>
                  <strong>Portability:</strong> Receive your data in a structured, machine-readable format
                </li>
                <li>
                  <strong>Opt-out:</strong> Unsubscribe from marketing communications at any time
                </li>
                <li>
                  <strong>Revoke Access:</strong> Disconnect your Instagram account from our service
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Retention</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We retain your information for as long as necessary to provide our services and comply with legal
                obligations. Account information is typically retained until you delete your account, while Instagram
                data is processed in real-time and not stored longer than necessary for service delivery. Analytics data
                may be retained in aggregated, anonymized form for service improvement purposes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Your information may be transferred to and processed in countries other than your own. We ensure that
                such transfers comply with applicable data protection laws and implement appropriate safeguards to
                protect your information, including standard contractual clauses and adequacy decisions.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Children's Privacy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Our Service is not intended for children under 13 years of age. We do not knowingly collect personal
                information from children under 13. If you are a parent or guardian and believe your child has provided
                us with personal information, please contact us immediately.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material changes by
                posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to
                review this Privacy Policy periodically for any changes.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>
                  <strong>Email:</strong> musheeran165@gmail.com
                </p>
             
              </div>
              <p className="text-sm text-muted-foreground">
                We will respond to your inquiry within 30 days of receipt.
              </p>
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
          
          </div>
        </div>
      </footer>
    </div>
  )
}
