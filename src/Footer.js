import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className="footer">
      <hr class="light"></hr>
      <div className="footer__list">
        <a aria-label="Homepage" title="GitHub" class="footer-octicon d-none d-lg-block mr-lg-4" href="https://github.com">
          <svg height="24" class="octicon octicon-mark-github" viewBox="0 0 16 16" version="1.1" width="24" aria-hidden="true"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
        </a>
       © 2020 GitHub, Inc.
         <a data-ga-click="Footer, go to terms, text:terms" href="https://github.com/site/terms">Terms</a>
        <a data-ga-click="Footer, go to privacy, text:privacy" href="https://github.com/site/privacy">Privacy</a>
        <a data-ga-click="Footer, go to security, text:security" href="https://github.com/security">Security</a>
        <a href="https://githubstatus.com/" data-ga-click="Footer, go to status, text:status">Status</a>
        <a data-ga-click="Footer, go to help, text:help" href="https://docs.github.com">Help</a>
        <a data-ga-click="Footer, go to contact, text:contact" href="https://github.com/contact">Contact GitHub</a>
        <a href="https://github.com/pricing" data-ga-click="Footer, go to Pricing, text:Pricing">Pricing</a>
        <a href="https://docs.github.com" data-ga-click="Footer, go to api, text:api">API</a>
        <a href="https://services.github.com" data-ga-click="Footer, go to training, text:training">Training</a>
        <a href="https://github.blog" data-ga-click="Footer, go to blog, text:blog">Blog</a>
        <a data-ga-click="Footer, go to about, text:about" href="https://github.com/about">About</a>

      </div>

    </div>
  )
}

export default Footer
