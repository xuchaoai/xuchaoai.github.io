---
permalink: /
title: "XuChao - Homepage"
author_profile: false
redirect_from:
  - /about/
  - /about.html
body_class: home-page
---

<section id="about-me" class="home-hero">
  <div class="home-hero__content">
    <span class="eyebrow" data-i18n="hero.eyebrow">AI Systems - Personal Homepage</span>
    <h1 data-i18n="hero.name">XuChao</h1>
    <p class="home-hero__lead" data-i18n="hero.lead">I am building a personal research homepage for AI, software projects, and technical notes.</p>
    <p data-i18n-html="hero.intro">This page is the first version of my academic-style homepage. It will collect my research interests, selected projects, publications or writing, and recent updates in one place.</p>
    <div class="academic-path">
      <strong data-i18n="hero.focusLabel">Current focus:</strong>
      <div data-i18n-html="hero.focusText">large language models, AI agents, practical software systems, and reproducible project documentation.</div>
    </div>

    <div class="home-hero__actions">
      <a class="home-button home-button--primary" href="/cv/"><i class="fas fa-file-alt"></i> <span data-i18n="hero.cvButton">CV</span></a>
      <a class="home-button" href="https://github.com/xuchaoai"><i class="fab fa-github"></i> <span data-i18n="hero.githubButton">GitHub</span></a>
      <a class="home-button" href="mailto:xuchao@csu.edu.cn"><i class="fas fa-envelope"></i> <span data-i18n="hero.emailButton">Email</span></a>
    </div>
    <div class="opportunity-note"><span class="status-dot"></span><span data-i18n="hero.status">Homepage under active construction.</span></div>
  </div>

  <div class="home-hero__portrait" aria-label="XuChao profile visual" data-i18n-attr="aria-label:hero.portraitAria">
    <img src="/photos/个人像.jpg?v={{ site.time | date: '%s' }}" alt="XuChao portrait" data-i18n-attr="alt:hero.portraitAlt">
    <div class="portrait-caption">
      <strong data-i18n="hero.name">XuChao</strong>
      <span data-i18n="hero.portraitCaption">AI - Code - Research Notes</span>
    </div>
  </div>
</section>

<section class="education-panel" aria-label="Education background" data-i18n-attr="aria-label:education.aria">
  <div class="education-panel__header">
    <span class="section-kicker" data-i18n="education.kicker">Education Background</span>
  </div>

  <article class="education-item">
    <img class="education-item__image" src="/photos/中南大学.png?v={{ site.time | date: '%s' }}" alt="Central South University logo" data-i18n-attr="alt:education.csuAlt">
    <div class="education-item__body">
      <div class="education-item__school">
        <strong data-i18n="education.csuName">Central South University</strong>
        <span class="education-badge education-badge--blue" data-i18n="education.csuBadge">985</span>
        <span class="education-badge education-badge--blue" data-i18n="education.csuBadgeRecommended">Recommended Postgraduate</span>
      </div>
      <p class="education-item__detail">
        <span class="education-date" data-i18n="education.csuDate">2024.9--2027.6</span>
        <span data-i18n="education.csuDetail">School of Electronic Information | Electronic Information | Master</span>
      </p>
    </div>
  </article>

  <article class="education-item">
    <img class="education-item__image" src="/photos/安徽理工大学.png?v={{ site.time | date: '%s' }}" alt="Anhui University of Science and Technology logo" data-i18n-attr="alt:education.austAlt">
    <div class="education-item__body">
      <div class="education-item__school">
        <strong data-i18n="education.austName">Anhui University of Science and Technology</strong>
        <span class="education-badge education-badge--green" data-i18n="education.austBadge">Provincial Key</span>
        <span class="education-badge education-badge--green" data-i18n="education.austBadgeTop">Top 3% in major</span>
      </div>
      <p class="education-item__detail">
        <span class="education-date" data-i18n="education.austDate">2020.9--2024.7</span>
        <span data-i18n="education.austDetail">School of Computer Science and Engineering | Internet of Things Engineering | Bachelor</span>
      </p>
    </div>
  </article>
