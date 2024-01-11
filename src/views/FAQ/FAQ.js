import React from 'react'
import Header from '../../components/Header/Header'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import './FAQ.css'
function FAQ() {
  return (  
    <>
      <Header />
      <MDBContainer className="mt-50" style={{maxWidth: '1000px',margin: "150px"}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="What are Lightroom presets?">
          <strong></strong>  Lightroom presets are pre-defined settings 
          in Adobe Lightroom that allow you to apply a 
          specific look or style to your photos with just one click.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="How do I install Lightroom presets?">
          <strong></strong>
          Installation instructions vary based on your version of Lightroom. 
          Generally, you can import presets through the Develop module.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Can I customize the presets?">
          <strong></strong>Yes, most presets allow for customization. 
          You can tweak settings like exposure, 
          contrast, and color balance to suit your preferences.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={4} headerTitle="Can I use Lightroom presets on my mobile device?">
          <strong></strong>Yes, you can use Lightroom presets on your mobile device by installing the Adobe Lightroom mobile app. 
          Once installed, 
          you can import and apply presets to your photos just like on the desktop version.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={5} headerTitle="Do I need Adobe Lightroom to use these presets?">
          <strong></strong>Yes, you will need Adobe Lightroom either the desktop or mobile version to use these presets. 
          They are specifically designed for use within the Lightroom software.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={6} headerTitle="Can I customize the presets to suit my own style?">
          <strong></strong>Absolutely! While presets provide a great starting point for editing your photos, 
          you can always make adjustments and fine-tune them to match your personal preferences and creative vision.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
    </>
  )
}

export default FAQ
