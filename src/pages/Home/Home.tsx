import { FC } from "react";
import AdvertisementCarousel from "../../components/AdvertisementCarousel/AdvertisementCarousel";
import BannerImage from "../../components/BannerImage/BannerImage";
import { IBanner } from "../../components/BannerImage/types";
import { CategoryBanner } from "../../components/CategoryBanner/CategoryBanner";
import CategoryWiseProducts from "../../components/CategoryWiseProducts/CategoryWiseProducts";
import CompanyBenefits from "../../components/CompanyBenefits/CompanyBenefits";
import hetticChannel from "../../images/hetticChannel1.jpg";
import "./Home.css";

const bannerMock: IBanner[] = [
  {
    imageSrc: hetticChannel,
    imageTextHeading: "NEW ARRIVALS",
    imageTextParagraph: "SUMMER SALE 20% OFF",
    imageShop: "/hardware/door/channel",
  },
  {
    imageSrc: hetticChannel,
    imageTextHeading: "NEW ARRIVALS",
    imageTextParagraph: "SUMMER SALE 50% OFF",
    imageShop: "/hardware/door/channel",
  },
];

const Home: FC = (): JSX.Element => {
  return (
    <section className="home">
      <div className="carouselContainer">
        <div className="carouselRow">
          <div className="carousel-lg-12">
            <AdvertisementCarousel />
          </div>
          <div className="carousel-lg-4" style={{ display: "none" }}>
            <div className="bannerBox">
              <div className="bannerImgDiv">
                <BannerImage {...bannerMock[0]} />
              </div>
              <div className="bannerImgDiv">
                <BannerImage {...bannerMock[0]} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CompanyBenefits />

      <CategoryBanner />

      <CategoryWiseProducts/>
    </section>
  );
};

export default Home;