</section>

<section id="research" class="section-heading">
  <div>
    <span class="section-kicker" data-i18n="research.kicker">What I am exploring</span>
    <h2><i class="fas fa-robot"></i> <span data-i18n="research.title">Research Highlights</span></h2>
  </div>
</section>

<section class="research-grid">
  <article class="research-card research-card--purple">
    <div class="research-card__image research-card__image--diagram research-visual research-visual--notes">
      <img src="/photos/王者荣耀.png?v={{ site.time | date: '%s' }}" alt="Honor of Kings: Wanxiangqi training and policy optimization overview" data-i18n-attr="alt:research.gameImageAlt">
    </div>
    <div class="research-card__body">
      <span class="tag-row"><span data-i18n="research.gameTag1">AI Bot</span><span data-i18n="research.gameTag2">LLM</span><span data-i18n="research.gameTag3">RL</span></span>
      <h3 data-i18n="research.gameTitle">Honor of Kings: Wanxiangqi — Multi-Playstyle Training and Policy Optimization</h3>
      <p data-i18n="research.gameBody">Builds an adaptive sparring (PAS) mechanism for multi-lineup, multi-playstyle training, combining LLM-driven lineup generation, policy transfer across lineups, and parallel training to improve game AI Bot training efficiency and policy diversity.</p>
      <div class="card-status"><i class="fas fa-check-circle"></i> <span data-i18n="research.gameStatus">Completed</span></div>
    </div>
  </article>

  <article class="research-card research-card--green">
    <div class="research-card__image research-card__image--diagram research-visual research-visual--systems">
      <img src="/photos/vla.png?v={{ site.time | date: '%s' }}" alt="Embodied intelligence research highlight" data-i18n-attr="alt:research.systemsImageAlt">
    </div>
    <div class="research-card__body">
      <span class="tag-row"><span data-i18n="research.systemsTag1">Embodied AI</span><span data-i18n="research.systemsTag2">RL</span><span data-i18n="research.systemsTag3">Safe Control</span></span>
      <h3 data-i18n="research.systemsTitle">Embodied Intelligence and Safe Decision-Making</h3>
      <p data-i18n="research.systemsBody">Exploring how learning-based methods can improve stability, safety, and decision quality in complex embodied tasks.</p>
      <div class="card-status"><i class="fas fa-check-circle"></i> <span data-i18n="research.systemsStatus">Completed</span></div>
    </div>
  </article>

  <article class="research-card research-card--purple">
    <div class="research-card__image research-card__image--abstract research-visual research-visual--notes" data-visual-label="" data-i18n-attr="data-visual-label:research.notesVisual">
      <div class="research-abstract-card research-abstract-card--network" aria-hidden="true">
        <span class="research-abstract-card__icon"><i class="fas fa-broadcast-tower"></i></span>
        <span class="research-abstract-card__node research-abstract-card__node--one"></span>
        <span class="research-abstract-card__node research-abstract-card__node--two"></span>
        <span class="research-abstract-card__node research-abstract-card__node--three"></span>
      </div>
    </div>
    <div class="research-card__body">
      <span class="tag-row"><span data-i18n="research.notesTag1">Wireless</span><span data-i18n="research.notesTag2">Optimization</span><span data-i18n="research.notesTag3">AI</span></span>
      <h3 data-i18n="research.notesTitle">Intelligent Wireless Network Optimization</h3>
      <p data-i18n="research.notesBody">Exploring intelligent optimization methods for dynamic wireless network scenarios, with attention to efficiency, service quality, and adaptive coordination.</p>
      <div class="card-status"><i class="fas fa-pen"></i> <span data-i18n="research.notesStatus">Completed / ongoing write-up</span></div>
    </div>
  </article>

  <article class="research-card research-card--green">
    <div class="research-card__image research-card__image--abstract research-visual research-visual--systems" data-visual-label="" data-i18n-attr="data-visual-label:research.extraOneVisual">
      <div class="research-abstract-card" aria-hidden="true">
        <span class="research-abstract-card__icon"><i class="fas fa-network-wired"></i></span>
        <span class="research-abstract-card__orbit research-abstract-card__orbit--one"></span>
        <span class="research-abstract-card__orbit research-abstract-card__orbit--two"></span>
        <span class="research-abstract-card__line"></span>
      </div>
    </div>
    <div class="research-card__body">
      <span class="tag-row"><span data-i18n="research.extraOneTag1">Tag 1</span><span data-i18n="research.extraOneTag2">Tag 2</span><span data-i18n="research.extraOneTag3">Tag 3</span></span>
      <h3 data-i18n="research.extraOneTitle">Research Highlight 3</h3>
      <p data-i18n="research.extraOneBody">Add a concise description for this research highlight.</p>
      <div class="card-status"><i class="fas fa-pen"></i> <span data-i18n="research.extraOneStatus">Completed / ongoing write-up</span></div>
    </div>
  </article>

  <article class="research-card research-card--purple">
    <div class="research-card__image research-card__image--diagram research-visual research-visual--notes">
      <img src="/photos/运维系统.png?v={{ site.time | date: '%s' }}" alt="Operations system research highlight" data-i18n-attr="alt:research.extraTwoImageAlt">
    </div>
    <div class="research-card__body">
      <span class="tag-row"><span data-i18n="research.extraTwoTag1">Tag 1</span><span data-i18n="research.extraTwoTag2">Tag 2</span><span data-i18n="research.extraTwoTag3">Tag 3</span></span>
      <h3 data-i18n="research.extraTwoTitle">Research Highlight 4</h3>
      <p data-i18n="research.extraTwoBody">Add a concise description for this research highlight.</p>
      <div class="card-status"><i class="fas fa-pen"></i> <span data-i18n="research.extraTwoStatus">Content coming soon</span></div>
    </div>
  </article>
