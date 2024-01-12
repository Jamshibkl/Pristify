import React from 'react'
import Header from '../../components/Header/Header';
import './FAQ.css'
function FAQ() {
  return (  
    <>
     
      <Header />
      <div className="container">
      <h1>Frequently Asked Questions</h1>
      <details>
        <summary>What are Lightroom presets?</summary>
        <div  style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Lightroom presets are pre-defined settings 
          in Adobe Lightroom that allow you to apply a 
          specific look or style to your photos with just one click. </div>
      </details>
      <details>
        <summary>How do I install Lightroom presets?</summary>
        <div  style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Installation instructions vary based on your version of Lightroom. 
          Generally, you can import presets through the Develop module.
        </div>
      </details>
      <details>
        <summary>Can I customize the presets?</summary>
        <div style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Yes, most presets allow for customization. 
          You can tweak settings like exposure, 
          contrast, and color balance to suit your preferences.
        </div>
      </details>
      <details>
        <summary>Can I use Lightroom presets on my mobile device?</summary>
        <div  style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Yes, you can use Lightroom presets on your mobile device by installing the Adobe Lightroom mobile app. 
          Once installed, 
          you can import and apply presets to your photos just like on the desktop version.
        </div>
      </details>
      <details>
        <summary>Do I need Adobe Lightroom to use these presets?</summary>
        <div  style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Yes, you will need Adobe Lightroom either the desktop or mobile version to use these presets. 
          They are specifically designed for use within the Lightroom software.
        </div>
      </details>
      <details>
        <summary>Can I customize the presets to suit my own style?</summary>
        <div style={{fontSize : "18px" , fontFamily: " hind", lineHeight : "150%"}}>
        Absolutely! While presets provide a great starting point for editing your photos, 
          you can always make adjustments and fine-tune them to match your personal preferences and creative vision
        </div>
      </details>
    </div>
    </>
  )
}

export default FAQ
