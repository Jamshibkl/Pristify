import React from 'react'
import Header from '../../components/Header/Header'
import './FAQ.css'
function FAQ() {
  return (  
    <>
      <Header />
    <div className="faq-container">
      <h2 className="faq-heading">Frequently Asked Questions</h2>

      <div className="faq-item">
        <h3 className="faq-question">What are Lightroom presets?</h3>
        <p className="faq-answer">
          Lightroom presets are pre-defined settings in Adobe Lightroom that allow you to apply a specific look or style to your photos with just one click.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">How do I install Lightroom presets?</h3>
        <p className="faq-answer">
          Installation instructions vary based on your version of Lightroom. Generally, you can import presets through the Develop module.
        </p>
      </div>

      <div className="faq-item">
        <h3 className="faq-question">Can I customize the presets?</h3>
        <p className="faq-answer">
          Yes, most presets allow for customization. You can tweak settings like exposure, contrast, and color balance to suit your preferences.
        </p>
      </div>

      {/* Add more FAQ items as needed */}
    </div>
    </>
  )
}

export default FAQ