</section>

<section id="publications" class="section-heading">
  <div>
    <span class="section-kicker" data-i18n="writing.kicker">Selected work</span>
    <h2><i class="fas fa-book-open"></i> <span data-i18n="writing.title">Research Achievements</span></h2>
  </div>
  <a class="section-link" href="https://github.com/xuchaoai"><span data-i18n="writing.more">More on GitHub</span> <i class="fas fa-arrow-right"></i></a>
</section>

<section class="publication-list">
  <article class="publication-card">
    <div class="achievement-icon achievement-icon--paper" aria-label="Paper" data-i18n-attr="aria-label:writing.paperType"><i class="fas fa-file-alt"></i></div>
    <div>
      <div class="publication-heading">
        <h3 data-i18n="writing.paperTitle">IEEE TMC Paper</h3>
        <span class="tag-row"><span class="publication-tag--revision" data-i18n="writing.paperStatus">Major Revision</span><span data-i18n="writing.multiAgentTag">Multi-Agent Cooperation</span><span data-i18n="writing.drlTag">DRL</span></span>
        <span class="publication-credentials"><span class="publication-credential publication-credential--author" data-i18n="writing.firstAuthor">First Author</span><span class="publication-credential publication-credential--venue" data-i18n="writing.journalRank">CCF-A · CAS Q1 Top Journal</span></span>
      </div>
      <p class="authors" data-i18n="writing.paperMeta">QoE-Oriented Prediction-Enhanced Heterogeneous Multi-Agent Resource Allocation</p>
      <p data-i18n="writing.paperBody">Studies the application of reinforcement learning to dynamic wireless network resource optimization, focusing on intelligent decision-making, collaborative control, and service quality improvement in complex network environments.</p>
    </div>
  </article>

  <article class="publication-card">
    <div class="achievement-icon achievement-icon--paper" aria-label="Paper" data-i18n-attr="aria-label:writing.paperType"><i class="fas fa-file-alt"></i></div>
    <div>
      <div class="publication-heading">
        <h3 data-i18n="writing.secondPaperTitle">IEEE TMC Paper</h3>
        <span class="tag-row"><span data-i18n="writing.secondPaperStatus">Submitted</span><span data-i18n="writing.multiAgentTag">Multi-Agent Cooperation</span><span data-i18n="writing.drlTag">DRL</span></span>
        <span class="publication-credentials"><span class="publication-credential publication-credential--author" data-i18n="writing.firstAuthor">First Author</span><span class="publication-credential publication-credential--venue" data-i18n="writing.journalRank">CCF-A · CAS Q1 Top Journal</span></span>
      </div>
      <p class="authors" data-i18n="writing.secondPaperTopic">Meta-Adaptive Prediction-Enhanced Heterogeneous Multi-Agent Learning under Multi-Mode Mobility</p>
      <p data-i18n="writing.secondPaperBody">Studies meta-adaptive prediction and heterogeneous multi-agent learning in UAV-assisted cellular networks, focusing on generalization and adaptation across mobility modes, collaborative resource scheduling, and energy-efficiency optimization.</p>
    </div>
  </article>

  <article class="publication-card">
    <div class="achievement-icon achievement-icon--patent" aria-label="Patent" data-i18n-attr="aria-label:writing.patentType"><i class="fas fa-lightbulb"></i></div>
    <div>
      <div class="publication-heading">
        <h3 data-i18n="writing.patentTitle">An Energy Efficiency Optimization Method for Cellular Networks and Related Devices</h3>
        <span class="tag-row"><span class="publication-tag--confirmed" data-i18n="writing.patentStatus">Granted</span><span data-i18n="writing.multiAgentTag">Multi-Agent Cooperation</span><span data-i18n="writing.drlTag">DRL</span></span>
      </div>
      <p class="authors" data-i18n="writing.patentMeta">Invention Patent</p>
      <p data-i18n="writing.patentBody">For energy-efficiency optimization in cellular networks, studies reinforcement-learning-based intelligent resource scheduling methods and related device solutions.</p>
    </div>
  </article>

  <article class="publication-card">
    <div class="achievement-icon achievement-icon--software" aria-label="Software Copyright" data-i18n-attr="aria-label:writing.softwareType"><i class="fas fa-code"></i></div>
    <div>
      <div class="publication-heading">
        <h3 data-i18n="writing.softwareTitle">MC-GRUADNet-Based Bearing Fault Diagnosis System V1.0</h3>
        <span class="tag-row"><span class="publication-tag--confirmed" data-i18n="writing.softwareStatus">Registered</span><span data-i18n="writing.dlTag">DL</span><span data-i18n="writing.faultDiagnosisTag">Fault Diagnosis</span><span data-i18n="writing.intelligentMaintenanceTag">Intelligent Maintenance</span></span>
      </div>
      <p class="authors" data-i18n="writing.softwareType">Software Copyright</p>
      <p data-i18n="writing.softwareBody">Uses the MC-GRUADNet deep learning model to combine multi-scale convolution, temporal modeling, and attention mechanisms for bearing fault identification, visual analysis, and maintenance decision support.</p>
    </div>
  </article>
