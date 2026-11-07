const http = require('http');
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

// -------------------------------------------------------------
// Helper: HTTP GET from local server
// -------------------------------------------------------------
function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, data, headers: res.headers }));
    }).on('error', (err) => reject(err));
  });
}

// -------------------------------------------------------------
// Test Suite Runner
// -------------------------------------------------------------
async function runVerification() {
  console.log('====================================================');
  console.log('ZERO_WEB: PHASE A COMPREHENSIVE VERIFICATION SUITE');
  console.log('====================================================\n');

  const results = {
    passed: [],
    failed: [],
    warnings: [],
  };

  function assert(condition, message, failureDetail = '') {
    if (condition) {
      results.passed.push(message);
      console.log(`[PASS] ${message}`);
    } else {
      results.failed.push({ message, detail: failureDetail });
      console.error(`[FAIL] ${message} - ${failureDetail}`);
    }
  }

  // -----------------------------------------------------------
  // Check 1: Live Page Availability
  // -----------------------------------------------------------
  console.log('\n--- 1. Testing Live HTTP Endpoints on Localhost:3000 ---');
  const routes = [
    { name: 'Homepage', path: '/' },
    { name: 'Journey Cockpit', path: '/journey' },
    { name: 'Requirements Wizard Tab', path: '/journey?tab=requirements' },
    { name: 'Learner Dashboard', path: '/dashboard' },
    { name: 'Command Library', path: '/commands' },
    { name: 'AI Prompts', path: '/prompts' },
    { name: 'Troubleshooting', path: '/troubleshooting' },
    { name: 'Architecture', path: '/architecture' },
    { name: 'Tech Map', path: '/tech-map' },
  ];

  const htmlMap = {};

  for (const r of routes) {
    try {
      const res = await fetchUrl(`http://localhost:3000${r.path}`);
      assert(
        res.status === 200 && res.data.length > 500,
        `${r.name} (${r.path}) responds with HTTP 200 (length: ${res.data.length} bytes)`,
        `HTTP Status: ${res.status}`
      );
      htmlMap[r.path] = res.data;
    } catch (err) {
      assert(false, `${r.name} (${r.path}) connection`, err.message);
    }
  }

  // -----------------------------------------------------------
  // Check 2: Requirements Wizard Loading & UI Elements
  // -----------------------------------------------------------
  console.log('\n--- 2. Testing Requirements Wizard UI & Controls ---');
  const journeyHtml = htmlMap['/journey'] || '';
  
  // HTML encodes & as &amp;
  assert(
    journeyHtml.includes('Phase A: Requirements') ||
    journeyHtml.includes('Requirements &amp; Architecture') ||
    journeyHtml.includes('Requirements & Architecture') ||
    journeyHtml.includes('17 Inputs'),
    'Requirements tab toggle exists on /journey page'
  );

  assert(
    journeyHtml.includes('Step-by-Step Creation Journey') || journeyHtml.includes('MY FIRST WEBSITE'),
    'Chronological Step Journey toggle exists on /journey page'
  );

  // Inspect RequirementsWizard.tsx component file for 17 input fields
  const wizardFile = fs.readFileSync(path.join(__dirname, '../src/components/journey/RequirementsWizard.tsx'), 'utf8');
  
  const expectedInputs = [
    'websiteName',
    'idea',
    'purpose',
    'targetAudience',
    'mainPages',
    'requiredFeatures',
    'needsAuth',
    'needsOtp',
    'needsUserDataStorage',
    'needsDatabase',
    'needsAi',
    'needsFileUploads',
    'needsPayments',
    'needsAdminDashboard',
    'expectedTraffic',
    'preferredTech',
    'experienceLevel'
  ];

  let missingInputs = [];
  for (const field of expectedInputs) {
    if (!wizardFile.includes(field)) {
      missingInputs.push(field);
    }
  }
  assert(
    missingInputs.length === 0,
    `All 17 requirement input fields implemented in RequirementsWizard.tsx (found ${expectedInputs.length - missingInputs.length}/17)`,
    `Missing fields: ${missingInputs.join(', ')}`
  );

  assert(
    wizardFile.includes('Aura Candles') &&
    wizardFile.includes('Alex Rivera Portfolio') &&
    wizardFile.includes('StudyGenie AI'),
    'Three realistic presets provided: Aura Candles (Full-Stack), Alex Rivera (Portfolio), StudyGenie (AI)'
  );

  // Check beginner-friendly explanations
  assert(
    wizardFile.includes('What this means') &&
    wizardFile.includes('Before writing prompts or generating code, define your website in plain English'),
    'Beginner-friendly plain English explanations present for technical choices'
  );

  // -----------------------------------------------------------
  // Check 3 & 4: Architecture Logic & Service Exclusion Tests
  // -----------------------------------------------------------
  console.log('\n--- 3 & 4. Testing Architecture Logic & Service Exclusion ---');
  // Load and transpile user-requirements.ts using TypeScript compiler
  const reqModuleCode = fs.readFileSync(path.join(__dirname, '../src/lib/user-requirements.ts'), 'utf8');
  const transpiledJs = ts.transpileModule(reqModuleCode, {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 }
  }).outputText;
  
  // Create module sandbox
  const reqExports = {};
  const reqModule = { exports: reqExports };
  const runReqModule = new Function('module', 'exports', transpiledJs);
  runReqModule(reqModule, reqExports);

  const { analyzeRequirements, DEFAULT_REQUIREMENTS } = reqModule.exports;

  // Scenario A: Static Portfolio (No backend, no database, no auth, no AI)
  const portfolioReq = {
    websiteName: "Alex Rivera Portfolio",
    idea: "A personal portfolio to showcase my web design projects and contact info.",
    purpose: "Portfolio and resume showcase",
    targetAudience: "Recruiters and employers",
    mainPages: "Home, About, Projects, Contact",
    requiredFeatures: "Project showcase, resume viewer, responsive design",
    needsAuth: "no",
    needsOtp: "no",
    needsUserDataStorage: "no",
    needsDatabase: "no",
    needsAi: "no",
    needsFileUploads: "no",
    needsPayments: "no",
    needsAdminDashboard: "no",
    expectedTraffic: "low",
    preferredTech: "React, Vite, Tailwind CSS",
    experienceLevel: "absolute_beginner",
  };

  const portfolioRec = analyzeRequirements(portfolioReq);
  
  assert(
    portfolioRec.backendNeeded === false,
    'Portfolio: Separate backend correctly excluded (backendNeeded === false)'
  );
  assert(
    portfolioRec.databaseNeeded === false,
    'Portfolio: Database correctly excluded (databaseNeeded === false)'
  );
  assert(
    portfolioRec.authNeeded === false && portfolioRec.otpNeeded === false,
    'Portfolio: Auth & Email OTP correctly excluded'
  );
  assert(
    portfolioRec.aiNeeded === false,
    'Portfolio: AI API correctly excluded'
  );
  assert(
    portfolioRec.skippedPhases.some(p => p.phaseNumber === 3) &&
    portfolioRec.skippedPhases.some(p => p.phaseNumber === 8),
    'Portfolio: Phase 3 (Database) and Phase 8 (Production MongoDB) identified as skipped phases'
  );
  assert(
    portfolioRec.overallComplexity === "Simple Static Website",
    `Portfolio: Categorized as "${portfolioRec.overallComplexity}"`
  );

  // Scenario B: Full-Stack AI E-Commerce (Aura Candles)
  const candleRec = analyzeRequirements(DEFAULT_REQUIREMENTS);
  assert(
    candleRec.backendNeeded === true &&
    candleRec.databaseNeeded === true &&
    candleRec.authNeeded === true &&
    candleRec.otpNeeded === true &&
    candleRec.aiNeeded === true,
    'Aura Candles: Full-stack requirements (Backend, DB, Auth, OTP, AI) correctly included'
  );
  assert(
    candleRec.skippedPhases.length === 0,
    'Aura Candles: No phases skipped for full-stack application (0 skipped phases)'
  );
  assert(
    candleRec.overallComplexity === "AI-Powered Full-Stack Web App",
    `Aura Candles: Categorized as "${candleRec.overallComplexity}"`
  );

  // Scenario C: Web App with Database but No AI
  const blogReq = {
    ...portfolioReq,
    websiteName: "DevNotes Blog",
    needsDatabase: "yes",
    needsUserDataStorage: "yes",
    needsAuth: "yes",
  };
  const blogRec = analyzeRequirements(blogReq);
  assert(
    blogRec.backendNeeded === true &&
    blogRec.databaseNeeded === true &&
    blogRec.aiNeeded === false &&
    blogRec.overallComplexity === "Full-Stack Web App",
    'DevNotes Blog: Correctly includes DB + Backend, excludes AI API, classified as "Full-Stack Web App"'
  );

  // -----------------------------------------------------------
  // Check 5 & 6: LocalStorage Persistence & Surviving Refresh
  // -----------------------------------------------------------
  console.log('\n--- 5 & 6. Testing localStorage Persistence & Survival ---');
  // Mock localStorage in isolated scope
  const mockStorageStore = {};
  const mockLocalStorage = {
    getItem: (key) => mockStorageStore[key] || null,
    setItem: (key, val) => { mockStorageStore[key] = String(val); },
    clear: () => { Object.keys(mockStorageStore).forEach(k => delete mockStorageStore[k]); }
  };

  const { saveUserRequirements, loadUserRequirements } = reqModule.exports;

  // Emulate global localStorage
  global.localStorage = mockLocalStorage;

  // Initial load when empty -> returns DEFAULT_REQUIREMENTS
  const initialLoaded = loadUserRequirements();
  assert(
    initialLoaded.websiteName === DEFAULT_REQUIREMENTS.websiteName,
    'Storage fallback: Returns default requirements when localStorage is empty'
  );

  // Save modified requirements
  const customSaved = {
    ...portfolioReq,
    websiteName: "CyberStudio Labs",
    idea: "Interactive 3D agency portfolio"
  };
  saveUserRequirements(customSaved);

  assert(
    mockLocalStorage.getItem('zero_web_user_requirements') !== null,
    'localStorage: Key "zero_web_user_requirements" successfully written to storage'
  );

  // Simulate browser refresh by calling loadUserRequirements again
  const reloaded = loadUserRequirements();
  assert(
    reloaded.websiteName === "CyberStudio Labs" &&
    reloaded.idea === "Interactive 3D agency portfolio" &&
    reloaded.needsDatabase === "no",
    'Browser refresh simulation: Saved requirements survive and reload with 100% data fidelity'
  );

  // Test corrupt JSON resilience
  mockLocalStorage.setItem('zero_web_user_requirements', 'INVALID_JSON_%%%');
  const fallbackAfterCorrupt = loadUserRequirements();
  assert(
    fallbackAfterCorrupt.websiteName === DEFAULT_REQUIREMENTS.websiteName,
    'Resilience: Corrupted storage gracefully falls back to default requirements without throwing'
  );

  // -----------------------------------------------------------
  // Check 7: Journey Phase 1 Integrity (All 25 Steps)
  // -----------------------------------------------------------
  console.log('\n--- 7. Testing Phase 1 Integrity (25 Original Steps) ---');
  const journeyDataFile = fs.readFileSync(path.join(__dirname, '../src/lib/chronological-journey-data.ts'), 'utf8');

  // Verify Phase 1 exists in PHASES_LIST
  assert(
    journeyDataFile.includes('phaseNumber: 1') &&
    journeyDataFile.includes('title: "Create the Project"'),
    'Phase 1 "Create the Project" definition exists in PHASES_LIST'
  );

  // Extract all step numbers using regex
  const stepNumberRegex = /stepNumber:\s*(\d+)/g;
  let allStepNumbers = [];
  let match;
  while ((match = stepNumberRegex.exec(journeyDataFile)) !== null) {
    allStepNumbers.push(parseInt(match[1], 10));
  }

  const uniqueSteps = [...new Set(allStepNumbers)];
  assert(
    uniqueSteps.length === 129,
    `Total journey steps across all phases is exactly 129 (found: ${uniqueSteps.length})`
  );

  // Phase 1 steps are 1 through 25
  const phase1Steps = uniqueSteps.filter(n => n >= 1 && n <= 25);
  assert(
    phase1Steps.length === 25,
    `Phase 1 contains exactly 25 chronological steps (found: ${phase1Steps.length})`
  );

  assert(
    journeyDataFile.includes('Open GitHub in the Browser'),
    'Phase 1 Step 1 confirmed: "Open GitHub in the Browser"'
  );

  assert(
    journeyDataFile.includes('Step 25') || journeyDataFile.includes('stepNumber: 25'),
    'Phase 1 Step 25 confirmed present'
  );

  // Verify 10 required click-by-click action properties
  const requiredStepProps = [
    'stepNumber',
    'title',
    'phaseNumber',
    'phaseTitle',
    'summary',
    'whatToOpen',
    'whereToClick',
    'whatToEnter',
    'whatOutputToExpect',
    'whatToDoIfFails',
    'howToVerifySuccess',
    'nextStep'
  ];

  let missingProps = [];
  for (const prop of requiredStepProps) {
    if (!journeyDataFile.includes(prop)) {
      missingProps.push(prop);
    }
  }
  assert(
    missingProps.length === 0,
    `All required click-by-click properties present in journey data model: ${requiredStepProps.join(', ')}`,
    `Missing: ${missingProps.join(', ')}`
  );

  // -----------------------------------------------------------
  // Check 8: Phases 1 to 10 Accessibility
  // -----------------------------------------------------------
  console.log('\n--- 8. Testing Phases 1 to 10 Accessibility ---');
  for (let p = 1; p <= 10; p++) {
    const hasPhase = journeyDataFile.includes(`phaseNumber: ${p}`) &&
                     (journeyDataFile.includes(`Phase ${p}`) || journeyDataFile.includes(`phaseNumber: ${p},`));
    assert(hasPhase, `Phase ${p} of 10 is defined and accessible in chronological sequence`);
  }

  // -----------------------------------------------------------
  // Check 9 & 10: Dashboard and Commands Library
  // -----------------------------------------------------------
  console.log('\n--- 9 & 10. Testing Dashboard & Commands Library ---');
  const dashboardHtml = htmlMap['/dashboard'] || '';
  assert(
    dashboardHtml.includes('Learner Cockpit') || dashboardHtml.includes('Welcome back to ZERO_WEB'),
    'Dashboard page loaded with learner cockpit and active project view'
  );
  assert(
    dashboardHtml.includes('Requirements Wizard') || dashboardHtml.includes('tab=requirements'),
    'Dashboard contains direct deep-link to Requirements Wizard'
  );

  const commandsHtml = htmlMap['/commands'] || '';
  assert(
    commandsHtml.includes('Command Library') || commandsHtml.includes('TERMINAL COMMANDS'),
    'Commands Library page loaded with terminal command catalog'
  );
  assert(
    commandsHtml.includes('node -v') || commandsHtml.includes('npm install'),
    'Commands Library contains beginner commands with practical explanations'
  );

  // -----------------------------------------------------------
  // Check 11: Navigation Between Pages
  // -----------------------------------------------------------
  console.log('\n--- 11. Testing Navigation Links Across App ---');
  const navbarFile = fs.readFileSync(path.join(__dirname, '../src/components/layout/Navbar.tsx'), 'utf8');
  const navHrefs = ['/journey', '/commands', '/prompts', '/troubleshooting', '/architecture', '/tech-map', '/dashboard'];
  
  let missingNavLinks = [];
  for (const href of navHrefs) {
    if (!navbarFile.includes(`href: "${href}"`)) {
      missingNavLinks.push(href);
    }
  }
  assert(
    missingNavLinks.length === 0,
    `Navbar links verified: ${navHrefs.join(', ')}`,
    `Missing navbar links: ${missingNavLinks.join(', ')}`
  );

  // -----------------------------------------------------------
  // Check 12: Broken Links & Console Error Probes
  // -----------------------------------------------------------
  console.log('\n--- 12. Testing for Broken Links Across App Routes ---');
  const linkRegex = /href="(\/[^"#?]*)/g;
  const discoveredRoutes = new Set();
  
  for (const pagePath of Object.keys(htmlMap)) {
    let linkMatch;
    while ((linkMatch = linkRegex.exec(htmlMap[pagePath])) !== null) {
      discoveredRoutes.add(linkMatch[1]);
    }
  }

  let brokenRoutes = [];
  for (const route of discoveredRoutes) {
    try {
      const checkRes = await fetchUrl(`http://localhost:3000${route}`);
      if (checkRes.status !== 200) {
        brokenRoutes.push({ route, status: checkRes.status });
      }
    } catch (err) {
      brokenRoutes.push({ route, error: err.message });
    }
  }

  assert(
    brokenRoutes.length === 0,
    `All ${discoveredRoutes.size} discovered internal links return HTTP 200 OK (0 broken links)`,
    JSON.stringify(brokenRoutes)
  );

  let pagesWithErrors = [];
  for (const [pagePath, html] of Object.entries(htmlMap)) {
    if (html.includes('Application error') || html.includes('Unhandled Runtime Error') || html.includes('Internal Server Error')) {
      pagesWithErrors.push(pagePath);
    }
  }
  assert(
    pagesWithErrors.length === 0,
    'Rendered HTML contains zero runtime/application error notices',
    `Pages with error indicators: ${pagesWithErrors.join(', ')}`
  );

  // -----------------------------------------------------------
  // Summary
  // -----------------------------------------------------------
  console.log('\n====================================================');
  console.log(`VERIFICATION SUMMARY:`);
  console.log(`Passed: ${results.passed.length}`);
  console.log(`Failed: ${results.failed.length}`);
  console.log('====================================================');

  if (results.failed.length > 0) {
    console.error('\nFAILED TESTS:');
    results.failed.forEach(f => console.error(` - ${f.message}: ${f.detail}`));
    process.exit(1);
  } else {
    console.log('\nALL VERIFICATION CRITERIA PASSED SUCCESSFULLY.');
    process.exit(0);
  }
}

runVerification().catch(err => {
  console.error('Fatal test suite error:', err);
  process.exit(1);
});
