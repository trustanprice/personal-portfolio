# AGENTS.md — resume/

## Responsibility

`resume.tex` is the single LaTeX source for Trustan's downloadable CV — the
curated, hard-length-capped counterpart to the full-detail
`src/pages/Experiences.js` and `src/pages/Projects.js`. It compiles to
`resume.pdf`, which is copied to `public/home/trustanprice-cv2026.pdf` (the
file linked from the résumé icon on Home).

## The rule this file exists to enforce

**Always exactly one page. Never more than 4 `\resumeSubheading` entries in
Experience. Never more than 3 `\resumeProjectHeading` entries in Projects.**
These are hard caps, not soft targets — set by the user explicitly, not
inferred. When a new entry would exceed a cap, drop one before adding:

- **Experience**: drop the oldest/least-relevant of the 4 — usually literally
  the oldest by end date, unless an older role is more relevant to the kind
  of job being targeted than a more recent one (judgment call, but default
  to reverse-chronological). If a 5th experience needs to fit, the
  designated release valve is **combining the two Caterpillar internships
  (Summer 2025 + Summer 2026) into one entry** — one `\resumeSubheading`
  spanning "May 2025 -- Aug 2026," with a merged bullet list (pick the
  strongest 2-3 bullets across both stints) — rather than dropping HXRI Lab
  or State Farm. This is the same technique the job-tailoring workflow below
  uses.
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
   always exactly 1 page.** If the right 4 experiences for this job would
   otherwise be 5, combine the two Caterpillar stints into one entry (see
   above) — that's the designated release valve. Don't drop HXRI Lab or
   State Farm to make room unless the posting genuinely has no use for them.
4. Rewrite bullets to genuinely emphasize what's relevant to the posting —
   reordering and re-weighting real accomplishments, not fabricating ones
   or keyword-stuffing.
5. Recompile and verify 1 page (below) before presenting it.
6. Save the result as a **separate file**, `resume-<company-or-role-slug>.tex`
   in this folder (e.g. `resume-anthropic-swe.tex`), rather than overwriting
   `resume.tex` — the base resume stays the general-purpose default unless
   the user explicitly says to replace it. Mention the new filename when
   presenting the result. These job-specific variants are gitignored (see
   below) — they're working files for one application, not portfolio
   content, unless the user asks to commit one.

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

`resume.aux`, `.log`, `.out` are build artifacts (gitignored); `resume.pdf`
itself is committed.

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

Compiled clean, 1 page, as of 2026-08-20: 4 experiences (Caterpillar ×2,
HXRI Lab, State Farm), 3 projects (Call Center Forecasting/Datathon,
LedgerOne, Forward Data Lab), Education, Skills, and Clubs sections.
Deployed to `public/home/trustanprice-cv2026.pdf`.

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
