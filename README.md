# WattWise: Appliance Energy Consumption

WattWise is a small educational website. I built it for COS30045 Data
Visualisation. It uses HTML, CSS and JavaScript to present a three-page guide
to appliance energy consumption in the Australian market.

## Pages

- **Home**: An introduction to energy labels, appliance habits and consumption.
- **Televisions**: Television energy profiles and a yearly-use estimator.
- **About Us**: Project context, scope and an Australian-market disclaimer.

All three pages come from one HTML shell. JavaScript reads the URL hash
(`#home`, `#televisions`, `#about`) and swaps the view. It also updates the
active navigation state. Moreover, each page stays directly linkable, so a
shared link opens on the right page.

## Run locally

Open `index.html` in a browser. No build tools are needed.

## AI Declaration

### Tools used

- **GitHub Copilot** (extension for Visual Studio Code) - code generation and
  inline completion while building the website.
- **Claude (Anthropic)** - reviewed my KNIME cleaning workflow, suggested the
  Rule Engine expressions for brand names and screen size categories, and
  checked my aggregation results against the raw data.

### How I used it

- Generated the first HTML structure for the header, the three page templates
  and the footer.
- Suggested the CSS for the navigation, including the hover state and the
  active-page highlight.
- Drafted the page switching logic in `script.js`. This includes the
  `hashchange` listener, the active-state toggle and the fallback to the home
  page for an unknown hash.
- Wrote a first draft of the placeholder text about energy ratings, standby
  power and screen technology.
- Suggested the yearly consumption formula for the television estimator.

### What I changed

- **Corrected the footer.** The generated version named the wrong person and
  the wrong GenAI tool, so I replaced both.
- **Rebuilt the colour palette to match the logo.** The generated CSS was
  blue. I sampled the three colours from the power logo, sand `#fbe79c`,
  brown `#81663e` and orange `#f7a327`, and rewrote the custom properties in
  `styles.css` around them.
- **Fixed a stale figure in the estimator.** The result was hardcoded in the
  HTML and only matched the default inputs by coincidence. I now call
  `updateEstimate()` once when the page renders, so the number always comes
  from the inputs.
- **Added standby power to the estimate.** The original formula only counted
  viewing hours. A television spends most of the year in standby, so I added
  a standby field and split the year into hours on and hours in standby.
- **Scroll to the top on a page change.** The old version kept the scroll
  position, so switching pages could drop the user halfway down.
- **Added `aria-current` to the active navigation link.** The generated code
  only signalled the current page with a CSS class, which is colour alone.
- **Replaced the fake table with a real one.** The television profiles were
  `div` elements styled to look like a table. I rewrote them as
  `table`, `thead` and `tbody` so the structure is readable by assistive
  technology, and I replaced the star glyphs with text.

### Reflection

Copilot was most useful for repetitive work. Writing the navigation CSS and
the responsive breakpoints by hand takes a long time and very little thinking.
The suggestions there were close enough to keep.

It was much weaker on anything specific to this assignment. It did not know
the website requirements, so it wrote generic placeholder text, a footer with
a name that was not mine, and a blue palette with no connection to the logo I
was given. I had to go back to the task sheet and check each requirement
myself.

Besides that, the code it wrote looked correct more often than it was correct.
The estimator is the clearest case. It displayed the right number on load, but
only because the hardcoded text happened to match the default inputs. Nothing
was calculating it. That kind of mistake is invisible until you change an
input, so reading the output carefully mattered more than I expected.

The page switching is the part I had to work out on my own. The generated code
ran fine. Even so, I could not explain why a link with `#about` in it still
loaded the right page, or what happened on an invalid hash. So I traced
through `renderPage` line by line until I could follow it. What is more,
reading the generated code and being able to defend it took me longer than
writing it would have. That is still the part I learned the most from.

## Notes

The energy figures on the site are placeholders. They are labelled as
illustrative and are not product advice. I will replace them in Tutorial 3
with figures from the Australian Government Energy Rating dataset.