</section>

<section id="internships" class="section-heading">
  <div>
    <span class="section-kicker" data-i18n="internships.kicker">Professional experience</span>
    <h2><i class="fas fa-briefcase"></i> <span data-i18n="internships.title">Internships</span></h2>
  </div>
  <p data-i18n="internships.summary">Industry algorithm research experience in game AI, reinforcement learning, LLM applications, and embodied intelligence.</p>
</section>

<section class="publication-list internship-list">
  <article class="publication-card internship-card">
    <div class="internship-logo">
      <img src="/photos/腾讯.jpg?v={{ site.time | date: '%s' }}" alt="Tencent logo" data-i18n-attr="alt:internships.tencentLogoAlt">
    </div>
    <div>
      <div class="internship-meta">
        <span class="education-date" data-i18n="internships.tencentDate">2026.7-2026.10</span>
        <span class="internship-track" data-i18n="internships.tencentTrack">AI Bot · LLM · RL</span>
      </div>
      <h3 data-i18n="internships.tencentCompany">Tencent Technology (Shenzhen) Co., Ltd.</h3>
      <p class="authors internship-role" data-i18n="internships.tencentProject">AI Platform Department · Technical Research</p>
      <p data-i18n="internships.tencentBody">Worked on multi-lineup, multi-playstyle training and policy optimization for AI Bots in Honor of Kings: Wanxiangqi. Built a performance-driven adaptive sparring (PAS) mechanism to support policy transfer across lineups and parallel training; explored LLM-driven lineup generation and automated integration, and used visual monitoring to improve training feedback, policy convergence, and Bot playstyle diversity.</p>
    </div>
  </article>

  <article class="publication-card internship-card">
    <div class="internship-logo">
      <img src="/photos/平安科技.png?v={{ site.time | date: '%s' }}" alt="Ping An Technology logo" data-i18n-attr="alt:internships.logoAlt">
    </div>
    <div>
      <div class="internship-meta">
        <span class="education-date" data-i18n="internships.date">2026.5-2026.7</span>
        <span class="internship-track" data-i18n="internships.track">Embodied Intelligence · Reinforcement Learning</span>
      </div>
      <h3 data-i18n="internships.company">Ping An Technology (Shenzhen) Co., Ltd.</h3>
      <p class="authors internship-role" data-i18n="internships.role">Algorithm Assistant Engineer</p>
      <p data-i18n="internships.body">Participated in embodied intelligence algorithm research, exploring risk-aware and reinforcement learning based intelligent control optimization for safe and stable robotic arm task execution.</p>
    </div>
  </article>
