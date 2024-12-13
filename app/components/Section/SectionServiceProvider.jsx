import { serviceProviderList } from "@/app/data/dummy_service_provider";
import React from "react";
import ServiceCard from "../Cards/ServiceProviderCard";

const SectionServiceProvider = ({ isFilter = false, allShop }) => {
  const services = allShop.filter((shop) => shop.shopType.shopTypeId === 2);

  return (
    <>
      {allShop?.length > 0 && (
        <section className="my-big_margin flex flex-col gap-[2.4rem]">
          {!isFilter && (
            <p className="font-semibold text-[2.4rem] ">Service Providers</p>
          )}
          <section className="product-wrapper grid grid-cols-4 gap-[2.6rem]">
            {services.map((service_provider, idx) => (
              <React.Fragment key={idx}>
                <ServiceCard
                  service_provider={service_provider}
                  key={idx}
                  idx={idx}
                  service_id={idx}
                />
              </React.Fragment>
            ))}
          </section>
        </section>
      )}
    </>
  );
};

export default SectionServiceProvider;
