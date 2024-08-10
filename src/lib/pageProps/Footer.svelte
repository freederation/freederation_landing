<script lang="ts">
    import type { FooterProps } from '$lib/types/typeProps';
  
    export let ctaTitle: FooterProps['ctaTitle'];
    export let ctaText: FooterProps['ctaText'];
    export let quickLinks: FooterProps['quickLinks'];
    export let socialLinks: FooterProps['socialLinks'];
    export let contactEmail: FooterProps['contactEmail'];
  </script>
  
  <footer id="footer">
    <div class="footer-cta">
      <h3 class="cta-title">{ctaTitle}</h3>
      <p class="cta-text">{ctaText}</p>
      <div class="cta-buttons">
        <a href="http://app.freederation.com" class="cta-btn">Join Now</a>
        <a href="https://freederation.github.io/intro.html" class="cta-btn">Learn More</a>
      </div>
    </div>
    <div class="footer-container">
      <section class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          {#each quickLinks as link}
            <li><a href={link.href}>{link.text}</a></li>
          {/each}
        </ul>
      </section>
      <section class="footer-section">
        <h4>Follow Us</h4>
        <div class="social-icons">
          {#each socialLinks as social}
            <a href={social.href}><img src={social.src} alt={social.alt}></a>
          {/each}
        </div>
      </section>
      <section class="footer-section">
        <h4>Contact Us</h4>
        <p>Email: <a href="mailto:{contactEmail}" class="email-link">{contactEmail}</a></p>
      </section>
    </div>
  </footer>

  <style>
    #footer {
      background: #111;
      color: #fff;
      padding: 40px 0;
      text-align: center;
    }
  
    .footer-cta {
      padding: 20px;
      background: #222;
      border-radius: 15px;
      margin-bottom: 30px;
    }
  
    .cta-title {
      font-size: 2rem;
      margin-bottom: 10px;
      color: #fff;
    }
  
    .cta-text {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  
    .cta-buttons .cta-btn {
      font-size: 1rem;
      padding: 10px 20px;
      margin: 0 10px;
      border-radius: 5px;
      background: #00ffff;
      color: #111;
      text-decoration: none;
      display: inline-block;
      transition: background 0.3s ease, color 0.3s ease;
    }
  
    .cta-buttons .cta-btn:hover {
      background: #00cccc;
      color: #fff;
    }
  
    .footer-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      max-width: 1200px;
      margin: 0 auto;
    }
  
    .footer-section {
      flex: 1 1 200px;
      margin: 10px;
      padding: 20px;
    }
  
    .footer-section h4 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  
    .footer-section p,
    .footer-section ul {
      margin: 0.5rem 0;
    }
  
    .footer-section ul {
      list-style: none;
      padding: 0;
    }
  
    .footer-section ul li {
      margin: 5px 0;
    }
  
    .footer-section ul li a {
      color: #fff;
      text-decoration: none;
    }
  
    .footer-section ul li a:hover {
      text-decoration: underline;
    }
  
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 10px;
    }
  
    .social-icons img {
      width: 30px;
      height: 30px;
    }
  
    .email-link {
      color: #fff;
      text-decoration: none;
    }
  
    .email-link:hover {
      text-decoration: underline;
    }
  
    @media (max-width: 768px) {
      .footer-container {
        flex-direction: column;
        align-items: center;
        padding: 1rem;
      }
  
      .footer-section {
        max-width: 100%;
        text-align: center;
        margin-bottom: 1rem;
      }
  
      .social-icons {
        justify-content: center;
      }
    }
  </style>
  