</section>

<section id="competitions" class="section-heading">
  <div>
    <span class="section-kicker" data-i18n="competitions.kicker">Selected activities</span>
    <h2><i class="fas fa-trophy"></i> <span data-i18n="competitions.title">Competitions</span></h2>
  </div>
  <p data-i18n="competitions.summary">A place for competitions, awards, challenges, and related records.</p>
</section>

<section class="publication-list competition-list">
  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--cup"><i class="fas fa-trophy"></i></div>
    <div>
      <h3 data-i18n="competitions.challengeCupTitle">Challenge Cup National College Students' Extracurricular Academic Science and Technology Works Competition</h3>
      <p class="authors competition-award" data-i18n="competitions.challengeCupAward">Provincial First Prize</p>
      <p data-i18n="competitions.challengeCupBody">Designed a multi-stage energy-saving aquaculture wastewater treatment system with intelligent control and equipment coordination.</p>
    </div>
  </article>

  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--rocket"><i class="fas fa-rocket"></i></div>
    <div>
      <h3 data-i18n="competitions.internetTitle">China International College Students' Innovation Competition (Internet+)</h3>
      <p class="authors competition-award" data-i18n="competitions.internetAward">Provincial Gold Award</p>
      <p data-i18n="competitions.internetBody">Built an intelligent multi-stage wastewater treatment system to improve processing efficiency and automation.</p>
    </div>
  </article>

  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--web"><i class="fas fa-code"></i></div>
    <div>
      <h3 data-i18n="competitions.webTitle">5th National College Student Intelligent Technology Application Competition (Web Track)</h3>
      <p class="authors competition-award" data-i18n="competitions.webAward">National Third Prize</p>
      <p data-i18n="competitions.webBody">Developed a home-care Web service platform for health management, service recommendation, and information interaction.</p>
    </div>
  </article>

  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--iot"><i class="fas fa-microchip"></i></div>
    <div>
      <h3 data-i18n="competitions.iotTitle">5th National College Student Intelligent Technology Application Competition (IoT Track)</h3>
      <p class="authors competition-award" data-i18n="competitions.iotAward">National Third Prize</p>
      <p data-i18n="competitions.iotBody">Implemented smart car path tracking, environment sensing, and dynamic obstacle avoidance based on an STC89C52RC microcontroller.</p>
    </div>
  </article>

  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--service"><i class="fas fa-handshake"></i></div>
    <div>
      <h3 data-i18n="competitions.serviceTitle">14th China College Students Service Outsourcing Innovation and Entrepreneurship Competition</h3>
      <p class="authors competition-award" data-i18n="competitions.serviceAward">National Third Prize</p>
      <p data-i18n="competitions.serviceBody">Designed task scheduling and personalized recommendation for an online service platform.</p>
    </div>
  </article>

  <article class="publication-card competition-card">
    <div class="competition-icon competition-icon--ai"><i class="fas fa-brain"></i></div>
    <div>
      <h3 data-i18n="competitions.graduateTitle">4th Graduate Computer Innovation Competition</h3>
      <p class="authors competition-award" data-i18n="competitions.graduateAward">Provincial First Prize</p>
      <p data-i18n="competitions.graduateBody">Proposed MC-GRUADNet for bearing fault diagnosis and built a visual result presentation system.</p>
    </div>
  </article>
