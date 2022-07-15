import React, { useEffect, useState } from "react";
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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

const PeopleSearch = () => {
  // getting values from callback function
  const [filter, setfilter] = useState({
    selectedJob: [],
    selectedvalue: [],
    selectedhobbies: [],
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [allData, setAllData] = useState([] as any);
  const { t } = useTranslation();
  const [totalCount, setTotalCount] = useState(0);
  const [toggle, settoggle] = useState(true);
  const [searchText, setSearchText] = useState("");
  const getInfo = () => {
    return axios.get(
      "https://teamplace-development.an.r.appspot.com/user/random-featured-members"
    );
  };
  const { error, data, isFetching } = useQuery("todos", getInfo, {
    // handle automatically run while click in inspect
    refetchOnWindowFocus: false,
  });

  // for see more
  const getSeeMore = () => {
    return axios.get(
      `https://teamplace-development.an.r.appspot.com/user/search`,
      {
        params: {
          pageSize: 5,
          page: currentPage,
          // toString to change in string from array
          strengths: filter.selectedJob.toString(),
          values: filter.selectedvalue.toString(),
          hobbies: filter.selectedhobbies.toString(),
          // for search
          query: searchText,
        },
      }
    );
  };

  const { isLoading, data: usersData } = useQuery(
    //call Api if these changes as like useeffect dependency
    [
      "get-users",
      currentPage,
      filter.selectedJob,
      filter.selectedhobbies,
      filter.selectedvalue,
      searchText,
    ],
    getSeeMore,

    {
      // refetchOnWindowFocus: false:- handle automatically run while click in inspect
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        setTotalCount(data?.data?.count);
        if (data?.data?.data) {
          setAllData([...allData, ...data?.data?.data]);
        } else {
          setAllData([]);
        }
      },
    }
  );
  // console.log(usersData, "usersdata");

  const onPageChange = () => {
    setCurrentPage(currentPage + 1);
  };
  useEffect(() => {
    setAllData([]);
    // calls Api if these changes; used to maintain pagesize on success while filter
  }, [
    filter.selectedJob,
    filter.selectedhobbies,
    filter.selectedvalue,
    searchText,
  ]);

  return (
    <>
      <Header />
      <ImageSection />
      <div className="mx-[170px]">
        <SearchSection
          filter={filter}
          setfilter={setfilter}
          settoggle={settoggle}
          searchText={searchText}
          setSearchText={setSearchText}
        />
        {toggle && (
          <div>
            <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
              {t("People")}
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
          </div>
        )}
        <h2 className="my-[50px] leading-[38px] text-[30px] font-bold text-[#0C0C0C] tracking-[0.3px]">
          {t("Find someone who matches your values")}
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
      {/* showing the remaining data from total data eg;(42-40)= 2 remaining data */}
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

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "header"])),
      // Will be passed to the page component as props
    },
  };
}
