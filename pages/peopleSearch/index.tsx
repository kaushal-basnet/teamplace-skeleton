import React, { useState } from "react";
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
import { Spinner } from "@chakra-ui/react";

const PeopleSearch = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([] as any);
  const [totalCount, setTotalCount] = useState(0);
  const getInfo = () => {
    return axios.get(
      "https://teamplace-development.an.r.appspot.com/user/random-featured-members"
    );
  };
  const { error, data, isFetching } = useQuery("todos", getInfo, {
    // handle automatically run while click in inspect
    refetchOnWindowFocus: false,
  });
  //

  const getSeeMore = () => {
    return axios.get(
      `https://teamplace-development.an.r.appspot.com/user/search?pageSize=5&page=${currentPage}`
    );
  };
  // for see more
  const { isLoading, data: usersData } = useQuery(
    // without useeffect keep in currentpage after render
    ["get-users", currentPage],
    getSeeMore,
    {
      // refetchOnWindowFocus: false:- handle automatically run while click in inspect
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setTotalCount(data?.data?.count);
        setAllData([...allData, ...data?.data?.data]);
      },
    }
  );
  console.log(usersData, "usersdata");

  const onPageChange = () => {
    setCurrentPage(currentPage + 1);
  };

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
          {data?.data?.data.map((elem: any) => (
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
        <div className="">
          {allData.map((elem: any) => (
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
      </div>
      {/* see More Section */}
      {/* see all the data if there is any data remaining in total data eg;(42-40)= 2 remaining data */}
      {allData.length < totalCount && (
        <div className="flex justify-center mt-[51px]" onClick={onPageChange}>
          <OutlineBtn
            className="hover:!bg-[#80722A] [&>p]:hover:text-white"
            name="もっと見る"
          />
        </div>
      )}

      {/* // isloading : while fetching api || loading: if (token === null) */}
      {isLoading && (
        <div className="w-full min-h-screen flex items-center justify-center [&>.chakra-spinner]:w-12 [&>.chakra-spinner]:h-12 ">
          <Spinner
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="blue.500"
          />
        </div>
      )}
      <Footer />
    </>
  );
};

export default PeopleSearch;