</section>

<section id="news" class="section-heading">
  <div>
    <span class="section-kicker" data-i18n="news.kicker">Latest updates</span>
    <h2><i class="fas fa-stream"></i> <span data-i18n="news.title">Recent News</span></h2>
  </div>
</section>

<section class="news-timeline">
  <div class="news-item news-item--milestone"><time data-i18n="news.dateUndergraduate">Sep 2020</time><div><strong data-i18n="news.undergraduateTitle">Undergraduate Start | Anhui University of Science and Technology</strong><p data-i18n="news.undergraduateBody">Started undergraduate study in Internet of Things Engineering at the School of Computer Science.</p></div></div>
  <div class="news-item news-item--paper"><time data-i18n="news.dateMaster">Sep 2024</time><div><strong data-i18n="news.masterTitle">Recommended Postgraduate Study | Central South University</strong><p data-i18n="news.masterBody">Recommended for admission to Central South University to pursue a master's degree in Electronic Information.</p></div></div>
  <div class="news-item news-item--internship"><time data-i18n="news.dateInternship">May 2026</time><div><strong data-i18n="news.internshipTitle">Industry Practice | Ping An Technology</strong><p data-i18n="news.internshipBody">Joined Ping An Technology as an algorithm engineer intern, working on reinforcement learning algorithms for embodied intelligence.</p></div></div>
  <div class="news-item news-item--internship"><time data-i18n="news.dateTencent">July 2026</time><div><strong data-i18n="news.tencentTitle">Industry Practice | Tencent Technology</strong><p data-i18n="news.tencentBody">Joined Tencent Technology (Shenzhen) Co., Ltd. as an intern in the AI Platform Department, researching reinforcement learning for game AI Bots and LLM-driven lineup generation.</p></div></div>
  <div class="news-item news-item--future"><time data-i18n="news.dateCurrent">Current</time><div><strong data-i18n="news.currentTitle">Continuous Exploration | New Opportunities</strong><p data-i18n="news.currentBody">Looking for new algorithm-related internship opportunities to further explore reinforcement learning, embodied intelligence, and intelligent decision-making.</p></div></div>
</section>

<section class="home-contact">
  <div>
    <span class="section-kicker" data-i18n="contact.kicker">Let us connect</span>
    <h2 data-i18n="contact.title">Interested in AI systems or practical software projects?</h2>
    <p data-i18n="contact.body">More contact links can be added here once the final email, CV, and social profiles are ready.</p>
  </div>
  <a class="home-button home-button--light" href="mailto:xuchao@csu.edu.cn"><i class="fas fa-envelope"></i> <span data-i18n="contact.email">Email</span></a>
</section>
