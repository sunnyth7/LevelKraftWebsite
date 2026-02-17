import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for REXITY AI Solutions - Learn how we protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4">
        <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-muted-foreground">
          Last updated: January 29, 2026
        </p>

        <div className="prose prose-neutral mt-12 max-w-none">
          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Introduction
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              REXITY AI Solutions (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Information We Collect
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We may collect information about you in various ways, including:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>
                <strong className="text-foreground">Personal Data:</strong>{" "}
                Name, email address, phone number, and company information when you submit forms or contact us.
              </li>
              <li>
                <strong className="text-foreground">Usage Data:</strong>{" "}
                Information about how you interact with our website, including pages visited and features used.
              </li>
              <li>
                <strong className="text-foreground">Device Data:</strong>{" "}
                Information about your device, browser type, and IP address.
              </li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              How We Use Your Information
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We use the information we collect to:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and demo requests</li>
              <li>Send you updates, marketing communications, and promotional materials</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Data Security
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Third-Party Services
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We may use third-party services for analytics, hosting, and other business purposes. These third parties have their own privacy policies governing the use of your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Your Rights
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Depending on your location, you may have the right to:
            </p>
            <ul className="mt-4 list-disc pl-6 text-muted-foreground space-y-2">
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict certain processing of your data</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Contact Us
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:{" "}
              <a
                href="mailto:support@levelkraft.de"
                className="text-primary hover:underline"
              >
                support@levelkraft.de
              </a>
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-xl font-semibold text-foreground">
              Product-Specific Privacy Policies
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Some of our products and services have their own privacy policies. Please review the relevant policy for the specific product you are using.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
