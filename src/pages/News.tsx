import React from "react";
import { FiClock } from "react-icons/fi";
import TaskCard from "../components/TaskCard";

interface NewsItem {
  id: number;
  title: string;
  time: string;
  source: string;
  imageUrl: string;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
    imageUrl: "/assets/news1.svg",
  },
  {
    id: 2,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
    imageUrl: "/assets/news2.svg",
  },
  {
    id: 3,
    title: "News Title Lorem Ipsum Dolor Sit Amet",
    time: "1 Hour Ago",
    source: "CNN Indonesia",
    imageUrl: "/assets/news3.svg",
  },
];

const News: React.FC = () => {
  return (
    <div>
      <div className="bg-white lg:px-[22px] px-[20px] py-[14px] rounded-[29px] shadow">
        {/* Hot Topics Section */}
        <div className="mb-6">
          <h2 className="lg:text-[36px] md:text-[30px] text-[24px] font-[700] leading-[42.19px] font-roboto">
            Hot Topics
          </h2>
          <div className="relative w-full h-[177.82px] rounded-[8px] overflow-hidden">
            <img
              src="/assets/hot-topic.svg"
              alt="Hot Topic"
              className="object-cover w-full h-full rounded-[8px]"
            />
            <div
              className="absolute inset-0 bg-black bg-opacity-30 xl:px-[50px] md:px-[40px] px-[14px] pb-[19px] flex flex-col justify-end"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0, 0, 0, 0) 42.25%, rgba(0, 0, 0, 0.65) 100%)",
              }}
            >
              <h3 className="text-[#F8F8F8] text-[24px] font-[700] mb-[4.9px] leading-[36px] font-playfair overflow-hidden text-ellipsis block whitespace-nowrap">
                Massa tortor nibh nulla condimentum imperdiet scelerisque...
              </h3>
              <div className="flex items-center gap-[5vw] text-[12px] leading-[12px] font-[400] font-roboto text-[#F8F8F8]">
                <span>2 Hours Ago</span>
                <span>CNN Indonesia</span>
              </div>
            </div>
          </div>
        </div>

        {/* Latest News Section */}
        <div>
          <h2 className="md:text-[24px] text-[21px] font-[700] font-roboto leading-[28.13px] mb-[20px] mt-[29px]">
            Latest News
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:gap-[30px] gap-[20px]">
            {newsData.map((news) => (
              <div key={news.id} className="bg-white overflow-hidden">
                <div className="relative w-full h-[109.41px] rounded-[8px]">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="object-cover w-full h-full rounded-[8px]"
                  />
                </div>
                <div className="">
                  <h3 className="md:text-[18px] text-[16px] text-[#121221] font-playfair leading-[23.99px] font-[700] mb-[25px] mt-[13.68px]">
                    {news.title}
                  </h3>
                  <div className="flex text-[#949494] font-roboto items-center gap-[3vw] text-[12px] leading-[14.06px] font-[400]">
                    <span>{news.time}</span>
                    <span>{news.source}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TaskCard />
    </div>
  );
};

export default News;
