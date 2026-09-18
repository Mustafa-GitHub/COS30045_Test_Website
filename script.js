const pages = {
  home: `
    <div class="page fade-in">
      <section class="hero">
        <div class="container hero-grid">
          <div>
            <p class="eyebrow">Australian appliance energy guide</p>
            <h1>Know your <em>energy.</em><br>Shape your impact.</h1>
            <p class="lead">A practical starting point for understanding how everyday appliances use electricity, what that means for your bill, and where small changes can add up.</p>
            <div class="actions"><a class="button button-primary" href="#televisions">Explore televisions</a><a class="button button-secondary" href="#about">Our approach</a></div>
          </div>
          <div class="energy-dial" aria-label="Energy efficiency focus">
            <div class="dial-copy"><span class="dial-number">24°</span><span class="dial-unit">Think before you switch</span></div>
          </div>
        </div>
      </section>
      <section class="section"><div class="container">
        <div class="section-heading"><h2>Energy, made clearer.</h2><p>Consumption is easier to act on when it is translated into familiar choices.</p></div>
        <div class="card-grid">
          <article class="card"><div class="card-icon">⌁</div><h3>Read the label</h3><p>Australia's Energy Rating Label helps compare running costs before an appliance enters your home.</p></article>
          <article class="card"><div class="card-icon">◌</div><h3>Measure the habit</h3><p>Standby power, screen time and temperature settings all shape the energy story behind a device.</p></article>
          <article class="card"><div class="card-icon">↗</div><h3>Choose the next step</h3><p>Efficient settings and considered upgrades can reduce consumption without sacrificing comfort.</p></article>
        </div>
      </div></section>
      <section class="stat-strip"><div class="container stat-grid"><div class="stat"><strong>01</strong><span>Compare an appliance's energy rating before purchase.</span></div><div class="stat"><strong>kWh</strong><span>Electricity use is measured in kilowatt-hours over time.</span></div><div class="stat"><strong>↓</strong><span>Less wasted energy means a lighter household footprint.</span></div></div></section>
    </div>`,
 
  televisions: `
    <div class="page fade-in">
      <section class="inner-hero"><div class="container">
        <p class="eyebrow light">The screen in the room</p>
        <h1>The stars on a TV don't tell you what you think.</h1>
        <p class="lead">Over 4,500 television models are on sale in Australia. Here is what drives their power use, and what the stars on the energy label actually mean.</p>
      </div></section>
 
      <section class="section"><div class="container story">
 
        <p class="story-intro">You are standing in front of two televisions. Both have five stars on the label. One is a 32-inch, the other is a 65-inch. Most people read that as "both are efficient". The data says something different.</p>
 
        <h2 class="story-h2">Size is the story</h2>
        <p>Power use climbs as screen size goes up. A 32-inch draws around 30 watts. A 65-inch draws four or five times that. Nothing else in this data comes close to that effect.</p>
        <figure class="chart">
          <img src="images/q5-size-power.png" alt="Scatter plot of screen size against power use. Points rise steadily from around 30 watts at 32 inches to over 200 watts at 85 inches.">
          <figcaption>Every television on sale in Australia, plotted by screen size and power drawn in use.</figcaption>
        </figure>
        <p>What is more, the spread widens as screens get bigger. At 32 inches the models sit in a narrow band. At 65 inches they run from roughly 50 watts up to 310. So two televisions of the same size can differ by six times. The model you pick matters as much as the size you pick.</p>
 
        <h2 class="story-h2">So what do the stars tell you?</h2>
        <p>Not much about size. The star rating stays flat across the whole range, from small sets right up to 100 inches. Five stars shows up at nearly every size.</p>
        <figure class="chart">
          <img src="images/q6-stars-size.png" alt="Scatter plot of screen size against star rating. The points form a flat band with no upward or downward trend.">
          <figcaption>Star rating against screen size. The band is flat, so bigger screens are not rated worse.</figcaption>
        </figure>
        <p>That is not a fault in the data. The star rating is worked out relative to screen size. So it tells you whether a television is efficient <em>for one that big</em>. It does not tell you what the television will cost to run.</p>
 
        <aside class="story-callout">
          <strong>The short version</strong>
          <p>Use the stars to choose between televisions of the same size. Use the kWh per year figure to compare across sizes. If you are deciding between a 55 and a 65, the stars will not show you the difference in running cost. The kWh figure will.</p>
        </aside>
 
        <h2 class="story-h2">The rest of the picture</h2>
        <p>Three things are worth knowing before you shop, even though none of them will decide your purchase.</p>
 
        <h3 class="story-h3">Almost everything on sale is LCD (LED)</h3>
        <figure class="chart">
          <img src="images/q1-tech.png" alt="Pie chart showing 83 percent LCD LED, 10.6 percent LCD and 6.4 percent OLED.">
          <figcaption>Share of models by screen technology.</figcaption>
        </figure>
        <p>83% of models use LCD (LED). OLED is still a small slice at 6%. Plasma has gone from the market entirely.</p>
 
        <h3 class="story-h3">The market has settled on big screens</h3>
        <figure class="chart">
          <img src="images/q2-sizes.png" alt="Bar chart of model counts by screen size, with tall bars at 55, 65 and 75 inches.">
          <figcaption>Number of models available at each screen size.</figcaption>
        </figure>
        <p>55, 65 and 75 inches lead by a wide margin. Smaller sizes still exist, but mostly as bedroom and caravan sets.</p>
 
        <h3 class="story-h3">Screen type looks like it matters, but mostly it doesn't</h3>
        <figure class="chart">
          <img src="images/q4-tech-power.png" alt="Bar chart of median power use by screen technology. LCD around 71 watts, LCD LED around 106, OLED around 113.">
          <figcaption>Median power in use, grouped by screen technology.</figcaption>
        </figure>
        <p>At first glance LCD looks like the efficient choice at around 71 watts, against 113 for OLED. But that is misleading. The plain LCD models here are mostly small sets, while OLED is mostly 55 inches and up. So this chart is really measuring screen size, not screen technology.</p>
 
        <h3 class="story-h3">Brand is a weak signal</h3>
        <figure class="chart">
          <img src="images/q3-brands.png" alt="Bar chart of the top ten brands by number of models, led by Kogan, LG and Samsung Electronics.">
          <figcaption>The ten brands with the most models on the register.</figcaption>
        </figure>
        <figure class="chart">
          <img src="images/q7-brands-power.png" alt="Bar chart of mean power use by brand for the ten highest.">
          <figcaption>Mean power in use, for the ten brands drawing the most.</figcaption>
        </figure>
        <figure class="chart">
          <img src="images/q7-brands-box.png" alt="Box plot of power use by brand, showing wide and heavily overlapping ranges.">
          <figcaption>The same measure as a box plot. The ranges overlap heavily.</figcaption>
        </figure>
        <p>Kogan, LG and Samsung Electronics offer the most models. On power use, the brands that look worst are the ones selling the biggest screens. They are not building worse televisions. What is more, the box plot shows the ranges overlap heavily, so the ranking in the bar chart is weaker than it looks.</p>
 
        <h2 class="story-h2">What to do with this</h2>
        <p>Decide on a screen size first, since that is what drives the bill. Then compare the stars between models of that size. If you are weighing up two different sizes, ignore the stars and compare the kWh per year figure instead.</p>
 
        <p class="story-source">Figures come from the Australian Government Energy Rating register, published on data.gov.au. Power figures are measured under a standard test, so your own use will differ. Check the current label before buying.</p>
 
      </div></section>
 
      <section class="section section-alt"><div class="container television-layout">
        <div>
          <div class="section-heading"><h2>Try it yourself</h2><p>Estimate what a screen uses across a year, including the hours it spends in standby.</p></div>
          <p class="table-note">A television spends most of the year switched off but still drawing power. This estimate splits the year into hours in use and hours in standby, so you can see how much each part contributes.</p>
        </div>
        <aside class="estimator">
          <h3>Estimate your screen</h3>
          <p>Use the screen's wattage, your weekly viewing time and its standby draw.</p>
          <div class="field"><label for="watts">Power draw in use (watts)</label><input id="watts" type="number" min="0" value="100"></div>
          <div class="field"><label for="hours">Hours watched per week</label><input id="hours" type="number" min="0" max="168" value="10"></div>
          <div class="field"><label for="standby">Standby power (watts)</label><input id="standby" type="number" min="0" step="0.1" value="0.5"></div>
          <div class="estimate-result" id="estimate-result"></div>
        </aside>
      </div></section>
    </div>`,
 
  about: `
    <div class="page fade-in">
      <section class="inner-hero"><div class="container"><p class="eyebrow light">About WattWise</p><h1>Useful energy information for Australian homes.</h1><p class="lead">We turn appliance specifications and everyday habits into plain-language context people can use.</p></div></section>
      <section class="section"><div class="container about-grid"><div class="about-callout"><strong>Make the invisible visible.</strong><p>Energy is easy to overlook because it is rarely seen. WattWise gives the numbers a place in the conversation.</p></div><div class="about-copy"><h2>A small educational project.</h2><p>WattWise is a COS30045 demonstration website about appliance energy consumption in the Australian market. The content is intentionally introductory, helping visitors ask better questions when comparing televisions and other household appliances.</p><p>Product performance changes between models. For decisions that affect your home, use the current energy label, manufacturer specifications and your electricity retailer's tariff.</p><ul class="info-list"><li><span>Focus</span><strong>Appliance literacy</strong></li><li><span>Market context</span><strong>Australia</strong></li><li><span>Project format</span><strong>HTML · CSS · JavaScript</strong></li></ul></div></div></section>
    </div>`
};
 
