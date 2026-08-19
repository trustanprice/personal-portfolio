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
  to reverse-chronological).
- **Projects**: drop the lowest-impact of the 3. Currently: Call Center
  Forecasting (Datathon), NBA Team Failure Prediction, ML Dementia
  Classification. Note that **LedgerOne and Forward Data Lab are not on the
  resume yet** even though they're featured on the portfolio — adding either
  means removing one of the three above.

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

Compiled clean, 1 page, as of 2026-08-19: 4 experiences (Caterpillar ×2,
HXRI Lab, State Farm), 3 projects (Call Center Forecasting, NBA Team Failure
Prediction, ML Dementia Classification), Education, Skills, and Clubs
sections. Deployed to `public/home/trustanprice-cv2026.pdf`.
