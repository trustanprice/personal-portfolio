# AGENTS.md — resume/

## Responsibility

`resume.tex` is the single LaTeX source for Trustan's downloadable CV — the
curated, hard-length-capped counterpart to the full-detail
`src/pages/Experiences.js` and `src/pages/Projects.js`. `pdflatex` always
names its output after the input file, so compiling produces `resume.pdf`;
that gets renamed/copied to **`trustanprice-resume.pdf`** (the tracked,
committed copy — the one exception to the "job-tailored variants are
gitignored" rule below, since it's the base, not a variant) and also copied
to `public/home/trustanprice-cv2026.pdf` (the file linked from the résumé
icon on Home). Three names, one source — see Compiling below for the exact
steps. `resume.tex` itself keeps its plain name; only the *compiled output*
follows the `trustanprice-*` convention.

## The rule this file exists to enforce

**Always exactly one page. Never more than 4 `\resumeSubheading` entries in
Experience. Never more than 3 `\resumeProjectHeading` entries in Projects.**
These are hard caps, not soft targets — set by the user explicitly, not
inferred. When a new entry would exceed a cap, drop one before adding:

- **Experience**: drop the oldest/least-relevant — usually literally the
  oldest by end date, unless an older role is more relevant to the kind of
  job being targeted than a more recent one (judgment call, but default to
  reverse-chronological). The designated release valve when a new
  experience needs to fit is **combining the two Caterpillar internships
  (Summer 2025 + Summer 2026) into one entry** — one `\resumeSubheading`
  spanning "May 2025 -- Aug 2026," with a merged bullet list (pick the
  strongest 2-3 bullets across both stints). This was actually done on the
  base resume 2026-08-25 (see Current state) — it's no longer just a
  documented technique, it's the live structure. Same technique the
  job-tailoring workflow below uses for variants.
- **Projects**: drop the lowest-impact of the 3 for the job at hand. As of
  2026-08-19 the base resume carries Call Center Forecasting (Datathon),
  LedgerOne, and Forward Data Lab — NBA Predictions and ML Dementia
  Classification are benched (still strong, just less differentiated /
  less on-thesis for the "risk modeling, fraud detection, forecasting"
  career direction than what replaced them) but are fair game to bring back
  for a job posting where they'd read as more relevant than one of the three
  above (e.g. a full-stack- or sports-analytics-flavored role for NBA; a
  healthcare-ML role for Dementia Classification).

## Sync convention

`resume.tex` is a *subset* of the portfolio, not an independent source of
claims — see the root [AGENTS.md](../AGENTS.md)'s "Resume sync" bullet.
Whenever `Experiences.js` or `Projects.js` gains a new entry (new
internship, new job, new highlighted project) or an existing entry's
substance changes (new metrics, new scope), review this file too:

1. Condense the portfolio's prose into 1-3 resume-style bullets (metric-first,
   no filler — see existing entries for the tone: "Achieved 100% audit test
   coverage," not "Worked on testing").
2. Apply the caps above — if adding would exceed 4 experiences or 3
   projects, remove the weakest existing one first.
3. Recompile (below) and confirm it's still 1 page before committing.
4. Copy the resulting PDF over `public/home/trustanprice-cv2026.pdf` so the
   live download link matches the source. If the filename's year no longer
   makes sense (new calendar year, degree progress), update both the
   filename and its `href` in `src/pages/Home.js` — don't silently overwrite
   old content under a year-stamped name that no longer describes it.

## Job-tailored resume workflow

When the user pastes a full job description in chat and asks for a resume
built from it, that's a request for a **new, tailored variant** of
`resume.tex` optimized for that specific posting — not a request to
overwrite the base resume by default. Process:

1. Read the job description for what it actually emphasizes (required
   skills, domain, seniority, team function) rather than pattern-matching
   on keywords alone.
2. Select which 4 experiences and which 3 projects to feature, and in what
   order, based on relevance to *this* posting — not always the base
   resume's picks. The full pool to choose from is everything in
   `Experiences.js`/`Projects.js` on the portfolio, not just what's
   currently in `resume.tex`.
3. Same hard caps as the base resume apply: **≤4 experiences, ≤3 projects,
   always exactly 1 page.** The base resume (as of 2026-08-25) already
   combines the two Caterpillar stints into one entry, leaving three
   experience slots used (Synchrony, combined Caterpillar, State Farm) — a
   4th is available if a posting calls for HXRI Lab (AI/Mixed Reality
   research, dropped from the base pool but still fair game for a
   research- or AR/VR-flavored posting) or for reverting to two separate
   Caterpillar entries if a posting specifically wants that level of detail
   on one summer. Don't drop Synchrony or State Farm to make room unless
   the posting genuinely has no use for them.
4. Rewrite bullets to genuinely emphasize what's relevant to the posting —
   reordering and re-weighting real accomplishments, not fabricating ones
   or keyword-stuffing.
4a. **No Clubs section, by default, on any new job-tailored variant.**
    As of 2026-09-17 this is a standing decision, not a per-file judgment
    call — the user doesn't want it taking up space. Don't add
    `\section{Clubs}` to a new file unless the user explicitly asks for it
    on that specific resume. (This doesn't retroactively touch every older
    variant that already has one — see Current state below for what's been
    cleaned up so far — but it does mean *new* builds start without it.)
5. **Spacing must match `resume.tex`/`resume.pdf`, always, on every
   resume file in this folder — no exceptions.** As of 2026-09-17 this is
   a standing rule, not a per-file choice: `itemsep=2pt` in both
   `\resumeSubHeadingListStart` and `\resumeItemListStart`, and
   `\resumeItemListEnd`'s `\vspace{-5pt}`. This reverses the older
   2026-09-04 decision that deliberately kept job-tailored variants on a
   tighter `itemsep=0pt`/`\vspace{-7pt}` convention — that convention is
   now retired; don't reach for it on a new file. Every existing file was
   swept to this spacing on 2026-09-17 (see Current state below). If a new
   variant doesn't fit at 1 page under this spacing, the fallback order is:
   (a) tighten `\resumeSubheading`'s and `\resumeProjectHeading`'s
   trailing `\vspace` from `-7pt` toward `-9pt`/`-10pt` — spacing-only, no
   content lost; (b) if still over, drop Clubs if present (per 4a, new
   variants shouldn't have one anyway); (c) only then consider trimming
   bullet wording, and only as a last resort, never by deleting an
   Experience/Project entry outside the hard-cap rules above.
6. Recompile and verify 1 page (below) before presenting it.
7. Save the result as a **separate file**, `trustanprice-<company>.tex`,
   in `resume/swe-roles/` for a software-engineering-flavored posting or
   `resume/ds-roles/` for a data-science-flavored one (e.g.
   `resume/swe-roles/trustanprice-anthropic.tex`) — lowercase company
   name/slug, no role description in the filename (the user names these by
   company, confirmed in practice: `trustanprice-ibm`, `trustanprice-chase`,
   `trustanprice-apple`, `trustanprice-google`, `trustanprice-uber`,
   `trustanprice-merge`) — rather than overwriting `resume.tex`. The base
   resume stays the general-purpose default at `resume/resume.tex`, unless
   the user explicitly says to replace it. Mention the new filename (with
   its role-folder path) when presenting the result. These job-specific
   variants are gitignored (see below) — they're working files for one
   application, not portfolio content, unless the user asks to commit one.

## Compiling

```bash
cd resume
pdflatex -interaction=nonstopmode resume.tex
pdflatex -interaction=nonstopmode resume.tex   # run twice: resolves the
                                                # rerunfilecheck warning from
                                                # hyperref's \label/\ref pass
```

Verify page count before trusting the result:

```bash
pdfinfo resume.pdf | grep Pages   # must print "Pages: 1"
```

Then sync the compiled output to its other two names (base resume only —
job-tailored variants stay as `trustanprice-<company>.pdf`, no second copy):

```bash
cp resume.pdf trustanprice-resume.pdf
cp resume.pdf ../public/home/trustanprice-cv2026.pdf
```

`resume.aux`, `.log`, `.out`, and `resume.pdf` itself are all gitignored
build artifacts — `resume.pdf` is just pdflatex's unavoidable intermediate
name (it always names output after the input file), regenerated fresh on
every compile. Only the two *copies* made in the step above —
`trustanprice-resume.pdf` and `public/home/trustanprice-cv2026.pdf` — are
committed; they're the stable, intentionally-named files anything should
actually link to or distribute.

### Local dependency note (TinyTeX)

This machine's TinyTeX install is minimal and was missing `fullpage`,
`titlesec`, `enumitem`, `fancyhdr`, and babel's `english.ldf` the first time
this was compiled (2026-08-19) — `tabularx` was already present (it ships
with the `tools` bundle). `tlmgr install <pkg>` may fail here because the
default CTAN mirror can be a release ahead of this TinyTeX's TeX Live version
("Local TeX Live (2024) is older than remote repository"), and cross-release
`tlmgr` installs aren't supported. If that happens again, it's faster to
fetch the package directly rather than fight `tlmgr`:

- Most packages: download `<pkg>.tar.xz` from
  `https://mirror.ctan.org/systems/texlive/tlnet/archive/<pkg>.tar.xz`,
  extract, and copy the `tex/...` subtree into
  `$(kpsewhich -var-value TEXMFHOME)` (on this machine:
  `~/Library/TinyTeX/texmf-local`), then run `mktexlsr` to refresh the
  filename database.
- Some packages (`fullpage`, babel's `english.ldf`) aren't distributed as a
  ready `.sty`/`.ldf` under that path — they ship as a `.dtx`/`.ins` pair
  under their real CTAN bundle name (`fullpage.sty` lives in the `preprint`
  bundle at `/macros/latex/contrib/preprint/`; babel's English files live at
  `/macros/latex/contrib/babel-contrib/english/`). Download both files and
  run `tex <name>.ins` to generate the real package files, then install them
  the same way. Use `curl -sL "https://ctan.org/json/2.0/pkg/<name>"` to find
  a package's actual CTAN path if the obvious one 404s.

## Current state

**2026-08-25**: base resume's Experience section restructured on explicit
user instruction. Synchrony added — no longer excluded, since the role
actually started (Aug 2026 -- Present, not the "Fall 2026, upcoming"
framing `Experiences.js` still uses as of this writing; portfolio pages
haven't been refreshed to match, worth revisiting). The two Caterpillar
entries were combined into one (May 2025 -- Aug 2026, 3 merged bullets —
the release valve described above, now actually in use). HXRI Lab was
dropped to make room; State Farm was kept over it — judgment call, reasoning
was State Farm's production-ML/data-science framing and full-year tenure
being more broadly relevant to the data/ML-flavored roles this resume
keeps getting tailored for than HXRI's narrower AR/VR research scope.
Net: 3 experience entries now (Synchrony, combined Caterpillar, State
Farm), one slot open under the 4-cap. Location left blank for Synchrony in
the `\resumeSubheading` — no confirmed work-site city, didn't want to guess
one.

Compiled clean, 1 page. Deployed to `public/home/trustanprice-cv2026.pdf`
and `trustanprice-resume.pdf` (renamed from `resume.pdf` 2026-08-21 to
match the job-tailored variants' `trustanprice-*` naming; see the
gitignore note above — `resume.pdf` itself is gitignored now, this file's
the tracked one).

**2026-08-21**: five job-tailored variants built in one sitting
(`trustanprice-ibm`, `trustanprice-chase`, `trustanprice-apple`,
`trustanprice-google`, `trustanprice-uber`), each compiled and verified at
1 page, each reusing the same 4-experience Experience section (only the
Projects section varies) — the JD-relevance reasoning behind each Projects
pick:
- **IBM** (Associate Application Developer, full-stack/GenAI/consulting):
  NBA Predictions, LedgerOne, Forward Data Lab.
- **Chase** (JPMC 2027 SWE Program, generalist + AI-dev-tools + financial
  services): LedgerOne, Datathon, Forward Data Lab — closest to the base
  resume's own picks, since the JD is fairly general and financial-services-
  adjacent.
- **Apple** (IS&T Early Career, broad enterprise/BI/full-stack team list):
  LedgerOne, NBA Predictions, Datathon — dropped Forward Data Lab, since
  this posting doesn't mention AI/GenAI at all.
- **Google** (Early Career, explicitly lists information retrieval/NLP/ML
  as preferred): Forward Data Lab first (direct IR/NLP/RAG match), then
  LedgerOne, then NBA Predictions.
- **Uber** (backend/distributed-systems/production-reliability, SQL
  required): NBA Predictions (reframed around its resilient live-data
  client — production-reliability engineering, not just "full-stack"),
  LedgerOne (reframed to foreground SQL), Datathon.

All five variants needed `itemsep=0pt`/`\vspace{-7pt}` (tighter than the
base resume's `1pt`/`-6pt`) to fit — see the note in the job-tailored
workflow section above before writing a sixth one from scratch.

NBA Predictions and ML Dementia Classification were swapped out for
LedgerOne and Forward Data Lab on 2026-08-20 — both new picks are more
recent and a better fit for the "risk modeling, fraud detection,
forecasting" career direction stated in the portfolio bio (LedgerOne
especially: real credit-risk modeling, validated against real Freddie Mac
data). NBA and Dementia are still strong, still on the portfolio's Projects
page, and are fair picks to bring back for a job-tailored variant where
they're more relevant than one of the current three (see the job-tailoring
workflow above).

To fit the new project bullets on one page, `itemsep` in
`\resumeSubHeadingListStart`/`\resumeItemListStart` was tightened from 2pt
to 1pt and `\resumeItemListEnd`'s trailing `\vspace` from -5pt to -6pt —
applies uniformly to the whole document (imperceptible spacing change, not
a content cut). If a future edit overflows to 2 pages again, this is the
first knob to try before cutting bullet content.

**2026-08-29**: this folder split by role type. All seven existing
job-tailored variants (`trustanprice-ibm`, `trustanprice-chase`,
`trustanprice-apple`, `trustanprice-google`, `trustanprice-uber`,
`trustanprice-ibm-data`, `trustanprice-merge` — `.tex` and `.pdf` each)
moved into a new `resume/swe-roles/` subfolder; a sibling `resume/ds-roles/`
subfolder was created for upcoming data-science-flavored postings. The base
`resume.tex`/`resume.pdf`, the tracked `trustanprice-resume.pdf`, and this
file all stay at the `resume/` root — only job-tailored variants live in
the role subfolders. `.gitignore`'s job-tailored-resume and LaTeX-build-
artifact patterns were widened from `resume/trustanprice-*.{tex,pdf}` to
`resume/**/trustanprice-*.{tex,pdf}` (and similarly for `.aux`/`.log`/etc.)
so they still match one level down; verified with `git check-ignore` that
the moved files are still ignored and `trustanprice-resume.pdf` is still
the one tracked exception. Nothing here was previously tracked by git
except `resume.tex`, `AGENTS.md`, and `trustanprice-resume.pdf`, so the
move itself didn't touch git history — just working files on disk.

**2026-08-29**: eleven job-tailored variants built in one sitting straight
into the new subfolders — `swe-roles/trustanprice-disney.tex` (Disney
Experiences, Associate Software Engineer, mobile) and ten into
`ds-roles/`: `trustanprice-abbott`, `-aflac`, `-akuna`, `-cvs`,
`-freddiemac`, `-iheartmedia`, `-uber-ds`, `-jpmc`, `-citadel`,
`-fanatics`. All compiled clean at 1 page (verified with `pdfinfo`).
Every variant reuses the base resume's Experience section verbatim
(Synchrony/combined-Caterpillar/State Farm) per the established
one-page-budget pattern — only Skills and Projects vary:
- **Disney** (mobile SWE — Flutter/iOS/Android, GitHub, Agile, APIs):
  kept the base (non-`dbt`) Skills list; Projects are NBA Predictions,
  LedgerOne, Forward Data Lab — full-stack/API-shipped work, since
  nothing in the real skill set or project history touches mobile
  (Swift/Kotlin/Dart). Flagged this gap to the user rather than
  fabricating mobile experience; the resume leans on transferable
  software-engineering fundamentals instead.
- **Abbott** (clinical reporting — SQL/Oracle/Power BI): LedgerOne, NBA
  Predictions, Datathon.
- **Aflac** (data analyst — SQL/Python/stats/forecasting/exec
  presentations): Datathon, LedgerOne, NBA Predictions — Datathon leads
  since it's a direct forecasting-presented-to-execs analog.
- **Akuna Capital** (Quant Strategist track, per user's explicit choice
  over the posting's alternate Quant Developer track): LedgerOne, NBA
  Predictions, Forward Data Lab — LedgerOne's credit-risk module
  (vintage/roll-rate/CECL, holdout-backtested) and NBA's walk-forward
  validation are the closest real analogs to quantitative
  research/backtesting; FDL covers the posting's "independent research
  experience" line.
- **CVS Health** (Data Scientist — CI/CD/Git/SQL/ETL/data modeling):
  LedgerOne, NBA Predictions, Datathon.
- **Freddie Mac** (Single-Family Data Analyst — credit risk, loan
  lifecycle): LedgerOne, NBA Predictions, Datathon — LedgerOne's
  credit-risk module is validated directly against real Freddie Mac
  mortgage data, an unusually direct match worth noting but not
  overselling.
- **iHeartMedia** (Digital Data Analyst, Finance team — Excel/SQL/Tableau,
  revenue analysis): LedgerOne, Datathon, NBA Predictions.
- **Uber DS** (Data Scientist I — time-series, causal analysis,
  dashboards): NBA Predictions, LedgerOne, Datathon. Named
  `trustanprice-uber-ds.tex` rather than `trustanprice-uber.tex` since a
  SWE-flavored Uber variant already exists in `swe-roles/` from an
  earlier application — this is a different posting at the same company,
  not a replacement.
- **JPMC Corporate Analyst Development Program** (general analytics
  rotational, explicitly not a SWE-track role): LedgerOne, NBA
  Predictions, Datathon — same three as the base resume's own default
  picks, since the posting's generalist analytics framing matches what
  the base resume already optimizes for.
- **Citadel** (Quantitative Research Analyst — stats/ML/backtesting,
  Python/R/C++, independent research): LedgerOne, NBA Predictions,
  Forward Data Lab — same picks as Akuna for the same reasoning.
- **Fanatics** (Quantitative Analyst I, sports betting/trading — pricing
  models, risk models, Python/C#): NBA Predictions, LedgerOne, Datathon
  — NBA Predictions is an unusually direct fit here (backtested against
  Vegas/BPI lines, the same kind of predictive-modeling-for-odds problem
  the role covers).

**Same day, added after the initial eleven**: `ds-roles/trustanprice-fanduel.tex`
(FanDuel, Data Scientist – Experimentation — A/B testing, experimental
design, advanced SQL, Python/R/SAS). Projects: Forward Data Lab, LedgerOne,
NBA Predictions — FDL leads here since its criteria-scored, six-query
on/off-topic evaluation methodology is the closest real analog in the
portfolio to designing and analyzing a controlled experiment. Compiled
clean, 1 page. (Note: this is a different company from the same batch's
Fanatics Betting & Gaming variant — similar names, no filename collision,
double-checked before writing.)

**2026-09-02**: `swe-roles/trustanprice-aws.tex` (Amazon Web Services,
Associate Startup Solution Architect). Two explicit deviations from the
standard pattern, both by direct request:
- Synchrony dropped from Experience entirely (the posting is for a
  different, earlier-stage kind of role and the user didn't want it
  listed). With Synchrony gone, the 4-experience cap wasn't binding, so
  Caterpillar was **split back into its two separate stints** (2026 and
  2025, each with its own dated `\resumeSubheading` and bullets, matching
  the un-merged phrasing from `trustanprice-ibm-data.tex`) instead of the
  usual merged single entry — more real estate for depth on each summer
  since there was room for it. State Farm stays as the third entry, no
  Synchrony as a fourth.
- A new **Certifications \& Professional Development** section was added
  between Education and Skills: "AWS Certified Cloud Practitioner (in
  progress)" and attendance at **Ben Tech Prep** sessions — corrected
  from an initial "BEN TECH" shorthand once the user forwarded the actual
  registration email, which identified it as "Ben Tech Prep," powered by
  **Amazon's own Day 1 Tech Prep (DTP)** program. Notably relevant given
  this is an AWS application specifically. Neither item is sourced from
  the portfolio (nothing to cross-check them against) — taken at face
  value as first-person, present-tense facts about the user.
Projects: LedgerOne (header extended to explicitly list AWS, since this
posting is AWS-specific — CloudFormation/OIDC/cost-monitoring bullet
swapped in over the usual credit-risk bullet to foreground the actual AWS
deployment work), Forward Data Lab, NBA Predictions. First attempt
overflowed to 2 pages by two lines (the two-line Certifications entry
tipped it over); fixed by collapsing it to one line rather than cutting
real content — recompiled clean at 1 page.

**2026-09-03**: `swe-roles/trustanprice-amex.tex` (American Express,
Campus Graduate Masters Cybersecurity Analyst, Enterprise Technology
Services). No real prior cybersecurity-titled experience exists, so this
leans on genuine adjacent overlap rather than a stretch: LedgerOne's
project heading and bullets were reworded to foreground the security-
relevant details that were already true but previously stated for other
reasons — keyless, OIDC-secured CI/CD (no long-lived cloud credentials,
directly relevant to the posting's identity/access-management and cloud-
security asks) and the 136/136 dbt test gate. The existing Caterpillar
"partnered with Security and CloudOps teams" bullet (already in the base
resume, unchanged) does real work here too. Forward Data Lab's bullet was
reworded to name the verify-before-trust discipline in its own
methodology explicitly, since the posting calls out "validating outputs
before escalation or implementation" for AI-enabled security tooling —
same real methodology, different framing, not a new claim. Kept Synchrony
and both Caterpillar stints merged (no exclusion requested this time, so
defaulted to the standard base structure). Projects: LedgerOne, Forward
Data Lab, NBA Predictions. First compile overflowed to 2 pages; fixed by
tightening `itemsep`/`\vspace` to the denser 0pt/-7pt spacing already used
by other job-tailored variants, not by cutting content. Compiled clean,
1 page.

**2026-09-04**: attempted to standardize spacing across every resume file
to `itemsep=2pt` (both list-starts) and `\resumeItemListEnd`'s
`\vspace{-5pt}` — the convention `trustanprice-merge.tex` had used since
2026-08-27 — after the user asked for one consistent spacing convention
everywhere. Applying it uniformly broke the 1-page cap almost everywhere:
20 of 21 files overflowed to 2 pages (only `trustanprice-merge.tex`
still fit, since it was already trimmed specifically for this spacing).
Flagged this to the user rather than silently cutting content across 20
files. Resolution, per the user's explicit choice: **apply the new
spacing only to the base `resume.tex`**; every job-tailored variant was
reverted back to its prior spacing (`itemsep=0pt`/`\vspace{-7pt}`, the
same convention documented earlier in this file), which they already fit
at 1 page under. This means **the base resume and the job-tailored
variants now intentionally use different spacing** — not an
inconsistency to fix later, a deliberate outcome of this decision.

For the base resume, the overflow was minor (only the 2-line Clubs
section spilled to page 2) — fixed with a spacing-only tweak, not a
content cut: `\resumeSubheading`'s and `\resumeProjectHeading`'s trailing
`\vspace` tightened from `-7pt` to `-9pt` (neither is part of the
convention the user specified, which only covers `itemsep` and
`resumeItemListEnd` — so tightening them doesn't violate it). Recompiled
clean at 1 page with all content intact (verified via `pdftotext`
against the pre-change text — nothing was cut). `resume/trustanprice-resume.pdf`
and `public/home/trustanprice-cv2026.pdf` were re-copied from the new
`resume.pdf` to stay in sync, per the standing sync convention above.

**Same day, follow-up**: the `-9pt` tightening above was a stopgap to
recover 2 lines. The user then asked to remove the base resume's Clubs
section entirely (Sports Analytics Society, Sports Analytics by
Minorities) for room, and restore full/un-tightened spacing rather than
keep the compressed `-9pt` value — so `\resumeSubheading` and
`\resumeProjectHeading` are back to `-7pt`, and `\section{Clubs}` no
longer exists in `resume.tex`. **The base resume now has no Clubs
section**, while every job-tailored variant still has one (they weren't
touched — Clubs removal was scoped to the base resume specifically,
following on from the spacing conversation that was already about
`resume.tex`; flag to the user if the intent was actually broader).
Re-synced `trustanprice-resume.pdf` and `public/home/trustanprice-cv2026.pdf`
again after this change. Compiled clean at 1 page.

**2026-09-05**: two Google postings, both distinct from the existing
`trustanprice-google.tex` (an earlier, different Google application), so
named separately rather than overwritten:
- `swe-roles/trustanprice-google-swe.tex` (Software Engineering Intern,
  MS, Summer 2027 — broad SWE internship: 2+ languages, data
  structures/algorithms, AI/ML/infra/web/mobile/distributed systems as
  preferred areas). Standard base structure, Projects: LedgerOne, Forward
  Data Lab, NBA Predictions — same broad-fit trio used for Disney.
- `ds-roles/trustanprice-google-research.tex` (Student Researcher, BS/MS,
  Fall 2026 — research placements across Google DeepMind/Research/Cloud;
  wants research experience, one area of CS, publishing/research-
  community involvement as preferred, not required). Forward Data Lab
  leads here and its heading/bullets were reworded to explicitly frame it
  as independent research (the section itself was renamed
  \textbf{Research \& Projects}) — this is honest, not inflated: FDL
  already is independent research for a UIUC research group with a
  systematic, criteria-scored methodology, just previously described in
  more general project language. Did **not** claim any publication or
  research-community contribution, since neither exists — the posting
  lists those as preferred, not required, so the gap speaks for itself
  rather than needing to be papered over. LedgerOne and NBA Predictions
  round out the three.

Both compiled clean at 1 page on the standard `itemsep=0pt`/`\vspace{-7pt}`
job-tailored-variant spacing (not the base resume's newer looser spacing,
per the 2026-09-04 decision to keep those separate).

**2026-09-05, later same day**: `resume/trustanprice-sports-ops.tex` — a
structurally different variant, not tied to any job posting (placed at
the `resume/` root rather than in either role subfolder, since it fits
neither). Experience is entirely different from every other variant:
7 Brew (Barista, Aug 2025 -- May 2026), Sports Info Solutions (Basketball
Scouting Analyst, Aug 2023 -- Mar 2026 — title and dates pulled directly
from `Experiences.js`, the only source for this job anywhere in this
system), and Little Caesars Pizza (Assistant Manager, Champaign IL,
2019 -- 2023, two intentionally generic bullets per the user's own
request — not a specificity gap, a deliberate choice). No Synchrony,
Caterpillar, State Farm, or the usual LedgerOne/NBA/FDL projects. The
Projects section was replaced entirely with Clubs, expanded from the
usual SAS/SAM one-liners to four clubs each with a short description
bullet: SAS and SAM's descriptions were pulled from the existing
portfolio copy (Home.js) for consistency; NSBE and SHPE are new (never
appeared anywhere in this system before) and use the same one-line
"supported project initiatives, attended meetings, helped run
on-campus events" description for both, per the user's own description,
listed as \textbf{Member} with no date since none was given. Skills
section was kept unchanged (technical stack) even though it now sits
oddly next to a resume with no technical projects — the user didn't ask
to remove it, so it was left in rather than cut unilaterally; flagged to
the user as worth reconsidering.

**Real gap not yet resolved**: 7 Brew's Aug 2025 -- May 2026 dates run
fully concurrent with the Caterpillar/Synchrony timeline every other
resume variant in this system describes for the same window. The user
was asked what this resume is actually for (to resolve or explain the
overlap) but hasn't answered yet — flag this the next time this file
comes up rather than assuming it's resolved.

**2026-09-06**: `resume/trustanprice-dickssportinggoods.tex` (DICK'S
Sporting Goods, Retail Sales Associate – Footwear, Champaign IL — the
user's own framing: "just applying for some side income"). Root-level
placement again, same reasoning as `trustanprice-sports-ops.tex`.
Deliberately stripped down from every other variant: **no Skills section,
no Projects/Clubs section, no LinkedIn/GitHub/Portfolio links in the
header** (just email and Champaign, IL) — none of that is relevant to, or
expected for, a retail floor role, and an unsolicited CS-grad-student
technical stack would read as noise here rather than a selling point.
Experience carries the whole resume: 7 Brew, Sports Info Solutions,
Little Caesars — same three jobs as `trustanprice-sports-ops.tex`, bullets
trimmed/reworded toward retail-relevant framing (customer service pace,
direct product/customer interaction, staff and inventory management);
the Sports Info Solutions bullets specifically lean on the genuine
sports-industry tie-in, since DICK'S is a sports retailer. First draft
used a spacing hybrid (`itemsep=2pt`/`\vspace{-6pt}`) that matched
neither established convention (base resume's `2pt`/`-5pt` vs. job-tailored
variants' `0pt`/`-7pt`); caught and fixed to the standard job-tailored
`0pt`/`-7pt` before compiling, since this is a job-tailored variant like
any other. Compiled clean, 1 page (with much of the page to spare, given
how few sections it has).

**Follow-up, same day**: the user asked to add Skills and Clubs back in
after all. Clubs is identical to `trustanprice-sports-ops.tex`'s (SAS,
SAM, NSBE, SHPE, same descriptions) — copied over rather than
re-authored, to stay consistent. Skills was **not** copied from the
technical variants — it was rewritten as retail-specific skills instead
(customer engagement, POS/cash handling, inventory management, product
merchandising, staff training \& supervision, loss prevention, sports/
athletic product knowledge), since the original ask was specifically "for
retail skills," not the Python/AWS stack. Still compiles clean at 1 page.

**2026-09-16**: base `resume.tex`'s Synchrony bullet updated — the old
first bullet ("Serve as Machine Learning Intern on Synchrony's
Forecasting \& Analytics team, applying predictive modeling and data
science methods to real-world financial forecasting") was generic filler
that could describe almost any ML internship. Replaced with the actual,
specific project: developing and deploying an application to Synchrony's
newly provisioned AWS account — an interactive dashboard consolidating
BI insights alongside advanced forecast modeling. The Sid Chakravarty
bullet was kept as-is (already specific, not filler). Recompiled clean at
1 page; `trustanprice-resume.pdf` and `public/home/trustanprice-cv2026.pdf`
re-synced. **Not yet propagated** to any job-tailored variant — every
`swe-roles/`/`ds-roles/` file that includes Synchrony still has the old
generic bullet. Scoped this change to the base resume only since that's
what was asked ("update my resume.pdf"); flag to the user whether the
other variants should get the same fix.

**Follow-up, same day**: the user pasted the exact same Uber Data
Scientist I, Tech posting again (job ID 300707, identical text to the
2026-08-29 batch) and asked for a resume. Rather than build a duplicate,
updated the existing `ds-roles/trustanprice-uber-ds.tex` in place —
propagated the new Synchrony bullet from the base resume fix above. It's
a strong fit for this posting specifically, not just a sync-for-consistency
change: the JD explicitly asks for "create dashboards and reports... to
monitor key metrics" and "quantitative modeling including... time-series
forecasting," both of which the new bullet (AWS dashboard, BI insights,
forecast modeling) names directly. Recompiled clean, 1 page. Still the
only job-tailored variant with the updated bullet — the question of
propagating to every other Synchrony-including variant is still open.

**2026-09-16, later same day**: three more built, all include the new
Synchrony AWS-dashboard bullet from the start (no separate propagation
needed for these):
- `swe-roles/trustanprice-capitalone.tex` (Technology Development
  Program Associate, Aug 2027 start, Richmond/Plano — a broad SWE
  rotational program: full-stack, cloud-native AWS/Kubernetes/Terraform,
  and explicitly "interactive AI tooling... beyond basic code
  completion"). Projects: LedgerOne, Forward Data Lab, NBA Predictions —
  same broad-fit trio as Disney/Google-SWE/AWS. FDL's heading gained
  "AI Agent Tooling" and a bullet reworded to call out the AI-agent-driven
  RAG pipeline explicitly, since that's a real, direct answer to the
  posting's AI-tooling ask, not an added claim.
- `ds-roles/trustanprice-tiktok.tex` (Data Scientist, PGC content team,
  San Jose — SQL/Python/R, A/B testing, dashards, causal inference as a
  plus). Projects: Forward Data Lab (heading changed to "Experimental
  Design," bullets reworded to name the controlled six-query on/off-topic
  evaluation explicitly — same reasoning as the FanDuel variant, FDL's
  methodology is the closest real analog to experiment design in the
  portfolio), LedgerOne, NBA Predictions.
- `ds-roles/trustanprice-capitalone-ds.tex` (Associate, Data Scientist –
  New Grad, 2027 Start, Toronto — **a different posting from the TDP one
  above**, different req ID (R999616 vs R244385), different role and
  location; built as a separate file rather than confused with it).
  Python/PySpark, fraud-pattern prediction, financial risk models, AWS
  preferred. LedgerOne leads and its bullet was reworded to explicitly
  name it as a "financial risk model," since the credit-risk module
  already is exactly that — same honest-reframing pattern as prior
  entries, not a new claim. NBA Predictions and the Datathon round out
  the three (same trio reasoning as Freddie Mac/CVS/JPMC).

All three compiled clean at 1 page.

**Follow-up, same day**: Clubs section removed from all three
(`trustanprice-capitalone.tex`, `trustanprice-tiktok.tex`,
`trustanprice-capitalone-ds.tex`) for room, per the user's request.
Scoped to these three specifically (the ones just built, most recently
in front of the user) — not applied to any other job-tailored variant.
Recompiled clean at 1 page, still with room to spare on all three (none
of them were actually tight before this — this was a proactive space
request, not fixing an overflow).

**Follow-up, same day**: with Clubs gone, the user asked to spread all
three out with `resume.tex`'s spacing (`itemsep=2pt`, item-list-end
`\vspace{-5pt}`) — a deliberate exception to the 2026-09-04 decision to
keep the base resume and job-tailored variants on different spacing;
that decision was reversible per-file and this reverses it for these
three specifically, not a reversal of the general policy. Their
subheading/project-heading `\vspace` was already `-7pt`, same as
`resume.tex`'s current value, so nothing to change there. All three
recompiled clean at 1 page — the Clubs removal from the step above
created exactly the room the looser spacing needed, so this landed
without any further content cuts.

All `ds-roles/` variants add `dbt` to the Frameworks \& Tools line in
Skills (matching the `trustanprice-merge`/`trustanprice-ibm-data`
precedent from 2026-08-21/27); the Disney variant in `swe-roles/` keeps
the base resume's Skills list unchanged. One posting from the same batch
(AbbVie, Computational Analyst — Neuroscience) was deliberately **not**
built: it requires hands-on OMICS experience (genetics, transcriptomics,
proteomics, or metabolomics analysis) as a hard qualification, which
doesn't exist anywhere in the real background — the user chose to skip it
rather than have a stretch version built.
except `resume.tex`, `AGENTS.md`, and `trustanprice-resume.pdf`, so the
move itself didn't touch git history — just working files on disk.

**2026-09-17**: two new-grad SWE variants, both using the same broad-fit
project trio as Disney/Google-SWE/CapitalOne (LedgerOne, Forward Data Lab,
NBA Predictions) but reordered and reworded per each JD's actual emphasis,
plus the current (AWS-dashboard) Synchrony bullet from the start:
- `swe-roles/trustanprice-doordash.tex` (Software Engineer I, Entry-Level,
  Fall 2026–Summer 2027 grad). Projects led with **NBA Predictions**
  (reworded to foreground the resilient live-data client — retry/cache/
  schema-validation so upstream failures fail loudly instead of silently
  corrupting output — borrowed from `trustanprice-uber.tex`'s framing,
  since it's a direct match for the posting's "real-time technology
  problems" and "efficiency, scalability, or stability" nice-to-haves),
  then LedgerOne (CI/CD/AWS/testing), then Forward Data Lab (its "AI Agent
  Tooling" framing matches the posting's "curiosity about AI-powered
  tools" nice-to-have). Standard 3-experience Experience section.
- `swe-roles/trustanprice-visa.tex` (Software Engineer, New College Grad
  2027, Austin TX). Projects led with **LedgerOne** (fintech/payments-
  adjacent thematic match plus the posting's preferred AWS/database
  exposure), then **Forward Data Lab** (Visa requires "digital fluency...
  Generative AI tools" across all roles, not just this posting's nice-to-
  haves, so FDL's AI-agent RAG framing was placed second rather than
  third), then NBA Predictions (React + REST API surface matches the
  posting's preferred web-framework/API-testing list). Standard
  3-experience Experience section.

Both were originally built with Clubs and the standard job-tailored
spacing (`itemsep=0pt`/`\vspace{-7pt}`), then revised same-day per the
user's request: **Clubs section removed from both**, and spacing changed
to match the base `resume.tex`/`resume.pdf` (`itemsep=2pt` on both lists,
`\resumeItemListEnd`'s `\vspace{-5pt}`) rather than the usual tighter
job-tailored convention — a deliberate exception for these two files only,
not a change to the general job-tailored-variant convention documented
above. Recompiled clean, 1 page, after both changes. Neither was synced to
`public/home/` or `trustanprice-resume.pdf` — job-tailored variants never
are, per the sync convention above.

**Correction, same day**: the note above (that there was "no default to
correct") was wrong in spirit — it was technically true that no old rule
*said* to add Clubs, but it missed that the user wants Clubs gone from new
resumes going forward, not just a neutral absence-of-a-rule. That's now
fixed: see step 4a in the Job-tailored resume workflow above — **no Clubs
section on new job-tailored variants by default**, a standing rule as of
today, not a per-file judgment call anymore.

**Same day**: `ds-roles/trustanprice-ibm-costasset.tex` (Cost \& Asset
Optimization — Data Science Analyst, Poughkeepsie NY, 2027 — a third,
distinct IBM posting, hence the `-costasset` suffix rather than colliding
with `swe-roles/trustanprice-ibm.tex` or `-ibm-data.tex`). A business-
analytics/process-optimization role, not a deep-technical one: heavy on
cross-functional collaboration, agile/design thinking, and "optimize and
improve process through use of automation and AI tools" as a named duty.
Projects: **LedgerOne** first (heading retitled "FinTech Ledger \& Cost
Analytics Platform" — its existing "live cost monitoring" AWS-dashboard
bullet is a direct match for the role's literal cost/asset/cash-flow
domain), then **Forward Data Lab** (reworded to name that its RAG pipeline
"automates manual citation review" — the closest real analog to the
posting's AI-tools-for-process-optimization ask), then **Call Center
Forecasting Platform** (Datathon — cross-functional, business-analysis,
operational forecasting). Standard 3-experience Experience section, dbt
added to Skills (standard `ds-roles/` convention), standard job-tailored
spacing (`itemsep=0pt`/`\vspace{-7pt}`) — not the doordash/visa exception.
First draft's reworded bullets ran long and overflowed to 2 pages; fixed
by trimming the added clauses back toward their original length (not by
cutting the heading rewords or dropping content) — recompiled clean at
1 page. Originally built **with** a Clubs section (following the old
per-file-judgment-call habit); removed same day once the user flagged it,
per the new standing no-Clubs-by-default rule above — recompiled clean at
1 page again with room to spare.

**Same day, full spacing sweep**: the user asked for spacing to match
`resume.tex`/`resume.pdf` on **every** resume in this folder, and for the
`.md` docs to say so going forward — this reverses the 2026-09-04 decision
to deliberately keep job-tailored variants on a tighter convention (see
step 5 of the workflow above, now updated to state the new standing
rule). All 31 `.tex` files were inventoried; 4 already matched
(`trustanprice-merge`, `-capitalone`, `-tiktok`, `-capitalone-ds` — the
pre-existing exception group) plus `resume.tex` itself and the just-fixed
doordash/visa/ibm-costasset. The remaining 24 files were batch-converted
(`itemsep=0pt`→`2pt` on both list-start macros, `\resumeItemListEnd`'s
`\vspace{-7pt}`→`-5pt`) and recompiled: 22 of 24 overflowed to 2 pages —
the same 20-of-21 result the 2026-09-04 attempt hit, for the same reason
(looser spacing costs room). Fixed in two passes, spacing-only first:
(1) tightened `\resumeSubheading`/`\resumeProjectHeading`'s trailing
`\vspace` from `-7pt` to `-9pt` (the same stopgap used on the base resume
back on 2026-09-04) — resolved 13 of the 22; (2) the remaining 9
(`swe-roles/trustanprice-uber`, `-ibm`, `-amex`, `-apple`, `-aws`,
`-chase`, `-google`, `-ibm-data`, and `ds-roles/trustanprice-google-research`)
were still overflowing by exactly one thing in every case — checked with
`pdftotext` on each page 2, and it was the Clubs section every time, 5
lines each, nothing else. Removed Clubs from those 9 specifically (not
the rest of the folder — scoped to what was actually forcing the
overflow, consistent with the user's earlier "don't change every resume"
boundary and the new no-Clubs-by-default rule already in effect for new
builds). All 31 files recompiled clean at exactly 1 page; verified with a
final pass checking both page count and that every file's
`resumeSubHeadingListStart` macro reads `itemsep=2pt`. `resume.tex` itself
was untouched (it already had this spacing before any of this started).

**Same day**: `swe-roles/trustanprice-caterpillar.tex` — first-ever
tailored variant for a Caterpillar posting (Data Scientist / Technical
Analyst, Cat Digital, Chicago/Peoria/Irving, 2027), applying back to the
same company the real Experience entry is already at. Filed in
`swe-roles/` rather than `ds-roles/` on the user's explicit request
("give me a swe resume for this") despite the posting's "Data Scientist"
title — the JD itself says the role can land on either an ML/DS-flavored
team or a "digital product support/telematics/digital product
development" track depending on placement, so an engineering-flavored
pitch is a legitimate, JD-supported reading, not a mismatch. Projects
picked for that engineering angle: **Forward Data Lab** first (its
AI-agent RAG pipeline is a direct match for the JD's "Utilize Generative
AI... Prompt Engineering... creating agents, assistants, and chatbots"
bullet), then **LedgerOne** (AWS/CloudFormation/OIDC-CI/CD/cost-monitoring
matches "automation development" and "Query and Database Access Tools"),
then **NBA Predictions** (its resilient-live-data-client bullet — fail
loudly instead of silently corrupting output — is a direct match for
"reliability monitoring and observability... reliability analysis...
performance optimization"). Experience bullets for the real Caterpillar
internship were left verbatim (not reworded) — they already name
LLMOps/RAG-based observability and CloudWatch/Prometheus/Grafana
dashboards near-exactly in the JD's own language, so no honest reframing
was even needed; just bolded the phrases that already echo the posting
(LLMOps automation system, RAG-based observability, observability
dashboards) rather than changing the wording. Standard 3-experience
Experience section, no Clubs (per the new default), standard
`resume.pdf`-matching spacing (`itemsep=2pt`/`\vspace{-5pt}`). Compiled
clean, 1 page, first try.

**2026-09-19**: `swe-roles/trustanprice-visa-bellevue.tex` — a second
Visa New College Grad SWE posting (Bellevue, WA, REF088530W, $114,400),
distinct from the earlier Austin one (REF088586W, $108,160) that lives at
`swe-roles/trustanprice-visa.tex` (that file is implicitly the Austin
req — no location in its name since it was the only Visa posting at the
time). The two JDs are word-for-word identical (same duties, same basic/
preferred qualifications) — Visa's generic NCG-SWE template posted per
location — so rather than re-deriving the same project reasoning from
scratch, `trustanprice-visa.tex` was copied verbatim to
`-bellevue.tex` and recompiled to confirm it still holds at 1 page. Same
project trio and reasoning apply unchanged: LedgerOne (fintech/payments
thematic match), Forward Data Lab (Visa's all-roles GenAI-fluency
requirement), NBA Predictions (React/REST API). If the Austin file is
ever content-edited going forward, check whether Bellevue needs the same
edit — they're two independent files, not a symlink, so they can drift.

**Same day**: `ds-roles/trustanprice-oden.tex` (Oden Technologies, Data
Scientist, Customer Solutions team, Remote). The user initially pasted
just Oden's careers-page listing (6 open roles, no specific JD) — asked
which role via AskUserQuestion rather than guessing across Data Science /
Backend Eng (Brazil-only) / Frontend Eng (Brazil-only) / Solutions Eng,
since picking wrong would mean building for the wrong function entirely
and two of the options had a location constraint worth surfacing before
committing. User picked Data Scientist (Remote); the real JD followed a
message later (manufacturing AI, predictive quality/failure models,
time-series pattern discovery, and a notable "AI-first" emphasis on
agentic AI — directing frontier models/agents "as tools you steer, not
magic you wait on," including extending Oden's own "Agentic Root Cause
Analysis" methodology). First draft of the file was built off just the
company blurb before the real JD arrived; revised same-day once it did.
Projects, reordered to match the JD's own emphasis order (predictive/
time-series work described first as core day-to-day, agentic AI second
as an explicit "you'll also" layered on top, live-deployment validation
third): **Call Center Forecasting Platform** (Datathon — time-series
pattern discovery, matches "machine failure prediction, pattern discovery
in time-series data" almost verbatim), **Forward Data Lab** (reworded to
name that its RAG pipeline "directs the model... rather than trusting its
raw output" — a direct echo of "tools you steer, not magic you wait on"),
then **LedgerOne** (reworded to call out that its AWS deployment is
"validated in a live production deployment, not just offline" — matches
the JD's "validate results in live, real-world customer deployments").
Standard 3-experience Experience section (Synchrony's existing dashboard
bullet already echoes "actionable intelligence" language, left
unchanged), dbt added to Skills (`ds-roles/` convention), no Clubs,
standard `resume.pdf`-matching spacing. Compiled clean, 1 page.

**2026-09-21**: factual correction — Synchrony's team is actually called
**Forecasting \& Advanced Modeling**, not "Forecasting \& Analytics" (the
name every file in this system had used since the team was first added).
User caught it after the portfolio's Home/Experiences Synchrony sections
were synced and pushed. Fixed everywhere the wrong name appeared: base
`resume.tex`, all 25 job-tailored variants that reference Synchrony
(`swe-roles/`: amex, capitalone, caterpillar, disney, doordash,
google-swe, merge, visa, visa-bellevue; `ds-roles/`: abbott, aflac,
akuna, capitalone-ds, citadel, cvs, fanatics, fanduel, freddiemac,
google-research, ibm-costasset, iheartmedia, jpmc, oden, tiktok,
uber-ds), and `src/pages/Home.js`/`Experiences.js` on the portfolio. Did
**not** rewrite the 2026-09-16 changelog entry above that quotes the old,
already-retired bullet text verbatim — that's an accurate historical
record of what the bullet used to say, not a current claim, so it stays
as written. All 26 `.tex` files recompiled clean at 1 page after the
fix (verified individually, not assumed). `trustanprice-resume.pdf` and
`public/home/trustanprice-cv2026.pdf` re-synced from the corrected
`resume.tex`. The "VP of Enterprise AI \& Analytics" bullet (Sid
Chakravarty's title) was left untouched — that's a different, correct
phrase (a person's title, not the team name) that happens to also
contain the word "Analytics."
