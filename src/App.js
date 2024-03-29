import "./App.css";
import Button from "./Button";
import Name from "./Name";
import Figure from "./Figure";
import React from "react";
import ProjectBox from "./ProjectBox";
import { getYearsFromDate } from "./helpers/getYearsFromDate";
import { pluralize } from "./helpers/pluralize";

export default class App extends React.Component {
  constructor() {
    super();
    this.figuresQuintity = 0;
    this.mobileMaxSize = 900;
  }
  createFigure(
    skinIndex,
    color,
    xModifier,
    yModifier,
    xPosition,
    yPosition,
    rotation
  ) {
    this.figuresQuintity += 1;
    return (
      <Figure
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
    );
  }
  render() {
    let desktopMovingStuff = [
      this.createFigure(1, "white", -1, -1, "15%", "25%"),
      this.createFigure(0, "var(--orange-color)", 1, -1, "40%", "15%"),
      this.createFigure(2, "var(--orange-color)", 1, -1, "20%", "75%"),
      this.createFigure(3, "white", -1, 1, "50%", "12%"),
      this.createFigure(4, "var(--orange-color)", 1, -1, "70%", "15%"),
      this.createFigure(3, "var(--orange-color)", -1, 1, "50%", "90%", "50deg"),
      this.createFigure(4, "white", 1, 1, "65%", "75%"),
      this.createFigure(2, "var(--orange-color)", 1, -1, "80%", "80%", "20deg"),
      this.createFigure(3, "white", 1, 1, "85%", "50%", "20deg"),
      this.createFigure(0, "white", -1, 1, "10%", "50%"),
    ];
    let mobileMovingStuff = [
      this.createFigure(1, "white", -1, -1, "10%", "10%"),
      this.createFigure(0, "var(--orange-color)", 1, -1, "20%", "25%"),
      this.createFigure(2, "var(--orange-color)", 1, -1, "20%", "75%"),
      this.createFigure(3, "white", -1, 1, "65%", "25%"),
      this.createFigure(4, "var(--orange-color)", 1, -1, "65%", "10%"),
      this.createFigure(3, "var(--orange-color)", -1, 1, "40%", "80%", "50deg"),
      this.createFigure(4, "white", 1, 1, "65%", "60%"),
      this.createFigure(2, "var(--orange-color)", 1, -1, "80%", "80%", "20deg"),
    ];

    const age = getYearsFromDate(2004, 6);

    return (
      <div className="App">
        <div className="section fullscreen">
          <div class="center">
            <p>Hi there, I'm</p>
            <Name></Name>
            <p>A software engineer from Kyiv, Ukraine</p>
            <Button
              text="About me"
              onClick={this.scrollToAboutMe.bind(this)}
            ></Button>
          </div>
          {document.documentElement.clientWidth > this.mobileMaxSize
            ? desktopMovingStuff
            : mobileMovingStuff}
        </div>
        <div
          className="section fullscreen orange-gradient-background"
          id="about-me"
        >
          <div className="text-content center">
            <h1 className="title">About me</h1>
            <div className="content">
              <div>
                I’m Denys Shevel, a {age}-{pluralize(age, "year")}-old
                full-stack web developer with a couple of years of experience.
                I'm passionate about delivering results as good as possible and
                sometimes even better. My target is to be the best when I'm
                alone and to be the best for the team when I'm not.
              </div>
              <div id="about-me-social">
                <a href="https://www.linkedin.com/in/denys-shevel-b658a1206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bvm5nat%2BKSKiauZ6yBxY7vQ%3D%3Diuu ">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M45.4545 0H4.54545C2.03409 0 0 2.03409 0 4.54545V45.4545C0 47.9659 2.03409 50 4.54545 50H45.4545C47.9659 50 50 47.9659 50 45.4545V4.54545C50 2.03409 47.9659 0 45.4545 0ZM15.8045 40.9091H9.1V19.3364H15.8045V40.9091ZM12.3841 16.2523C10.2227 16.2523 8.475 14.5 8.475 12.3432C8.475 10.1864 10.225 8.43636 12.3841 8.43636C14.5386 8.43636 16.2909 10.1886 16.2909 12.3432C16.2909 14.5 14.5386 16.2523 12.3841 16.2523ZM40.9182 40.9091H34.2182V30.4182C34.2182 27.9159 34.1727 24.6977 30.7341 24.6977C27.2455 24.6977 26.7091 27.4227 26.7091 30.2364V40.9091H20.0091V19.3364H26.4409V22.2841H26.5318C27.4273 20.5886 29.6136 18.8 32.875 18.8C39.6636 18.8 40.9182 23.2682 40.9182 29.0773V40.9091Z"
                      fill="white"
                    />
                  </svg>
                </a>
                <a href="https://github.com/shevelidze">
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 50 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M25.0207 0C11.1847 0 0 11.4588 0 25.6338C0 36.9652 7.16651 46.5567 17.1085 49.9519C18.3512 50.2065 18.8069 49.4002 18.8069 48.7211C18.8069 48.127 18.7655 46.0898 18.7655 43.9678C11.8061 45.4957 10.3562 40.9122 10.3562 40.9122C9.23776 37.9414 7.58076 37.1774 7.58076 37.1774C5.30239 35.6072 7.74646 35.6072 7.74646 35.6072C10.2734 35.7769 11.599 38.2384 11.599 38.2384C13.8359 42.1429 17.4399 41.0395 18.8898 40.3604C19.0969 38.7053 19.7597 37.5594 20.4639 36.9228C14.913 36.3286 9.07206 34.1218 9.07206 24.2757C9.07206 21.4746 10.0663 19.1829 11.6404 17.4004C11.3919 16.7638 10.5219 14.1325 11.889 10.61C11.889 10.61 14.0016 9.93096 18.7655 13.2413C20.7539 12.6896 22.908 12.3925 25.0207 12.3925C27.1333 12.3925 29.2874 12.6896 31.2758 13.2413C36.0397 9.93096 38.1524 10.61 38.1524 10.61C39.5194 14.1325 38.6495 16.7638 38.4009 17.4004C40.0165 19.1829 40.9693 21.4746 40.9693 24.2757C40.9693 34.1218 35.1283 36.2862 29.536 36.9228C30.4473 37.7292 31.2344 39.257 31.2344 41.6761C31.2344 45.1137 31.193 47.8723 31.193 48.7211C31.193 49.4002 31.6486 50.2065 32.8914 49.9519C42.8334 46.5567 49.9999 36.9652 49.9999 25.6338C50.0413 11.4588 38.8152 0 25.0207 0Z"
                      fill="white"
                    />
                    <path
                      d="M9.48631 36.7955C9.44488 36.9228 9.23776 36.9653 9.07206 36.8804C8.90636 36.7955 8.78208 36.6257 8.86493 36.4984C8.90636 36.3711 9.11348 36.3287 9.27918 36.4135C9.44488 36.4984 9.52773 36.6682 9.48631 36.7955Z"
                      fill="white"
                    />
                    <path
                      d="M10.4805 37.9413C10.3562 38.0686 10.1077 37.9837 9.98342 37.8139C9.81772 37.6442 9.77629 37.3896 9.90057 37.2622C10.0248 37.1349 10.232 37.2198 10.3977 37.3895C10.5634 37.6017 10.6048 37.8564 10.4805 37.9413Z"
                      fill="white"
                    />
                    <path
                      d="M11.4747 39.4267C11.309 39.5541 11.0605 39.4267 10.9362 39.2145C10.7705 39.0023 10.7705 38.7053 10.9362 38.6204C11.1019 38.4931 11.3504 38.6204 11.4747 38.8326C11.6404 39.0448 11.6404 39.2994 11.4747 39.4267Z"
                      fill="white"
                    />
                    <path
                      d="M12.8417 40.8697C12.7175 41.0394 12.4275 40.997 12.1789 40.7848C11.9718 40.5726 11.889 40.2755 12.0547 40.1482C12.1789 39.9784 12.4689 40.0209 12.7175 40.2331C12.9246 40.4028 12.966 40.6999 12.8417 40.8697Z"
                      fill="white"
                    />
                    <path
                      d="M14.7059 41.6761C14.6644 41.8883 14.3745 41.9732 14.0845 41.8883C13.7945 41.8034 13.6288 41.5488 13.6702 41.379C13.7117 41.1668 14.0016 41.0819 14.2916 41.1668C14.5816 41.2517 14.7473 41.4639 14.7059 41.6761Z"
                      fill="white"
                    />
                    <path
                      d="M16.7357 41.8458C16.7357 42.058 16.4871 42.2278 16.1972 42.2278C15.9072 42.2278 15.6586 42.058 15.6586 41.8458C15.6586 41.6336 15.9072 41.4639 16.1972 41.4639C16.4871 41.4639 16.7357 41.6336 16.7357 41.8458Z"
                      fill="white"
                    />
                    <path
                      d="M18.6412 41.5064C18.6826 41.7186 18.4755 41.9308 18.1855 41.9732C17.8956 42.0157 17.647 41.8883 17.6056 41.6761C17.5642 41.4639 17.7713 41.2517 18.0613 41.2093C18.3512 41.1669 18.5998 41.2942 18.6412 41.5064Z"
                      fill="white"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="section" id="my-projects">
          <h1>Recent projects</h1>
          <div className="content">
            <ProjectBox
              title="Portal for medical staff"
              description="A system for managing medical staff. Technologies: React, Feathers JS, PostgreSQL, AWS S3, AWS Lambda"
            />
            <ProjectBox
              title="Fuel prices portal"
              description="A platform form analyzing and comparing fuel prices. Technologies: Nest JS, React, PostgreSQL, Typescript, Strapi"
            />
            <ProjectBox
              imageUrl="/rateyard.png"
              title="Rateyard"
              description="A Web gradebook with REST api."
              repositoryLink="https://github.com/scriptium/rateyard"
            />
          </div>
        </div>
        <div className="section orange-gradient-background" id="contacts">
          <div className="content">
            <h2>Contacts</h2>
            <div id="contacts-table">
              <svg
                width="49"
                height="31"
                viewBox="0 0 49 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.52462 0.300049H43.2264C43.774 0.300049 44.2178 0.743881 44.2178 1.29147V29.3086C44.2178 29.8562 43.774 30.3 43.2264 30.3H5.52462C4.97704 30.3 4.53321 29.8562 4.53321 29.3086V1.29147C4.53321 0.743881 4.97704 0.300049 5.52462 0.300049ZM12.54 14.142C12.54 15.4466 10.5566 15.4466 10.5566 14.142C10.5566 12.5813 11.2829 11.1134 12.5107 10.159C12.4333 10.05 12.3613 9.93707 12.2955 9.82083C11.9857 9.27084 11.8094 8.63776 11.8094 7.96529C11.8094 5.87245 13.5059 4.1759 15.5988 4.1759C17.6911 4.1759 19.3881 5.87245 19.3881 7.96529C19.3881 8.75256 19.1437 9.5187 18.6864 10.159C19.9146 11.1134 20.6409 12.5813 20.6409 14.142C20.6409 15.4466 18.6576 15.4466 18.6576 14.142C18.6576 13.016 18.0528 11.9948 17.0657 11.4559C16.6051 11.6509 16.0988 11.7547 15.5988 11.7547C15.0987 11.7547 14.592 11.6509 14.1313 11.4559C13.1447 11.9948 12.54 13.016 12.54 14.142ZM9.89138 18.5606H21.3057C21.8532 18.5606 22.2976 19.0049 22.2976 19.5525V25.4323C22.2976 25.9799 21.8532 26.4242 21.3057 26.4242H9.89138C9.34379 26.4242 8.89996 25.9799 8.89996 25.4323V19.5525C8.89996 19.0049 9.34379 18.5606 9.89138 18.5606ZM20.3142 20.5439H10.8833V24.4409H20.3142V20.5439ZM15.5988 6.15921C14.6011 6.15921 13.7927 6.96762 13.7927 7.96529C13.7927 8.97832 14.6045 9.77136 15.5988 9.77136C16.594 9.77136 17.4048 8.96967 17.4048 7.96529C17.4048 6.96762 16.5959 6.15921 15.5988 6.15921ZM24.4187 7.55796C23.1146 7.55796 23.1146 5.57464 24.4187 5.57464H38.8596C40.1637 5.57464 40.1637 7.55796 38.8596 7.55796H24.4187ZM26.6672 25.0255C25.3626 25.0255 25.3626 23.0417 26.6672 23.0417H38.8596C40.1637 23.0417 40.1637 25.0255 38.8596 25.0255H26.6672ZM24.4187 11.9247C23.1146 11.9247 23.1146 9.9414 24.4187 9.9414H38.8596C40.1637 9.9414 40.1637 11.9247 38.8596 11.9247H24.4187ZM26.6672 16.2915C25.3626 16.2915 25.3626 14.3082 26.6672 14.3082H38.8596C40.1637 14.3082 40.1637 16.2915 38.8596 16.2915H26.6672ZM26.6672 20.6587C25.3626 20.6587 25.3626 18.6749 26.6672 18.6749H38.8596C40.1637 18.6749 40.1637 20.6587 38.8596 20.6587H26.6672ZM42.2345 2.28336H6.51652V28.3167H42.2345V2.28336Z"
                  fill="white"
                />
              </svg>
              <a href="mailto:denys.shevel16@gmail.com">
                denys.shevel16@gmail.com
              </a>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3879 0.100098C7.08633 0.100098 0.375496 6.97538 0.375496 15.4804C0.375496 22.2792 4.6754 28.0341 10.6406 30.0712C11.3862 30.224 11.6596 29.7402 11.6596 29.3328C11.6596 28.9763 11.6348 27.754 11.6348 26.4808C7.45916 27.3975 6.58923 24.6474 6.58923 24.6474C5.91815 22.8649 4.92395 22.4066 4.92395 22.4066C3.55693 21.4644 5.02337 21.4644 5.02337 21.4644C6.53953 21.5662 7.33488 23.0432 7.33488 23.0432C8.67705 25.3858 10.8394 24.7238 11.7094 24.3164C11.8336 23.3233 12.2313 22.6357 12.6538 22.2538C9.32328 21.8973 5.81873 20.5732 5.81873 14.6655C5.81873 12.9849 6.41525 11.6098 7.35974 10.5403C7.21061 10.1584 6.68865 8.57961 7.50887 6.4661C7.50887 6.4661 8.77647 6.05867 11.6348 8.04486C12.8278 7.71383 14.1203 7.53558 15.3879 7.53558C16.6555 7.53558 17.948 7.71383 19.141 8.04486C21.9993 6.05867 23.2669 6.4661 23.2669 6.4661C24.0871 8.57961 23.5652 10.1584 23.416 10.5403C24.3854 11.6098 24.957 12.9849 24.957 14.6655C24.957 20.5732 21.4525 21.8718 18.0971 22.2538C18.6439 22.7376 19.1161 23.6543 19.1161 25.1057C19.1161 27.1683 19.0913 28.8235 19.0913 29.3328C19.0913 29.7402 19.3647 30.224 20.1103 30.0712C26.0755 28.0341 30.3754 22.2792 30.3754 15.4804C30.4003 6.97538 23.6646 0.100098 15.3879 0.100098Z"
                  fill="white"
                />
                <path
                  d="M6.06728 22.1773C6.04243 22.2537 5.91815 22.2792 5.81873 22.2282C5.71931 22.1773 5.64475 22.0754 5.69446 21.9991C5.71931 21.9227 5.84359 21.8972 5.94301 21.9481C6.04243 21.9991 6.09214 22.1009 6.06728 22.1773Z"
                  fill="white"
                />
                <path
                  d="M6.6638 22.8649C6.58924 22.9413 6.44011 22.8903 6.36555 22.7885C6.26613 22.6866 6.24127 22.5338 6.31584 22.4574C6.3904 22.381 6.51468 22.432 6.61409 22.5338C6.71351 22.6611 6.73837 22.8139 6.6638 22.8649Z"
                  fill="white"
                />
                <path
                  d="M7.26032 23.7562C7.1609 23.8326 7.01177 23.7562 6.93721 23.6289C6.83779 23.5016 6.83779 23.3234 6.93721 23.2724C7.03663 23.196 7.18576 23.2724 7.26032 23.3997C7.35974 23.5271 7.35974 23.6798 7.26032 23.7562Z"
                  fill="white"
                />
                <path
                  d="M8.08053 24.622C8.00597 24.7238 7.83198 24.6983 7.68285 24.571C7.55858 24.4437 7.50887 24.2655 7.60829 24.1891C7.68285 24.0872 7.85684 24.1127 8.00597 24.24C8.13024 24.3419 8.1551 24.5201 8.08053 24.622Z"
                  fill="white"
                />
                <path
                  d="M9.19901 25.1058C9.17416 25.2332 9.00017 25.2841 8.82619 25.2332C8.6522 25.1822 8.55278 25.0295 8.57764 24.9276C8.60249 24.8003 8.77648 24.7493 8.95046 24.8003C9.12445 24.8512 9.22387 24.9785 9.19901 25.1058Z"
                  fill="white"
                />
                <path
                  d="M10.4169 25.2077C10.4169 25.335 10.2678 25.4369 10.0938 25.4369C9.91981 25.4369 9.77068 25.335 9.77068 25.2077C9.77068 25.0804 9.91981 24.9785 10.0938 24.9785C10.2678 24.9785 10.4169 25.0804 10.4169 25.2077Z"
                  fill="white"
                />
                <path
                  d="M11.5602 25.0039C11.5851 25.1312 11.4608 25.2586 11.2868 25.284C11.1128 25.3095 10.9637 25.2331 10.9389 25.1058C10.914 24.9785 11.0383 24.8511 11.2123 24.8257C11.3862 24.8002 11.5354 24.8766 11.5602 25.0039Z"
                  fill="white"
                />
              </svg>
              <a href="https://github.com/shevelidze">github.com/shevelidze</a>
              <svg
                width="31"
                height="31"
                viewBox="0 0 31 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27.6482 0.699951H3.10277C1.59595 0.699951 0.375496 1.92041 0.375496 3.42722V27.9727C0.375496 29.4795 1.59595 30.7 3.10277 30.7H27.6482C29.155 30.7 30.3755 29.4795 30.3755 27.9727V3.42722C30.3755 1.92041 29.155 0.699951 27.6482 0.699951ZM9.85822 25.2454H5.8355V12.3018H9.85822V25.2454ZM7.80595 10.4513C6.50913 10.4513 5.4605 9.39995 5.4605 8.10586C5.4605 6.81177 6.5105 5.76177 7.80595 5.76177C9.09868 5.76177 10.15 6.81313 10.15 8.10586C10.15 9.39995 9.09868 10.4513 7.80595 10.4513ZM24.9264 25.2454H20.9064V18.9509C20.9064 17.4495 20.8791 15.5186 18.816 15.5186C16.7228 15.5186 16.4009 17.1536 16.4009 18.8418V25.2454H12.3809V12.3018H16.24V14.0704H16.2946C16.8319 13.0531 18.1437 11.98 20.1005 11.98C24.1737 11.98 24.9264 14.6609 24.9264 18.1463V25.2454Z"
                  fill="white"
                />
              </svg>
              <a href="https://www.linkedin.com/in/denys-shevel-b658a1206?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BBMPZ82vdSEuVPY9dPW4zBg%3D%3D">
                linkedin.com/in/denys-shevel-b658a1206
              </a>
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
