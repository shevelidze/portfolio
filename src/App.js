import './App.css';
import Button from './Button';
import Name from './Name';
import Figure from './Figure';
import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.figuresQuintity = 0;
    this.mobileMaxSize = 900;
  }
  createFigure(skinIndex, color, xModifier, yModifier, xPosition, yPosition, rotation) {
    this.figuresQuintity += 1;
    return <Figure
      skinIndex={skinIndex}
      color={color}
      xModifier={xModifier}
      yModifier={yModifier}
      xPosition={xPosition}
      yPosition={yPosition}
      rotation={rotation}
      key={this.figuresQuintity}
      mobileMaxSize={this.mobileMaxSize}
    ></Figure>
  }
  render() {
    let desktopMovingStuff = [
      this.createFigure(1, 'white', -1, -1, '15%', '25%'),
      this.createFigure(0, 'var(--orange-color)', 1, -1, '30%', '15%'),
      this.createFigure(2, 'var(--orange-color)', 1, -1, '20%', '75%'),
      this.createFigure(3, 'white', -1, 1, '50%', '12%'),
      this.createFigure(4, 'var(--orange-color)', 1, -1, '70%', '15%'),
      this.createFigure(3, 'var(--orange-color)', -1, 1, '40%', '80%', '50deg'),
      this.createFigure(4, 'white', 1, 1, '65%', '75%'),
      this.createFigure(2, 'var(--orange-color)', 1, -1, '80%', '80%', '20deg'),
      this.createFigure(3, 'white', 1, 1, '85%', '50%', '20deg'),
      this.createFigure(0, 'white', -1, 1, '10%', '50%'),
    ];
    return (
      <div className="App">
        <div className="section fullscreen">
          <div class="center">
            <p>Hi there, I'm</p>
            <Name></Name>
            <p>A computer science student from Kiev, Ukraine</p>
            <Button text="About me" onClick={this.scrollToAboutMe.bind(this)}></Button>
          </div>
          {desktopMovingStuff}
        </div>
        <div className="section fullscreen orange-gradient-background" id="about-me">
          <div className="text-content center">
            <div className="title">
              About me
            </div>
            <div className="content">
              <div>
                I’m Denys Shevel, a 17-years-old
                Ukrainian computer science student.
                Now, I’m learning web technologies for
                myself for a near three years. I’m always
                interested in learning sometheng new
                and consolidating already learned. Also
                it’s importtant for me always make my
                work qualitevely and correct  mistakes.
              </div>
              <div id="about-me-social">
                <a href="https://www.linkedin.com/in/denys-shevel-b658a1206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvm5nat%2BKSKiauZ6yBxY7vQ%3D%3Diuu ">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M45.4545 0H4.54545C2.03409 0 0 2.03409 0 4.54545V45.4545C0 47.9659 2.03409 50 4.54545 50H45.4545C47.9659 50 50 47.9659 50 45.4545V4.54545C50 2.03409 47.9659 0 45.4545 0ZM15.8045 40.9091H9.1V19.3364H15.8045V40.9091ZM12.3841 16.2523C10.2227 16.2523 8.475 14.5 8.475 12.3432C8.475 10.1864 10.225 8.43636 12.3841 8.43636C14.5386 8.43636 16.2909 10.1886 16.2909 12.3432C16.2909 14.5 14.5386 16.2523 12.3841 16.2523ZM40.9182 40.9091H34.2182V30.4182C34.2182 27.9159 34.1727 24.6977 30.7341 24.6977C27.2455 24.6977 26.7091 27.4227 26.7091 30.2364V40.9091H20.0091V19.3364H26.4409V22.2841H26.5318C27.4273 20.5886 29.6136 18.8 32.875 18.8C39.6636 18.8 40.9182 23.2682 40.9182 29.0773V40.9091Z" fill="white" />
                  </svg>
                </a>
                <a href="https://github.com/shevelidze">
                  <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M25.0207 0C11.1847 0 0 11.4588 0 25.6338C0 36.9652 7.16651 46.5567 17.1085 49.9519C18.3512 50.2065 18.8069 49.4002 18.8069 48.7211C18.8069 48.127 18.7655 46.0898 18.7655 43.9678C11.8061 45.4957 10.3562 40.9122 10.3562 40.9122C9.23776 37.9414 7.58076 37.1774 7.58076 37.1774C5.30239 35.6072 7.74646 35.6072 7.74646 35.6072C10.2734 35.7769 11.599 38.2384 11.599 38.2384C13.8359 42.1429 17.4399 41.0395 18.8898 40.3604C19.0969 38.7053 19.7597 37.5594 20.4639 36.9228C14.913 36.3286 9.07206 34.1218 9.07206 24.2757C9.07206 21.4746 10.0663 19.1829 11.6404 17.4004C11.3919 16.7638 10.5219 14.1325 11.889 10.61C11.889 10.61 14.0016 9.93096 18.7655 13.2413C20.7539 12.6896 22.908 12.3925 25.0207 12.3925C27.1333 12.3925 29.2874 12.6896 31.2758 13.2413C36.0397 9.93096 38.1524 10.61 38.1524 10.61C39.5194 14.1325 38.6495 16.7638 38.4009 17.4004C40.0165 19.1829 40.9693 21.4746 40.9693 24.2757C40.9693 34.1218 35.1283 36.2862 29.536 36.9228C30.4473 37.7292 31.2344 39.257 31.2344 41.6761C31.2344 45.1137 31.193 47.8723 31.193 48.7211C31.193 49.4002 31.6486 50.2065 32.8914 49.9519C42.8334 46.5567 49.9999 36.9652 49.9999 25.6338C50.0413 11.4588 38.8152 0 25.0207 0Z" fill="white" />
                    <path d="M9.48631 36.7955C9.44488 36.9228 9.23776 36.9653 9.07206 36.8804C8.90636 36.7955 8.78208 36.6257 8.86493 36.4984C8.90636 36.3711 9.11348 36.3287 9.27918 36.4135C9.44488 36.4984 9.52773 36.6682 9.48631 36.7955Z" fill="white" />
                    <path d="M10.4805 37.9413C10.3562 38.0686 10.1077 37.9837 9.98342 37.8139C9.81772 37.6442 9.77629 37.3896 9.90057 37.2622C10.0248 37.1349 10.232 37.2198 10.3977 37.3895C10.5634 37.6017 10.6048 37.8564 10.4805 37.9413Z" fill="white" />
                    <path d="M11.4747 39.4267C11.309 39.5541 11.0605 39.4267 10.9362 39.2145C10.7705 39.0023 10.7705 38.7053 10.9362 38.6204C11.1019 38.4931 11.3504 38.6204 11.4747 38.8326C11.6404 39.0448 11.6404 39.2994 11.4747 39.4267Z" fill="white" />
                    <path d="M12.8417 40.8697C12.7175 41.0394 12.4275 40.997 12.1789 40.7848C11.9718 40.5726 11.889 40.2755 12.0547 40.1482C12.1789 39.9784 12.4689 40.0209 12.7175 40.2331C12.9246 40.4028 12.966 40.6999 12.8417 40.8697Z" fill="white" />
                    <path d="M14.7059 41.6761C14.6644 41.8883 14.3745 41.9732 14.0845 41.8883C13.7945 41.8034 13.6288 41.5488 13.6702 41.379C13.7117 41.1668 14.0016 41.0819 14.2916 41.1668C14.5816 41.2517 14.7473 41.4639 14.7059 41.6761Z" fill="white" />
                    <path d="M16.7357 41.8458C16.7357 42.058 16.4871 42.2278 16.1972 42.2278C15.9072 42.2278 15.6586 42.058 15.6586 41.8458C15.6586 41.6336 15.9072 41.4639 16.1972 41.4639C16.4871 41.4639 16.7357 41.6336 16.7357 41.8458Z" fill="white" />
                    <path d="M18.6412 41.5064C18.6826 41.7186 18.4755 41.9308 18.1855 41.9732C17.8956 42.0157 17.647 41.8883 17.6056 41.6761C17.5642 41.4639 17.7713 41.2517 18.0613 41.2093C18.3512 41.1669 18.5998 41.2942 18.6412 41.5064Z" fill="white" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  scrollToAboutMe() {
    document.body.scrollTop = document.documentElement.clientHeight;
    document.documentElement.scrollTop = document.documentElement.clientHeight;
  }
}