const HOURS_IN_YEAR = 8760;
const WEEKS_IN_YEAR = 52;
 
const app = document.querySelector('#app');
const navLinks = document.querySelectorAll('[data-page]');
 
document.querySelector('#current-year').textContent = new Date().getFullYear();
 
function renderPage() {
  const requestedPage = window.location.hash.replace('#', '') || 'home';
  const page = pages[requestedPage] ? requestedPage : 'home';
  app.innerHTML = pages[page];
  window.scrollTo({ top: 0 });
 
  navLinks.forEach((link) => {
    const isActive = link.dataset.page === page;
    link.classList.toggle('active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
 
  document.title = `${page === 'home' ? 'Home' : page === 'about' ? 'About Us' : 'Televisions'} | WattWise`;
  app.focus({ preventScroll: true });
 
  if (page === 'televisions') {
    document.querySelectorAll('.estimator input').forEach((input) => input.addEventListener('input', updateEstimate));
    updateEstimate();
  }
}
 
function updateEstimate() {
  const watts = Number(document.querySelector('#watts').value) || 0;
  const hoursPerWeek = Number(document.querySelector('#hours').value) || 0;
  const standbyWatts = Number(document.querySelector('#standby').value) || 0;
 
  const onHours = Math.min(hoursPerWeek * WEEKS_IN_YEAR, HOURS_IN_YEAR);
  const standbyHours = HOURS_IN_YEAR - onHours;
  const yearlyKwh = (watts * onHours + standbyWatts * standbyHours) / 1000;
 
  document.querySelector('#estimate-result').innerHTML = `${yearlyKwh.toFixed(1)} kWh<small>estimated yearly use</small>`;
}
 
window.addEventListener('hashchange', renderPage);
renderPage();
