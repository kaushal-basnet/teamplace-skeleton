import React from "react";
import {
  Card,
  Footer,
  Header,
  ImageSection,
  OutlineBtn,
  SearchSection,
} from "../../components";
import axios from "axios";
import { useQuery, useMutation, useQueryClient } from "react-query";

const PeopleSearch = () => {
  const getTodos = () => {
    return axios.get(
      "https://teamplace-development.an.r.appspot.com/user/random-featured-members"
    );
  };
  const { isLoading, error, data, isFetching } = useQuery("todos", getTodos, {
    refetchOnWindowFocus: false,
  });
  console.log(data);
  return (
    <>
      <Header />
      <ImageSection />
      <div className="mx-[170px]">
        <SearchSection />
        <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
          注目の人
        </h2>
        <div className="">
          {data?.data?.data.map((elem: any, id: number) => (
            <Card
              key={elem.id}
              pp={elem.profile_picture}
              fname={elem.first_name}
              lname={elem.last_name}
              catchPhrase={elem.catchphrase}
              companyName={elem.company_name}
              // jobTitle={elem.job_title}
              strength={elem.strength}
              values={elem.value}
              birthplace={elem.home_town}
              current={elem.live}
              region={elem.region}
              hobbies={elem.hobbies}
            />
          ))}
        </div>

        <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
          価値観の合う人を探そう
        </h2>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
      </div>
      <div className="flex justify-center mt-[51px]">
        <OutlineBtn
          className="hover:!bg-[#80722A] [&>p]:hover:text-white"
          name="もっと見る"
        />
      </div>

      <Footer />
    </>
  );
};

export default PeopleSearch;
