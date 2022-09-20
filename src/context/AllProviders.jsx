import { createContext } from "react";

const AllProviderContext = createContext();

export const AllProvidersProvider = ({ children }) => {
  const AllProviders = [
    {
      name: "linode",
      full: "Linode",
      id: 1,
      color: "linear-gradient(to right, #8e2de2, #4a00e0)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/linode",
      pricePerMo: {
        compute: true,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
    {
      name: "aws",
      full: "Amazon Web Services",
      id: 2,
      color: "linear-gradient(to right, #ff416c, #ff4b2b)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/aws",
      pricePerMo: {
        compute: true,
        database: true,
      },
      pricePerHo: {
        compute: false,
        database: false,
      },
    },
    {
      name: "gcp",
      full: "Google Cloud Platform",
      id: 3,
      color: " linear-gradient(to right, #000428, #004e92)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/gcp",
      pricePerMo: {
        compute: false,
        database: false,
      },
      pricePerHo: {
        compute: true,
        database: true,
      },
    },
    {
      name: "azure",
      full: "Azure",
      id: 4,
      color: "linear-gradient(to right, #659999, #f4791f)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/azure",
      pricePerMo: {
        compute: true,
        database: false,
      },
      pricePerHo: {
        compute: false,
        database: true,
      },
    },

    {
      name: "digital Ocn",
      full: "Digital Ocean",
      id: 5,
      color: "linear-gradient(to right, #396afc, #2948ff)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/digitalOcean",
      pricePerMo: {
        compute: true,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
    {
      name: "ovh cloud",
      full: "Ovh Cloud",
      id: 6,
      color: "linear-gradient(to right, #59c173, #a17fe0, #5d26c1)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/ovh",
      pricePerMo: {
        compute: false,
        database: true,
      },
      pricePerHo: {
        compute: true,
        database: true,
      },
    },
    {
      name: "vultr",
      full: "Vultr",
      id: 7,
      color: "linear-gradient(to right, #4e54c8, #8f94fb)",
      url: "https://cloud-pricing-362106.ue.r.appspot.com/api/v1/vultr",
      pricePerMo: {
        compute: true,
        database: false,
      },
      pricePerHo: {
        compute: true,
        database: false,
      },
    },
  ];

  return (
    <AllProviderContext.Provider value={AllProviders}>
      {children}
    </AllProviderContext.Provider>
  );
};

export default AllProviderContext;
