# EXQUISITE WATERPROOF SERVICES — Agent Operating Contract

## Product
Exquisite Waterproof Services is a real Botswana customer-facing waterproofing and roofing service PWA.

This repository is its own product. It was cloned from the BOEMO ordering foundation only to reuse proven mobile/PWA/Firebase infrastructure. Do not carry BOEMO branding, food workflows, menu data, food assets, or assumptions into this product.

## Workflow
START → INSPECT → BUILD → VERIFY → CHECKPOINT → CONTINUE/RECOVER.
Golden rule: **Unexpected result = STOP → inspect reality → then act.**

Before meaningful changes inspect the repository, Git state, Firebase configuration, deployed state when relevant, actual customer workflow, and supplied business evidence.

## Business evidence currently supplied
- Business name: **Exquisite Waterproof Services**
- Contact: **71638995**
- “For all your roofing and wall waterproofing”
- “Free Damage Analysis”
- “Flexible Payment Terms”

Do not invent addresses, prices, guarantees, testimonials, qualifications, turnaround times, materials, project counts, or additional services.

## Customer journey
Home → Services / What needs fixing? → Damage Analysis → Request / WhatsApp → Follow-up.

The primary conversion is a service enquiry, not an ecommerce order.

## Enquiries
An enquiry records customer name, phone / WhatsApp, requested problem, preferred contact method, optional location, optional notes, timestamp and status.

Statuses: New → Contacted → Assessment Scheduled → Quote / Follow-up → Closed.

An offline save must never be presented as “received by Exquisite” until Firebase confirms synchronization.

## Offline-first PWA
Maintain an installable manifest, Exquisite-branded icon, service worker, offline route, public app-shell caching and Firestore persistent local cache. On every release, invalidate inherited caches so a previous project's icon/assets cannot survive installation. The UI must distinguish local/offline state from backend-confirmed state. Mobile layouts must remain touch-friendly, avoid horizontal overflow, and use mobile-safe viewport/spacing behavior.

Do not cache private Firebase responses indiscriminately or large media blobs in the service-worker shell.

## Firebase
Exquisite uses its own Firebase project: **exquisite-waterproof-services**. Never reuse BOEMO identifiers, collections, rules, seed data, admin instructions, or credentials.

Browser Firebase configuration uses NEXT_PUBLIC_FIREBASE_* environment variables. Public Firebase web configuration is not a secret, but private credentials must never be committed.

## Admin
/admin is an authenticated operations surface for enquiry follow-up and verified business-facing settings. Access is granted only when admins/{uid}.role is owner or staff. Never hard-code an admin UID.

## Media
Only use supplied Exquisite media. Do not use inherited BOEMO assets.

## Quality gates
Before a meaningful checkpoint:
- npx tsc --noEmit
- npm run lint
- npm run build

Review the actual diff before checkpointing.

## Current implementation direction
This checkpoint removes BOEMO customer language and food/order semantics while preserving the proven Next.js + Firebase + PWA foundation. Subsequent work can deepen enquiry syncing, media, customer follow-up, and owner-controlled content.
