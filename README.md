# Exquisite Waterproof Services

**For all your roofing and wall waterproofing.**

Mobile-first customer enquiry and service-information PWA for Exquisite Waterproof Services in Botswana.

## Supplied business message
- Free Damage Analysis
- Flexible Payment Terms
- Contact / WhatsApp: **71638995**

## Customer flow
Home → What needs fixing? → Damage Analysis → Request / WhatsApp → Follow-up

Customers do not need an account to make an enquiry.

## Offline-first
The app is installable and keeps its public shell available offline. Enquiries can be written to Firestore's local persistent cache when the browser supports it and synchronize when connectivity returns. The interface must never claim that an offline enquiry reached Exquisite until the backend confirms it.

## Operations
/admin is protected by Firebase Authentication plus admins/{uid} with role owner or staff.

## Development
npm install
npm run dev
npx tsc --noEmit
npm run lint
npm run build

See AGENTS.md for the product operating contract.
