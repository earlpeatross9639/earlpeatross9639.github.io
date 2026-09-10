/* =============================================================================
   EARL PEATROSS III — Cybersecurity Networking Landing Page
   -----------------------------------------------------------------------------
   HOW TO EDIT THIS SITE
   ---------------------
   Almost everything you need to change lives in the CONFIG object directly
   below. Update your links, contact details, About text, focus areas, and
   projects here — the page builds itself from these values on load.

   Fields marked  // TODO  are placeholders you should replace before going
   live. Anything left as a placeholder is clearly labelled on the page too.
   ============================================================================= */

const CONFIG = {
  /* --- Identity ---------------------------------------------------------- */
  name: "Earl Peatross III",
  shortName: "Earl Peatross",           // used in the vCard / contact card
  nickname: "Treye",                    // optional; shown subtly, remove if unwanted
  tagline: "Cloud Security • Security Engineering • Security Operations & GRC",
  role: "Information Security Specialist",

  /* --- Contact & links --------------------------------------------------- */
  // Replace the placeholders below. Leave a value as "" to hide that button.
  email: "earlpeatross9639@outlook.com",
  phone: "+1 (225) 305-9780",
  linkedin: "https://www.linkedin.com/in/earlpeatrossiii/",
  github: "https://github.com/earlpeatross9639",
  portfolio: "https://github.com/earlpeatross9639?tab=repositories",
  website: "https://earlpeatross9639.github.io",
  resume: "assets/resume.pdf",          // primary (1-page) resume — opens fast on mobile
  resumeFull: "assets/resume-full.pdf", // optional full 2-page version ("" to hide the link)
  location: "Clarksville, IN (Louisville Metro) · Open to Remote", // shown in About/contact

  /* --- QR code ----------------------------------------------------------- */
  // The QR code encodes this URL. Set it to wherever this site is deployed.
  qrUrl: "https://earlpeatross9639.github.io", // your live GitHub Pages URL

  /* --- Hero intro (short, scannable) ------------------------------------- */
  intro:
    "Cybersecurity professional securing a 5,000+ endpoint government enterprise " +
    "across cloud security, Zero Trust access, and GRC. I turn real-world " +
    "threats into measured, defensible outcomes.",

  /* --- About (drawn from your resume; edit freely) ----------------------- */
  about: [
    "I secure a 5,000+ endpoint government enterprise as an Information Security " +
      "Specialist, running Zscaler Zero Trust policy (ZIA/ZPA/ZCC), Microsoft " +
      "Sentinel detection, Rapid7 vulnerability management, and Okta identity " +
      "across cloud and on-premises systems.",
    "My work spans security operations, cloud security visibility across Azure and " +
      "AWS, and GRC, applying IRS Publication 1075 safeguarding requirements and " +
      "driving penetration-test and CVE findings to verified closure.",
    "15+ years in IT with 4+ in dedicated security operations. I own security " +
      "problems end to end, from determining whether a control is breaking " +
      "legitimate access to standing up the infrastructure that fixes it."
  ],

  // Short credentials line (verified from your resume).
  credentials: "B.S. Cybersecurity & Information Assurance (WGU, 2026) · 11 active certifications including CompTIA PenTest+, CySA+, Security+, Network+, A+, Project+; ISC2 SSCP & CC; ITIL 4; Linux Essentials · ISC2 CCSP exam scheduled.",

  /* --- Areas of Focus (icons are built-in keys, see ICONS below) --------- */
  focus: [
    { icon: "cloud",    title: "Cloud Security",            text: "Security visibility and control across Azure and AWS: GuardDuty triage, posture, and least-privilege design." },
    { icon: "network",  title: "Zero Trust Access",         text: "Zscaler ZIA/ZPA/ZCC policy engineering that keeps access secure without breaking legitimate business." },
    { icon: "monitor",  title: "Security Operations",       text: "Microsoft Sentinel and CrowdStrike alert triage, threat analysis, and incident response." },
    { icon: "radar",    title: "Vulnerability Management",  text: "Rapid7 InsightVM architecture, CVE remediation, and pen-test findings driven to closure." },
    { icon: "lock",     title: "Identity & Access",         text: "Okta SSO/MFA and lifecycle, plus phishing-resistant FIDO2 rollout to 1,100+ users." },
    { icon: "clipboard",title: "GRC & Compliance",          text: "IRS Pub 1075, NIST, and CIS Benchmarks: control review, hardening, and audit readiness." }
  ],

  /* --- Projects ---------------------------------------------------------- */
  // Drawn from your resume. Add a "link" (e.g. the live URL or repo) any time.
  projects: [
    {
      name: "PenTest+ Exam Simulation Platform",
      description: "Browser-based PenTest+ practice platform: a 1,200+ question bank, drag-and-drop performance-based questions, Bash/Python/PowerShell script analysis, and instant scoring. Hosted on GitHub Pages.",
      tech: ["JavaScript", "GitHub Pages", "Security Training"],
      link: "https://earlpeatross9639.github.io/pentest-war-room/"
    },
    {
      name: "Security Home Lab",
      description: "Proxmox lab with FortiGate VLAN segmentation and Wazuh SIEM for detection engineering and Zero Trust simulation.",
      tech: ["Proxmox", "FortiGate", "Wazuh"],
      link: ""
    },
    {
      name: "KCI3 · Founding Member",
      description: "Founding member of the Kentucky Cyber Intelligence Information Initiative, a regional threat-intelligence sharing community. Active in ISACA and ISSA Kentuckiana.",
      tech: ["Threat Intel", "Community"],
      link: ""
    },
    {
      name: "Haunt Advisor",
      description: "A WordPress plugin backed by a FastAPI/PostgreSQL service that serves AI-ranked recommendations for a live client site. Shipped multiple releases and hardened it through stress testing and critical bug fixes.",
      tech: ["WordPress", "FastAPI", "PostgreSQL", "AI"],
      link: ""
    }
  ]
};

