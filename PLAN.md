# Lakki Terminal OS - Master Feature Plan (All 367 IDs)

This document tracks the implementation status of the 367 enterprise features within the Lakki Terminal OS. The architecture uses a modular, role-based approach, controlled by a centralized MongoDB registry (`Feature` model).

## Status Legend
🟢 **Fully Implemented** (Frontend + Backend + DB Logic)
🟡 **Partially Implemented** (UI Present, Mock Data, Basic API Wiring)
🔴 **Not Implemented** (Missing Logic / Stubbed)

---

### Core Framework (Infrastructure)
🟢 **Role-Based Access Control (RBAC)**: All routes and features are gated by role (SA, MGR, CSH, TECH, INV, AUD).
🟢 **Feature Toggle Registry (ID 185)**: Full MongoDB schema managing state and RBAC per feature, updateable via Governance Dashboard.
🟡 **Offline-First Capabilities (ID 31)**: UI indicators and basic conflict resolution modal present, but full IndexedDB syncing queue is not yet wired to the backend.
🟡 **Virtual Scrolling (ID 328)**: React components are built for high density, but `react-window` is not fully integrated for tables exceeding 1000 rows.

---

## Domain 1: POS & Unified Sales Terminal (IDs 1–60)
**Progress:** High

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 1 | 4-column virtualised product grid | 🟡 | Grid UI built; fetching mocked products from backend. |
| 5 | IMEI validation (15-digit check) | 🟡 | UI chip present; Regex validation needed. |
| 12 | Split payments | 🟡 | Payment matrix UI built. |
| 27 | Price override | 🟡 | Manager PIN modal built. |
| 31 | Offline-first mode | 🟡 | UI indicator built. |
| 40 | Refund / return | 🔴 | Backend logic missing. |
| 50 | Cash drawer count | 🔴 | Form needed. |

*(Remaining IDs 2-4, 6-11, 13-26, 28-30, 32-39, 41-49, 51-60 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Domain 2: Deep-Tech Repair Hub (IDs 61–120)
**Progress:** Medium

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 61 | Repair intake form | 🔴 | UI needed. |
| 63 | Visual damage mapper | 🟡 | SVG phone diagram built on Repair Hub dashboard. |
| 71 | 20-point QC gate | 🟡 | Checklist UI built. |
| 74 | WhatsApp status bot | 🔴 | Twilio/WhatsApp Business API needed. |
| 79 | Part replacement log | 🟡 | Log UI built. |
| 117 | Bench queue TV | 🟡 | Bench cards built on dashboard. |

*(Remaining IDs 62, 64-70, 72-73, 75-78, 80-116, 118-120 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Domain 3: Inventory & Supply Chain (IDs 121–180)
**Progress:** Medium

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 121 | Multi-store matrix view | 🟡 | Matrix UI built on Inventory dashboard. |
| 122 | Inter-store transfer request | 🟡 | Transfer tracking UI built. |
| 128 | Landed cost engine | 🔴 | Backend logic missing. |
| 153 | Transfer manifest QR | 🟡 | QR code mockup built on Transfer dashboard. |
| 159 | Blind cycle count | 🔴 | UI needed. |

*(Remaining IDs 123-127, 129-152, 154-158, 160-180 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Domain 4: Governance, Security & HR (IDs 181–240)
**Progress:** High

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 181 | Master audit trail | 🟡 | Audit log table built; logs fetched from backend. |
| 185 | Feature toggle board | 🟢 | Full React + MongoDB integration for toggling all 367 features and RBAC. |
| 190 | Z-report PDF | 🟡 | Finance dashboard built. |
| 200 | Database health monitor | 🟡 | System Health dashboard built with Node metrics. |
| 218 | Global search palette (Ctrl+K) | 🟡 | Modal UI built and triggerable via keyboard shortcut. |

*(Remaining IDs 182-184, 186-189, 191-199, 201-217, 219-240 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Domain 5: Omnichannel, CRM & IoT (IDs 241–300)
**Progress:** Low-Medium

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 256 | Customer 360 profile | 🟡 | Comprehensive CRM dashboard built with VIP details. |
| 264 | Family account linking | 🟡 | Family list UI built on Customer 360. |
| 278 | IoT printer status | 🔴 | Backend integration missing. |

*(Remaining IDs 241-255, 257-263, 265-277, 279-300 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Domain 6: Extended Features (IDs 301–315)
**Progress:** Low

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 302 | BNPL / instalment payment method | 🔴 | API integration missing. |
| 303 | Two-factor authentication (2FA) | 🔴 | Auth logic needed. |
| 304 | Apple GSX integration | 🔴 | API integration missing. |

*(Remaining IDs 301, 305-315 are currently 🔴 Not Implemented)*

---

## Domain 7: New Enterprise Features (IDs 316–350)
**Progress:** Medium

| Feature ID | Name | Status | Notes |
|------------|------|--------|-------|
| 316 | Batch intake buffer | 🔴 | Web Worker logic needed. |
| 317 | PITR restore slider | 🟡 | UI slider built on System Health dashboard. |
| 319 | API circuit breaker panel | 🟡 | Toggle switches built on System Health and Governance dashboards. |
| 326 | Batch job manager UI | 🟡 | Global drawer built. |
| 329 | Conflict resolution UI | 🟡 | Modal built and triggerable via mock interaction. |
| 330 | Manager PIN override | 🟡 | Modal built and integrated into UI triggers. |
| 334 | API kill switch (global) | 🟡 | UI built on Governance dashboard. |
| 340 | Database self-heal dashboard | 🟡 | UI built on System Health dashboard. |
| 341 | Three-tier backup strategy UI | 🟡 | UI built on System Health dashboard. |

*(Remaining IDs 318, 320-325, 327-328, 331-333, 335-339, 342-350 are currently 🔴 Not Implemented or 🟡 Mocked)*

---

## Roadmap

### Phase 1: Core System Hardening (Current)
- [x] Consolidate all 13 high-fidelity HTML mockups into React components with routing.
- [x] Setup Node/Express backend and MongoDB connection.
- [x] Wire up authentication (JWT) and POS product fetching.
- [x] Generate complete 367 Feature Registry in MongoDB and build RBAC toggle board.
- [x] Connect remaining static dashboards to dynamic backend endpoints.

### Phase 2: Deep Feature Implementation
- **Inventory & Supply Chain:** Implement landed cost engine (ID 128), batch intake buffer with Web Workers (ID 316), and blind cycle counts (ID 318).
- **Repair Hub:** Integrate Apple GSX API (ID 304) and WhatsApp status bot (ID 74).
- **POS:** Finalize offline-first sync queue using IndexedDB (ID 31) and Conflict Resolution (ID 329).

### Phase 3: Hardware & External APIs
- Connect thermal receipt printer (ZPL pass-through - ID 327).
- Implement hardware token 2FA (ID 303).
- Integrate KNET payment gateway (ID 283).
