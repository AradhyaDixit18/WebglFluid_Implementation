import React from 'react';
import {useRef, useEffect} from 'react'
import './HomePage.css';
import './cursorEffects.css';
import Navbar from './Navbar';
import Fluid from 'webgl-fluid'
import MotionArtLogo from './assets/MotionArtEffect-logo.png'
import MotionArtEffect2 from './assets/motionarteffect-img2.png'
import MotionArtEffect3 from './assets/motionarteffect-img3.png'
import MotionArtEffect4 from './assets/motionarteffect-img4.png'
import MotionArtEffect5 from './assets/motionarteffect-img5.png'
import MotionArtEffect1 from './assets/motionarteffect-img1.png'
import MotionArtEffect6 from './assets/motionarteffect-img6.png'
import MotionArtEffect7 from './assets/motionarteffect-img7.png'
import MotionArtEffect8 from './assets/motionarteffect-img8.png'
import MotionArtEffect9 from './assets/motionarteffect-img9.png'
import MotionArtEffect10 from './assets/motionarteffect-img10.png'
import MotionArtEffect11 from './assets/motionarteffect-img11.png'
function HomePage() {
  const canvas = useRef(null)
  useEffect(() => {
    const c = canvas.current;
    const resizeCanvas = () => {
      c.width = window.innerWidth;
      c.height = window.innerHeight;
    };

    // Initial canvas size setup
    resizeCanvas();
    // Initialize the fluid simulation
    Fluid(c);

    // Resize canvas on window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  return (
    
       <div className='root'>
         <canvas ref={canvas} style={{width: '100%', height: '100%'}}></canvas>
         <div className='content'>
        <Navbar className=''/>
  <div className="motion-art-effect-div"  width={793} height={688} />
  <div className="elementor elementor-1226">
    <section className="elementor-section elementor-top-section elementor-element elementor-element-ecd0990 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-3cfc565"
          data-id="3cfc565"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-6e75937 elementor-widget elementor-widget-image"
              data-id="6e75937"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <a href="https://qodematrix.com/motion-art-for-elementor/">
                  <img
                    decoding="async"
                    width={220}
                    height={52}
                    src={MotionArtLogo}
                    className="attachment-full size-full wp-image-1561"
                    alt=""
                  />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ea3f1b7"
          data-id="ea3f1b7"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-08a6ca0 elementor-align-right elementor-widget__width-initial elementor-hidden-tablet elementor-hidden-mobile elementor-widget-laptop__width-initial elementor-widget elementor-widget-button"
              data-id="08a6ca0"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
                    
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-text">
                        Purchase Now
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-6675307 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id={6675307}
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-168269f"
          data-id="168269f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-d6f4e79 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget-laptop__width-initial elementor-widget elementor-widget-elementskit-heading"
              data-id="d6f4e79"
              data-element_type="widget"
              data-widget_type="elementskit-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                    <h2 className="ekit-heading--title elementskit-section-title text_fill">
                      <span>
                        <span>Transform Your Website</span>
                      </span>
                    </h2>
                    <div className="ekit-heading__description">
                      <p>With Motion Art Effect</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-10841c6"
          data-id="10841c6"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-bbc70af elementor-widget elementor-widget-elementskit-heading"
              data-id="bbc70af"
              data-element_type="widget"
              data-widget_type="elementskit-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                    <h1 className="ekit-heading--title elementskit-section-title text_fill">
                      Attract Your Visitors Attention With Colorful
                      <span>
                        <span> Motion Art Effect</span>
                      </span>
                    </h1>
                    <div className="ekit-heading__description">
                      <p>
                        Unleash the power of creativity with Motion Art for
                        Elementor - your ultimate solution for seamlessly
                        integrating captivating animations into your
                        website.&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-33 elementor-top-column elementor-element elementor-element-edbff11"
          data-id="edbff11"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap"></div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-e5e8cde elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="e5e8cde"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-8b9eebe"
          data-id="8b9eebe"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-f4eae53 elementor-widget elementor-widget-heading"
              data-id="f4eae53"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Trusted by thousands of users around the world
                </h2>
              </div>
            </div>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-d7ca1f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
              data-id="d7ca1f5"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1d0f427"
                  data-id="1d0f427"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-09cdc58 elementor-widget__width-initial elementor-widget elementor-widget-image"
                      data-id="09cdc58"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          decoding="async"
                          width={88}
                          height={88}
                          src={MotionArtEffect2}
                          className="attachment-full size-full wp-image-1636"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-c095a4c elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                      data-id="c095a4c"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          <img
                            decoding="async"
                            className="alignnone size-full wp-image-1643"
                            src={MotionArtEffect4}
                            alt=""
                            width={155}
                            height={20}
                            sizes="(max-width: 155px) 100vw, 155px"
                          />
                        </p>
                        <p>
                          <strong>4.5</strong> Score, 9 Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b6586a5"
                  data-id="b6586a5"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-45a150c elementor-widget__width-initial elementor-widget elementor-widget-image"
                      data-id="45a150c"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={88}
                          height={88}
                          src={MotionArtEffect1}
                          className="attachment-full size-full wp-image-1638"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-608544d elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                      data-id="608544d"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          <img
                            decoding="async"
                            className="alignnone size-full wp-image-1643"
                            src={MotionArtEffect4}
                            alt=""
                            width={155}
                            height={20}
                            sizes="(max-width: 155px) 100vw, 155px"
                          />
                        </p>
                        <p>
                          <strong>4.5</strong> Score, 9 Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c7d19e4"
                  data-id="c7d19e4"
                  data-element_type="column"
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-eace411 elementor-widget__width-initial elementor-widget elementor-widget-image"
                      data-id="eace411"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={88}
                          height={88}
                          src={MotionArtEffect3}
                          className="attachment-full size-full wp-image-1637"
                          alt=""
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-0d04ef7 elementor-widget__width-auto elementor-widget elementor-widget-text-editor"
                      data-id="0d04ef7"
                      data-element_type="widget"
                      data-widget_type="text-editor.default"
                    >
                      <div className="elementor-widget-container">
                        <p>
                          <img
                            decoding="async"
                            className="alignnone size-full wp-image-1643"
                            src={MotionArtEffect4}
                            alt=""
                            width={155}
                            height={20}
                            sizes="(max-width: 155px) 100vw, 155px"
                          />
                        </p>
                        <p>
                          <strong>4.5</strong> Score, 9 Reviews
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-d50e01f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="d50e01f"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-88f6120"
          data-id="88f6120"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-59c2d94 elementor-widget elementor-widget-elementskit-heading"
              data-id="59c2d94"
              data-element_type="widget"
              data-widget_type="elementskit-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                    <h2 className="ekit-heading--title elementskit-section-title text_fill">
                      Turn Your Cursor Into A Colorful Magic Wand &amp; Charm
                      Your Visitors
                    </h2>
                    <div className="ekit-heading__description">
                      <p>
                        Motion Art for Elementor is a groundbreaking plugin that
                        empowers you to effortlessly infuse your website with
                        visually stunning motion art elements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-2cc0d94 elementor-mobile-align-center elementor-widget elementor-widget-button"
              data-id="2cc0d94"
              data-element_type="widget"
              data-widget_type="button.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-button-wrapper">
                  <a
                    className="elementor-button elementor-button-link elementor-size-sm"
                    href="https://codecanyon.net/item/motion-art-for-elementor-wordpress-plugin/48826891"
                   
                  >
                    <span className="elementor-button-content-wrapper">
                      <span className="elementor-button-icon elementor-align-icon-right">
                        <i
                          aria-hidden="true"
                          className="icon icon-arrow-right"
                        />{" "}
                      </span>
                      <span className="elementor-button-text">
                        Purchase From Envato
                      </span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-420744f"
          data-id="420744f"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-125098f elementor-widget elementor-widget-image"
              data-id="125098f"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width={248}
                  height={246}
                  src={MotionArtEffect5}
                  className="attachment-full size-full wp-image-1686"
                  alt=""
                  sizes="(max-width: 248px) 100vw, 248px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-096007c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="096007c"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-d2a5688"
          data-id="d2a5688"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-2499a75 elementor-widget__width-initial elementor-widget elementor-widget-elementskit-heading"
              data-id="2499a75"
              data-element_type="widget"
              data-widget_type="elementskit-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-">
                    <h2 className="ekit-heading--title elementskit-section-title text_fill">
                      Apply On Any Section Or Enable For Whole Page
                    </h2>
                  </div>
                </div>
              </div>
            </div>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-8a5a931 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="8a5a931"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b037f45"
                  data-id="b037f45"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-1bbb0f6 elementor-widget elementor-widget-elementskit-heading"
                      data-id="1bbb0f6"
                      data-element_type="widget"
                      data-widget_type="elementskit-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                            <h2 className="ekit-heading--title elementskit-section-title text_fill">
                              Apply On Section
                            </h2>
                            <div className="ekit-heading__description">
                              <p>
                                Apply on section is a game-changer, offering an
                                unparalleled way to manage applications directly
                                from your website.&nbsp;
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-78de9bc elementor-widget elementor-widget-image"
                      data-id="78de9bc"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={552}
                          height={357}
                          src={MotionArtEffect11}
                          className="attachment-full size-full wp-image-1786"
                          alt=""
                          sizes="(max-width: 552px) 100vw, 552px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-3ed1119"
                  data-id="3ed1119"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-c61d2be elementor-widget elementor-widget-elementskit-heading"
                      data-id="c61d2be"
                      data-element_type="widget"
                      data-widget_type="elementskit-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-text_center">
                            <h2 className="ekit-heading--title elementskit-section-title text_fill">
                              Apply On Page
                            </h2>
                            <div className="ekit-heading__description">
                              <p>
                                Take your website to new heights with Motion Art
                                for Elementor. Embrace the power of motion and
                                animation.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-f0a547c elementor-widget elementor-widget-image"
                      data-id="f0a547c"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={552}
                          height={397}
                          src={MotionArtEffect10}
                          className="attachment-full size-full wp-image-1785"
                          alt=""
                         sizes="(max-width: 552px) 100vw, 552px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-dfbc480 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="dfbc480"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-687ea2b"
          data-id="687ea2b"
          data-element_type="column"
          data-settings='{"background_background":"gradient"}'
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-46938be elementor-widget elementor-widget-heading"
              data-id="46938be"
              data-element_type="widget"
              data-widget_type="heading.default"
            >
              <div className="elementor-widget-container">
                <h2 className="elementor-heading-title elementor-size-default">
                  Supported by All Popular Browsers
                </h2>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-3b36962 elementor-widget elementor-widget-spacer"
              data-id="3b36962"
              data-element_type="widget"
              data-widget_type="spacer.default"
            >
              <div className="elementor-widget-container">
                <div className="elementor-spacer">
                  <div className="elementor-spacer-inner" />
                </div>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-63b7a63 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
              data-id="63b7a63"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>
                  Rest assured, Motion Art is designed to be compatible with all
                  major web browsers.
                </p>
              </div>
            </div>
            <div
              className="elementor-element elementor-element-7efd164 elementor-widget elementor-widget-image"
              data-id="7efd164"
              data-element_type="widget"
              data-widget_type="image.default"
            >
              <div className="elementor-widget-container">
                <img
                  loading="lazy"
                  decoding="async"
                  width={441}
                  height={48}
                  src={MotionArtEffect8}
                  className="attachment-full size-full wp-image-1718"
                  alt=""
                  sizes="(max-width: 441px) 100vw, 441px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-a1828f5 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="a1828f5"
      data-element_type="section"
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6825a59"
          data-id="6825a59"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-0714559 elementor-widget__width-initial elementor-widget-mobile__width-inherit elementor-widget elementor-widget-elementskit-heading"
              
              data-element_type="widget"
              data-widget_type="elementskit-heading.default"
            >
              <div className="elementor-widget-container">
                <div className="ekit-wid-con">
                  <div className="ekit-heading elementskit-section-title-wraper text_center   ekit_heading_tablet-   ekit_heading_mobile-">
                    <h2 className="ekit-heading--title elementskit-section-title text_fill">
                      An All-Round Plugin With Powerful Features
                    </h2>
                    <div className="ekit-heading__description">
                      <p>
                        Whether you're a seasoned web designer or just starting
                        out, Motion Art for Elementor seamlessly integrates with
                        the Elementor platform, providing you with a seamless
                        and intuitive experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <section
              className="elementor-section elementor-inner-section elementor-element elementor-element-c9a96a5 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
              data-id="c9a96a5"
              data-element_type="section"
            >
              <div className="elementor-container elementor-column-gap-default">
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f900136"
                  data-id="f900136"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-3a27dcf elementor-widget elementor-widget-image"
                      data-id="3a27dcf"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={188}
                          height={188}
                          src={MotionArtEffect9}
                          className="attachment-full size-full wp-image-1745"
                          alt=""
                          sizes="(max-width: 188px) 100vw, 188px"
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-294285b elementor-widget elementor-widget-elementskit-heading"
                      data-id="294285b"
                      data-element_type="widget"
                      data-widget_type="elementskit-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-">
                            <h2 className="ekit-heading--title elementskit-section-title text_fill">
                              Light Weight
                            </h2>
                            <div className="ekit-heading__description">
                              <p>
                                Motion Art for Elementor is designed to be
                                lightweight.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-da66c73"
                  data-id="da66c73"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-fc31450 elementor-widget elementor-widget-image"
                      data-id="fc31450"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={188}
                          height={188}
                          src={MotionArtEffect6}
                          className="attachment-full size-full wp-image-1746"
                          alt=""
                           sizes="(max-width: 188px) 100vw, 188px"
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-c1c062c elementor-widget elementor-widget-elementskit-heading"
                      data-id="c1c062c"
                      data-element_type="widget"
                      data-widget_type="elementskit-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-">
                            <h2 className="ekit-heading--title elementskit-section-title text_fill">
                              100% Responsive
                            </h2>
                            <div className="ekit-heading__description">
                              <p>
                                Create a consistent visual experience across all
                                devices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-53f7bd1"
                  data-id="53f7bd1"
                  data-element_type="column"
                  data-settings='{"background_background":"gradient"}'
                >
                  <div className="elementor-widget-wrap elementor-element-populated">
                    <div
                      className="elementor-element elementor-element-7de637c elementor-widget elementor-widget-image"
                      data-id="7de637c"
                      data-element_type="widget"
                      data-widget_type="image.default"
                    >
                      <div className="elementor-widget-container">
                        <img
                          loading="lazy"
                          decoding="async"
                          width={188}
                          height={188}
                          src={MotionArtEffect7}
                          className="attachment-full size-full wp-image-1744"
                          alt=""
                          sizes="(max-width: 188px) 100vw, 188px"
                        />
                      </div>
                    </div>
                    <div
                      className="elementor-element elementor-element-b0aec14 elementor-widget elementor-widget-elementskit-heading"
                      data-id="b0aec14"
                      data-element_type="widget"
                      data-widget_type="elementskit-heading.default"
                    >
                      <div className="elementor-widget-container">
                        <div className="ekit-wid-con">
                          <div className="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-">
                            <h2 className="ekit-heading--title elementskit-section-title text_fill">
                              User Friendly Interface
                            </h2>
                            <div className="ekit-heading__description">
                              <p>
                                Ensure a smooth experience for both applicants
                                and administrators.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
    <section
      className="elementor-section elementor-top-section elementor-element elementor-element-fc34e13 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
      data-id="fc34e13"
      data-element_type="section"
      data-settings='{"background_background":"gradient"}'
    >
      <div className="elementor-container elementor-column-gap-default">
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-5b58c44"
          data-id="5b58c44"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-f90054b elementor-widget elementor-widget-text-editor"
              data-id="f90054b"
              data-element_type="widget"
              data-widget_type="text-editor.default"
            >
              <div className="elementor-widget-container">
                <p>© 2023 Copywrite. All rights reserved by QodeMatrix</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-bfac683"
          data-id="bfac683"
          data-element_type="column"
        >
          <div className="elementor-widget-wrap elementor-element-populated">
            <div
              className="elementor-element elementor-element-3eede6f elementor-icon-list--layout-inline elementor-align-right elementor-tablet-align-center elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
              data-id="3eede6f"
              data-element_type="widget"
              data-widget_type="icon-list.default"
            >
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items elementor-inline-items">
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a
                      href="https://qodematrix.com/docs/motion-art-for-elementor/"
                      target="_blank"
                    >
                      <span className="elementor-icon-list-text">
                        Documentation
                      </span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item elementor-inline-item">
                    <a href="https://support.qodematrix.com/" target="_blank">
                      <span className="elementor-icon-list-text">Support</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  <span id="elementor-device-mode" className="elementor-screen-only" />
  </div>
  </div>
    
  );
}

export default HomePage;