/* =============================================================================
   Below this line is application logic + a self-contained QR generator.
   You normally do NOT need to edit anything past this point.
   ============================================================================= */

(function () {
  "use strict";

  /* ---------- Small inline SVG icon set (no external requests) ---------- */
  const ICONS = {
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.94 5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0zM3.4 8.4h3.1V21H3.4V8.4zm5.06 0h2.97v1.72h.04c.41-.78 1.42-1.6 2.93-1.6 3.13 0 3.71 2.06 3.71 4.74V21h-3.1v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H8.46V8.4z"/></svg>',
    resume: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm8 1.5V8h4.5L14 3.5zM8 12h8v1.6H8V12zm0 3.2h8v1.6H8v-1.6zM8 8.8h4v1.6H8V8.8z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    portfolio: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 3h4a2 2 0 0 1 2 2v1h3a2 2 0 0 1 2 2v3H3V8a2 2 0 0 1 2-2h3V5a2 2 0 0 1 2-2zm4 3V5h-4v1h4zM3 13h8v2h2v-2h8v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6z"/></svg>',
    email: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm0 3.2V18h16V7.2l-8 5.3-8-5.3zM19.2 6H4.8L12 10.8 19.2 6z"/></svg>',
    contact: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm6 4.5A2.75 2.75 0 1 0 12 12a2.75 2.75 0 0 0 0-5.5zM7.5 17.5c0-2 2-3 4.5-3s4.5 1 4.5 3v.5h-9v-.5zM19 7h2v2h-2V7zm0 4h2v2h-2v-2z"/></svg>',
    shield: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l8 3v6c0 4.7-3.2 8.8-8 10-4.8-1.2-8-5.3-8-10V5l8-3zm-1.2 12.6l5-5-1.4-1.4-3.6 3.6-1.6-1.6L7.8 11.6l3 3z"/></svg>',
    alert: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2l10 18H2L12 2zm-1 6h2v6h-2V8zm0 8h2v2h-2v-2z"/></svg>',
    wrench: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.7 6.3a5 5 0 0 1-6.4 6.4L6 22l-4-4 9.3-9.3a5 5 0 0 1 6.4-6.4l-3 3 1.4 1.4 3-3zM6 17.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z"/></svg>',
    radar: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 9.5 6.9l-1.6 1.2A8 8 0 1 1 12 4V2zm0 4a6 6 0 1 0 5.2 3l-1.7 1.2A4 4 0 1 1 12 8V6zm0 4a2 2 0 1 0 1.9 1.4L12 12v-2z"/></svg>',
    monitor: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1h-6l1 3h2v2H6v-2h2l1-3H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm1 2v9h16V6H4z"/></svg>',
    server: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 3h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm2 2.5v2h2v-2H6zm10 .5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM4 14h16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1zm2 2.5v2h2v-2H6zm10 .5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>',
    cloud: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 18a4.5 4.5 0 0 1-.5-8.97 6 6 0 0 1 11.6 1.02A3.75 3.75 0 0 1 17.5 18H7zm5-9.2l-3 3h2v3h2v-3h2l-3-3z"/></svg>',
    network: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 2h2v4h-2V2zm0 16h2v4h-2v-4zM2 11h4v2H2v-2zm16 0h4v2h-4v-2zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"/></svg>',
    lock: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a5 5 0 0 1 5 5v3h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h1V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v3h6V7a3 3 0 0 0-3-3zm0 9a1.6 1.6 0 0 0-.8 3v2h1.6v-2a1.6 1.6 0 0 0-.8-3z"/></svg>',
    clipboard: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 2h6a1 1 0 0 1 1 1v1h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2V3a1 1 0 0 1 1-1zm1 2v2h4V4h-4zm-2 7l1.4 1.4L11 11l-1.6-1.4L8 11zm5 .5h4v1.6h-4v-1.6zM8 15l1.4 1.4L11 15l-1.6-1.4L8 15zm5 .5h4v1.6h-4v-1.6z"/></svg>',
    download: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 3h2v8h3l-4 4-4-4h3V3zM4 19h16v2H4v-2z"/></svg>',
    external: '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3h7v7h-2V6.4l-8.3 8.3-1.4-1.4L17.6 5H14V3zM5 5h5v2H6v11h11v-4h2v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z"/></svg>'
  };

  function icon(name) { return ICONS[name] || ""; }
  function isPlaceholder(v) {
    if (!v) return true;
    return /YOUR-|example\.com|YOUR-HANDLE|555\) 555/.test(v);
  }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function $(sel, root) { return (root || document).querySelector(sel); }

  /* =========================================================================
     QR CODE GENERATOR  (self-contained, no external requests)
     Port of Nayuki's QR Code generator library (MIT License).
     https://www.nayuki.io/page/qr-code-generator-library
     ========================================================================= */
  const QR = (function () {
    const ECC_CODEWORDS_PER_BLOCK = [
      // Version: (note: index 0 is unused)  1, 2, 3, ... 40
      [-1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30, 26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // Low
      [-1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28], // Medium
      [-1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30, 30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30], // Quartile
      [-1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]  // High
    ];
    const NUM_ERROR_CORRECTION_BLOCKS = [
      [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14, 15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25],  // Low
      [-1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25, 26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49], // Medium
      [-1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34, 34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68], // Quartile
      [-1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37, 40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81]  // High
    ];
    // ECC level -> [ordinal, formatBits]
    const ECL = {
      L: { ord: 0, bits: 1 },
      M: { ord: 1, bits: 0 },
      Q: { ord: 2, bits: 3 },
      H: { ord: 3, bits: 2 }
    };

    const MIN_VERSION = 1, MAX_VERSION = 40;
    const PENALTY_N1 = 3, PENALTY_N2 = 3, PENALTY_N3 = 40, PENALTY_N4 = 10;

    function getNumRawDataModules(ver) {
      let result = (16 * ver + 128) * ver + 64;
      if (ver >= 2) {
        const numAlign = Math.floor(ver / 7) + 2;
        result -= (25 * numAlign - 10) * numAlign - 55;
        if (ver >= 7) result -= 36;
      }
      return result;
    }
    function getNumDataCodewords(ver, ecl) {
      return Math.floor(getNumRawDataModules(ver) / 8) -
        ECC_CODEWORDS_PER_BLOCK[ecl.ord][ver] * NUM_ERROR_CORRECTION_BLOCKS[ecl.ord][ver];
    }

    // Reed-Solomon in GF(256), primitive polynomial 0x11D
    function reedSolomonComputeDivisor(degree) {
      const result = new Uint8Array(degree);
      result[degree - 1] = 1;
      let root = 1;
      for (let i = 0; i < degree; i++) {
        for (let j = 0; j < result.length; j++) {
          result[j] = reedSolomonMultiply(result[j], root);
          if (j + 1 < result.length) result[j] ^= result[j + 1];
        }
        root = reedSolomonMultiply(root, 0x02);
      }
      return result;
    }
    function reedSolomonComputeRemainder(data, divisor) {
      const result = new Uint8Array(divisor.length);
      for (const b of data) {
        const factor = b ^ result[0];
        result.copyWithin(0, 1);
        result[result.length - 1] = 0;
        for (let i = 0; i < result.length; i++) {
          result[i] ^= reedSolomonMultiply(divisor[i], factor);
        }
      }
      return result;
    }
    function reedSolomonMultiply(x, y) {
      let z = 0;
      for (let i = 7; i >= 0; i--) {
        z = (z << 1) ^ ((z >>> 7) * 0x11D);
        z ^= ((y >>> i) & 1) * x;
      }
      return z & 0xFF;
    }

    function getBit(x, i) { return ((x >>> i) & 1) !== 0; }

    // Append bits (val, len) to array of bit ints
    function appendBits(val, len, bb) {
      for (let i = len - 1; i >= 0; i--) bb.push((val >>> i) & 1);
    }

    function QrCode(version, ecl, dataCodewords, mask) {
      this.version = version;
      this.size = version * 4 + 17;
      this.ecl = ecl;
      this.modules = [];
      this.isFunction = [];
      for (let i = 0; i < this.size; i++) {
        this.modules.push(new Array(this.size).fill(false));
        this.isFunction.push(new Array(this.size).fill(false));
      }
      this.drawFunctionPatterns();
      const allCodewords = this.addEccAndInterleave(dataCodewords);
      this.drawCodewords(allCodewords);

      if (mask === -1) {
        let minPenalty = Infinity;
        for (let i = 0; i < 8; i++) {
          this.applyMask(i);
          this.drawFormatBits(i);
          const penalty = this.getPenaltyScore();
          if (penalty < minPenalty) { mask = i; minPenalty = penalty; }
          this.applyMask(i); // undo
        }
      }
      this.mask = mask;
      this.applyMask(mask);
      this.drawFormatBits(mask);
      this.isFunction = [];
    }

    QrCode.prototype.getModule = function (x, y) {
      return x >= 0 && x < this.size && y >= 0 && y < this.size && this.modules[y][x];
    };

    QrCode.prototype.setFunctionModule = function (x, y, isDark) {
      this.modules[y][x] = isDark;
      this.isFunction[y][x] = true;
    };

    QrCode.prototype.drawFunctionPatterns = function () {
      const size = this.size;
      for (let i = 0; i < size; i++) {
        this.setFunctionModule(6, i, i % 2 === 0);
        this.setFunctionModule(i, 6, i % 2 === 0);
      }
      this.drawFinderPattern(3, 3);
      this.drawFinderPattern(size - 4, 3);
      this.drawFinderPattern(3, size - 4);

      const alignPatPos = this.getAlignmentPatternPositions();
      const numAlign = alignPatPos.length;
      for (let i = 0; i < numAlign; i++) {
        for (let j = 0; j < numAlign; j++) {
          if (!((i === 0 && j === 0) || (i === 0 && j === numAlign - 1) || (i === numAlign - 1 && j === 0))) {
            this.drawAlignmentPattern(alignPatPos[i], alignPatPos[j]);
          }
        }
      }
      this.drawFormatBits(0);
      this.drawVersion();
    };

    QrCode.prototype.drawFormatBits = function (mask) {
      const data = (this.ecl.bits << 3) | mask;
      let rem = data;
      for (let i = 0; i < 10; i++) rem = (rem << 1) ^ ((rem >>> 9) * 0x537);
      const bits = ((data << 10) | rem) ^ 0x5412;

      for (let i = 0; i <= 5; i++) this.setFunctionModule(8, i, getBit(bits, i));
      this.setFunctionModule(8, 7, getBit(bits, 6));
      this.setFunctionModule(8, 8, getBit(bits, 7));
      this.setFunctionModule(7, 8, getBit(bits, 8));
      for (let i = 9; i < 15; i++) this.setFunctionModule(14 - i, 8, getBit(bits, i));

      const size = this.size;
      for (let i = 0; i < 8; i++) this.setFunctionModule(size - 1 - i, 8, getBit(bits, i));
      for (let i = 8; i < 15; i++) this.setFunctionModule(8, size - 15 + i, getBit(bits, i));
      this.setFunctionModule(8, size - 8, true);
    };

    QrCode.prototype.drawVersion = function () {
      if (this.version < 7) return;
      let rem = this.version;
      for (let i = 0; i < 12; i++) rem = (rem << 1) ^ ((rem >>> 11) * 0x1F25);
      const bits = (this.version << 12) | rem;
      for (let i = 0; i < 18; i++) {
        const bit = getBit(bits, i);
        const a = this.size - 11 + (i % 3);
        const b = Math.floor(i / 3);
        this.setFunctionModule(a, b, bit);
        this.setFunctionModule(b, a, bit);
      }
    };

    QrCode.prototype.drawFinderPattern = function (x, y) {
      for (let dy = -4; dy <= 4; dy++) {
        for (let dx = -4; dx <= 4; dx++) {
          const dist = Math.max(Math.abs(dx), Math.abs(dy));
          const xx = x + dx, yy = y + dy;
          if (xx >= 0 && xx < this.size && yy >= 0 && yy < this.size) {
            this.setFunctionModule(xx, yy, dist !== 2 && dist !== 4);
          }
        }
      }
    };

    QrCode.prototype.drawAlignmentPattern = function (x, y) {
      for (let dy = -2; dy <= 2; dy++) {
        for (let dx = -2; dx <= 2; dx++) {
          this.setFunctionModule(x + dx, y + dy, Math.max(Math.abs(dx), Math.abs(dy)) !== 1);
        }
      }
    };

    QrCode.prototype.getAlignmentPatternPositions = function () {
      if (this.version === 1) return [];
      const numAlign = Math.floor(this.version / 7) + 2;
      const step = (this.version === 32) ? 26 :
        Math.ceil((this.version * 4 + 4) / (numAlign * 2 - 2)) * 2;
      const result = [6];
      for (let pos = this.size - 7; result.length < numAlign; pos -= step) {
        result.splice(1, 0, pos);
      }
      return result;
    };

    QrCode.prototype.addEccAndInterleave = function (data) {
      const ver = this.version, ecl = this.ecl;
      const numBlocks = NUM_ERROR_CORRECTION_BLOCKS[ecl.ord][ver];
      const blockEccLen = ECC_CODEWORDS_PER_BLOCK[ecl.ord][ver];
      const rawCodewords = Math.floor(getNumRawDataModules(ver) / 8);
      const numShortBlocks = numBlocks - rawCodewords % numBlocks;
      const shortBlockLen = Math.floor(rawCodewords / numBlocks);

      const blocks = [];
      const rsDiv = reedSolomonComputeDivisor(blockEccLen);
      for (let i = 0, k = 0; i < numBlocks; i++) {
        const datLen = shortBlockLen - blockEccLen + (i < numShortBlocks ? 0 : 1);
        const dat = data.slice(k, k + datLen);
        k += datLen;
        const ecc = reedSolomonComputeRemainder(dat, rsDiv);
        const block = Array.from(dat);
        if (i < numShortBlocks) block.push(0);
        for (const b of ecc) block.push(b);
        blocks.push(block);
      }

      const result = [];
      for (let i = 0; i < blocks[0].length; i++) {
        for (let j = 0; j < blocks.length; j++) {
          // Skip the padding cell in short blocks (the data area only)
          if (i !== shortBlockLen - blockEccLen || j >= numShortBlocks) {
            result.push(blocks[j][i]);
          }
        }
      }
      return result;
    };

    QrCode.prototype.drawCodewords = function (data) {
      let i = 0;
      const size = this.size;
      for (let right = size - 1; right >= 1; right -= 2) {
        if (right === 6) right = 5;
        for (let vert = 0; vert < size; vert++) {
          for (let j = 0; j < 2; j++) {
            const x = right - j;
            const upward = ((right + 1) & 2) === 0;
            const y = upward ? size - 1 - vert : vert;
            if (!this.isFunction[y][x] && i < data.length * 8) {
              this.modules[y][x] = getBit(data[i >>> 3], 7 - (i & 7));
              i++;
            }
          }
        }
      }
    };

    QrCode.prototype.applyMask = function (mask) {
      for (let y = 0; y < this.size; y++) {
        for (let x = 0; x < this.size; x++) {
          let invert;
          switch (mask) {
            case 0: invert = (x + y) % 2 === 0; break;
            case 1: invert = y % 2 === 0; break;
            case 2: invert = x % 3 === 0; break;
            case 3: invert = (x + y) % 3 === 0; break;
            case 4: invert = (Math.floor(x / 3) + Math.floor(y / 2)) % 2 === 0; break;
            case 5: invert = (x * y) % 2 + (x * y) % 3 === 0; break;
            case 6: invert = ((x * y) % 2 + (x * y) % 3) % 2 === 0; break;
            case 7: invert = ((x + y) % 2 + (x * y) % 3) % 2 === 0; break;
          }
          if (invert && !this.isFunction[y][x]) this.modules[y][x] = !this.modules[y][x];
        }
      }
    };

    QrCode.prototype.getPenaltyScore = function () {
      let result = 0;
      const size = this.size, modules = this.modules;

      // Rows
      for (let y = 0; y < size; y++) {
        let runColor = false, runX = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let x = 0; x < size; x++) {
          if (modules[y][x] === runColor) {
            runX++;
            if (runX === 5) result += PENALTY_N1;
            else if (runX > 5) result++;
          } else {
            this.finderPenaltyAddHistory(runX, runHistory);
            if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * PENALTY_N3;
            runColor = modules[y][x];
            runX = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runX, runHistory) * PENALTY_N3;
      }
      // Columns
      for (let x = 0; x < size; x++) {
        let runColor = false, runY = 0;
        const runHistory = [0, 0, 0, 0, 0, 0, 0];
        for (let y = 0; y < size; y++) {
          if (modules[y][x] === runColor) {
            runY++;
            if (runY === 5) result += PENALTY_N1;
            else if (runY > 5) result++;
          } else {
            this.finderPenaltyAddHistory(runY, runHistory);
            if (!runColor) result += this.finderPenaltyCountPatterns(runHistory) * PENALTY_N3;
            runColor = modules[y][x];
            runY = 1;
          }
        }
        result += this.finderPenaltyTerminateAndCount(runColor, runY, runHistory) * PENALTY_N3;
      }

      // 2x2 blocks
      for (let y = 0; y < size - 1; y++) {
        for (let x = 0; x < size - 1; x++) {
          const c = modules[y][x];
          if (c === modules[y][x + 1] && c === modules[y + 1][x] && c === modules[y + 1][x + 1]) {
            result += PENALTY_N2;
          }
        }
      }

      // Balance of dark/light
      let dark = 0;
      for (const row of modules) for (const v of row) if (v) dark++;
      const total = size * size;
      const k = Math.ceil(Math.abs(dark * 20 - total * 10) / total) - 1;
      result += k * PENALTY_N4;
      return result;
    };

    QrCode.prototype.finderPenaltyCountPatterns = function (rh) {
      const n = rh[1];
      const core = n > 0 && rh[2] === n && rh[3] === n * 3 && rh[4] === n && rh[5] === n;
      return (core && rh[0] >= n * 4 && rh[6] >= n ? 1 : 0) +
             (core && rh[6] >= n * 4 && rh[0] >= n ? 1 : 0);
    };
    QrCode.prototype.finderPenaltyTerminateAndCount = function (currentRunColor, currentRunLength, rh) {
      if (currentRunColor) {
        this.finderPenaltyAddHistory(currentRunLength, rh);
        currentRunLength = 0;
      }
      currentRunLength += this.size;
      this.finderPenaltyAddHistory(currentRunLength, rh);
      return this.finderPenaltyCountPatterns(rh);
    };
    QrCode.prototype.finderPenaltyAddHistory = function (currentRunLength, rh) {
      if (rh[0] === 0) currentRunLength += this.size;
      rh.pop();
      rh.unshift(currentRunLength);
    };

    // Build data codewords (byte mode) then construct QrCode
    function encodeText(text, eclKey) {
      const ecl = ECL[eclKey] || ECL.M;
      // UTF-8 bytes
      const bytes = utf8Bytes(text);

      // Choose minimal version that fits, upgrading ECC when free is out of scope here
      let version = -1, dataCapacityBits = 0;
      for (let v = MIN_VERSION; v <= MAX_VERSION; v++) {
        const cap = getNumDataCodewords(v, ecl) * 8;
        const ccBits = (v <= 9) ? 8 : 16; // byte mode char-count bits
        const usedBits = 4 + ccBits + bytes.length * 8;
        if (usedBits <= cap) { version = v; dataCapacityBits = cap; break; }
      }
      if (version === -1) throw new Error("Data too long for QR code");

      const bb = [];
      appendBits(0x4, 4, bb); // byte mode
      appendBits(bytes.length, version <= 9 ? 8 : 16, bb);
      for (const b of bytes) appendBits(b, 8, bb);

      // Terminator + bit/byte padding
      appendBits(0, Math.min(4, dataCapacityBits - bb.length), bb);
      appendBits(0, (8 - bb.length % 8) % 8, bb);
      for (let padByte = 0xEC; bb.length < dataCapacityBits; padByte ^= 0xEC ^ 0x11) {
        appendBits(padByte, 8, bb);
      }

      // Pack bits into codeword bytes
      const dataCodewords = new Uint8Array(bb.length >>> 3);
      for (let i = 0; i < bb.length; i++) {
        dataCodewords[i >>> 3] |= bb[i] << (7 - (i & 7));
      }

      return new QrCode(version, ecl, dataCodewords, -1);
    }

    function utf8Bytes(str) {
      const out = [];
      for (let i = 0; i < str.length; i++) {
        let code = str.charCodeAt(i);
        if (code >= 0xD800 && code <= 0xDBFF && i + 1 < str.length) {
          const next = str.charCodeAt(i + 1);
          if (next >= 0xDC00 && next <= 0xDFFF) {
            code = 0x10000 + ((code - 0xD800) << 10) + (next - 0xDC00);
            i++;
          }
        }
        if (code < 0x80) out.push(code);
        else if (code < 0x800) { out.push(0xC0 | (code >> 6), 0x80 | (code & 0x3F)); }
        else if (code < 0x10000) { out.push(0xE0 | (code >> 12), 0x80 | ((code >> 6) & 0x3F), 0x80 | (code & 0x3F)); }
        else { out.push(0xF0 | (code >> 18), 0x80 | ((code >> 12) & 0x3F), 0x80 | ((code >> 6) & 0x3F), 0x80 | (code & 0x3F)); }
      }
      return out;
    }

    return { encodeText: encodeText };
  })();

  // Expose the encoder so the standalone QR page (qr.html) can reuse it.
  window.SiteQR = QR;

  /* Render a QR code as crisp SVG markup into a container element. */
  function renderQrSvg(container, text, opts) {
    opts = opts || {};
    const ecl = opts.ecl || "M";
    const border = (opts.border == null) ? 3 : opts.border;
    const dark = opts.dark || "#0a0e14";
    const light = opts.light || "#ffffff";
    let qr;
    try {
      qr = QR.encodeText(text, ecl);
    } catch (e) {
      container.innerHTML = '<p class="qr-error">Unable to generate QR code (text too long).</p>';
      return null;
    }
    const size = qr.size;
    const dim = size + border * 2;
    let path = "";
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        if (qr.getModule(x, y)) {
          path += "M" + (x + border) + "," + (y + border) + "h1v1h-1z";
        }
      }
    }
    const svg =
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ' + dim + ' ' + dim + '" ' +
      'stroke="none" role="img" aria-label="QR code linking to ' + esc(text) + '">' +
      '<rect width="100%" height="100%" fill="' + light + '"/>' +
      '<path d="' + path + '" fill="' + dark + '"/></svg>';
    container.innerHTML = svg;
    return qr;
  }
  window.renderQrSvg = renderQrSvg;

  /* =========================================================================
     vCard (.vcf) generation — downloads entirely client-side
     ========================================================================= */
  function buildVcard() {
    const c = CONFIG;
    const names = c.name.trim().split(/\s+/);
    const last = names.length > 1 ? names[names.length - 1] : "";
    const first = names.slice(0, Math.max(1, names.length - 1)).join(" ");
    const lines = [
      "BEGIN:VCARD",
      "VERSION:3.0",
      "N:" + last + ";" + first + ";;;",
      "FN:" + c.name
    ];
    if (c.role) lines.push("TITLE:" + c.role);
    if (!isPlaceholder(c.email)) lines.push("EMAIL;TYPE=INTERNET,WORK:" + c.email);
    if (!isPlaceholder(c.phone)) lines.push("TEL;TYPE=CELL:" + c.phone);
    if (!isPlaceholder(c.website)) lines.push("URL:" + c.website);
    if (!isPlaceholder(c.linkedin)) lines.push("URL;TYPE=LinkedIn:" + c.linkedin);
    if (c.location) lines.push("ADR;TYPE=WORK:;;;" + c.location + ";;;");
    lines.push("REV:" + new Date().toISOString());
    lines.push("END:VCARD");
    return lines.join("\r\n");
  }

  function downloadVcard() {
    const blob = new Blob([buildVcard()], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const safe = CONFIG.name.replace(/[^a-z0-9]+/gi, "_");
    a.href = url;
    a.download = safe + ".vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1500);
  }

  /* =========================================================================
     Build the page from CONFIG
     ========================================================================= */
  function link(href, label, iconName, opts) {
    opts = opts || {};
    if (!href || isPlaceholder(href)) {
      return '<span class="link-card is-placeholder" aria-disabled="true" title="Add this link in script.js">' +
        '<span class="link-icon">' + icon(iconName) + '</span>' +
        '<span class="link-text"><span class="link-label">' + esc(label) + '</span>' +
        '<span class="link-sub">Add your link</span></span></span>';
    }
    const ext = opts.newTab !== false ? ' target="_blank" rel="noopener noreferrer"' : "";
    const sub = opts.sub ? '<span class="link-sub">' + esc(opts.sub) + '</span>' : "";
    return '<a class="link-card" href="' + esc(href) + '"' + ext +
      (opts.download ? ' download' : "") + '>' +
      '<span class="link-icon">' + icon(iconName) + '</span>' +
      '<span class="link-text"><span class="link-label">' + esc(label) + '</span>' + sub + '</span>' +
      '<span class="link-arrow">' + icon(opts.download ? "download" : "external") + '</span></a>';
  }

  function build() {
    const c = CONFIG;
    document.title = c.name + " | " + c.role;

    // Header / brand
    $("#brand-name").textContent = c.name;

    // Hero
    $("#hero-name").textContent = c.name;
    $("#hero-tagline").textContent = c.tagline;
    $("#hero-intro").textContent = c.intro;
    if (c.nickname) {
      const nn = $("#hero-nickname");
      nn.textContent = '"' + c.nickname + '"';
      nn.hidden = false;
    }

    // Hero buttons
    const heroBtns = $("#hero-buttons");
    heroBtns.innerHTML =
      primaryBtn(c.linkedin, "LinkedIn", "linkedin", { newTab: true }) +
      primaryBtn(c.resume, "View Resume", "resume", { newTab: true, alwaysOn: true });

    // Connect section
    $("#connect-grid").innerHTML =
      link(c.linkedin, "LinkedIn", "linkedin", { sub: "Professional profile" }) +
      link(c.resume, "Resume", "resume", { sub: "View / download PDF", newTab: true }) +
      link(c.github, "GitHub", "github", { sub: "Code & repositories" }) +
      link(c.portfolio, "Projects", "portfolio", { sub: "Portfolio & work" }) +
      (isPlaceholder(c.email)
        ? link("", "Email Me", "email", {})
        : link("mailto:" + c.email, "Email Me", "email", { sub: c.email, newTab: false })) +
      '<button class="link-card" id="save-contact" type="button">' +
        '<span class="link-icon">' + icon("contact") + '</span>' +
        '<span class="link-text"><span class="link-label">Save Contact</span>' +
        '<span class="link-sub">Download vCard (.vcf)</span></span>' +
        '<span class="link-arrow">' + icon("download") + '</span></button>';

    // Resume section
    const resumeWrap = $("#resume-actions");
    resumeWrap.innerHTML =
      primaryBtn(c.resume, "View Resume", "resume", { newTab: true, alwaysOn: true }) +
      '<a class="btn btn-ghost" href="' + esc(c.resume) + '" download>' +
        '<span class="btn-icon">' + icon("download") + '</span>Download Resume</a>' +
      (c.resumeFull && !isPlaceholder(c.resumeFull)
        ? '<a class="resume-full-link" href="' + esc(c.resumeFull) + '" target="_blank" rel="noopener noreferrer">View full 2-page résumé ' + icon("external") + '</a>'
        : "");

    // About
    $("#about-text").innerHTML = c.about.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    if (c.credentials) {
      const cr = $("#about-creds");
      cr.textContent = c.credentials;
      cr.hidden = false;
    }
    if (c.location) $("#about-location").textContent = c.location;

    // Focus areas
    $("#focus-grid").innerHTML = c.focus.map(function (f) {
      return '<article class="focus-card">' +
        '<span class="focus-icon">' + icon(f.icon) + '</span>' +
        '<h3>' + esc(f.title) + '</h3>' +
        '<p>' + esc(f.text) + '</p></article>';
    }).join("");

    // Projects
    $("#projects-grid").innerHTML = c.projects.map(function (p) {
      const tech = (p.tech || []).map(function (t) { return '<li>' + esc(t) + '</li>'; }).join("");
      const hasLink = p.link && !isPlaceholder(p.link);
      const foot = hasLink
        ? '<a class="project-link" href="' + esc(p.link) + '" target="_blank" rel="noopener noreferrer">View project ' + icon("external") + '</a>'
        : "";
      return '<article class="project-card">' +
        '<div class="project-head"><span class="project-dot" aria-hidden="true"></span>' +
        '<h3>' + esc(p.name) + '</h3></div>' +
        '<p class="project-desc">' + esc(p.description) + '</p>' +
        (tech ? '<ul class="project-tech">' + tech + '</ul>' : "") +
        foot + '</article>';
    }).join("");

    // Contact
    const contactBtns = $("#contact-buttons");
    contactBtns.innerHTML =
      (isPlaceholder(c.email)
        ? primaryBtn("", "Email", "email", {})
        : primaryBtn("mailto:" + c.email, "Email", "email", { newTab: false, alwaysOn: true })) +
      primaryBtn(c.linkedin, "LinkedIn", "linkedin", { newTab: true });

    // QR
    const qrContainer = $("#qr-code");
    renderQrSvg(qrContainer, c.qrUrl, { ecl: "M", border: 3 });
    $("#qr-url").textContent = c.qrUrl;
    if (isPlaceholder(c.qrUrl)) $("#qr-note").hidden = false;

    // Footer
    $("#year").textContent = new Date().getFullYear();
    $("#footer-name").textContent = c.name;

    // Wire up interactive buttons
    const saveBtn = $("#save-contact");
    if (saveBtn) saveBtn.addEventListener("click", downloadVcard);
    const dlLink = $("#save-contact-link");
    if (dlLink) dlLink.addEventListener("click", function (e) { e.preventDefault(); downloadVcard(); });

    // Mobile nav toggle
    const navToggle = $("#nav-toggle");
    const nav = $("#site-nav");
    if (navToggle && nav) {
      navToggle.addEventListener("click", function () {
        const open = nav.classList.toggle("open");
        navToggle.setAttribute("aria-expanded", String(open));
      });
      nav.addEventListener("click", function (e) {
        if (e.target.closest("a")) {
          nav.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    // Reveal-on-scroll (respects reduced motion)
    initReveal();
  }

  function primaryBtn(href, label, iconName, opts) {
    opts = opts || {};
    if ((!href || isPlaceholder(href)) && !opts.alwaysOn) {
      return '<span class="btn btn-primary is-placeholder" aria-disabled="true">' +
        '<span class="btn-icon">' + icon(iconName) + '</span>' + esc(label) + '</span>';
    }
    if (!href || isPlaceholder(href)) href = "#";
    const ext = opts.newTab !== false ? ' target="_blank" rel="noopener noreferrer"' : "";
    const cls = iconName === "resume" ? "btn btn-accent" : "btn btn-primary";
    return '<a class="' + cls + '" href="' + esc(href) + '"' + ext + '>' +
      '<span class="btn-icon">' + icon(iconName) + '</span>' + esc(label) + '</a>';
  }

  function initReveal() {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = document.querySelectorAll("[data-reveal]");
    if (prefersReduced || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("revealed"); });
      return;
    }
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  }

  // Only auto-build the landing page when its markup is present. This lets
  // the standalone QR utility (qr.html) reuse the QR engine without running
  // the full page builder.
  function boot() {
    if (document.getElementById("hero-name")) build();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
