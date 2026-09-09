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
      <section class="inner-hero"><div class="container"><p class="eyebrow light">The screen in the room</p><h1>Televisions have a power story too.</h1><p class="lead">Size, display technology and the hours a screen spends on or waiting in standby all influence its yearly consumption.</p></div></section>
      <section class="section"><div class="container television-layout">
        <div><div class="section-heading"><h2>Typical profiles</h2><p>Illustrative figures for comparison. Check the product's current Australian energy label before buying.</p></div>
          <div class="tv-table"><div class="table-row header"><span>Screen profile</span><span>Annual use*</span><span>Rating</span></div><div class="table-row"><strong>43-inch LED</strong><span>~ 95 kWh</span><span class="rating">★★★★</span></div><div class="table-row"><strong>55-inch LED</strong><span>~ 135 kWh</span><span class="rating">★★★★</span></div><div class="table-row"><strong>65-inch OLED</strong><span>~ 185 kWh</span><span class="rating">★★★</span></div><div class="table-row"><strong>75-inch QLED</strong><span>~ 245 kWh</span><span class="rating">★★★</span></div></div>
          <p class="table-note">*Based on an illustrative 10 hours of use per week plus standby. Actual consumption varies by model and settings.</p>
        </div>
        <aside class="estimator"><h3>Estimate your screen</h3><p>Try a simple yearly estimate using the screen's wattage and your weekly viewing time.</p><div class="field"><label for="watts">Power draw (watts)</label><input id="watts" type="number" min="1" value="100"></div><div class="field"><label for="hours">Hours watched per week</label><input id="hours" type="number" min="0" value="10"></div><div class="estimate-result" id="estimate-result">52.0 kWh<small>estimated yearly use</small></div></aside>
      </div></section>
    </div>`,
  about: `
    <div class="page fade-in">
      <section class="inner-hero"><div class="container"><p class="eyebrow light">About WattWise</p><h1>Useful energy information for Australian homes.</h1><p class="lead">We turn appliance specifications and everyday habits into plain-language context people can use.</p></div></section>
      <section class="section"><div class="container about-grid"><div class="about-callout"><strong>Make the invisible visible.</strong><p>Energy is easy to overlook because it is rarely seen. WattWise gives the numbers a place in the conversation.</p></div><div class="about-copy"><h2>A small educational project.</h2><p>WattWise is a COS30045 demonstration website about appliance energy consumption in the Australian market. The content is intentionally introductory, helping visitors ask better questions when comparing televisions and other household appliances.</p><p>Product performance changes between models. For decisions that affect your home, use the current energy label, manufacturer specifications and your electricity retailer's tariff.</p><ul class="info-list"><li><span>Focus</span><strong>Appliance literacy</strong></li><li><span>Market context</span><strong>Australia</strong></li><li><span>Project format</span><strong>HTML · CSS · JavaScript</strong></li></ul></div></div></section>
    </div>`
};

const app = document.querySelector('#app');
const navLinks = document.querySelectorAll('[data-page]');

document.querySelector('#current-year').textContent = new Date().getFullYear();

function renderPage() {
  const requestedPage = window.location.hash.replace('#', '') || 'home';
  const page = pages[requestedPage] ? requestedPage : 'home';
  app.innerHTML = pages[page];
  navLinks.forEach((link) => link.classList.toggle('active', link.dataset.page === page));
  document.title = `${page === 'home' ? 'Home' : page === 'about' ? 'About Us' : 'Televisions'} | WattWise`;
  app.focus({ preventScroll: true });
  if (page === 'televisions') {
    document.querySelectorAll('.estimator input').forEach((input) => input.addEventListener('input', updateEstimate));
  }
}

function updateEstimate() {
  const watts = Number(document.querySelector('#watts').value) || 0;
  const hours = Number(document.querySelector('#hours').value) || 0;
  const yearlyKwh = (watts * hours * 52) / 1000;
  document.querySelector('#estimate-result').innerHTML = `${yearlyKwh.toFixed(1)} kWh<small>estimated yearly use</small>`;
}

window.addEventListener('hashchange', renderPage);
renderPage();
