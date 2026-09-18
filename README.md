# WattWise: Appliance Energy Consumption

WattWise is a small educational website. I built it for COS30045 Data
Visualisation. It uses HTML, CSS and JavaScript to present a three-page guide
to appliance energy consumption in the Australian market.

## Pages

- **Home**: An introduction to energy labels, appliance habits and consumption.
- **Televisions**: A data story about what drives television power use, built
  from the Australian Government Energy Rating data set, plus a yearly-use
  estimator.
- **About Us**: Project context, scope and an Australian-market disclaimer.

All three pages come from one HTML shell. JavaScript reads the URL hash
(`#home`, `#televisions`, `#about`) and swaps the view. It also updates the
active navigation state. Moreover, each page stays directly linkable, so a
shared link opens on the right page.

## Run locally

Open `index.html` in a browser. No build tools are needed.

---

## Data Story

### Audience

This story is written for Australian consumers who are about to buy a
television. They are not technical. They are comparing models in a shop or
online. They have seen the Energy Rating Label, but they are not sure what it
means for their electricity bill.

What they want is simple. They want to know what to look for. They do not want
to hear about how the data was processed.

### What they want to know

The six questions from the exercise are not equally useful to a buyer. So I
split them into two groups.

Two questions directly affect the buying choice:

- How does screen size affect power use?
- Do bigger TVs get worse star ratings?

The rest give context. They are good to know, but they do not change what
someone buys:

- What screen technologies are available?
- What screen sizes are most common?
- Which brands dominate the market?
- Which screen type uses the least power?
- Do brands differ in power use?

### The story

The most useful finding in this data set is about the star rating.

Star ratings are worked out relative to screen size. So a 5-star 75-inch and a
5-star 32-inch both get five stars, even though they use very different amounts
of electricity. The stars tell you whether a TV is efficient for its size. They
do not tell you what it will cost to run.

Everything else supports that point. Screen size drives power use more than
anything else. Screen technology looks like it matters, but once you account
for size it mostly does not. Brand differences are mostly size differences too.

So the story is that the number on the label is not the number that matters.
Use the stars to compare TVs of the same size. Use the kWh per year figure to
compare across sizes.

### Storyboard

The user journey was planned in Miro before any charts were placed on the page.

[View the storyboard in Miro](https://miro.com/app/board/uXjVHlLKFD8=/?share_link_id=877596141057)

---

## About the data

### Data source

The data comes from the Australian Government Energy Rating register,
published on data.gov.au as "Energy Rating Data for household appliances -
Labelled Products". I used the Televisions data set, along with the
accompanying DOCX file that describes what each column holds.

Downloaded on 8th September 2026 from https://data.gov.au/data/dataset/energy-rating-for-household-appliances

The file used was `tv_2026_09_08.csv`, which held 5,018 rows before cleaning.

### Data processing

The data was cleaned and transformed in KNIME. The workflow runs as follows.

1. **CSV Reader** reads the raw file.
2. **Column Filter** drops columns that were mostly empty, such as Family Name,
   GrandDate, Product Website and the old Star column.
3. **Sorter** sorts by Model_No, then by Submit_ID descending.
4. **Duplicate Row Filter** removes repeated model numbers. Because of the sort,
   the row kept is the most recent submission for each model.
5. **Row Filter** keeps only rows where Availability Status is "Available", so
   discontinued models are excluded.
6. **Column Filter** keeps only the columns needed to answer the six questions.
7. **String Manipulation** converts brand names to upper case, since KNIME
   treats "Kogan" and "KOGAN" as different values.
8. **Math Formula** converts screen size from centimetres to inches and rounds
   the result.

A further **Row Filter** keeps only televisions sold in Australia. It uses
wildcard matching on `*Australia*` rather than an exact match, because the
SoldIn column holds lists such as "Australia,Fiji,New Zealand".

Cleaning reduced the data set from 5,018 rows to 4,747. The Australia filter on the Q1 branch brings that to 4,573.

From there the workflow branches. Each question has its own aggregation,
usually a GroupBy, and its own chart.

### Privacy

The data set holds no personal information. Every row describes a registered
product, not a person. The fields cover brand, model number, screen size,
screen technology, power use and star rating.

The only identifiable parties are the manufacturers, and their details are
published on a public government register as a condition of selling these
products in Australia. So there is no privacy risk in using or republishing it.

### Accuracy and limitations

The figures are self-reported by manufacturers to the regulator. They are
measured under a standard test procedure, not in a real living room. So the
power figures are useful for comparing models against each other, but they will
not match what a household actually uses. Screen brightness, content and
viewing hours all change the real figure.

There are limits in the data itself:

- Brand names are recorded inconsistently. SAMSUNG and SAMSUNG ELECTRONICS are
  the same company but appear as separate brands, and so do QBELL and Q.BELL. I
  did not merge them, so brand counts should be read with that in mind.
- The Australia filter is applied on one branch only, following the worked
  solution. The other questions therefore include a small number of models sold
  only in New Zealand or Fiji.
- "Available" reflects the register, not the shops. A model may still be listed
  after it has stopped selling.
- Screen size was converted from centimetres and rounded, so the inch figures do
  not always land on an advertised size.

There is one limitation that matters more than the rest. Screen size drives
power use so strongly that it hides other effects. The chart comparing screen
technologies looks like it shows LCD is the most efficient. It does not. The
plain LCD models in this data are mostly small sets, while OLED is mostly 55
inches and up. So that chart is really measuring size. The same applies to the
brand comparison. To answer either question properly, the comparison would need
to happen within a single screen size.

### Ethics

The data is public and published under an open licence, so reusing it is
allowed. Even so, a few things needed care.

The figures on this site are presented as comparisons, not as product advice.
Anyone making a real purchase should use the current energy label and their own
electricity tariff.

The brand charts could easily mislead. A brand that looks power-hungry may
simply sell larger screens. Presenting that ranking without the explanation
would be unfair to those manufacturers, so the caveat is shown alongside the
chart rather than buried.

Finally, the star rating point is the reason this story exists. Explaining that
stars are relative to screen size is more useful to a buyer than repeating the
rating as though it were an absolute measure.

---

## AI Declaration

### Tools used

- **GitHub Copilot** (extension for Visual Studio Code) - code generation and
  inline completion while building the website.
- **Claude (Anthropic)** - reviewed my KNIME workflow, helped structure the T03
  data story and storyboard, checked my aggregation results against the raw
  data, and drafted the About the data section.

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
- Helped work out the structure of the T03 data story and drafted the
  supporting text on the televisions page.

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
  technology.

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