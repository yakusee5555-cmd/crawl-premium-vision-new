# Fix booking links and tighten site spacing

## Scope

- Update every booking destination to `https://calendly.com/crawio/20`, including both desktop and mobile header buttons, the homepage booking call-to-action, the contact-page calendar button, and the embedded Calendly calendar while preserving its display parameters.
- Standardize homepage section spacing so comparable sections share a tighter rhythm: approximately 64px on mobile and 96px on desktop, with smaller transitions where the hero flows directly into the SMS opt-in section.
- Tighten the hero’s top/bottom space and stacked mobile layout without changing its text, imagery, floating cards, colors, or visual direction.
- Reduce oversized spacing inside the homepage’s testimonials, process, services, mission, booking, and FAQ sections, plus the SMS opt-in section and footer.
- Apply matching mobile/desktop spacing to the About, Contact, standalone SMS Opt-In, Privacy Policy, and Terms and Conditions pages. Legal-document paragraph and list spacing will remain readable while large page-edge and section gaps are reduced.
- Preserve existing minimum button heights and usable mobile touch targets.

## Verification

- Search the completed source to confirm no old Calendly URL remains.
- Check the homepage at mobile (393px) and desktop (1440px) widths for balanced section transitions and a correctly stacked hero.
- Check Privacy Policy, Terms and Conditions, SMS Opt-In, About, and Contact at both widths for consistent page-edge spacing and no overlaps.
- Confirm all booking buttons and the embedded calendar resolve to the new Calendly destination.
- Confirm the latest build and browser console remain error-free.

## Technical details

- Changes are limited to existing spacing utility classes and booking `href`/iframe `src` values.
- No copy, colors, data behavior, page structure, or design tokens will be changed.
