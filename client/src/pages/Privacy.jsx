import usePageTitle from "../utils/usePageTitle";
import Container from "../components/ui/Container";
import Eyebrow from "../components/ui/Eyebrow";
import Section from "../components/ui/Section";

function Privacy() {
  usePageTitle("Privacy Notice — DESIGN DEN", {
    description:
      "Learn how DESIGN DEN handles personal information submitted through consultation enquiries.",
  });

  return (
    <>
      <Section className="bg-[var(--color-charcoal)] text-[var(--color-ivory)]">
        <Container>
          <div className="max-w-3xl">
            <Eyebrow>
              <span className="text-[var(--color-sand)]">Your Information</span>
            </Eyebrow>

            <h1 className="mt-5 text-5xl sm:text-6xl">Privacy Notice</h1>

            <p className="mt-6 text-lg leading-8 text-[var(--color-sand)]">
              How DESIGN DEN handles information shared through consultation
              enquiries.
            </p>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <article className="mx-auto max-w-3xl space-y-10 text-[var(--color-charcoal)]">
            <p className="text-sm text-[var(--color-warm-grey)]">
              Last updated: To be confirmed before publication.
            </p>

            <section>
              <h2 className="text-2xl">1. Who we are</h2>
              <p className="mt-3 leading-8">
                DESIGN DEN is an interior-design business led by Sanjay. This
                notice explains how information submitted through our
                consultation enquiry form may be collected, used, and protected.
              </p>
              <p className="mt-3 leading-8">
                For privacy-related questions, please use the business phone or
                WhatsApp contact published on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">2. Information we collect</h2>
              <p className="mt-3 leading-8">
                When you submit a consultation enquiry, we may collect your
                name, mobile number, city or area, selected services and
                options, project details you choose to provide, optional project
                preferences, and your consent to be contacted.
              </p>
              <p className="mt-3 leading-8">
                Please avoid sharing sensitive personal information that is not
                needed to discuss your project.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">3. How we use your information</h2>
              <p className="mt-3 leading-8">
                We use enquiry information to respond to your request,
                understand your interior-design requirements, discuss a possible
                consultation, and follow up on that enquiry where appropriate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">4. How long we retain information</h2>
              <p className="mt-3 leading-8">
                DESIGN DEN has not yet finalised its retention period for
                consultation enquiries. Information should be retained only for
                as long as necessary for the purposes for which it was
                collected, subject to applicable legal requirements and
                legitimate business record-keeping needs. The retention period
                and deletion process will be confirmed before online enquiries
                are enabled.
              </p>
              <p className="mt-3 leading-8">
                <strong>Pending confirmation:</strong> DESIGN DEN must confirm
                this period and its process for deleting or anonymising records
                that are no longer needed.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">5. Sharing and selling information</h2>
              <p className="mt-3 leading-8">
                DESIGN DEN does not intend to sell personal information. Access
                should be limited to authorised people and service providers
                genuinely needed to operate the website or handle enquiries.
                Information may also be disclosed when required by law.
              </p>
              <p className="mt-3 leading-8">
                <strong>Pending confirmation:</strong> The business must verify
                who can access enquiry records, which providers process them,
                and whether any other sharing occurs.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">6. Data security</h2>
              <p className="mt-3 leading-8">
                We intend to use reasonable technical and organisational
                safeguards to protect enquiry information. No online system can
                guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">7. Your choices and privacy requests</h2>
              <p className="mt-3 leading-8">
                You may contact DESIGN DEN to ask about information associated
                with your enquiry or request correction or deletion, subject to
                applicable legal requirements and legitimate record-keeping
                needs. We may need to verify your identity before acting on a
                request.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">8. Third-party services</h2>
              <p className="mt-3 leading-8">
                The website may rely on hosting, database, or other technical
                providers to operate.
              </p>
              <p className="mt-3 leading-8">
                <strong>Pending confirmation:</strong> The business must
                identify the providers actually used, review their relevant
                privacy and security terms, and confirm where enquiry data is
                processed or stored.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">9. Changes to this notice</h2>
              <p className="mt-3 leading-8">
                This notice may be updated when business practices or
                requirements change. The latest version and its update date will
                be published on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl">10. Contact us</h2>
              <p className="mt-3 leading-8">
                For privacy-related questions or requests, contact DESIGN DEN
                through the phone or WhatsApp details published on our website.
              </p>
            </section>

            <aside className="border border-[var(--color-sand)] bg-[var(--color-ivory)] p-5">
              <h2 className="text-lg font-semibold">
                Before this notice is finalised
              </h2>
              <p className="mt-2 leading-7">
                Sanjay must confirm the retention and deletion process,
                authorised access, third-party providers, business contact
                details, and applicable legal requirements. This draft should
                not be treated as a completed legal review.
              </p>
            </aside>
          </article>
        </Container>
      </Section>
    </>
  );
}

export default Privacy;
