// ─────────────────────────────────────────────────────────────────────────────
// Cross-file className constants — only strings used in TWO OR MORE components.
// Everything else lives as a local const at the top of the component that needs it.
// ─────────────────────────────────────────────────────────────────────────────

// ── Layout ────────────────────────────────────────────────────────────────────
export const wrapper = "max-w-wrapper w-[85%] max-[1200px]:w-[90%] mx-auto";
export const container = "max-w-wrapper w-[90%] mx-auto";

// ── Section chrome ────────────────────────────────────────────────────────────
export const sectionHeader = "text-center mb-[50px]";
export const sectionTitle =
  "font-display section-title-line inline-block text-[36px] font-medium leading-[48px] text-heading max-[767px]:text-[30px]";
export const sectionDesc =
  "text-base text-secondary leading-7 w-[70%] mx-auto mt-4 max-[767px]:w-[90%]";
export const sectionLabel =
  "text-sm font-bold text-primaryDark uppercase tracking-widest";

// ── Text ──────────────────────────────────────────────────────────────────────
export const para = "text-base text-secondary leading-7"; // secondary/muted paragraphs
export const paraBody = "text-base text-body leading-7"; // primary body paragraphs
