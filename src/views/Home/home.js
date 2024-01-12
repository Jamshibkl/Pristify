import React from 'react'
import Header from '../../components/Header/Header'
import { Helmet } from 'react-helmet'
import FeatureCard from '../../components/feature-card'
import FAQ from '../FAQ/FAQ'
import HomeBg from "./bg.jpg"
import './home.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>JHRCREATOR</title>
      </Helmet>
<Header />
      <div className="home-hero">
        <div className="heroContainer home-hero1" style={{backgroundImage : `url(${HomeBg})`,
    backgroundRepeat : "no-repeat",
    backgroundSize : "cover"

}}>
          <div className="home-container01">
            <h1 className="home-hero-heading heading1">
              Discover the Perfect Lightroom Presets
            </h1>
            <span className="home-hero-sub-heading bodyLarge">
              <span>
                <span>
                  <span style={{color : "white"}}>Enhance your photos with our premium collection</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
              <span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
              </span>
            </span>
            <div className="home-btn-group">
              <Link to="/shop">
              <button className="buttonFilled">Shop Now</button>
              </Link>
             <Link to="/about">
             <button className="buttonFlat">Learn More →</button>
             </Link>
             
            </div>
          </div>
        </div>
      </div>
      <div className="home-features">
        <div className="featuresContainer">
          <div className="home-features1">
            <div className="home-container02">
              <span className="overline">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">
                Unlock the Power of Lightroom Presets
              </h2>
              <span className="home-features-sub-heading bodyLarge">
                <span>
                  <span>
                    <span>
                      Enhance your photos with our amazing collection of
                      lightroom presets
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
                <span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <div className="home-container03">
              <FeatureCard
                Heading="Wide Range of Presets"
                SubHeading="Choose from a diverse collection of lightroom presets to enhance your photos"
              ></FeatureCard>
              <FeatureCard
                Heading="Easy to Use"
                SubHeading="Simple and intuitive interface for hassle-free editing"
              ></FeatureCard>
              <FeatureCard
                Heading="Instant Download"
                SubHeading="Get access to your purchased presets immediately after completing the transaction"
              ></FeatureCard>
              <FeatureCard
                Heading="Compatible with Lightroom"
                SubHeading="Our presets are designed to work seamlessly with Adobe Lightroom software"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="pricingContainer">
          <div className="home-container04">
            <span className="overline">
              <span style={{color :"white"}}>Pricing</span>
              <br></br>
            </span>
            <h2 className="heading2">Choose Your Plan</h2>
            <span className="home-pricing-sub-heading bodyLarge">
              <span>
                <span style={{color :"white"}}>
                  Unlock the full potential of your photos with our lightroom
                  presets
                </span>
              </span>
            </span>
          </div>
          <div className="home-container05">
            <div className="freePricingCard home-pricing-card">
              <div className="home-container06">
                <span className="home-text36 heading3">Free</span>
                <span className="bodySmall">
                  Access to a limited collection of lightroom presets
                </span>
              </div>
              <div className="home-container07">
                <span className="home-text37">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-free-plan-price">0</span>
              </div>
              <div className="home-container08">
                <div className="home-container09">
                  <span className="home-text40">✔</span>
                  <span className="bodySmall">10 free lightroom presets</span>
                </div>
                <div className="home-container10">
                  <span className="home-text41">✔</span>
                  <span className="bodySmall">Basic editing tools</span>
                </div>
                <div className="home-container11">
                  <span className="home-text42">✔</span>
                  <span className="bodySmall">Limited customer support</span>
                </div>
              </div>
              <button className="home-button buttonOutline">
                Continue with Free
              </button>
            </div>
            <div className="basicPricingCard home-pricing-card1">
              <div className="home-container12">
                <span className="home-text43 heading3">BASIC</span>
                <span className="bodySmall">
                  Unlock a wider range of lightroom presets for better photo
                  editing
                </span>
              </div>
              <div className="home-container13">
                <span className="home-text44">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-basic-plan-pricing">19</span>
                <span className="home-text47">/ month</span>
              </div>
              <div className="home-container14">
                <div className="home-container15">
                  <span className="home-text48">✔</span>
                  <span className="bodySmall">All features of FREE plan</span>
                </div>
                <div className="home-container16">
                  <span className="home-text50">✔</span>
                  <span className="bodySmall">50+ lightroom presets</span>
                </div>
                <div className="home-container17">
                  <span className="home-text51">✔</span>
                  <span className="bodySmall">Advanced editing tools</span>
                </div>
                <div className="home-container18">
                  <span className="home-text52">✔</span>
                  <span className="bodySmall">Priority customer support</span>
                </div>
                <div className="home-container19">
                  <span className="home-text53">✔</span>
                  <span className="bodySmall">Access to exclusive presets</span>
                </div>
              </div>
              <button className="home-button1 buttonFilledSecondary">
                Try the Basic plan
              </button>
            </div>
            <div className="proPricingCard home-pricing-card2">
              <div className="home-container20">
                <span className="home-text54 heading3">
                  <span>PRO</span>
                  <br></br>
                </span>
                <span className="bodySmall">
                  Get the ultimate lightroom preset experience with premium
                  features
                </span>
              </div>
              <div className="home-container21">
                <span className="home-text57">
                  <span>$</span>
                  <span></span>
                </span>
                <span className="home-pro-plan-pricing">49</span>
                <span className="home-text60">/ month</span>
              </div>
              <div className="home-container22">
                <div className="home-container23">
                  <span className="home-text61">✔</span>
                  <span className="bodySmall"> All features of BASIC plan</span>
                </div>
                <div className="home-container24">
                  <span className="home-text63">✔</span>
                  <span className="bodySmall">100+ lightroom presets</span>
                </div>
                <div className="home-container25">
                  <span className="home-text64">✔</span>
                  <span className="bodySmall">Advanced editing tools</span>
                </div>
                <div className="home-container26">
                  <span className="home-text65">✔</span>
                  <span className="bodySmall">24/7 customer support</span>
                </div>
                <div className="home-container27">
                  <span className="home-text66">✔</span>
                  <span className="bodySmall">
                    Access to all future updates and new presets
                  </span>
                </div>
              </div>
              <button className="home-button2 buttonFilledSecondary">
                Try the PRO plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="bannerContainer home-banner1">
          <h1 className="home-banner-heading heading2">
            Unlock the Full Potential of Your Photos
          </h1>
          <span className="home-banner-sub-heading bodySmall">
            <span>
              <span>
                <span style={{color :"white"}}>
                  Transform your ordinary images into extraordinary masterpieces
                  with our wide range of professionally designed Lightroom
                  presets. Whether you&apos;re a professional photographer or an
                  enthusiast, our presets will help you achieve stunning results
                  in just a few clicks.
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
            <span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </span>
          <button className="buttonFilled">Learn More</button>
        </div>
      </div>
      <FAQ />
      <div className="home-footer">
        <footer className="footerContainer home-footer1">
          <div className="home-container30">
            <span className="logo">JHRCREATOR</span>
            <nav className="home-nav1 bodySmall home-nav1" style={{color :"white"}}>
              <span className="home-nav11 bodySmall">Home</span>
              <span className="home-nav22 bodySmall">Shop</span>
              <span className="home-nav32 bodySmall">About</span>
              <span className="home-nav42 bodySmall">FAQ</span>
              <span className="home-nav52 bodySmall">Contact</span>
            </nav>
          </div>
          <div className="home-separator"></div>
          <div className="home-container31">
            <span className="bodySmall home-text88" style={{color :"white"}}>
              © 2024 JHRCREATOR, All Rights Reserved.
            </span>
            <div className="home-icon-group1">
              <svg
                viewBox="0 0 950.8571428571428 1024"
                className="home-icon10 socialIcons"
              >
                <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
              </svg>
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon12 socialIcons"
              >
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
              <svg
                viewBox="0 0 602.2582857142856 1024"
                className="home-icon14 socialIcons"
              >
                <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
              </svg>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default Home
